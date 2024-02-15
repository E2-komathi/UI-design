import edit from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';
import '../css/Table.css';
import sortIconDefault from '../assets/sort-default.png';
import sortIcon from '../assets/sort-up.png';
import { useState } from 'react';
import AddUnitPopUp from '../components/AddUnitPopUp';
import TableData from './TableData';

export default function Table({ tableHeading, tableData, tableDataWidth, isEditable, isDeletable }) {
    const [sort, setSort] = useState(false); // default sorting ascending
    const [isEditTrue, setIsEditTrue] = useState(false);
    const [editDatas, setEditDatas] = useState({})

    function changeSortVal(e) {
        setSort(!sort);
    }

    function popUpFunction() {
        setIsEditTrue(!isEditTrue);
    }

    function valuesOfData(dataValue) {
        setEditDatas(dataValue);
    }

    return (
        <div>
            <div className='total-table-div'>
                <div className='table-head-container'>
                    {
                        tableHeading.map((heading) => {
                            return (
                                <div className='table-head-div' style={heading.width}>
                                    <span key={heading.id}>{heading.value}</span>
                                    {heading.sortable ?
                                        <img alt="Sort Icon" src={sort ? sortIcon : sortIconDefault} className='sort-icon' id={heading.id} onClick={(e) => changeSortVal(e)} /> : ''}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='table-entries-set'>{
                    tableData.map((dataObj) => (
                        <div className='table-data-container'>
                            <TableData key={dataObj.id} rowData={dataObj} tableDataWidth={tableDataWidth} />
                            <div className='edit-delete-div'>
                                {isEditable && <img src={edit} className='edit-Icon' onClick={() => { popUpFunction(); valuesOfData(dataObj); }} />}
                                {isDeletable && <img src={deleteIcon} className='delete-Icon' />}                                
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            {isEditTrue &&
                <div className='common-popUp-container'>
                    <AddUnitPopUp func={popUpFunction} datas={editDatas} />
                </div>
            }
        </div>
    )
}