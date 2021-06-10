const AboutSection = () => {
    return (
        <div>
            <div class="site-section" id="about-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-5">
                            <img src="images/glint_about_1.jpg" alt="Image" class="img-fluid" />
                        </div>
                        <div class="col-lg-5 ml-auto section-title">
                            <span class="sub-title mb-2 d-block">Acquaint Us</span>
                            <h2 class="title text-primary mb-3">About us</h2>
                            <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>


                            <div class="d-flex">
                                <ul class="list-unstyled ul-check success mr-5">
                                    <li>Design</li>
                                    <li>Development</li>
                                    <li>eCommerce</li>

                                </ul>
                                <ul class="list-unstyled ul-check success">

                                    <li>Mobile Apps</li>
                                    <li>Copywriting</li>
                                    <li>SEO</li>
                                </ul>
                            </div>
                            <p><a data-fancybox data-ratio="2" href="https://vimeo.com/326176805" class="d-flex align-items-center"><span class="icon-play_circle_outline h4 m-0 mr-2"></span> <span>Watch the video</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;