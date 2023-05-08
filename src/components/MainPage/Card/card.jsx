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
            <h3  className="description">{element.description}</h3>
            <h5 className="transaction">{element.toAccountId}</h5>
            <span className="value">&#8369;{element.amount}</span>
            
          </div>
          <p className="type"> ( {element.type} )</p>
          <button className="bin" onClick={() => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        handleItenList(element)
    }
}}>
    <BsTrashFill />Delete 
</button>
        </div>
      ) : (
        <div className="containerListRed">
          <div className="ContainerDescriptionEType">
            <h3 className="description2">{element.description}</h3>
            <h5 className="transaction">{element.toAccountId + ' / ' + element.fromAccountId}</h5>
            <span className="value">&#8369;{element.amount}</span>
            
          </div>
          <p className="type">( {element.type} )</p>
          <button className="bin2" onClick={() => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        handleItenList(element)
    }
}}>
    <BsTrashFill />Delete 
</button>
        </div>
      )}
    </>
  );
}
