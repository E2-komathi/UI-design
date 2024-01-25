import Dashboard from './components/Dashboard';
import './css/DashBoard.css';
import './css/Common.css';
import AddUser from './components/AddUser';
import UserGroup from './components/UserGroup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddUnitPopUp from './components/AddUnitPopUp';

function Main() {

    return (
        <div className='body'>
            <div className="header">HEADER</div>
            <div className="Nav"> <NavBar /></div>
            <div className="Footer">FOOTER</div>
            <div className="content">
                    <Routes>
                        <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/adduser" element={<AddUser />} />
                        <Route exact path="/userGroup" element={<UserGroup />} />
                        <Route exact path="/addPopUp" element={<AddUnitPopUp />} />
                    </Routes>
            </div>
        </div>
    );
}

export default Main;