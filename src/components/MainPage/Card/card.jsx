import "./styleCard.css";
import { BsTrashFill } from 'react-icons/bs';
export default function Card({
  toDoList,
  setToDoList,
  valueType,
  element,
  setListFilter,
  listFilter,
}) {
  function handleItenList(iten) {
    setToDoList(toDoList.filter((itensList) => itensList !== iten));
    setListFilter(listFilter.filter((itensList) => itensList !== iten));
  }
  return (
    <>
      {valueType === "Income" ? (
        <div className="containerListGreen">
          <div className="ContainerDescriptionEType">
            <h3 className="transaction">{element.description}</h3>
            <h5 className="description">{element.transaction}</h5>
            <span className="value">&#8369;{element.value}</span>
            <button className="bin" onClick={() => handleItenList(element)}>
            <BsTrashFill />
            </button>
          </div>
          <p className="type">{element.type}</p>
        </div>
      ) : (
        <div className="containerListRed">
          <div className="ContainerDescriptionEType">
            <h3 className="transaction">{element.description}</h3>
            <h5 className="description">{element.transaction}</h5>
            <span className="value">&#8369;{element.value}</span>
            <button className="bin" onClick={() => handleItenList(element)}>
            <BsTrashFill />
            </button>
          </div>
          <p className="type">{element.type}</p>
        </div>
      )}
    </>
  );
}
