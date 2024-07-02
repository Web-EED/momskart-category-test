import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    // <div className="ps-footer__widgets">
    //     <aside className="widget widget_footer widget_contact-us">
    //         <h4 className="widget-title">Contact us</h4>
    //         <div className="widget_content">
    //             <p>Call us 24/7</p>
    //             <h3>1800 97 97 69</h3>
    <div className="ps-footer__widgets">
        {/* Momskart Footer Logo and Text */}
        <aside className="widget widget_footer widget_contact-us col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            {/* <h4 className="widget-title">Re</h4> */}

            <div className="widget_content mkt-footer">
                {/* <p>Call us 24/7</p> */}
                {/* <h3>1800 97 97 69</h3> */}

                <div style={{ width: '257px', marginBottom: '1rem' }}>
                    <img
                        src="https://i.ibb.co/tHSX5CC/momskart-footer-logo.png"
                        alt="momskart"
                    />
                </div>
                {/* <h5 className="text-capitalize mt-3 mb-4" style={{ color: '#212121', fontSize: '16px', fontWeight: 'bolder' }}>
            Reach Us
          </h5> */}
                {/* <span className="footer-link" style={{ fontSize: '12px' }}>
          
            
            <img src="/static/img/Momskart-logo's-Footer.png" alt="momskart"/>
            
          </span> */}
                <p style={{ maxWidth: '260px' }}>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry.
                </p>

                <ul className="ps-list--social" style={{ display: 'none' }}>
                    <li>
                        <a
                            className="facebook"
                            href="https://www.facebook.com/momskartofficial/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="twitter"
                            href="https://twitter.com/momskart"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="youtube"
                            href="https://www.youtube.com/channel/UCi-WObkdYolHYFE7QicQf3g"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa fa-youtube" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="instagram"
                            href="https://www.instagram.com/momskart/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa fa-instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        {/* Top Categories */}
        <aside className="widget widget_footer col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="mkt-footer">
                <h4 className="widget-title">Top Categories</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/blank">Homemade Sweets</Link>
                    </li>

                    <li>
                        <Link href="/page/blank">Pickle & Chutney</Link>
                    </li>
                    <li>
                        <Link href="/page/blank">Homemade Snacks</Link>
                    </li>
                    <li>
                        <Link href="/page/blank">Best Sellers</Link>
                    </li>

                    {/* <li>
                    <Link href="/page/faqs">FAQs</Link>
                </li> */}
                </ul>
            </div>
        </aside>
        {/* Support */}
        <aside className="widget widget_footer col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="mkt-footer">
                <h4 className="widget-title">Support</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/blank">Customer Support</Link>
                    </li>

                    <li>
                        <Link href="/page/blank">Delivery Details</Link>
                    </li>
                    <li>
                        <Link href="/page/blank">Terms & Condition</Link>
                    </li>
                    <li>
                        <Link href="/page/blank">Privacy Policy</Link>
                    </li>

                    {/* <li>
                    <Link href="/page/faqs">FAQs</Link>
                </li> */}
                </ul>
            </div>
        </aside>
        {/* Contact Us */}
        <aside className="widget widget_footer col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="mkt-footer contact">
                <h4 className="widget-title">Contact Us</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/about-us">
                            contact@themomskart.com
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/blank">
                            CIN : U74999MP2021PTC055720
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/blank">
                            56, New Dewas Road Near SBI Vallabh Nagar Indore,
                            452001 , Madhya Pradesh , India
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
        {/* Get In Touch */}
        <aside className="widget widget_footer col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mk-flex-end">
            <div className="mkt-footer get-in-touch">
                <h4 className="widget-title">Get In Touch</h4>
                <div class="mkt-form-container">
                    <form class="get-in-touch-form">
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p>Stay up to date with our newsletter</p>
                </div>
            </div>
        </aside>
    </div>
);

export default FooterWidgets;
