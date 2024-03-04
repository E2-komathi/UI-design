import "../css/Card.css";
import SearchBox from "../CommonComponents/SearchBox";
import { useState } from "react";
import tick from '../assets/tick.png';

function Card({ titleName, titleColor, lhsList, rhsList }) {

    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function checkBox() {
        setIsActive(!isActive);
    }

    function valuesForSearch(searchData) {
        setSearchValue(searchData);
    }

    function resetForSearch() {
        setSearchValue('');
    }

    return (
        <div className="card-div">
            <div className="title-container" style={titleColor}>
                <span className="Card-title">{titleName}</span>
                <div className="select-container">
                    <span className="Card-title">Select</span>
                    <div className="check-box" onClick={checkBox}>
                        {isActive && <img src={tick} className="tick" />}
                    </div>
                </div>
            </div>
            <div className="card-content-div">
                <div className="search-div">
                    <SearchBox data={searchValue} fieldValue={valuesForSearch} clearField={resetForSearch} />
                </div>
                <div className="list-of-items">
                    {lhsList.map(value => (
                        <span className="item-container">{value}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;