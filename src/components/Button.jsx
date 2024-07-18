function Button({ text, color, onClick, onAdd }) {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {text}
    </button>
  );
}

export default Button;
