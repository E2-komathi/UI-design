import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import Table from './CommonComponents/Table';
import SearchBox from './CommonComponents/SearchBox';
import AddUser from './components/AddUser';
import Pagination from './CommonComponents/Pagination';
import DropDown from './CommonComponents/DropDown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    {/* <SearchBox /> */}
  {  /* <DropDown /> */}
     {/* <Table /> */}
    {/* <AddUser />   */}
    {/* <Pagination /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
