import { useEffect, useState } from "react";

function TableData({ content, stylesDiv }) {
    const single_row_data = {
        'display': 'flex',
        'width': '62%',
        'text-align': 'left'
    }

    const valueToArray = stylesDiv[0];

    const datesva = Object.values(content);
    const cjdjf = Object.values(valueToArray);
    console.log(cjdjf)
    return (
        <div style={single_row_data}>
            {
                // datesva.map(dataValue => (
                //     <div>
                //         {dataValue}
                //     </div>

                // ))

                cjdjf.map(vjhdjfhdjf => (
                    <div style={{width : vjhdjfhdjf}}>
                    {vjhdjfhdjf}
                    </div>
                ))
            }
        </div>
    )
}

export default TableData;