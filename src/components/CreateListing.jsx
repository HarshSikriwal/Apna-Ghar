import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Offers from "../pages/Offers";
function CreateListing() {
  const navigate = useNavigate();
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/sign-in");
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const onMutate = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const onSubmit = (e) => e.preventDefault();
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="mx-16 my-8">
      <header className="text-3xl font-bold">Create A Listing</header>
      <div className="flex gape-4 justify-center">
        <div className=" bg-[#FCCE6B]"></div>

        <form
          onSubmit={onSubmit}
          className="noshadow card bg-[#FC6B6B]/20 rounded-none p-4 font-bold [&>*]:mb-4"
        >
          <div>
            <label>Sale/Rent</label>
            <div className="">
              <button
                type="button"
                className={`btn btn-md mr-6 w-28 hover:none
                ${type === "sale" ? "bg-[#FC6B6B]" : "text-slate-500 bg-white"}
                `}
                id="type"
                value="sale"
                onClick={onMutate}
              >
                Sale
              </button>
              <button
                type="button"
                className={`btn  btn-md w-28
                ${type === "rent" ? "bg-[#FC6B6B]" : "text-slate-500 bg-white"}
                `}
                id="type"
                value="rent"
                onClick={onMutate}
              >
                Rent
              </button>
            </div>
          </div>
          <div>
            <label className="block">Name</label>
            <input
              className="input input-sm"
              type="text"
              id="name"
              value={name}
              onChange={onMutate}
              maxLength="32"
              minLength="10"
              required
            />
          </div>
          <div className="flex gap-6">
            <div>
              <label className="block">Bedrooms</label>
              <input
                className="input input-xs"
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onMutate}
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <label className="block">Bathrooms</label>
              <input
                className="input input-xs"
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onMutate}
                min="1"
                max="50"
                required
              />
            </div>
          </div>
          <div>
            <label>Parking Spot</label>
            <div className="">
              <button
                type="button"
                className={`btn btn-md mr-6 w-28
                ${parking ? "bg-[#FC6B6B]" : "text-slate-500 bg-white"}
                `}
                id="parking"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                type="button"
                className={`btn  btn-md w-28 
                  ${
                    !parking && parking !== null
                      ? "bg-[#FC6B6B]"
                      : "text-slate-500 bg-white"
                  }
                `}
                id="parking"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <label>Furnished</label>
            <div className="">
              <button
                type="button"
                className={`btn btn-md mr-6 w-28
                ${furnished ? "bg-[#FC6B6B]" : "text-slate-500 bg-white"}
                `}
                id="furnished"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                type="button"
                className={`btn  btn-md w-28
                  ${
                    !furnished && furnished !== null
                      ? "bg-[#FC6B6B]"
                      : "text-slate-500 bg-white"
                  }
                `}
                id="furnished"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <label className="block">Address</label>
            <textarea
              className="input"
              type="text"
              id="address"
              value={address}
              onChange={onMutate}
              required
            />

            {!geoLocationEnabled && (
              <div className="flex gap-4 mt-4">
                <div>
                  <label className="block">Latitude</label>
                  <input
                    className="input input-sm text-center"
                    type="number"
                    id="latitude"
                    value={latitude}
                    onChange={onMutate}
                    required
                  />
                </div>
                <div>
                  <label className="block">Longitude</label>
                  <input
                    className="input input-sm text-center"
                    type="number"
                    id="longitude"
                    value={longitude}
                    onChange={onMutate}
                    required
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <label>Offer</label>
            <div className="">
              <button
                type="button"
                className={`btn btn-md mr-6 w-28
                ${offer ? "bg-[#FC6B6B]" : "text-slate-500 bg-white"}
                `}
                id="offer"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                type="button"
                className={`btn  btn-md w-28
                  ${
                    !offer && offer !== null
                      ? "bg-[#FC6B6B]"
                      : "text-slate-500 bg-white"
                  }
                `}
                id="offer"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>
          </div>
          <div>
            <label className="block">Regular Price</label>
            <input
              className="input input-sm text-center inline mr-4"
              type="number"
              id="regularPrice"
              value={regularPrice}
              onChange={onMutate}
              min="50"
              max="75000000"
              required
            />
            {type === "rent" && <p className="inline">$ / Month</p>}
          </div>
          {offer && (
            <div>
              <label className="block">Discounted Price</label>
              <input
                className="input input-sm text-center inline mr-4"
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onMutate}
                min="50"
                max="75000000"
                required={offer}
              />
              {type === "rent" && <p className="inline">$ / Month</p>}
            </div>
          )}
          <div>
            <label className="block">Images</label>
            <p className="font-normal text-sm mb-2">
              The first image will be the cover (max 6).
            </p>
            <input
              className="bg-white rounded file-input-borderd w-full max-w-xs file-input-error"
              type="file"
              id="images"
              onChange={onMutate}
              max="6"
              accept=".jpg,.png,.jpeg"
              multiple
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#FC6B6B] btn text-lg w-full mt-7 "
          >
            {" "}
            Create Listing{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateListing;
