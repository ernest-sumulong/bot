import React from "react";
import "./widgetStyle.css";


const Menu = (props) => {

    const menus = [
        {
            text: "Reformat PC",
            id: 1
        },
        {
            text: "Service Request",
            id: 2
        },
        {
            text: "Other Concern",
            id: 3
        },
    ];

    const menuHandler = (event) => {
        props.actionProvider.proMenuHandler(event.target.value);
    };

    const buttonsMarkup = menus.map((menu) => (
        <button
        key={menu.id}
        value={menu.text}
        onClick={menuHandler}
        className="option-item"
        >
            {menu.text}
        </button>
    ));
        return <div className="options-container">{buttonsMarkup}</div>;
};

export default Menu;