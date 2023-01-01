import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className='row'>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+2533448052"><i className="fa fa-phone" /> 1-2533448052</a><br />
                        <a role="button" className="btn btn-link" href="mailto:kayakfon@gmail.com"><i className="fa fa-envelope-o" /> kayakfon@gmail.com</a>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;