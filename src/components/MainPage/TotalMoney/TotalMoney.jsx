import "./styleTotalMoney.css";
export default function TotalMoney({ toDoList }) {
  const total = toDoList.reduce((sum, valor) => sum + valor.value, 0);
  return (
    <div className="total-money">
      <div className="containerMoney">
        <h3>Total Balance:</h3>
        <h3 className="saldo">&#8369; {total}</h3>
      </div>
      <span>This is the total balance you have</span>
    </div>
  );
}
