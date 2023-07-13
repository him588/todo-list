import React, { useState } from "react";
import "./App.css";
import Input from "./component/input";
import Container from "./component/container";
import data from "./data";

function App() {
  const [todoitem, settodoitem] = useState(data);
  const [entry, newentry] = useState(null);
  function handleadd(input) {
    if (input.length > 3) {
      settodoitem([...todoitem, { text: input, id: todoitem.length + 1 }]);
    } else {
      alert("Your task is not that short");
    }
  }
  function handledelete(id) {
    const newlist = todoitem.filter((text) => {
      if (text.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    settodoitem(newlist);
  }
  function handleedit(id) {
    const selecttext = todoitem.find((text) => {
      if (text.id === id) {
        return true;
      } else {
        return false;
      }
    });
    newentry(selecttext);
  }
  function handleupdate(entry, input, setinput) {
    console.log(entry);
    const search = todoitem.findIndex((text) => text.id === entry.id);

    const copyarray = [...todoitem];

    copyarray.splice(search, 1, { text: input, id: entry.id });
    settodoitem(copyarray);
    newentry(null);
    setinput("");
  }
  return (
    <div className="App">
      <Input
        handleadd={handleadd}
        entry={entry}
        newentry={newentry}
        handleupdate={handleupdate}
      ></Input>
      <div className="todobox">
        <h1>Your List</h1>
        {todoitem.map((text) => {
          return (
            <Container
              text={text.text}
              key={text.id}
              id={text.id}
              handledelete={handledelete}
              handleedit={handleedit}
            ></Container>
          );
        })}
      </div>
    </div>
  );
}

export default App;
