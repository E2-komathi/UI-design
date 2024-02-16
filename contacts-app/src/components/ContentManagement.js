import Pagination from '../CommonComponents/Pagination';
import SearchBox from '../CommonComponents/SearchBox';
import Table from '../CommonComponents/Table';
import polygon from '../assets/Polygon.png';
import '../css/CommonFontAndStyles.css';
import '../css/ContentManagement.css';
import globe from '../assets/globe-solid.png';
import mobile from '../assets/mobile-regular.png';
import tablet from '../assets/tablet-regular.png';
import tv from '../assets/tv-solid.png';

function ContentManagement() {

    const tableHeading = [
        { id: 'slideId', value: 'Slide Id', width: { width: '10%' } },
        { id: 'slideName', value: 'Slide Name', width: { width: '30%' } },
        { id: 'solution', value: 'Solution/s', width: { width: '30%' } },
        { id: 'manage', value: 'MANAGE', width: { width: '27%', 'text-align': 'end' } }
    ];

    const tableDataWidth = [{ width: '16%', 'color': '#438AFE' }, { width: '48.5%' }, { width: '24px', 'height': '32px' }, { width: '18px', 'height': '30px' }, { width: '22px', 'height': '30px' }, { width: '20px', 'height': '30px' }];

    const tableData = [
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        },
        // {
        //     id: "1021",
        //     slideName: "Happy90thPeggshaw",
        //     solutions: 'solu1 2 3 4'
        // },
        // {
        //     id: "1021",
        //     slideName: "Happy90thPeggshaw",
        //     solutions: 'solu1 2 3 4'
        // },
        // {
        //     id: "1021",
        //     slideName: "Happy90thPeggshaw",
        //     solutions: 'solu1 2 3 4'
        // },
        // {
        //     id: "1021",
        //     slideName: "Happy90thPeggshaw",
        //     solutions: 'solu1 2 3 4'
        // },
        // {
        //     id: "1021",
        //     slideName: "Happy90thPeggshaw",
        //     solutions: 'solu1 2 3 4'
        // }
    ]

    return (
        <div className='content-management-container'>
            <div className='navigation-text-container'>
                <span id="navigation-text">Dashboard</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">System</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Content Management</span>
            </div>
            <div className='service-name-container'>
                <span id='service-name'>Content Management</span>
            </div>
            <div className='common-btn-container'>
                <button className="common-btn" >Add Slide</button>
                <button className="common-btn" >Slideshow Editor</button>
            </div>
            <div className='text-container'>
                <span id='unit-text'>Slides</span>
            </div>
            <div className='search-pagination-container'>
                <SearchBox />
                <Pagination />
            </div>
            <div className='table-for-content-management'>
                <Table
                    tableHeading={tableHeading}
                    tableData={tableData}
                    tableDataWidth={tableDataWidth}
                    isEditable={true}
                    isDeletable={true}
                />
            </div>
        </div>
    )
}

export default ContentManagement