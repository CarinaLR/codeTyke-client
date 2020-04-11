import React, { useState } from "react";
import axios from "axios";

const CreateOption = () => {
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(body, imageUrl);
    await axios.post("/api/options", {
      body,
      imageUrl,
    });
    setBody("");
    setImageUrl("");
  };

  return (
    <div className="option-create">
      <div className="option-create__header">
        <h2>Create A New Option</h2>
      </div>
      <form className="option-create__form">
        <label>Please enter an option:</label>
        <input
          className="option-create__input-body"
          type="text"
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
        />
        <label>Please enter additional imageUrl:</label>
        <input
          className="option-create__input-imageUrl"
          type="text"
          value={imageUrl}
          onChange={(evt) => setImageUrl(evt.target.value)}
        />
        <input
          className="option-create__input-submit"
          type="submit"
          value="Add My Option"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default CreateOption;
