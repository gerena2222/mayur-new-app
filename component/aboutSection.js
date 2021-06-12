const AboutSection = () => {
    return (
        <div>
            <div className="site-section" id="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5">
                            <img src="https://via.placeholder.com/600x400" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-lg-5 ml-auto section-title">
                            <span className="sub-title mb-2 d-block">Acquaint Us</span>
                            <h2 className="title text-primary mb-3">About us</h2>
                            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>


                            <div className="d-flex">
                                <ul className="list-unstyled ul-check success mr-5">
                                    <li>Design</li>
                                    <li>Development</li>
                                    <li>eCommerce</li>

                                </ul>
                                <ul className="list-unstyled ul-check success">

                                    <li>Mobile Apps</li>
                                    <li>Copywriting</li>
                                    <li>SEO</li>
                                </ul>
                            </div>
                            <p><a data-fancybox data-ratio="2" href="https://vimeo.com/326176805" className="d-flex align-items-center"><span className="icon-play_circle_outline h4 m-0 mr-2"></span> <span>Watch the video</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;