import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Contacts } from "./Contacts";
import Widget from "./Widget";
import { Img } from "./Img";
import styles from "../App.module.css";

export const Headers = () => {
  return (
    <div>
      <div className={styles.black}>
        <div>
          <Link to="/Contacts" className={styles.btn}>
            {" "}
            Contacts
          </Link>
          <Link to="/Img" className={styles.btn}>
            {" "}
            Home
          </Link>
          <Link to="/widget" className={styles.btn}>
            {" "}
            Widget
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/widget" element={<Widget />} />
        <Route path="/img" element={<Img />} />
      </Routes>
    </div>
  );
};
