function Button({ text, color, onAdd }) {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {text}
    </button>
  );
}

export default Button;
