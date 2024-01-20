import Dashboard from './components/Dashboard';
import './css/DashBoard.css';
import './css/Common.css';
import AddUser from './components/AddUser';

function Main() {

    return (
        <div className='body'>
            <div className="header">HEADER</div>
            <div className="Nav">NAV BAR</div>
            <div className="Footer">FOOTER</div>
            <div className="content">
                {/* <Dashboard /> */}
                <AddUser />
            </div>
        </div>
    );
}

export default Main;