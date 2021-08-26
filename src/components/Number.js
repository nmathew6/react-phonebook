import { FaTimes } from "react-icons/fa";

const Number = ({ number, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${number.favorite ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(number.id)}
    >
      <h3>
        {number.name}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(number.id)}
        />
      </h3>
      <p>{number.pNumber}</p>
    </div>
  );
};

export default Number;
