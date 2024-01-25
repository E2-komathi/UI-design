import { useState } from 'react';
import '../css/AddUnitPopUp.css';
import tabletImg from '../assets/tablet.png';
import tvImg from '../assets/Tv.png';
import tvDarkImg from '../assets/tvDark.png';
import tvLiteImg from '../assets/tvLite.png';


function AddUnitPopUp() {
    const [uiType, setUiType] = useState('new');
    const [solution, setSolution] = useState('tablet');
    const uiTypeClassName = (solution === 'tv') ? 'ui-type-tv' : '';

    const changeUIType = (value) => {
        setUiType(value);
    }

    function changeSolution(value) {
        setSolution(value);
    }

    return (
        <div className="pop-up">
            <div className="pop-up-content">
                <div className='heading-div' style={{ "margin-left": "15px" }}>
                    <p className='Open_Sans_text_bold'>Manage Units</p>
                </div>
                <div className='content-div'>
                    <div className='room-number-div'>
                        <label className='lable-text'>Room Number</label>
                        <input style={{ width: "50%" }}></input>
                    </div>
                    <div className='solution-type-div' style={{ "height": "max-content", "align-items": "baseline" }}>
                        <label className='lable-text'>Solution Type</label>
                        <div>
                            <span className='solution'>
                                <p className='radio-text'>Tablet</p>
                                <p className='radio-text'>TV</p>
                            </span>
                            <div className='solution-image'>
                                <input type='radio' className='radio-icon' checked={solution === 'tablet'} onClick={() => changeSolution('tablet')} />
                                <img alt='tablet' src={tabletImg} className='tablet' />
                                <input type='radio' className='radio-icon' checked={solution === 'tv'} onClick={() => changeSolution('tv')} />
                                <img alt='Tv' src={tvImg} className='tv' />
                            </div>
                        </div>
                    </div>
                    <div className={uiTypeClassName}>
                        <label className='lable-text'>UI Type</label>
                        {solution === 'tablet' &&
                            <div className='ui-type-for-tab'>
                                <input type='radio' className='radio-icon' checked={uiType === 'new'} onClick={() => changeUIType('new')} />
                                <p className='radio-text'>New UI</p>
                                <input type='radio' className='radio-icon' checked={uiType === 'old'} onClick={() => changeUIType('old')} />
                                <p className='radio-text'>Old UI</p>
                            </div>}
                        {solution === 'tv' &&
                            <div className='ui-type'>
                                <div className='tv-img-type'>
                                    <img alt='Dark-view' src={tvDarkImg} className='tv-img' />
                                    <img alt='Light-view' src={tvLiteImg} className='tv-img' />
                                </div>
                                <div className='tv-type'>
                                    <span className='dark-radio-btn'>
                                        <input type='radio' className='radio-icon' />
                                        <p className='radio-text'>Dark</p>
                                    </span>
                                    <span className='lite-radio-btn'>
                                        <input type='radio' className='radio-icon' />
                                        <p className='radio-text'>Light</p>
                                    </span>
                                </div>
                            </div>}
                    </div>
                    <div>
                        <label className='lable-text'>CATIE Extension</label>
                        <input></input>
                    </div>
                    <div>
                        <label className='lable-text'>Extension Password</label>
                        <input></input>
                    </div>
                    <div>
                        <label className='lable-text'>Username</label>
                        <input></input>
                    </div>
                    <div>
                        <label className='lable-text'>Device Serial #</label>
                        <input></input>
                    </div>
                </div>

                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddUnitPopUp;