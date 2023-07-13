import React from "react";
import "./container.css";

function Container({ text, handledelete, handleedit, id }) {
  return (
    <div className="container_box">
      <p>{text}</p>
      <div>
        <button className="edit" onClick={() => handleedit(id)}>
          Edit
        </button>
        <button
          onClick={() => {
            handledelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Container;
