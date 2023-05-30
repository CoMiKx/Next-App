"use client";
import React from "react";
import { useState } from "react";
import styles from './../page.module.css'

export default function Test() {
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [state, setState] = useState(1);

  function handleUserName(event) {
    setValue({ ...value, userName: event.target.value });
  }
  function handleEmail(event) {
    setValue({ ...value, email: event.target.value });
  }
  function handlePassword(event) {
    setValue({ ...value, password: event.target.value });
  }

  function mouseOver() {
    if (state === 1) {
      setState((prevVal) => (prevVal += 1));
    } else if (state === 2) {
      setState((prevVal) => (prevVal += 1));
    } else if (state === 3) {
      setState((prevVal) => (prevVal += 1)); 
    }
  }

  var mystyle = {
    left:
      state === 1 ? "0px" : state === 2 ? "200px" : state === 3 ? "450px" : state === 4 ? "550px" : "",

    position: value.password.length < 8 && "absolute",
  };

  return (
    <div className={styles.grid}>
    <a href="https://jp.pornhub.com/"
    className={styles.card}
    onMouseOver={mouseOver}
    style={mystyle}
    rel="noopener noreferrer">
    <h2>Submit</h2>
    </a>
    </div>
  );
}