import edit from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';
import '../css/Table.css';
import sortIconDefault from '../assets/sort-default.png';
import sortIcon from '../assets/sort-up.png';
import { useState } from 'react';

export default function Table({ data }) {
    const [sort, setSort] = useState(false); // default sorting ascending
    const tableValue =
        [{
            id: "01",
            extension: "91829",
            fn: "djfhdjfh",
            ln: "jfhjsh",
            name: "jhdfjshjdh"
        }, {

            id: "01",
            extension: "91829",
            fn: "djfhdjfh",
            ln: "jfhjsh",
            name: "jhdfjshjdh"
        },
        {
            id: "01",
            extension: "91829",
            fn: "djfhdjfh",
            ln: "jfhjsh",
            name: "jhdfjshjdh"
        }, {
            id: "01",
            extension: "91829",
            fn: "djfhdjfh",
            ln: "jfhjsh",
            name: "jhdfjshjdh"
        }, {

            id: "01",
            extension: "91829",
            fn: "djfhdjfh",
            ln: "jfhjsh",
            name: "jhdfjshjdh"
        },];

    function changeSortVal(e, id) {
        console.log(e.target.id);
        setSort(!sort);
    }

    return (
        <div className='table-div'>
            <table>
                <thead>
                    <tr>
                        {
                            data.map((heading) => (
                                <th>
                                    <span key={heading.id}>{heading.value}</span>
                                    {heading.sortable ?
                                        <img alt="Sort Icon" src={sort ? sortIcon : sortIconDefault} className='sort-icon' id={heading.id} onClick={(e) => changeSortVal(e)} /> : ''}
                                </th>
                            ))
                        }

                    </tr>
                </thead>
                <tbody>{
                    tableValue.map((data) => (
                        <tr>
                            <td key={data.id}>{data.id}</td>
                            <td>{data.extension}</td>
                            <td>{data.fn}</td>
                            <td>{data.ln}</td>
                            <td>{data.name}</td>
                            {data.image ? <td>{data.image}</td> : ''}
                            <div className='edit-delete-div'>
                                <img src={edit} className='edit-Icon' />
                                <img src={deleteIcon} className='delete-Icon'></img>
                            </div>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}