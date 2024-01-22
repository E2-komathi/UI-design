import edit from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';
import '../css/Table.css';
import reset from '../assets/reset.png';
import sort from '../assets/sort-default.png';

export default function Table({ data }) {
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
        }];
    return (
        <div className='table-div'>
            <table>
                <thead>
                    <tr>
                        {
                            data.map((heading) => (
                                <th>
                                    <span>{heading}</span>
                                    <img alt="reset" src={sort} className='reset'/>
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