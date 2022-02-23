import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Multiplier() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const op1 = parseInt(searchParams.get("numb1"));

  const op2 = parseInt(searchParams.get("numb2"));

  console.log(op1);

  const handleOnSubmit = () => {
    navigate("/results");
  };

  return (
    <React.Fragment>
      <p>
        El resultado de {op1} x {op2} es:{op1 * op2}
      </p>
      <form onSubmit={handleOnSubmit}>
        <button>RESUMEN</button>
      </form>
    </React.Fragment>
  );
}

export default Multiplier;
