import { useState } from "react";

const SearchNumber = ({ onSearch }) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name");
      return;
    }

    onSearch({ name });
    setName("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add Name to search"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <input type="submit" value="Search Number" className="btn btn-block" />
    </form>
  );
};

export default SearchNumber;
