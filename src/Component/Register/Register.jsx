import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPasssword, setShowPasssword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form Submitting");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="border">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-4">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full px-2 py-4 bg-gray-700"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <br />
          <div className="relative mb-2">
            <input
              className=" w-full px-2 py-4 bg-gray-700"
              type={showPasssword ? "text" : "password"}
              name="password"
              placeholder="Password"
              id=""
            />
            <span
              className="absolute top-4 right-2 text-2xl"
              onClick={() => {
                setShowPasssword(!showPasssword);
              }}
            >
              {showPasssword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          <br />
          <div className="mb-4">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept out terms and condition
            </label>
          </div>
          <br />
          <input
            className="mb-4 w-full btn btn-secondary
          "
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
