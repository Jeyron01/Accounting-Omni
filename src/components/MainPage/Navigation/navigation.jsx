import "./styleNavigation.css";
export default function Navigation({ listFilter, setListFilter, toDoList }) {
  function filtrarIncome() {
    const result = toDoList.filter((itens) => itens.type === "0");
    setListFilter(result);
  }
  
  function filtrarEntradas() {
    const result = toDoList.filter((itens) => itens.type === "1");
    setListFilter(result);
  }

  function filtrarDespezas() {
    const result = toDoList.filter((itens) => itens.type === "2");
    setListFilter(result);
  }
  function mostrarTodos() {
    /*const result = toDoList.filter(
      (item) => item.type === "Income" && item.type === "Expense" && item.type === "Transfer"
    );*/
    setListFilter(toDoList);
  }

  return (
    <>
      <nav className="containerNavigation">
        <h4 className="title">Financial Report</h4>
        <div className="containerBtn">
          <button className="all" onClick={() => mostrarTodos()}>
            All Records
          </button>
          <button className="others" onClick={() => filtrarIncome()}>
            Income
          </button>
          <button className="others" onClick={() => filtrarEntradas()}>
            Expense
          </button>
          <button className="others" onClick={() => filtrarDespezas()}>
            Transfer
          </button>
        </div>
      </nav>
    </>
  );
}
