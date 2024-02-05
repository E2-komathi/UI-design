import '../css/CommonFontAndStyles.css';
import '../css/AddUser.css';
import fileUpload from '../assets/file-upload.png';
import polygon from '../assets/Polygon.png';
import SearchBox from '../CommonComponents/SearchBox';
import DropDown from '../CommonComponents/DropDown';
import Table from '../CommonComponents/Table';
import Pagination from '../CommonComponents/Pagination';
import AddUnitPopUp from './AddUnitPopUp';
import { useState } from 'react';

function AddUser() {
    const tableHeading = [{
        id: "Unit #",
        value: "Unit #"
    },
    {
        id: "CATIE Extension",
        value: "CATIE Extension"
    },
    {
        id: "First Name",
        value: "First Name",
        sortable: true
    },
    {
        id: "Last Name",
        value: "Last Name",
        sortable: true
    },
    {
        id: "Username",
        value: "Username"
    },
    {
        id: "MANAGE",
        value: "MANAGE"
    }
    ];

    const dropDownValues = ['Unit #', 'CATIE Extension', 'First Name', 'Last Name', 'Username'];
    const [popUptoggle, setPopUpToggle] = useState(false);

    function popUpFunction() {
        setPopUpToggle(!popUptoggle);
    }

    return (
        <div className='add-user-container'>
            <div className='navigation-text-container'>
                <span id="navigation-text">Dashboard</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Manage Units</span>
            </div>
            <div className='service-name-container'>
                <span id='service-name'>Manage Units</span>
            </div>

            <div className='common-btn-container'>
                <button className="common-btn" onClick={popUpFunction}>Add Single Unit</button>
                {/* {popUptoggle &&
                        <div className='add-unit-popUp'>
                            <AddUnitPopUp func={popUpFunction}/>
                        </div>
                    } */}
                <button className="common-btn-import">
                    Batch Import Units
                    <img alt='File_Upload_Icon' className='file-icon' src={fileUpload}></img>
                </button>
            </div>
            {/*
                <span>
                    <p className='Open_Sans_text_bold'>Unit Selection Option</p>
                </span>
                <p className='Open_Sans_text_bold' style={{ height: "3px" }}>Unit Sort</p>
                <div className='sorting-div'>
                    <DropDown data={dropDownValues} />
                    <SearchBox />
                    <p className="sorting-div-reset">Reset</p>
                    <p className='Open_Sans_text_Regular'>Showing <p className='number-entries'>8</p> Results</p>
                </div>
                <div className='pagination-div'>
                    <p className='Open_Sans_text_bold'>User Details - All</p>
                    <Pagination />
                </div>
                <div className='Table-Div'>
                    <Table data={tableHeading} />
                </div> */}
        </div>
    )
}

export default AddUser;