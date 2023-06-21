import { toast } from "react-toastify";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };

  return (
    <>
      <div className="container p-4 md:w-1/3">
        <header>
          <p className="font-bold text-2xl mb-12">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <div className="relative">
            <input
              type="email"
              className="input border-2 border-solid border-black w-full mb-8 pl-8"
              placeholder="Username or Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <HiUser className="absolute top-4 left-2 text-lg" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input border-2 border-solid border-black w-full mb-8 pl-8"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <FaLock className="absolute top-4 left-2 text-lg" />
            <AiFillEye
              className="absolute top-4 right-3"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <button
            type="submit"
            className="btn w-full mb-2 bg-blue-700 text-white"
          >
            Sign In
          </button>
        </form>

        <Link to="/forgot-password" className="">
          <p className="text-right text-blue-700">Forgot Password?</p>
        </Link>

        <p className=" text-center">
          Already a user?{" "}
          <Link to="/sign-up" className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignIn;
