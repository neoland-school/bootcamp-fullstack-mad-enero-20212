import "./style.css";

function EmptyBox({ handleChangeColor }) {
  return (
    <div
      onMouseOver={handleChangeColor}
      onMouseLeave={handleChangeColor}
      className="empty_box"
    ></div>
  );
}

export default EmptyBox;
