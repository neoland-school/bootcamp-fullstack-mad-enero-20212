import "./style.css";

function FillBox({ className }) {
  return <div className={`fill_box ${className ? "bg" : ""}`}></div>;
}

export default FillBox;
