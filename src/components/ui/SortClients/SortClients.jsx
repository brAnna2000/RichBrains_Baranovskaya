import React from "react";

import { useState, useEffect } from 'react';
import { SET_CLIENTS_LIST } from "../../../constants";
import { useDispatch, useSelector } from 'react-redux';
import { sort, topBlue, down } from "../../../assets/img";

import './SortClients.css';

function SortClients() {
    const [defaultSelectText, setDefaultSelectText] = useState("Name");
    const [showOptionList, setShowOptionList] = useState(false);
    const [direction, setDirection] = useState("abc");
    const [optionsList, setOptionsList] = useState([
        {id: "name", name: "Name"}, 
        {id: 'age', name: "Date of birth"}, 
        {id: 'country', name: "Country"}
    ]);

    const dispatch = useDispatch();
    const clientsData = useSelector(state => state.clientsList);

    useEffect(() => {
        let option = optionsList.find(option => option.name === defaultSelectText).id;
        dispatch({type: SET_CLIENTS_LIST, clientsListData: clientsData.sort(byField(option))})
    },[defaultSelectText, direction]);

    const handleListDisplay = () => {
        setShowOptionList(!showOptionList);
    };

    const handleOptionClick = e => {
        setDefaultSelectText(e.target.getAttribute("data-name"));
        setShowOptionList(false);
    };

    const byField = (field) => {
        if (field === 'age'){
            return (a, b) => Date.parse(a[field].split('.').reverse().join('-')) > Date.parse(b[field].split('.').reverse().join('-')) ? (direction === 'asc' ? 1 : -1) : (direction === 'asc' ? -1 : 1); 
        }
        return (a, b) => a[field] > b[field] ? (direction === 'asc' ? 1 : -1) : (direction === 'asc' ? -1 : 1);
    }

    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? "selected-text active" : "selected-text"}
          onClick={() => handleListDisplay()}
        >
           <img src={sort} alt="sort" />
           <span>Sort by: </span>
           {defaultSelectText}
        </div>
        {showOptionList && (
          <div className="select-options">
            {optionsList.map(option => {
              return (
                <label 
                    className="custom-select-option"
                    key={option.id}
                    data-name={option.name}
                    onClick={(e) => handleOptionClick(e)}
                >
                    <input type="radio" data-name={option.name} className={option.name === defaultSelectText ? 'active_input' : undefined}/>
                    {option.name}
                </label>
              );
            })}
            <div className="direction_buttons">
                <button className={direction === 'abc' ? "active" : undefined} onClick={() => setDirection('abc')}>
                    <img src={topBlue} alt="top arrow" /> Asc.
                </button>
                <button className={direction === 'cba' ? "active" : undefined} onClick={() => setDirection('cba')}>
                    <img src={down} alt="down arrow" /> Desc.
                </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default SortClients;