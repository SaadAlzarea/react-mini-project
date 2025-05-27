import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [emaiL, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const navigate = useNavigate();

  function toLogin() {
    let isValid = true;

    if (emaiL == "") {
      isValid = false;
      let emailError = "name is required";
    } else if (emaiL.includes("@") && emaiL.includes(".")) {
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

    if (
      localStorage.getItem("email") == emaiL &&
      localStorage.getItem("password") == password
    ) {
      navigate("/mass");
    }

  }
  return (
    <>
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
                  value={emaiL}
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
              {/* login */}
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className=" h-10 w-50 text-lg font-medium rounded-2xl bg-blue-500"
                  onClick={toLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
