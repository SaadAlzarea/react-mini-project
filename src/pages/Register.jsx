import { isValidElement, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
    const navigate = useNavigate();
  let isValid = true;

  function register() {
    if (fname == "") {
      isValid = false;
      let fnameError = "name is required";
      console.log("invalid name");
      
    } else if (fname.length < 5) {
      isValid = false;
      let fnameError = "name is shorter than 5";
    }

    if (email == "") {
      isValid = false;
      let emailError = "name is required";
      console.log("invalid email");

    } else if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      let emailError = "email is not contain @ and .";
      console.log("invalid email");

    }

    if (password == "") {
      isValid = false;
      let passwordError = "name is required";
      console.log("invalid password");

    } else if (password.length <= 8) {
      isValid = false;
      let passwordError = "password is shorter than 8";
      console.log("invalid password");

    }

    if (conPassword == "") {
      isValid = false;
      let conPasswordError = "name is required";
      console.log("invalid confirm password");

    } else if (password !== conPassword) {
      isValid = false;
      let conPasswordError = "password and confirm password is not match";
      console.log("invalid confirm password");

    }

    localStorage.setItem("full name", fname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirm password", conPassword);


    if(isValid == true){
      navigate("/login");
    }
  }
  return (
    <div className="h-screen">
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <div className="border p-3 rounded-2xl ">
          <div className="text-center p-4">
            <p className="text-3xl font-medium">Register</p>
          </div>
          <div>
            {/* form */}
            <div className=" flex flex-col gap-4">
              {/* fullname */}
              <div className="flex flex-col w-100">
                <label htmlFor="fullName" className="text-lg font-medium">
                  Full name:
                </label>
                <input
                  className="border rounded-sm h-9"
                  type="text"
                  id="fullName"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <span></span>
              </div>
              {/* email */}
              <div className="flex flex-col w-100">
                <label htmlFor="email" className="text-lg font-medium">
                  Email:
                </label>
                <input
                  className="border rounded-sm h-9"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span></span>
              </div>
              {/* password */}
              <div className="flex flex-col w-100">
                <label htmlFor="Password" className="text-lg font-medium">
                  Password:
                </label>
                <input
                  className="border rounded-sm h-9"
                  type="Password"
                  id="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span></span>
              {/* password */}
              <div className="flex flex-col w-100">
                <label htmlFor="conPassword" className="text-lg font-medium">
                  Confirm Password:
                </label>
                <input
                  className="border rounded-sm h-9"
                  type="password"
                  id="conPassword"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </div>
              <span></span>
              {/* register */}
              <div className="flex items-center justify-center">
                <button
                  className=" h-10 w-50 text-lg font-medium rounded-2xl bg-blue-500"
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
