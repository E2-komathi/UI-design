import {useState } from 'react'
import arrow from '../assets/downArrow.png'
import '../css/DropDownInputField.css'

function DropDownInputField({ initialValue, dropDownValues, headingClass, contentStyle }) {

    const [toggle, setToggle] = useState(false)
    const [fieldData, setFieldData] = useState(initialValue)
    function changeValue(e) {
        setFieldData(e);
        setToggle(!toggle);
    }

    return (
        <div>
            <div className='drop-down-inputField' onClick={() => setToggle(!toggle)}>
                <span className='field-data'>{fieldData}</span>
                <img src={arrow} alt='Down Arrow' className='drop-arrow' />
            </div>
            {toggle &&
                <div className='drop-down-inputField-values' style={contentStyle}> 

                    <div style={contentStyle}>
                        {dropDownValues.map(values =>
                            <div className='field-values' value={values} onClick={() => changeValue(values)}>{values}</div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default DropDownInputField