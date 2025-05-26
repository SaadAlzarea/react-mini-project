import { isValidElement, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const navigate = useNavigate();

  
  let isValid = true;

  function login() {

    if (email == "") {
      isValid = false;
      let emailError = "name is required";
    } else if (email.includes("@") && email.includes(".")) {
      isValid = false;
      let emailError = "email is not contain @ and .";
    }

    if (password == "") {
      isValid = false;
      let passwordError = "name is required";
    } else if (password.length <= 8) {
      isValid = false;
      let passwordError = "password is shorter than 8";
    }

    const goToAboutPage = () => {
      navigate("/main");
    };
  }
}

function Login() {
  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col w-full h-screen justify-center items-center">
          <div className="border p-3 rounded-2xl ">
            <div className="text-center p-4">
              <p className="text-3xl font-medium">Register</p>
            </div>
            <div>
              {/* form */}
              <div className=" flex flex-col gap-4">
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
                {/* register */}
                <div className="flex items-center justify-center">
                  <button
                    className=" h-10 w-50 text-lg font-medium rounded-2xl bg-blue-500"
                    onClick={(login())}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
