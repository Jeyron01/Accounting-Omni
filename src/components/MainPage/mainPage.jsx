import "./styleMainPage.css";
import { useState } from "react";
import Form from "./Form/Form";
import Header from "./Header/header";
import List from "./List/List";
import TotalMoney from "./TotalMoney/TotalMoney";
import Navigation from "./Navigation/navigation";

export default function MainPage({ setLogin }) {
  const [toDoList, setToDoList] = useState([]);
  const [listFilter, setListFilter] = useState([]);

  const [valueTo, setValueTo] = useState("");
  const [valueFrom, setValueFrom] = useState("");
  const [valueDes, setValueDes] = useState("");
  const [valueMoney, setValueMoney] = useState("");
  const [valueType, setValueType] = useState("");

  return (
    <>
      <Header setLogin={setLogin} />
      <main className="mainPage">
        <aside className="aside">
          <div className="containerFormTotalMoney">
            <Form
              toDoList={toDoList}
              setToDoList={setToDoList}
              valueTo={valueTo}
              setValueTo={setValueTo}
              valueFrom={valueFrom}
              setValueFrom={setValueFrom}
              valueDes={valueDes}
              setValueDes={setValueDes}
              valueMoney={valueMoney}
              setValueMoney={setValueMoney}
              valueType={valueType}
              setValueType={setValueType}
            />
            <TotalMoney toDoList={toDoList} />
          </div>
        </aside>
        <div className="containerNavigationEList">
          <Navigation
            listFilter={listFilter}
            setListFilter={setListFilter}
            toDoList={toDoList}
          />
          <List
            valueType={valueType}
            listFilter={listFilter}
            toDoList={toDoList}
            setToDoList={setToDoList}
            setListFilter={setListFilter}
          />
        </div>
      </main>
    </>
  );
}
