import { useState } from "react";
import login from "../assets/login-background.jpeg";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [user, setUser] = useState();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [error , seterror] = useState("")

  const handleSuccess = (credentialResponse) => {
   
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    console.log("User Info:", decoded);
    localStorage.setItem("isLoggedIn" , "true");

      navigate("/home");
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  function submit() {
       if(email == "" || password == ""){
      seterror("Please Enter your Email or Password");
    }
      else if (email == "subramaniankv68@gmail.com" && password == 80729915) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
    }

    else{
        seterror("Invaild Email or Password");
    }
  }

  return (
    <>
      <div className="login-page">
        <img src={login} alt="" className="back-ground" />

        <div className="login-container">
          <h3 className="log-head">Log in</h3>
          <div className="input-container">
            <input
              type="text"
              id="inputbox1-email"
              onChange={(e) => setemail(e.target.value)}
              className="email"
              placeholder="Enter your Email."
            />
            <input
              type="password"
              className="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
            />
            
            
            <button className="login-btn" onClick={submit}>Log in</button>

            {error &&(
                <div className="alert alert-danger mt-3"><i id="alert-icon" class="fa-solid fa-exclamation"></i> {error}  <span className="close-btn" onClick={() => seterror("")}>&times;</span></div>
             )}

            <h4 className="last-log">
              Not a Member? <span className="sign-log">Sign up now.</span>
            </h4>
        
          </div>
          <div>
            {!user ? (
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => console.log("Login Failed")}
              />
            ) : (
              <div>
                <img
                  src={user.picture}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                />
                <h3>Welcome, {user.name}</h3>
                <p>Email: {user.email}</p>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
