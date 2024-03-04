import "../css/UserProfile.css";
import polygon from '../assets/Polygon.png';
import userPic from '../assets/userSamplePic.png';
import landline from '../assets/landline.png';
import mobile from '../assets/mobile.png';
import email from '../assets/email.png';
import DropDownInputField from "../CommonComponents/DropDownInputField";
import Table from "../CommonComponents/Table";
import Card from "../CommonComponents/Card";
import arrow from "../assets/arrow-card.png";

function UserProfile() {

    const dropDownValuesSalutation = ['Mr', 'Miss', 'Mrs'];
    const dropDownStateValue = ['OH', 'OK', 'MI', 'NU'];
    const genderDropDown = ['Female', 'Male'];
    const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const tableHeading = [
        { id: "unit", value: "Unit #", width: { width: '12%' } },
        { id: "catieExtension", value: "CATIE Extension", width: { width: '20%' } },
        { id: "Username", value: "Username", width: { width: '29%' } },
        { id: "MANAGE", value: "MANAGE", width: { width: '35%', 'text-align': 'end' } }
    ];

    const tableValue = [
        {
            id: "10",
            extension: "5004",
            name: "smorgan@mycatie.com"
        },
        {
            id: "10",
            extension: "5004",
            name: "smorgan@mycatie.com"
        },
    ]

    const tableWidth = [{ width: '20%', 'color': '#438AFE' }, { width: '33%', 'color': '#438AFE' }, { width: '40%' }];

    const availableGroups = ['Resident', 'Administrator', 'Admin', 'Group1', 'First Floor'];
    const assignedGroups = [];

    const days = createArrayOfDays();

    const year = createArrayOfYear(new Date().getFullYear());

    function createArrayOfYear(Year) {
        let year = [];
        for (let i = 1920; i <= Year; i++) {
            year.push(i);
        }
        return year;
    }

    function createArrayOfDays() {
        let days = []
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days
    }

    const contentStyle = {
        'height': '150px'
    }
    return (
        <div className="user-profile-container">
            <div className='navigation-text-container'>
                <span id="navigation-text">Dashboard</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Users and Groups</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Users</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Profile</span>
            </div>
            <div className="user-details-container">
                <div className="profile-image-container">
                    <span className="user-name-value">Caroline Adamson</span>
                    <img src={userPic} className="profile-pic" />
                    <span className="change-photo">Change Photo</span>
                </div>

                <div className="specific-details-container">
                    <div className="contact-details">
                        <span className="user-name-value">Contact Details</span>
                    </div>
                    <div className="user-details">
                        <div className="details-div-one">
                            <div>
                                <span className="details-value">Phone Main</span>
                                <img src={landline} className="landline-img" alt="Landline" />
                                <input className="user-details-input" />
                            </div>
                            <div>
                                <span className="details-value">Mobile Main</span>
                                <img src={mobile} className="mobile-img" alt="Mobile" />
                                <input className="user-details-input" />
                            </div>
                            <div>
                                <span className="details-value">Email Main</span>
                                <img src={email} className="email-img" alt="Email" />
                                <input className="user-details-input-email" />
                            </div>
                        </div>
                        <div className="details-div-two">
                            <div>
                                <span className="details-value">Mobile Alt</span>
                                <img src={mobile} className="mobile-img" alt="Mobile Alternative" />
                                <input className="user-details-input" />
                            </div>
                            <div>
                                <span className="details-value">Email Alt</span>
                                <img src={email} className="email-img" alt="Email Alternative" />
                                <input className="user-details-input-email" />
                            </div>
                        </div>
                        <div className="details-div-three">
                            <div className="username-password">
                                <span className="details-value">Username</span>
                                <input className="username" />
                            </div>
                            <div className="username-password">
                                <span className="details-value">Password</span>
                                <input className="username" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content-container">
                <div className="container-one">
                    <div className="additional-details">
                        <span className="user-name-value">Addresss</span>
                    </div>
                    <div className="other-details-div1">
                        <div className="title-div">
                            <span className="details-value">Title</span>
                            <DropDownInputField
                                initialValue={'Mr'}
                                dropDownValues={dropDownValuesSalutation}
                            />
                        </div>
                        <div className="fname-div">
                            <span className="details-value">First Name</span>
                            <input className="username" />
                        </div>
                        <div className="mid-div">
                            <span className="details-value">Middle Initial</span>
                            <input className="username" />
                        </div>
                        <div className="lname-div">
                            <span className="details-value">Last Name</span>
                            <input className="username" />
                        </div>
                    </div>
                    <div className="other-details-div2">
                        <div className="street-div">
                            <span className="details-value">Street</span>
                            <input className="username" />
                        </div>
                        <div className="apt-room-div">
                            <span className="details-value">Apt/Room/Office #</span>
                            <input className="username" />
                        </div>
                    </div>
                    <div className="other-details-div3">
                        <div className="city-div">
                            <span className="details-value">City</span>
                            <input className="username" />
                        </div>
                        <div className="state-div">
                            <span className="details-value">State</span>
                            <DropDownInputField
                                initialValue={'OH'}
                                dropDownValues={dropDownStateValue}
                            />
                        </div>
                        <div className="zip-div">
                            <span className="details-value">Zip</span>
                            <input className="username" />
                        </div>

                    </div>

                    <div className="additional-details">
                        <span className="user-name-value">Additional Details</span>
                    </div>

                    <div className="other-details-div4">
                        <div className="gender-div">
                            <span className="details-value">Gender</span>
                            <DropDownInputField
                                initialValue={'Female'}
                                dropDownValues={genderDropDown}
                            />
                        </div>
                        <div className="date-div">
                            <span className="details-value">Birthday</span>
                            <DropDownInputField
                                initialValue={'Day'}
                                dropDownValues={days}
                                contentStyle={contentStyle}
                            />
                        </div>
                        <div className="month-div">
                            <DropDownInputField
                                initialValue={'Month'}
                                dropDownValues={month}
                                contentStyle={contentStyle}
                            />
                        </div>
                        <div className="year-div">
                            <DropDownInputField
                                initialValue={'Year'}
                                dropDownValues={year}
                                contentStyle={contentStyle}
                            />
                        </div>
                    </div>

                    <div className="other-details-div5">
                        <div className="bio-name">
                            <span className="details-value">Bio Name <span className="mandatory-icon">*</span></span>
                            <input className="username" />
                        </div>
                        <span className="bio-details-para">Upload or replace existing Bio</span>
                        <div className="input-type-file">
                            <input type="file" />
                        </div>
                        <span className="bio-details-para">(Supported Formats : PDF ,RTF,DOCX)</span>
                    </div>
                </div>
                <div className="container-two">
                    <div className="additional-details">
                        <span className="user-name-value">Units</span>
                    </div>
                    <div className="table-container-div">
                        <Table
                            tableHeading={tableHeading}
                            tableData={tableValue}
                            tableDataWidth={tableWidth}
                            isEditable={true}
                            isDeletable={true}
                        />
                    </div>
                    <div className="groups-container">
                        <span className="user-name-value">Groups</span>
                    </div>
                    <div className="select-group-container">
                        <div className="select-group">
                            <Card titleName={'Available Groups'}
                                titleColor={{ 'background-color': '#448CCB' }}
                                lhsList={availableGroups}
                            />
                        </div>
                        <div className="card-arrow">
                            <img src={arrow} className="arrow" />
                            <img src={arrow} className="arrow-reverse" />
                        </div>
                        <div className="select-group">
                            <Card titleName={'Assigned Groups'}
                                titleColor={{ 'background-color': '#000000' }}
                                lhsList={assignedGroups}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className='user-profile-buttons'>
                <div className='save-cancel-container'>
                    <button className='cancel-btn' >Cancel</button>
                    <button className="pop-up-common-btn">Save</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;