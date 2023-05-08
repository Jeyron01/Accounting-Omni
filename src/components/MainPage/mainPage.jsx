import "./styleMainPage.css";
import { useState,useEffect } from "react";
import Form from "./Form/Form";
import Header from "./Header/header";
import List from "./List/List";
import TotalMoney from "./TotalMoney/TotalMoney";
import Navigation from "./Navigation/navigation";
import axios from "axios";

export default function MainPage({ setLogin }) {
  const [toDoList, setToDoList] = useState([]);
  const [listFilter, setListFilter] = useState([]);

  const [toAccountId, setValueTo] = useState("");
  const [fromAccountId, setValueFrom] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [valueType, setValueType] = useState("");

  async function onMount() {
    const result = await axios.get("http://18.136.84.195:90/api/Transaction");
    setToDoList(result.data)
  }

  useEffect(()=>{
    onMount();
  },[]);

  return (
    <>
      <Header setLogin={setLogin} />
      <main className="mainPage">
        <aside className="aside">
          <div className="containerFormTotalMoney">
            <Form
              toDoList={toDoList}
              setToDoList={setToDoList}
              toAccountId={toAccountId}
              setValueTo={setValueTo}
              fromAccountId={fromAccountId}
              setValueFrom={setValueFrom}
              description={description}
              setDescription={setDescription}
              amount={amount}
              setAmount={setAmount}
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
