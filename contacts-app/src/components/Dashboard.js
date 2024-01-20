import addUser from "../assets/AddUser.svg";
import addGroup from "../assets/AddGroup.svg";
import system from "../assets/System.svg";
import '../css/DashBoard.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <p className="text-on-the-top">Dashboard</p>
      <div className="total-div">
        <div className="dashboard-div">
          <h3 className="title-Text">Add User</h3>
          <img alt="Add_User_Image" src={addUser} className="user_img" />
          <p className="line-inside-div">Quick access to Users on your CATIE Mobile Application.</p>
          <p className="line-inside-div">You ca also select Users and Groups from the navigation to the left to manage Users and Groups.</p>
          <button className="add-button">Add User</button>
        </div>

        <div className="dashboard-div">
          <h3 className="title-Text">Add Group</h3>
          <img alt="Add_Group_Image" src={addGroup} className="group_img" />
          <p className="line-inside-div">Quick access to Groups on your CATIE Mobile Application.</p>
          <p className="line-inside-div">You ca also select Users and Groups from the navigation to the left to manage Groups.</p>
          <button className="add-button">Add Group</button>
        </div>

        <div className="dashboard-div">
          <h3 className="title-Text">System</h3>
          <img alt="Manage_System" src={system} className="system_img" />
          <p className="line-inside-div">Quick access to System settings on your CATIE Mobile Application.</p>
          <p className="line-inside-div">Configure, manage and edit settings on you CATIE mobile application.</p>
          <button className="add-button">Manage System</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
