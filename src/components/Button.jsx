const Button = ({ name, etat, setSwitch }) => {
  // Gestion du button
  const handleCLick = () => {
    setSwitch(true);
  };
  //-------
  return (
    <button
      onClick={handleCLick}
      style={{ backgroundColor: etat ? "blue" : "red" }}
    >
      {name}
    </button>
  );
};

export default Button;
