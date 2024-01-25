import { useEffect, useRef, useState } from "react";
import '../css/DropDown.css';
import dropDown from '../assets/dropDown.png';

export default function DropDown({data}) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Unit #");
    const ref = useRef()

    function selectValue(e) {
        setIsSelected(e.target.textContent);
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
                    {selected}

                    <span>
                        {isActive ?
                            <img src={dropDown} className="drop-down-icon-inverse" /> : <img src={dropDown} className="drop-down-icon" />}
                    </span>
                </div>
                <div className="dropdown-content" ref={ref} 
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