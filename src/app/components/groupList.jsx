import React from "react";
import Proptypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    console.log(Object.keys(items));
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={"list-group-item" + (items[item] === selectedItem ? " active" : "")}
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: Proptypes.object.isRequired,
    valueProperty: Proptypes.string.isRequired,
    contentProperty: Proptypes.string.isRequired,
    onItemSelect: Proptypes.func,
    selectedItem: Proptypes.object
};

export default GroupList;
