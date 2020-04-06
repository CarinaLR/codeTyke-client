import React, { useState } from "react";
import axios from "axios";

const CreateQuestion = () => {
  const [body, setBody] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(body, instructions);
    await axios.post("/api/questions", {
      body,
      instructions,
    });
    setBody("");
    setInstructions("");
  };

  return (
    <div>
      <h2>Create A New Question</h2>
      <form>
        <label>Please enter a question:</label>
        <input
          type="text"
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
        />
        <label>Please enter additional instructions:</label>
        <input
          type="text"
          value={instructions}
          onChange={(evt) => setInstructions(evt.target.value)}
        />
        <input type="submit" value="Add My Question" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateQuestion;
