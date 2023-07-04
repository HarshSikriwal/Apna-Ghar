import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { HiUser } from "react-icons/hi";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Check Your Mail");
    } catch (error) {
      toast.error("Please input valid Email");
    }
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="mx-16">
      <h1 className="font-bold text-3xl mb-10">Reset Your Password</h1>
      <form onSubmit={onSubmit} className="md:w-1/3">
        <div className="flex gap-4 mb-8">
          <div className="relative grow">
            <input
              type="email"
              className="input focus:outline-none border-2 border-solid border-black w-full pl-8 focus:border-blue-600"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <HiUser className="absolute top-4 left-2 text-lg" />
          </div>
          <Link to="/sign-in" className="self-end">
            <button className="btn bg-blue-600 text-white hover:bg-[#faad09] hover:text-black">
              Sign In
            </button>
          </Link>
        </div>
        <button
          type="submit"
          className="btn w-full mb-2 bg-blue-600 text-white hover:bg-[#faad09] hover:text-black"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
