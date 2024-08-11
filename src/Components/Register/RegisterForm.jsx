import React from 'react'
import styles from './Style.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function RegisterForm() {
  const navigate = useNavigate()
  const [data, setData] = useState({name:"",mobile:"", email:"", password:""})
  const handleChange=(e)=>{
      setData({...data, [e.target.name]:e.target.value})
  }
  const handleSubmit = async (event) => {
event.preventDefault();

if (!data.name || !data.mobile || !data.email || !data.password) {
  alert("Please fill in all fields.");
  return;
}

// Send the POST request
try {
  const response = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseData = await response.json();
  console.log(responseData);
  window.localStorage.setItem("user",responseData.user)
  window.localStorage.setItem("name",responseData.name)
  window.localStorage.setItem("token",responseData.token)
  navigate("/listing")

} catch (error) {
  alert("There was a problem with the request, please try again");
}
};
  return (
      <div className={styles.container}>
          <h1 className={styles.h1}>Create an account</h1>
          <h2 className={styles.h2}>Your personal job finder is here</h2>
          <input className={styles.input} name="name" value={data.name} onChange={handleChange} type={"text"} placeholder="Name"></input>
          <input className={styles.input}  name="email" value={data.email}  onChange={handleChange} type={"email"} placeholder="Email"></input>
          <input className={styles.input} name="mobile" value={data.mobile} onChange={handleChange} type={"tel"} placeholder="Mobile"></input>
          <input className={styles.input} name="password" value={data.password} onChange={handleChange} type={"password"} placeholder="Password"></input>
          <p className={styles.p}> 
            <input type="checkbox"  name="checkbox" id="checkbox"/>
          <label
              style={{
                marginLeft: "10px",
              }}
              htmlFor="checkbox"
            >
              By creating an account, I agree to our terms of use and privacy policy
            </label>
          </p>

          <button onClick={handleSubmit}  className={styles.button}>Create Account</button>
          <p className={styles.footer}>Already have an account?<span onClick={()=>navigate("/login")} className={styles.underline}>Sign in</span></p>
      </div>
  )
}

export default RegisterForm