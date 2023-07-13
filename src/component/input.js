import "./input.css";
import React, { useState, useEffect } from "react";
function Input({ handleadd, entry, handleupdate }) {
  const [input, setinput] = useState("");
  function handlechange(e) {
    setinput(e.target.value);
  }

  function handlesubmit() {
    if (entry) {
      handleupdate(entry, input, setinput);
    } else {
      handleadd(input);
      setinput("");
    }
  }

  useEffect(() => {
    if (entry) {
      setinput(entry.text);
    }
  }, [entry]);

  return (
    <div className="box">
      <input type="text" value={input} onChange={handlechange} />
      <button className="add" onClick={handlesubmit}>
        {entry ? "Edit" : "Add"}
      </button>
    </div>
  );
}
export default Input;
