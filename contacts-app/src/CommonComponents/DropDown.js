import { useState } from "react";
import '../css/DropDown.css';
import dropDown from '../assets/dropDown.png';

export default function DropDown({data}) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Unit #");

    function selectValue(e) {
        setIsSelected(e.target.textContent);
        setIsActive(!isActive);
    }

    return (
        <div className="drop-down-div">
                <div onClick={() => {
                    setIsActive(!isActive);
                }} className="dropdown-btn">
                    {selected}

                    <span>
                        {isActive ?
                            <img src={dropDown} className="drop-down-icon-inverse" /> : <img src={dropDown} className="drop-down-icon" />}
                    </span>
                </div>
                <div className="dropdown-content"
                    style={{ display: isActive ? "block" : "none" }}>
                    {
                        data.map((item) => (
                            <div onClick={selectValue} className="item">
                                {item}
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}