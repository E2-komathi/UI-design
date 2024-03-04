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
import { useState } from 'react';

function ContentManagement() {

    const [view, setView] = useState('addSlide');

    const tableHeadingAddSlide = [
        { id: 'slideId', value: 'Slide Id', width: { width: '10%' } },
        { id: 'slideName', value: 'Slide Name', width: { width: '30%' } },
        { id: 'solution', value: 'Solution/s', width: { width: '30%' } },
        { id: 'manage', value: 'MANAGE', width: { width: '27%', 'text-align': 'end' } }
    ];

    const tableHeadingSlideShow = [
        { id: 'slideId', value: 'Slide Id', width: { width: '10%' } },
        { id: 'slideShowName', value: 'Slideshow Name', width: { width: '27%' } },
        { id: 'noOfSlide', value: 'Number of Slides', width: { width: '16%' } },
        { id: 'solution', value: 'Solution/s', width: { width: '29%' } },
        { id: 'manage', value: 'MANAGE', width: { width: '15%', 'text-align': 'end' } }
    ];

    const tableDataWidthAddSlide = [
        { width: '16%', 'color': '#438AFE' },
        { width: '48.5%' },
        { width: 'max-content', 'height': '32px', 'margin-right': '4px' },
        { width: 'max-content', 'height': '30px', 'margin-right': '4px' },
        { width: 'max-content', 'height': '30px', 'margin-right': '4px' },
        { width: 'max-content', 'height': '30px', 'margin-right': '4px' }];

    const tableDataWidthSlideShow = [
        { width: '16%', 'color': '#438AFE' },
        { width: '49.5%' },
        { width: '20%' },
        { width: 'max-content', 'height': '32px', 'margin-right': '4px' },
        { width: 'max-content', 'height': '30px', 'margin-right': '4px' },
        { width: 'max-content', 'height': '30px', 'margin-right': '4px' },
        { width: 'max-content', 'height': '30px', 'margin-right': '4px' }];

    const tableDataAddSlide = [
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        },
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        },
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        }
    ]

    const tableDataSlideShow = [
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            noOfSlide: 5,
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        },
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            noOfSlide: 5,
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        },
        {
            id: "1021",
            slideName: 'Happy90thPeggshaw',
            noOfSlide: 5,
            solution1: <img src={globe} alt='globe' className='globe-icon' />,
            solution2: <img src={mobile} alt='mobile' className='mobile-icon' />,
            solution3: <img src={tablet} alt='tablet' className='tablet-icon' />,
            solution4: <img src={tv} alt='tv' className='tv-icon' />
        }
    ]

    function changeView(viewName) {
        setView(viewName);
    }

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
                <button className="common-btn" onClick={() => changeView('addSlide')}>Add Slide</button>
                <button className="common-btn" onClick={() => changeView('slideEditor')}>Slideshow Editor</button>
            </div>
            <div className='text-container'>
                <span id='unit-text'>Slides</span>
            </div>
            <div className='search-pagination-container'>
                <SearchBox />
                <Pagination />
            </div>
            {
                (view === 'addSlide') &&
                <div className='table-for-content-management'>
                    <Table
                        tableHeading={tableHeadingAddSlide}
                        tableData={tableDataAddSlide}
                        tableDataWidth={tableDataWidthAddSlide}
                        isEditable={true}
                        isDeletable={true}
                    />
                </div>
            }
            {
                (view === 'slideEditor') &&
                <div className='table-for-content-management'>
                    <Table
                        tableHeading={tableHeadingSlideShow}
                        tableData={tableDataSlideShow}
                        tableDataWidth={tableDataWidthSlideShow}
                        isEditable={true}
                        isDeletable={true}
                    />
                </div>
            }

        </div>
    )
}

export default ContentManagement