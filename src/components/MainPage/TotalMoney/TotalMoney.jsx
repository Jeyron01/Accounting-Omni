import "./styleTotalMoney.css";
export default function TotalMoney({ toDoList }) {
  const total = toDoList.reduce((sum, valor) => sum + valor.value, 0);
  return (
    <div className="total-money">
      <div className="containerMoney">
        <h3>Total Balance:</h3>
      </div>
      <span className="saldo">&#8369; {total}</span>
    </div>
  );
}
