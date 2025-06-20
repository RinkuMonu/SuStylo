import React from 'react'

export default function LogoSection() {
    return (
        <>
            <div className="container-fluid logo_section my-2">
                <div className="row">
                    <div className="col-md-4">
                        <div className="startLine">
                            <hr />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="centerLogo">
                            {/* <span className="logo">BLA<span className="text-warning">X</span>CUT</span> */}
                            <img src="./images/logo mm.svg" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="startLine">
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
