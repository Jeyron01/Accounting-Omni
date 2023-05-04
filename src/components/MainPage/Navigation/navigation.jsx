import "./styleNavigation.css";
export default function Navigation({ listFilter, setListFilter, toDoList }) {
  function filtrarIncome() {
    const result = toDoList.filter((itens) => itens.type === "Income");
    setListFilter(result);
  }
  
  function filtrarEntradas() {
    const result = toDoList.filter((itens) => itens.type === "Expense");
    setListFilter(result);
  }

  function filtrarDespezas() {
    const result = toDoList.filter((itens) => itens.type === "Transfer");
    setListFilter(result);
  }
  function mostrarTodos() {
    /* const result = toDoList.filter(
      (item) => item.type === "Despeza" && item.type === "Entrada"
    ); */
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
