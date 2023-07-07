import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiUpload } from "react-icons/hi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { toast } from "react-toastify";
import EmptyPic from "../assets/person.jpg";
import { db } from "../firebase.config";

function Profile() {
  const auth = getAuth();

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || "",
    imageURL: auth.currentUser?.photoURL || "",
  });
  const { name, email, imageURL } = formData;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setFormData({
        name: user?.displayName,
        email: user?.email,
        imageURL: user?.photoURL,
      });
    });
  }, [auth]);
  const onSubmit = async () => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        await updateDoc(userRef, {
          name,
        });
      }
      if (auth.currentUser.photoURL !== imageURL) {
        await updateProfile(auth.currentUser, {
          photoURL: imageURL,
        });

        await updateDoc(userRef, {
          imageURL,
        });
      }
    } catch (error) {
      // console.log(error);
      toast.error("Could not update profile details");
    }
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      imageURL: URL.createObjectURL(e.target.files.item(0)),
    }));
  };
  return (
    <div className="mx-16">
      <header className="font-bold text-3xl mb-12">Namaste, {name}</header>
      <div
        className="flex flex-col card card-compact noshadow bg-[#FC6B6B]/40 rounded-lg
       w-96 h-96 p-4"
      >
        <button
          onClick={() => {
            changeDetails && onSubmit();
            setChangeDetails((prevState) => !prevState);
          }}
          className="self-end text-blue-600 text-2xl"
        >
          {changeDetails ? <MdOutlineDownloadDone /> : <FiEdit />}
        </button>
        <div className="relative flex items-center justify-center w-32 h-32 ring-2 ring-black rounded-full overflow-hidden self-center mb-10">
          <img
            src={imageURL || EmptyPic}
            className={`w-full h-full ${changeDetails && "opacity-40"} `}
            alt="profile pic"
          />
          {changeDetails && (
            <>
              <input
                type="file"
                className="hidden"
                id="imageURL"
                onChange={handleImageChange}
              />
              <label
                htmlFor="imageURL"
                className="btn btn-neutral  absolute  text-blue-600 font-bold text-3xl"
              >
                <HiUpload />
              </label>
            </>
          )}
        </div>
        <form className="text-black flex flex-col gap-4 [&>*]:flex [&>*]:flex-col">
          <div>
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              disabled={!changeDetails}
              className="input border-solid border-2 rounded-md border-blue-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={onChange}
              disabled={true}
              className="input border-solid border-2 rounded-md border-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
