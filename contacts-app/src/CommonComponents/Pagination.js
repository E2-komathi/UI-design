import { useState } from 'react';
import '../css/Common.css';
import arrowIcon from '../assets/arrow.png';

const Pagination = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const maxPageNumber = 10;

    const increment = () => {
        setPageNumber(pageNumber + 1);
    }

    const decrement = () => {
        setPageNumber(pageNumber - 1);
    }

    return (
        <div className="pagination-total-div">
            <div className="entry-div">
                Show
                <select className="records">
                    <option className="numbers" value={10}>10</option>
                    <option className="numbers" value={25}>25</option>
                    <option className="numbers" value={50}>50</option>
                    <option className="numbers" value={100}>100</option>
                </select>
                Entries
            </div>
            <div className="page-div">
                Page
                <div className='inside-page-div'>
                    <img alt='left-icon' className="left-icon" src={arrowIcon} onClick={pageNumber != 1 ?() => {decrement()} : null}></img>
                    {pageNumber}
                    <img alt='right-icon' className="right-icon" src={arrowIcon} onClick={pageNumber < maxPageNumber ? increment : null}></img>
                </div>
                Of 10
            </div>
        </div>
    )
}

export default Pagination;