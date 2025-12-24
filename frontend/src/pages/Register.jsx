import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT CLICKED");

    try {
      const res = await API.post("register/", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
