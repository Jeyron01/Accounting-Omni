import "./styleForm.css";
import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption(''),
  createOption('GCash'),
  createOption('Cash on Bank'),
  createOption('Cash in Hand'),
];

export default function Form({
  toDoList,
  setToDoList,
  valueTo,
  valueFrom,
  setValueTo,
  setValueFrom,
  valueMoney,
  setValueMoney,
  valueType,
  setValueType ,
  valueDes,
  setValueDes,
}) {
  function verification(e) {
    e.preventDefault();
    if (valueMoney !== "" && valueType !== "") {
      Compute();
    }
  }

  function Compute() {
    const novoObjeto = {
      transaction: valueFrom.label + " ===> " + valueTo.label,
      description: valueDes,
      type: valueType,
      value:
        valueType === "Expense"
      ? parseInt(valueMoney) * -1
      : valueType === "Transfer"
      ? parseInt(valueMoney) * -1
      : parseInt(valueMoney),
    };
    
    setToDoList([...toDoList, novoObjeto]);
  }

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [, setValue] = useState();

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };
  
  return (
    <>
      <form onSubmit={(event) => verification(event)}>
        <div className="formCima">
        <p>To</p>
        <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValueTo(newValue)}
      onCreateOption={handleCreate}
      options={options}
      value={valueTo}
    />
        <p>From</p>
        <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValueFrom(newValue)}
      onCreateOption={handleCreate}
      options={options}
      value={valueFrom}
    />
        <p>Description</p>
        <input
            type="text"
            value={valueDes}
            placeholder="Enter description"
            onChange={(e) => setValueDes(e.target.value)}
          />
        </div>
        <div className="formMeio">
          <div className="divValue">
            <p>Amount</p>
            <input
              type="number"
              value={valueMoney}
              placeholder="0"
              min="1"
              onChange={(e) => setValueMoney(e.target.value)}
            />
            {/*  <p id="cifrao">R$</p> */}
          </div>
          <div className="divValue">
            <p1>Type</p1>
            <label>
              <select
                value={valueType}
                onChange={(event) => {
                  event.preventDefault();
                  setValueType  (event.target.value);}}>
                <option value=""></option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
                <option value="Transfer">Transfer</option>
              </select>
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
    
  );
}