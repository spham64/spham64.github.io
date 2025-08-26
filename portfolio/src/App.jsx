import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Samuel Pham</h1>
      <div class="card">
        <p>
          I am a student at UNCC from Charlotte, NC, with a passion for solving
          challenging problems using cutting-edge technologies and tools. This
          passion has led me into the software development field, where I have
          researched and worked on ways to support literacy and education for
          all.
        </p>
        <p>
          When I'm not coding or studying, I enjoy activites that keep my
          physically and mentally active. Whether it's going to the gym,
          reading, or staying up-to-date with the latest trends in technology
          and economics, I’m always looking for ways to stay engaged and
          continue learning.
        </p>
      </div>
    </>
  );
}

export default App;
