import { startTransition, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useDispatch } from 'react-redux';
// import { registerRoot } from "remotion";
// import { RemotionRoot } from "../Root";
// import { useNavigate } from 'react-router-dom';
import { uploadVideo } from '../redux/actions/uploadedVideo';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const options = {
        // loop: true,
        center: true,
        // items: 3,
        margin: 0,
        // autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };

    // On file select (from the pop up)
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const file = event.target.files![0];
        // if (!file) return;

        // console.log("file >>>", file.name);
        // if (file) {
        //     let obj = {
        //         name: file.name,
        //         size: file.size,
        //         type: file.type,
        //         lastModified: file.lastModified,
        //     }

        //     // registerRoot(RemotionRoot);
        //     startTransition(() => {
        //         setUploadedFile(file);
        //         localStorage.setItem('File', JSON.stringify(obj));
        //         // dispatch(uploadVideo(obj));
        //         // navigate('/remotion-canvas', { state: { uploadedFile: file } });
        //     });
        // }
    };


    return (
        <>
            <section className="hero">
                <OwlCarousel className="hero__slider owl-carousel" {...options}>
                    <div className="hero__item set-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <span>For website and video editing</span>
                                        <h2>Videographer’s Portfolio</h2>
                                        {/* <label className="primary-btn" htmlFor="file-input">
                                            Get Start
                                        </label> */}
                                        <Link className="primary-btn" to={'create'}>
                                            Get Start
                                        </Link>
                                        {/* accept='video/mp4,audio/' */}
                                        {/* <input type="file" id="file-input" hidden onChange={onFileChange} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="hero__item set-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <span>For website and video editing</span>
                                        <h2>Videographer’s Portfolio</h2>
                                        <a href="#" className="primary-btn">See more about us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item set-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <span>For website and video editing</span>
                                        <h2>Videographer’s Portfolio</h2>
                                        <a href="#" className="primary-btn">See more about us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </OwlCarousel>
            </section>

            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="services__title">
                                <div className="section-title">
                                    <span>Our services</span>
                                    <h2>What We do?</h2>
                                </div>
                                <p>If you hire a videographer of our team you will get a video professional to make a custom
                                    video for your business and, once the project is over.</p>
                                <a href="#" className="primary-btn">View all services</a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="src/assets/img/icons/si-1.png" alt="" />
                                        </div>
                                        <h4>Motion graphics</h4>
                                        <p>Whether you’re halfway through the editing process, or you haven’t even started, our
                                            post production services can put the finishing touches.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="src/assets/img/icons/si-2.png" alt="" />
                                        </div>
                                        <h4>Scriptwriting and editing</h4>
                                        <p>Whether you’re halfway through the editing process, or you haven’t even started, our
                                            post production services can put the finishing touches.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="src/assets/img/icons/si-3.png" alt="" />
                                        </div>
                                        <h4>Video distribution</h4>
                                        <p>Whether you’re halfway through the editing process, or you haven’t even started, our
                                            post production services can put the finishing touches.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="src/assets/img/icons/si-4.png" alt="" />
                                        </div>
                                        <h4>Video hosting</h4>
                                        <p>Whether you’re halfway through the editing process, or you haven’t even started, our
                                            post production services can put the finishing touches.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;