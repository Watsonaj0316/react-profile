import React from "react";
import styles from "./Main.module.css";
import { Home } from "./Home/Home";
import { Resume } from "./Resume/Resume";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Route, Routes } from "react-router-dom";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resume/" element={<Resume />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </main>
  );
};

