import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import signUp from "../assets/assets/images/login/login.svg";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const user = { name, email, password ,confirmPassword};
    console.log(user);
    form.reset();
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col md:flex-row">
        <img src={signUp} alt="" />
        <div className="card border-2 shrink-0 w-full max-w-sm  p-5">
          <h3 className="text-3xl font-semibold text-center">Sign Up</h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#FF3811] text-white hover:text-black"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="  text-center">
            <p className="text-sm font-semibold">Or Sign Up with</p>
            <div className="flex gap-3 justify-center my-3">
              <p className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-blue-600">
                <FaFacebookF />
              </p>
              <p className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-blue-500">
                <FaLinkedinIn />
              </p>
              <p className="p-2 rounded-full bg-slate-200 hover:bg-slate-300">
                <FcGoogle />
              </p>
            </div>
            <p className="text-sm text-slate-500 font-semibold">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#FF3811] hover:underline">Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
