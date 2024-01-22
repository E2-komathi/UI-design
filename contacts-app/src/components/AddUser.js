import '../css/Common.css';
import '../css/AddUser.css';
import fileUpload from '../assets/file-upload.png';
import polygon from '../assets/Polygon.png';
import SearchBox from '../CommonComponents/SearchBox';
import DropDown from '../CommonComponents/DropDown';
import Table from '../CommonComponents/Table';

function AddUser() {
    const tableHeading = ['Unit #', 'CATIE Extension', 'First Name', 'Last Name', 'Username', 'MANAGE'];

    return (
        <div className='Add-User-Div'>
            <div className='Add-User-Inner-Div'>
                <div className='top-text'>
                    <p className="text-on-the-top" style={{ width: '77px' }}>Dashboard</p>
                    <img alt='File_Upload_Icon' className="polygon" src={polygon} />
                    <p className="text-on-the-top">Manage Units</p>
                </div>
                <span>
                    <p className='Open_Sans_text_bold'>Manage Units</p>
                </span>
                <div className='buttons'>
                    <button className="common-btn">Add Single Unit</button>
                    <div className='batch-btn'>
                        <button className="common-btn">Batch Import</button>
                        <img alt='File_Upload_Icon' className='File_Upload_Icon' src={fileUpload}></img>
                    </div>
                </div>
                <span>
                    <p className='Open_Sans_text_bold'>Unit Selection Option</p>
                    <p className='Open_Sans_text_bold'>Unit Sort</p>
                </span>
                <div className='sorting-div'>
                    <DropDown />
                    <SearchBox />
                    <p className='Open_Sans_text_Regular'>Showing <p className='number-entries'>8</p> Results</p>
                </div>
                <div>
                    <p className='Open_Sans_text_bold'>User Details - All</p>
                </div>
                <div className='add-user-table'>
                    <Table data={tableHeading} />
                </div>

            </div>
        </div>
    )
}

export default AddUser;