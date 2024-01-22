import { useState } from "react";
import '../css/DropDown.css';
import dropDown from '../assets/dropDown.png';

export default function DropDown() {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Unit #");
    const items = [
        {
            id: '1',
            name: 'Extension'
        },
        {
            id: '2',
            name: 'Extension'
        },
        {
            id: '3',
            name: "Extension"
        },
        {
            id: '4',
            name: "Extension"
        }
    ];

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
                        items.map((item) => (
                            <div onClick={selectValue} className="item" key={item.id} >
                                {item.name}
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}