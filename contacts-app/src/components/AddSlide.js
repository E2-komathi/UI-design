import polygon from "../assets/Polygon.png";
import "../css/AddSlide.css";
import webImg from "../assets/globe-solid.png";
import mobile from "../assets/mobile-regular.png";
import irp from "../assets/tablet-regular.png";
import tv from "../assets/tv-solid.png";
import landscape from "../assets/Landscape.png";
import portrait from "../assets/portrait.png";
import resize from "../assets/resizeIcon.png";
import slide1 from "../assets/sampleSlide.png";
import { useState } from "react";
import edit from "../assets/edit.png";
import dlt from "../assets/delete.png";

export default function AddSlide() {

    const [checkBoxActive, isCheckBoxActive] = useState(false);

    const checkBox = () => {
        isCheckBoxActive(!checkBoxActive);
    }

    return (
        <div className="add-slide-container">
            <div className='navigation-text-container'>
                <span id="navigation-text">Dashboard</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">System</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Content Management</span>
                <img alt='polygon' className="polygon" src={polygon} />
                <span id="navigation-text">Add a Slide</span>
            </div>
            <div className='service-name-container-add-slide'>
                <span id='service-name'>Add a Slide</span>
            </div>
            <div className="add-slide-detail-container">
                <span className="add-slide-desc">To add a slide you can choose to upload and image or to use a color background. Select your options and get started.</span>
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
                <div className="optimal-image">
                    <span className="container-heading1">Optimal Image Requirements</span>
                    <span className="optimal-details">All images must be between <br /> 800px by 600px or 1920px by 1080px</span>
                    <div className="min-max-div">
                        <span className="bold-text-add-slide">Min</span>
                        <span className="bold-text-add-slide">Max</span>
                    </div>
                    <span className="optimal-text">For the best view of you images we suggest Landscape oriented images although Portrait oriented images can still be used. PNG and JPG formats only.</span>
                </div>
                <div className="landscape-portrait">
                    <div>
                        <img alt="LandScape" src={landscape} className="landscape-img" />
                        <img alt="Portrait" src={portrait} className="portrait-img" />
                    </div>
                    <div className="text-container-add-slide">
                        <span className="bold-text-add-slide">Landscape</span>
                        <span className="bold-text-add-slide">Portrait</span>
                    </div>
                </div>
                <div className="slide-resolution">
                    <span className="container-heading1">True Image Size by Solution</span>
                    <div>
                        <span className="solution-text">CATIE Web</span>
                        <span className="solution-text">692px by 519px</span>
                    </div>
                    <div>
                        <span className="solution-text">CATIE Mobile</span>
                        <span className="solution-text">390px by 275px</span>
                    </div>
                    <div>
                        <span className="solution-text">CATIE IRP</span>
                        <span className="solution-text">390px by 275px</span>
                    </div>
                    <div className="catie-tv-resolution">
                        <span className="solution-text">CATIE TV</span>
                        <span className="solution-text">1320px by 743px</span>
                    </div>
                </div>
                <div className="background-type">
                    <span className="container-heading">Choose your Slide Background Type</span>
                    <div className="background-type-div">
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        <span className="solution-text">Upload Image</span>
                        <button className="upload-image-slide">Upload Image</button>
                    </div>
                    <div className="background-type-div">
                        <div className={checkBoxActive ? "check-box-active" : "check-box-for-slide"} onClick={checkBox} />
                        <span className="solution-text">Solid Color BG</span>
                        <button className="dropdown-slide" >Upload Image</button>
                    </div>
                </div>
            </div>
            <div className="add-slide-content-container">
                <div className="solution-slide-content">
                    <div className="solution-slide-details">
                        <span className="slide-details-text">Slide Name</span>
                        <input className="slide-details-input slide-name-input" />
                        <div className="combined-div">
                            <span className="slide-details-text">IRP Slide Elements</span>
                            <span className="slide-details-text">Image</span>
                            <div className="image-name-div">
                                <input className="slide-details-text1 image-name" value="GardeningClubPoster.png" />
                                <img src={edit} alt="edit" className='edit-icon' />
                                <img src={dlt} alt="delete" className='delete-icon' />
                            </div>
                            <span className="slide-details-text">Text</span>
                        </div>
                        <span className="slide-details-text1">Heading</span>
                        <div className="slide-text-container">
                            <input className="slide-details-input" />
                            <img src={dlt} alt="delete" className='delete-icon' />
                        </div>
                        <div className="font-style-div">
                            <input className="ffamily" />
                            <input className="fsize" />
                            <input className="fstyle" />
                            <input className="fcolor" />
                        </div>
                        <span className="slide-details-text1">Body Text</span>
                        <div className="slide-text-container slide-body-div">
                            <textarea className="slide-details-input slide-body-text"></textarea>
                            <img src={dlt} alt="delete" className='delete-icon' />
                        </div>
                        <div className="font-style-div">
                            <input className="ffamily" />
                            <input className="fsize" />
                            <input className="fstyle" />
                            <input className="fcolor" />
                        </div>
                    </div>
                    <div className="solution-slide-image">
                        <div className="resize-details">
                            <span className="resize-content">Increase the image size by dragging the corners of the image. Use the <img src={resize} alt="Resize Icon" className="resize-img" /> to reposition elements on the slide.</span>
                        </div>
                        <div className="slide-design">
                            <img src={slide1} alt="Slide" className="slide" />
                            <textarea className="slide-title" type="text" />
                            <textarea className="slide-desc" type="text" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-save-cancel">
                <button className='cancel-btn'>Cancel</button>
                <button className="pop-up-common-btn">Save</button>
            </div>
        </div>
    )
}