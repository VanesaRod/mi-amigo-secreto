const NameList = ({ nombres }) => {
  return (
    <ul className="name-list">
      {nombres.map((nombre, index) => (
        <li key={index}>
          {index + 1} {nombre} 
        </li>
      ))}
    </ul>
  );
};

export default NameList;

