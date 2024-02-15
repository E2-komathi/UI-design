function TableData({rowData, tableDataWidth}) {

    const single_row_data = {
        'display': 'flex',
        'width': '62%',
        'text-align': 'left'
    }

    const dataObj = Object.values(rowData);

    return (
        <div style={single_row_data}>
            {
                dataObj.map((dataValue , index) => (
                    <div style={tableDataWidth[index]}>
                        {dataValue}
                    </div>
                ))
            }
        </div >
    )
}

export default TableData;