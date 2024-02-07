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
                <button className="common-btn-import">
                    Batch Import Units
                    <img alt='File_Upload_Icon' className='file-icon' src={fileUpload}></img>
                </button>
            </div>
            <div className='text-container'>
                <span id='unit-text'>Unit Selection Option</span>
                <span id='service-name'>Unit Sort</span>
            </div>

            <div className='sorting-div'>
                <div className='dropDown-container'>
                    <DropDown data={dropDownValues} />
                </div>
                <div className='search-container'>
                    <SearchBox />
                </div>
                <span className="sorting-div-reset">Reset</span>
                <span className='Open_Sans_text_Regular'>Showing <span className='number-entries'>8</span> Results</span>
            </div>
            <div className='table-container'>
                <div className='pagination-container'>
                    <span id='service-name'>User Details - All</span>
                    <Pagination />
                </div>
                <div className='Table-Div'>
                    <Table data={tableHeading} />
                </div>
                <div className='bottom-pagination-container'>
                    <Pagination />
                </div>
            </div>

            {popUptoggle &&
                <div className='add-unit-popUp'>
                    <AddUnitPopUp func={popUpFunction} />
                </div>
            }
        </div>
    )
}

export default AddUser;