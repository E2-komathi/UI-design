import addUser from "../assets/AddUser.svg";
import addGroup from "../assets/AddGroup.svg";
import system from "../assets/System.svg";
import '../css/DashBoard.css';

function Dashboard() {
  return (
    <div className="dashboard-content" >
      <span className="navigation-text">Dashboard</span>

      <div className="dashboard-cards">

        <div className="dashboard-card-1">
          <div className="dashboard-title-div">
            <span className="title-text">Add User</span>
          </div>
          <div className="dashboard-image-div">
            <img alt="add-user-image" src={addUser} className="user_img" />
          </div>
          <div className="dashboard-details-div">
            <span className="div-details">Quick access to Users on your CATIE Mobile Application.</span>
            <span className="div-details">You can also select Users and Groups from the navigation to the left to manage Users and Groups.</span>
          </div>
          <div className="dashboard-button-div">
            <button className="dashboard-btn">Add User</button>
          </div>
        </div>

        <div className="dashboard-card-2">
          <div className="dashboard-title-div">
            <span className="title-text">Add Group</span>
          </div>
          <div className="dashboard-image-div">
            <img alt="add-group-image" src={addGroup} className="group_img" />
          </div>
          <div className="dashboard-details-div">
            <span className="div-details">Quick access to Groups on your CATIE Mobile Application.</span>
            <span className="div-details">You can also select Users and Groups from the navigationto the left to manage Groups.</span>
          </div>
          <div className="dashboard-button-div">
            <button className="dashboard-btn">Add Group</button>
          </div>
        </div>

        <div className="dashboard-card-3">
          <div className="dashboard-title-div">
            <span className="title-text">System</span>
          </div>
          <div className="dashboard-image-div">
            <img alt="manage-system-image" src={system} className="system_img" />
          </div>
          <div className="dashboard-details-div">
            <span className="div-details">Quick access to System settings on your CATIE Mobile Application.</span>
            <span className="div-details">Configure, manage and edit settings on you CATIE mobile application.</span>
          </div>
          <div className="dashboard-button-div">
            <button className="dashboard-btn">Manage System</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
