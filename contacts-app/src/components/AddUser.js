import '../css/CommonFontAndStyles.css';
import '../css/AddUser.css';
import fileUpload from '../assets/file-upload.png';
import polygon from '../assets/Polygon.png';
import SearchBox from '../CommonComponents/SearchBox';
import DropDown from '../CommonComponents/DropDown';
import Table from '../CommonComponents/Table';
import Pagination from '../CommonComponents/Pagination';
import AddUnitPopUp from './AddUnitPopUp';
import { useEffect, useState } from 'react';

function AddUser() {

    const dropDownValues = ['Unit #', 'CATIE Extension', 'First Name', 'Last Name', 'Username'];
    const [popUptoggle, setPopUpToggle] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [dropDownValue, setDropDownValue] = useState('Unit #');

    const tableHeading = [
        { id: "Unit #", value: "Unit #", width: { width: '6%' } },
        { id: "CATIE Extension", value: "CATIE Extension", width: { width: '14%' } },
        { id: "First Name", value: "First Name", sortable: true, width: { width: '14%' } },
        { id: "Last Name", value: "Last Name", sortable: true, width: { width: '14%' } },
        { id: "Username", value: "Username", width: { width: '14%' } },
        { id: "MANAGE", value: "MANAGE", width: { width: '35%', 'text-align': 'end' } }
    ];

    const tableDataWidth = [{ width: '10%', 'color': '#438AFE' }, { width: '23%', 'color': '#438AFE' }, { width: '23%' }, { width: '23%' }, { width: '23%' }];

    const tableValue = [
        {
            id: "10",
            extension: "5001",
            fn: "Kate",
            ln: "Adams",
            name: "kadams@mycatie.com"
        },
        {
            id: "11",
            extension: "5002",
            fn: "Brad",
            ln: "Davidson",
            name: "bdavidson@mycatie.com"
        },
        {
            id: "12",
            extension: "5003",
            fn: "Mary",
            ln: "Faukner",
            name: "mfaulkner@mycatie.com"
        },
        {
            id: "13",
            extension: "5004",
            fn: "Sara",
            ln: "Morgan",
            name: "smorgan@mycatie.com"
        },
        {
            id: "14",
            extension: "5005",
            fn: "John",
            ln: "Nelson",
            name: "jnelson@mycatie.com"
        },
        {
            id: "15",
            extension: "5005",
            fn: "Duncan",
            ln: "Peterson",
            name: "dpeterson@mycatie.com"
        },
        {
            id: "16",
            extension: "5006",
            fn: "Jeffrey",
            ln: "Reed",
            name: "jreed@mycatie.com"
        },
        {
            id: "17",
            extension: "5007",
            fn: "Olivia",
            ln: "Stuart",
            name: "ostuart@mycatie.com"
        }
    ];

    function valuesForSearch(searchData) {
        setSearchValue(searchData);
    }

    function valuesForDropDown(Data) {
        setDropDownValue(Data);
    }

    function resetForSearch() {
        setSearchValue('');
    }

    const reset = () => {
        setSearchValue('');
        setDropDownValue('Unit #');
    }

    function popUpFunction() {
        setPopUpToggle(!popUptoggle);
    }

    return (
        <div className='add-user-group-container'>
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
                    <DropDown data={dropDownValues} fieldValue={valuesForDropDown} initialValue={dropDownValue} />
                </div>
                <div className='search-container'>
                    <SearchBox data={searchValue} fieldValue={valuesForSearch} clearField={resetForSearch} />
                </div>
                <span className="sorting-div-reset" onClick={reset}>Reset</span>
                <span className='Open_Sans_text_Regular'>Showing <span className='number-entries'>8</span> Results</span>
            </div>
            <div className='table-container'>
                <div className='pagination-container'>
                    <span id='service-name'>User Details - All</span>
                    <Pagination />
                </div>
                <Table
                    tableHeading={tableHeading}
                    tableData={tableValue}
                    tableDataWidth={tableDataWidth}
                    isEditable={true}
                    isDeletable={true}
                />
                <div className='bottom-pagination-container'>
                    <Pagination />
                </div>
            </div>

            {popUptoggle &&
                <div className='common-popUp-container'>
                    <AddUnitPopUp func={popUpFunction} datas='null' />
                </div>
            }
        </div>
    )
}

export default AddUser;