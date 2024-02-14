import search from '../assets/search.png';
import reset from '../assets/reset.png';
import '../css/CommonFontAndStyles.css';

function SearchBox(props) {
    
    return (
        <div className='search-box-contents'>
            <div className='searchBox'>
                <img alt="search" src={search} className='search' />
                <input className='input-search' value={props.data} onChange={(e) => props.fieldValue(e.target.value)} placeholder='Search'/>
                <img alt="reset" src={reset} className='reset' onClick={props.clearField}/>
            </div>
        </div>
    )
}

export default SearchBox;