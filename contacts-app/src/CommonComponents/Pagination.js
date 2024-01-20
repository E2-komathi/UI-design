const Pagination = () => {

    return (
        <div className="pagination-total-div">
            <div className="entry-div">
                <p>Show</p>
                <select>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <p>Entries</p>
            </div>
            <div className="page-div">
                <p>Page</p>
                <select>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <p>Of 10</p>
            </div>
        </div>
    )
}

export default Pagination;