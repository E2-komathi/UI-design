import search from '../assets/search.png';
import reset from '../assets/reset.png';
import '../css/Common.css';
import { useState } from 'react';
function SearchBox() {

    const [searchValue, setSearchValue] = useState('');

    function handleClick() {
        setSearchValue('');
      };

    return (
        <div className='search-box-contents'>
            <div className='searchBox'>
                <img alt="search" src={search} className='search' />
                <input className='input-search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search'/>
                <img alt="reset" src={reset} className='reset' onClick={handleClick}/>
            </div>
        </div>
    )
}

export default SearchBox;