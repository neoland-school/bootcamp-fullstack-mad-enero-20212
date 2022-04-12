import { useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    if (e.target.number1.value != null || e.target.number2.value != null) {
      navigate(
        `/multiplier/?numb1=${e.target.number1.value}&numb2=${e.target.number2.value}`
      );
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="number1">Ingrese un numero</label>
      <input type="number" name="number1" required />

      <label htmlFor="number2">Ingrese un numero</label>
      <input type="number" name="number2" required />
      <button type="submit">Next</button>
    </form>
  );
}

export default UserForm;
