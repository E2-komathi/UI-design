import '../css/CommonFontAndStyles.css';
import '../css/AddUser.css';
import fileUpload from '../assets/file-upload.png';
import polygon from '../assets/Polygon.png';
import SearchBox from '../CommonComponents/SearchBox';
import DropDown from '../CommonComponents/DropDown';
import Table from '../CommonComponents/Table';
import Pagination from '../CommonComponents/Pagination';
import { useState } from 'react';

function UserGroup() {

    const [dropDownValue, setDropDownValue] = useState('Unit #');
    const [searchValue, setSearchValue] = useState('');

    const tableHeading = [
        { id: "id", value: "ID", width: { width: '3%' } },
        { id: "unit", value: "Unit #", width: { width: '7%' } },
        { id: "Role", value: "Role", width: { width: '8%' } },
        { id: "First Name", value: "First Name", sortable: true, width: { width: '11%' } },
        { id: "Last Name", value: "Last Name", sortable: true, width: { width: '15%' } },
        { id: "Username", value: "Username", width: { width: '18%' } },
        { id: "MANAGE", value: "MANAGE", width: { width: '35%', 'text-align': 'end' } }
    ];

    const dropDownValues = ['ID', 'Unit #', 'First Name', 'Last Name', 'Username'];
    const tableDataWidth = [{ width: '5%', 'color': '#438AFE' }, { width: '11%', 'color': '#438AFE' }, { width: '13%' }, { width: '18%' }, { width: '24%' }];

    const tableValue = [
        {
            id: "10",
            extension: "5001",
            role: "Admin",
            fn: "Kate",
            ln: "Adams",
            name: "kadams@mycatie.com"
        },
        {
            id: "11",
            extension: "5002",
            role: "Admin",
            fn: "Brad",
            ln: "Davidson",
            name: "bdavidson@mycatie.com"
        },
        {
            id: "12",
            extension: "5003",
            role: "Admin",
            fn: "Mary",
            ln: "Faukner",
            name: "mfaulkner@mycatie.com"
        },
        {
            id: "13",
            extension: "5004",
            role: "Admin",
            fn: "Sara",
            ln: "Morgan",
            name: "smorgan@mycatie.com"
        },
        {
            id: "14",
            extension: "5005",
            role: "Admin",
            fn: "John",
            ln: "Nelson",
            name: "jnelson@mycatie.com"
        },
        {
            id: "15",
            extension: "5005",
            role: "Admin",
            fn: "Duncan",
            ln: "Peterson",
            name: "dpeterson@mycatie.com"
        },
        {
            id: "16",
            extension: "5006",
            role: "Admin",
            fn: "Jeffrey",
            ln: "Reed",
            name: "jreed@mycatie.com"
        },
        {
            id: "17",
            extension: "5007",
            role: "Admin",
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

    return (
        <div className='add-user-group-container'>
            <div className='navigation-text-container'>
                <span id="navigation-text">Dashboard</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Users and Groups</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Users</span>
            </div>
            <div className='service-name-container'>
                <span id='service-name'>Manage Users</span>
            </div>

            <div className='common-btn-container'>
                <button className="common-btn">Add Single User</button>
                <button className="common-btn-import">
                    Batch Import Users
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
                <div className='Table-Div'>
                    <Table
                        tableHeading={tableHeading}
                        tableData={tableValue}
                        tableDataWidth={tableDataWidth} 
                        isEditable={true}
                        isDeletable={true}
                        />
                </div>
                <div className='bottom-pagination-container'>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default UserGroup;