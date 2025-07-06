import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PhoneInput from "../PhoneInput/PhoneInput";
import "./Login.css";

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Tenant");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveUserToLocalStorage = (user) => {
    localStorage.setItem("arce_user", JSON.stringify(user));
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("arce_user");
    return user ? JSON.parse(user) : null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.info("Signing up...");

    setTimeout(() => {
      const newUser = {
        fullName,
        email,
        password,
        role: selectedRole,
        createdAt: new Date().toISOString(),
      };

      const existingUsers = JSON.parse(localStorage.getItem("arce_users")) || [];
      const emailExists = existingUsers.find((user) => user.email === email);
      if (emailExists) {
        toast.error("Email already registered!");
        setIsLoading(false);
        return;
      }

      existingUsers.push(newUser);
      localStorage.setItem("arce_users", JSON.stringify(existingUsers));
      saveUserToLocalStorage(newUser);

      toast.success("Sign up successful!");
      setIsLoading(false);
      navigate("/dashboard");
    }, 5000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.info("Logging in...");

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("arce_users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        toast.error("Invalid credentials");
        setIsLoading(false);
        return;
      }

      saveUserToLocalStorage(user);
      toast.success("Login successful!");
      setIsLoading(false);
      navigate("/dashboard");
    }, 5000);
  };

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) navigate("/dashboard");
  }, []);

  const renderRoleFields = () => {
    switch (selectedRole) {
      case "Landlord":
        return (
          <>
            <div className="input-field2">
              <i className="fas fa-phone"></i>
              <PhoneInput />
            </div>
            <div className="input-field">
              <i className="fas fa-home"></i>
              <input type="text" placeholder="Property Address (optional)" />
            </div>
            <div className="input-field">
              <i className="fas fa-id-card"></i>
              <input type="text" placeholder="National ID / Verification" />
            </div>
          </>
        );
      case "Tenant":
        return (
          <>
            <div className="input-field2">
              <i className="fas fa-phone"></i>
              <PhoneInput />
            </div>
            <div className="input-field">
              <i className="fas fa-map-marker-alt"></i>
              <input type="text" placeholder="Current Address" />
            </div>
            <div className="input-field">
              <i className="fas fa-money-bill"></i>
              <input type="text" placeholder="Preferred Rent Range" />
            </div>
          </>
        );
      case "Agent":
        return (
          <>
            <div className="input-field2">
              <i className="fas fa-phone"></i>
              <PhoneInput />
            </div>
            <div className="input-field">
              <i className="fas fa-building"></i>
              <input type="text" placeholder="Agency Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-certificate"></i>
              <input type="text" placeholder="License Number (optional)" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner" />
          <p style={{ marginTop: "1rem", fontWeight: "bold", color: "#0b2b63" }}>
            {signUpMode ? "Signing up..." : "Logging in..."}
          </p>
        </div>
      )}
      <div className="form-wrapper">
        <div className="form-box">
          <form className="sign-form" onSubmit={signUpMode ? handleRegister : handleLogin}>
            <h2>{signUpMode ? "Sign Up" : "Sign In"}</h2>
            {signUpMode ? (
              <>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field password-wrapper">
                  <input type={showPassword2 ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <FaEye className="eye-icon" onClick={() => setShowPassword2((prev) => !prev)} />
                </div>
                <div className="input-field select-wrapper">
                  <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                    <option value="Tenant">Tenant</option>
                    <option value="Landlord">Landlord</option>
                    <option value="Agent">Agent</option>
                  </select>
                </div>
                {renderRoleFields()}
                <input type="submit" className="btn" value="Sign up" />
              </>
            ) : (
              <>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field password-wrapper">
                  <i className="fas fa-lock"></i>
                  <input type={showPassword1 ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <FaEye className="eye-icon" onClick={() => setShowPassword1((prev) => !prev)} />
                </div>
                <input type="submit" className="btn" value="Login" />
              </>
            )}
            <p className="switch-text">
              {signUpMode ? "Already have an account?" : "Don't have an account?"} {" "}
              <span onClick={() => setSignUpMode(!signUpMode)}>{signUpMode ? "Sign In" : "Sign Up"}</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
