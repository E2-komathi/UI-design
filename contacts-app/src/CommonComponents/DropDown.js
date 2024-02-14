import { useEffect, useRef, useState } from "react";
import '../css/DropDown.css';
import dropDown from '../assets/dropDown.png';

export default function DropDown(props) {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef()

    function selectValue(e) {
        props.fieldValue(e.target.textContent);
        setIsActive(!isActive);
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          if (isActive && ref.current && !ref.current.contains(e.target)) {
            setIsActive(!isActive)
          }
        }    
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isActive])
    

    return (
        <div className="drop-down-div">
                <div onClick={() => {
                    setIsActive(!isActive);
                }} className="dropdown-btn">
                    {props.initialValue}

                    <span className="drop-down-icon-container">
                        {isActive ?
                            <img src={dropDown} className="drop-down-icon-inverse" /> : <img src={dropDown} className="drop-down-icon" />}
                    </span>
                </div>
                <div className="dropdown-content" ref={ref} 
                    style={{ display: isActive ? "block" : "none" }}>
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