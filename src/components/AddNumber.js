import { useState } from "react";

const AddNumber = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [pNumber, setNumber] = useState("");
  const [favorite, setFavorite] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !pNumber) {
      alert("Please fill in name and/or number");
      return;
    }

    onAdd({ name, pNumber, favorite });

    setName("");
    setNumber("");
    setFavorite(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Add Phone Number"
          value={pNumber}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Favorite</label>
        <input
          type="checkbox"
          checked={favorite}
          value={favorite}
          onChange={(e) => setFavorite(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Number" className="btn btn-block" />
    </form>
  );
};

export default AddNumber;
