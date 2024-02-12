import '../css/CommonFontAndStyles.css';
import '../css/AddUser.css';
import fileUpload from '../assets/file-upload.png';
import polygon from '../assets/Polygon.png';
import SearchBox from '../CommonComponents/SearchBox';
import DropDown from '../CommonComponents/DropDown';
import Table from '../CommonComponents/Table';
import Pagination from '../CommonComponents/Pagination';

function UserGroup() {
    const tableHeading = [{
        id: "id",
        value: "ID"
    },
    {
        id: "unit",
        value: "Unit #"
    }, {
        id: "Role",
        value: "Role"
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

    const dropDownValues = ['ID', 'Unit #', 'First Name', 'Last Name', 'Username'];

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
        </div>
    )
}
export default UserGroup;