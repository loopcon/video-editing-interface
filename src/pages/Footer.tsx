import { BiNavigation } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    {/* <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__logo">
                                <a href="#">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="footer__option">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__option__item">
                                <h5>About us</h5>
                                <p>Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service
                                    production company specializing.</p>
                                <a href="#" className="read__more">Read more <span className="arrow_right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3">
                            <div className="footer__option__item">
                                <h5>Who we are</h5>
                                <ul>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Carrers</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Locations</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3">
                            <div className="footer__option__item">
                                <h5>Our work</h5>
                                <ul>
                                    <li><a href="#">Feature</a></li>
                                    <li><a href="#">Latest</a></li>
                                    <li><a href="#">Browse Archive</a></li>
                                    <li><a href="#">Video for web</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__option__item">
                                <h5>Newsletter</h5>
                                <p>Videoprah is an award-winning, full-service production company specializing.</p>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit">
                                        <BiNavigation />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;