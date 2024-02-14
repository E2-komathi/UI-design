import edit from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';
import '../css/Table.css';
import sortIconDefault from '../assets/sort-default.png';
import sortIcon from '../assets/sort-up.png';
import { useState } from 'react';
import AddUnitPopUp from '../components/AddUnitPopUp';
import TableData from './TableData';

export default function Table({data , tableValue , styleValue}) {
    const [sort, setSort] = useState(false); // default sorting ascending
    const [isEditTrue, setIsEditTrue] = useState(false);
    const [editDatas, setEditDatas] = useState({
        id: "",
        extension: "",
        fn: "",
        ln: "",
        name: ""
    })

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
                            data.map((heading) => (
                                <div className='table-head-div' style={heading.width}>
                                    <span key={heading.id}>{heading.value}</span>
                                    {heading.sortable ?
                                        <img alt="Sort Icon" src={sort ? sortIcon : sortIconDefault} className='sort-icon' id={heading.id} onClick={(e) => changeSortVal(e)} /> : ''}
                                </div>
                            ))
                        }
                </div>
                <div className='table-entries-set'>{
                    tableValue.map((data) => (
                        <div className='table-data-container'>                            
                            <TableData key={data.id} content={data} stylesDiv={styleValue}/>
                            <div className='edit-delete-div'>
                                <img src={edit} className='edit-Icon' onClick={() => { popUpFunction(); valuesOfData(data); }} />
                                <img src={deleteIcon} className='delete-Icon'></img>
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