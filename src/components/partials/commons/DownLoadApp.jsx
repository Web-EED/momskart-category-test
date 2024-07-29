import React from 'react';

const DownloadApp = () => (
    <section className="ps-download-app">
        <div className="ps-container">
            <div className="ps-block--download-app">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/app.png" alt="martfury" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="ps-block__content">
                                <p
                                    style={{
                                        color: '#DD195B',
                                        WebkitTextStroke: '0.1px #DD195B',
                                        fontWeight: 600,
                                    }}>
                                    #BadePyaarSeBanayaHai
                                </p>
                                <h3>Download Momskart</h3>
                                <p
                                    style={{
                                        color: '#003F8D',
                                        WebkitTextStroke: '0.1px #003F8D',
                                        fontWeight: 600,
                                    }}>
                                    Super App for Sellers
                                </p>
                                <p className="download-link">
                                    <a href="#">
                                        <img
                                            src="/static/img/google-play.png"
                                            alt="martfury"
                                        />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default DownloadApp;
