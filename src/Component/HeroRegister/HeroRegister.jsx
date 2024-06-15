import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroRegister = () => {
  const [registerError, setRegisterErro] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);
    //reset error

    setSuccess("");
    if (password.length < 6) {
      setRegisterErro("Password should be atleast 6 Character.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterErro(
        "Your password should have atleast one uppercase character"
      );
      return;
    } else if (!accepted) {
      setRegisterErro("Please accept our terms and condition.");
      return;
    }
    setRegisterErro("");

    //reset error
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created Successfully");
        //update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => console.log(error));
        //send verification email:
        sendEmailVerification(result.user).then(() => {
          alert("Please check your email and verify your account.");
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterErro(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="mb-4">
              <input type="checkbox" name="terms" id="terms" />
              <label className="ml-2" htmlFor="terms">
                Accept our terms and condition
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {registerError && (
            <p className="text-red-400 text-2xl">{registerError}</p>
          )}
          {success && <p className="text-green-400 text-2xl">{success}</p>}
          <p>
            Already have an account? Please <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
