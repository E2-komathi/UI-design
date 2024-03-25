import polygon from "../assets/Polygon.png";
import "../css/AddSlide.css";
import "../css/SlideShowEditor.css";
import webImg from "../assets/globe-solid.png";
import mobile from "../assets/mobile-regular.png";
import irp from "../assets/tablet-regular.png";
import tv from "../assets/tv-solid.png";
import { useState } from "react";
import Card from "../CommonComponents/Card";
import slide from "../assets/slideshowsample.png";
import img from "../assets/img2.png";
import img1 from "../assets/img3.png";
import img2 from "../assets/bday2.jpg";
import img3 from "../assets/bdayimage.jpg";
import dropDownArrow from "../assets/downArrow.png";
import calendar from "../assets/calendar.png";

function SlideShowEditor() {

    const [checkBoxActive, isCheckBoxActive] = useState(false);

    const checkBox = () => {
        isCheckBoxActive(!checkBoxActive);
    }

    const availableGroups = ['Resident', 'Administrator', 'Admin', 'Group1', 'First Floor'];

    return (
        <div className="slideshow-editor-container">
            <div className='navigation-text-container'>
                <span id="navigation-text">Dashboard</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">System</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Content Management</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Slideshow Editor</span>
            </div>
            <div className='service-name-container-add-slide'>
                <span id='service-name'>Create or Edit a Slideshow</span>
            </div>
            <div className="add-slide-detail-container">
                <span className="add-slide-desc">You can customize your slideshows here by adding slides or uploading an Engage presentation and set scheduling.</span>
            </div>
            <div className="solution-container">
                <div className="solution-type">
                    <div className="solution-type-text-container">
                        <span className="container-heading">Solution Type</span>
                    </div>
                    <div className="solution-types">
                        <div className="catie-web">
                            <img alt="catie web" src={webImg} />
                            <span className="solution-text">CATIE Web</span>
                            <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        </div>
                        <div className="catie-mob">
                            <img alt="catie mobile" src={mobile} />
                            <span className="solution-text">CATIE Mobile</span>
                            <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        </div>
                        <div className="catie-irp">
                            <img alt="catie IRP" src={irp} />
                            <span className="solution-text">CATIE IRP</span>
                            <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        </div>
                        <div className="catie-tv">
                            <img alt="catie tv" src={tv} />
                            <span className="solution-text">CATIE TV</span>
                            <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        </div>
                    </div>
                </div>
                <div className="slideshow-type">
                    <span className="container-heading">Slideshow Type</span>
                    <div className="ingage">
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        <span className="solution-text">Ingage</span>
                    </div>
                    <div className="new-slideshow">
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        <span className="solution-text">New Slideshow</span>
                    </div>
                </div>
            </div>
            <div className="slideshow-name">
                <span className="slide-details-text">Slideshow Name</span>
                <input className="slide-details-input" />
            </div>
            <div className="card-container">
                <div className="slides">
                    <span className="slide-details-text">Select Your Slides</span>
                    <div className="card-container-main">
                        <div className="card-for-slides">
                            <Card
                                titleName1="Slide Images"
                                titleColor1={{ 'background-color': '#448CCB' }}
                                titleName2="Selected Images"
                                titleColor2={{ 'background-color': '#000000' }}
                                lhsList={availableGroups}
                            />
                        </div>
                    </div>
                </div>
                <div className="screens">
                    <span className="slide-details-text">Select Your Screens</span>
                    <div className="card-for-screens">
                        <Card
                            titleName1="Screens"
                            titleColor1={{ 'background-color': '#448CCB' }}
                            titleName2="Selected Screens"
                            titleColor2={{ 'background-color': '#000000' }}
                            lhsList={availableGroups}
                        />
                    </div>
                </div>
            </div>
            <div className="assigned-slides">
                <span className="slide-details-text">Assigned Slides</span>
                <span className="add-slide-desc">These are your assigned slides to this Slideshow. Add and remove images with the above cards.
                    You can assign which screens this slideshow will appear on with the right card.
                    To change the order of the slides drag and drop them in the order that you want them in the preview below.</span>
            </div>
            <div className="assigned-slide-images-with-name">
                <div className="image-div-with-name">
                    <img src={slide} className="slide-img" />
                    <span className="slide-name">Happy90thPeggyShaw.png</span>
                </div>
                <div className="image-div-with-name">
                    <img src={img} className="slide-img" />
                    <span className="slide-name">Happy90thPeggyShaw.png</span>
                </div>
                <div className="image-div-with-name">
                    <img src={img1} className="slide-img" />
                    <span className="slide-name">Happy90thPeggyShaw.png</span>
                </div>
                <div className="image-div-with-name">
                    <img src={img2} className="slide-img" />
                    <span className="slide-name">Happy90thPeggyShaw.png</span>
                </div>
                <div className="image-div-with-name">
                    <img src={img3} className="slide-img" />
                    <span className="slide-name">Happy90thPeggyShaw.png</span>
                </div>
            </div>
            <div className="scheduling">
                <span className="slide-details-text">Scheduling</span>
                <span className="add-slide-desc">Set your schedule and occurrence details below.</span>
            </div>
            <div className="time-and-recurrence">
                <div className="display-time">
                    <span className="slide-details-text">Display Time</span>
                    <div className="configurable">
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        <span className="solution-text">Configurable</span>
                    </div>
                    <div className="allday">
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        <span className="solution-text">All Day</span>
                    </div>
                </div>
                <div className="time-picker-div">
                    <div className="start-time-container">
                        <span className="slide-details-text">Start time</span>
                        <div className="start-time">
                            <div className="drop-down-section">
                                <span className="timer-text">11:59</span>
                                <img src={dropDownArrow} alt="drop-down-arrow" className="drop-down-image" />
                            </div>
                            <div className="drop-down-section">
                                <span className="timer-text">PM</span>
                                <img src={dropDownArrow} alt="drop-down-arrow" className="drop-down-image" />
                            </div>
                        </div>
                    </div>
                    <div className="end-time-container">
                        <span className="slide-details-text">End Time</span>
                        <div className="end-time">
                            <div className="drop-down-section">
                                <span className="timer-text">08:00</span>
                                <img src={dropDownArrow} alt="drop-down-arrow" className="drop-down-image" />
                            </div>
                            <div className="drop-down-section">
                                <span className="timer-text">AM</span>
                                <img src={dropDownArrow} alt="drop-down-arrow" className="drop-down-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recurrence-container">
                    <div className="recurrence-div">
                        <span className="solution-text">Recurrence</span>
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                    </div>
                    <div className="occurence-type-container">
                        <div className="container-recurrence-one">
                            <section className="recurrence-section">
                                <div className="recurrence-type">
                                    <input type="radio" className="radio-styles" />
                                    <span className="solution-text">Daily</span>
                                </div>
                                <div className="daily-checkbox">
                                    <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                                    <span className="solution-text">Every</span> <input className="drop-down-section number-of-days-div timer-text" /> <span className="solution-text">Days</span>
                                </div>
                            </section>
                            <section className="recurrence-section">
                                <div className="recurrence-type">
                                    <input type="radio" className="radio-styles" />
                                    <span className="solution-text">Weekly</span>
                                </div>
                            </section>
                            <section className="recurrence-section">
                                <div className="recurrence-type">
                                    <input type="radio" className="radio-styles" />
                                    <span className="solution-text">Monthly</span>
                                </div>
                            </section>
                            <section className="recurrence-section">
                                <div className="recurrence-type">
                                    <input type="radio" className="radio-styles" />
                                    <span className="solution-text">Yearly</span>
                                </div>
                            </section>
                        </div>
                        <div className="container-recurrence-two">
                            <span className="solution-text">Range of Occurrence</span>
                            <section className="start-date-select-div">
                                <span className="solution-text">Start</span>
                                <div className="date-select">
                                    <span className="timer-text">11/17/2023</span>
                                    <img src={calendar} alt="Calendar-Icon" className="calendar-image" />
                                </div>
                            </section>
                            <section className="no-end-date-div">
                                <input type="radio" className="radio-styles" />
                                <span className="solution-text">No End Date</span>
                            </section>
                            <section className="end-date-select-div">
                                <input type="radio" className="radio-styles" />
                                <span className="solution-text">End By</span>
                                <div className="date-select">
                                    <span className="timer-text">11/17/2023</span>
                                    <img src={calendar} alt="Calendar-Icon" className="calendar-image" />
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-cancel-save">
                <button className='cancel-btn'>Cancel</button>
                <button className="pop-up-common-btn">Save</button>
            </div>
        </div>
    )
}

export default SlideShowEditor;