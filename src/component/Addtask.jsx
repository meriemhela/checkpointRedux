import React, { useState } from "react";

function AddTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ajouter une nouvelle tache"
      />
      <button type="submit">Ajouter une tache</button>
    </form>
  );
}

export default AddTask;
