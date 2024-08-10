import React from 'react'
import styles from './Style.module.css'

function RegisterForm() {
    return (
      <div className={styles.container}>
          <h1 className={styles.h1}>Create an account</h1>
          <h2 className={styles.h2}>Your personal job finder is here</h2>
          <input className={styles.input} name="name"  type={"text"} placeholder="Name"></input>
          <input className={styles.input} name="email"  type={"email"} placeholder="Email"></input>
          <input className={styles.input} name="mobile"  type={"tel"} placeholder="Mobile"></input>
          <input className={styles.input} name="password"type={"password"} placeholder="Password"></input>
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
          <button className={styles.button} >Create Account</button>
          <p className={styles.footer}>Already have an account?<span className={styles.underline}>Sign in</span></p>
      </div>
  )
}

export default RegisterForm