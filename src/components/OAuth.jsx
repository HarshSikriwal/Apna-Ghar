import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
          imageURL: user.photoURL,
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div>
      <button
        onClick={onGoogleClick}
        className="btn border-solid border-2px border-blue-600 w-full  text-blue-600 mb-6 hover:bg-[#faad09] hover:text-black"
      >
        Sign {location.pathname === "/sign-up" ? "up" : "in"} with <FcGoogle />
      </button>
    </div>
  );
}

export default OAuth;
