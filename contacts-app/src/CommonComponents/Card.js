import "../css/Card.css";
import SearchBox from "../CommonComponents/SearchBox";
import { useState } from "react";
import tick from '../assets/tick.png';
import arrow from "../assets/arrow-card.png";

function Card({ titleName1, titleColor1, lhsList, rhsList , titleName2 , titleColor2 }) {

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
            <div className="lhs-card">
                <div className="title-container" style={titleColor1}>
                    <span className="Card-title">{titleName1}</span>
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
            <div className="card-arrow">
                <img src={arrow} className="arrow" />
                <img src={arrow} className="arrow-reverse" />
            </div>
            <div className="rhs-card">
                <div className="title-container" style={titleColor2}>
                    <span className="Card-title">{titleName2}</span>
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
        </div>
    )
}

export default Card;