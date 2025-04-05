import React from 'react'

export default function GallerySection() {
    return (
        <>
            <div className="Gallery_section" >
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading w-50 mx-auto">
                                <h2 className=''>Crafted with Passion, Styled with Precision</h2>
                                <p> Relax. Walk out with confidence. Book salon near me today!</p>
                                {/* <h2>GALLERY</h2> */}
                            </div>
                            <div
                                className="de-separator"
                                style={{
                                    backgroundSize: "100%",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row mx-5'>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="de-image-hover" style={{borderTopLeftRadius:"40px"}}>
                                        <img
                                            src="./images/gallery/1.jpg"
                                            className="img-fluid img1"
                                        />
                                        <span className="dih-title-wrap">
                                            <span className="dih-title">Gallery Title</span>
                                        </span>
                                        <span className="dih-overlay"></span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="de-image-hover">
                                        <img
                                            src="./images/gallery/6.jpg"
                                            className="img-fluid img1"
                                        />
                                        <span className="dih-title-wrap">
                                            <span className="dih-title">Gallery Title</span>
                                        </span>
                                        <span className="dih-overlay"></span>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="de-image-hover" style={{borderBottomLeftRadius:"40px"}}>
                                        <img
                                            src="./images/gallery/7.png"
                                            className="img-fluid img2"
                                        />
                                        <span className="dih-title-wrap">
                                            <span className="dih-title">Gallery Title</span>
                                        </span>
                                        <span className="dih-overlay"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="de-image-hover" style={{ height: "100%", borderTopRightRadius:"40px", borderBottomRightRadius:"40px" }}>
                                <img
                                    src="./images/gallery/3.jpg"
                                    className="img-fluid"
                                    style={{ height: "100%" }}
                                />
                                <span className="dih-title-wrap">
                                    <span className="dih-title">Gallery Title</span>
                                </span>
                                <span className="dih-overlay"></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
