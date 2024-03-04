import { useEffect, useRef, useState } from "react";
import '../css/DropDown.css';
import dropDown from '../assets/dropDown.png';

export default function DropDown(props) {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef()

    function selectValue(e) {
        props.fieldValue(e.target.textContent);
        console.log(e.target.textContent)
        setIsActive(!isActive);
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (!ref.current.contains(e.target)) {      
                setIsActive(false)
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    },[isActive]); 


    return (
        <div className="drop-down-div">
            <div onClick={() => {
                setIsActive(!isActive);
            }} className="dropdown-btn">
                {props.initialValue}

                <span className="drop-down-icon-container">
                    {isActive ?
                        <img src={dropDown} className="drop-down-icon-inverse" alt="drop-down-arrow"/> : <img src={dropDown} className="drop-down-icon"  alt="drop-down-arrow"/>}
                </span>
            </div>
            <div className="dropdown-content" 
                style={{ display: isActive ? "block" : "none" }}  ref={ref}>
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