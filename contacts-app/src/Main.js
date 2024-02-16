import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import UserGroup from './components/UserGroup';
import {Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './css/Main.css';
import ContentManagement from './components/ContentManagement';

function Main() {

    return (
        <div id='root'>
            <div className='header-section'></div>
            <div className='content-section'>
                <div className='side-nav'>
                    <NavBar />
                </div>
                <div className='main-content'>
                    <Routes>
                        <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/adduser" element={<AddUser />} />
                        <Route exact path="/userGroup" element={<UserGroup />} />
                        <Route exact path="/contentManagement" element={<ContentManagement />} />
                    </Routes>
                </div>
            </div>
            <div className='footer-section'></div>
        </div>
    );
}

export default Main;