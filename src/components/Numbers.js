import Number from "./Number";

const Numbers = ({ numbers, onDelete, onToggle }) => {
  return (
    <>
      {numbers.map((number) => (
        <Number
          key={number.id}
          number={number}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Numbers;
