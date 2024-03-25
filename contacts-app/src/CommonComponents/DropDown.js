import { useEffect, useRef, useState } from "react";
import '../css/DropDown.css';
import dropDown from '../assets/dropDown.png';

export default function DropDown(props) {
    const [isActive, setIsActive] = useState(false);
    const dropDownData = useRef();
    const initialDiv = useRef();

    function selectValue(e) {
        props.fieldValue(e.target.textContent);
        setIsActive(!isActive);
    }

    function checkIfClickedOutside(e) {
        if (e.target !== dropDownData.current && e.target !== initialDiv.current) {      
            setIsActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", checkIfClickedOutside)
        return () => {
            window.removeEventListener("click", checkIfClickedOutside)
        }
    },[isActive]);   

    return (
        <div className="drop-down-div">
            <div onClick={() => {
                setIsActive(!isActive);
            }} className="dropdown-btn" ref={initialDiv}>
                {props.initialValue}

                <span className="drop-down-icon-container">
                    {isActive ?
                        <img src={dropDown} className="drop-down-icon-inverse" alt="drop-down-arrow"/> : <img src={dropDown} className="drop-down-icon"  alt="drop-down-arrow"/>}
                </span>
            </div>
            <div className="dropdown-content" 
                style={{ display: isActive ? "block" : "none" }}  ref={dropDownData}>
                {
                    props.data.map((item) => (
                        <div onClick={selectValue} className="item">
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}