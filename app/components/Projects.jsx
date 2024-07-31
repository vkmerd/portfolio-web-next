export default function Projects(){
    return(
        <>
        <section class="projects-banner">
            <Image class="reactimg" src="assets/images/react.png" alt="" />
            <Image class="wpimg" src="assets/images/wp.png" alt="" />
            <Image class="jsimg" src="assets/images/js.png" alt="" />
            <div class="containers">
                <h2>Projelerim</h2>
                <div class="projects-flex">
                    <div class="flexb25">
                    <a href="https://burakerdur.com/" target="_blank">
                        <div class="pro-img">
                            <Image src="assets/images/burak-erdur.jpg" alt="" />
                        </div>
                    </a>
                    </div>
                    <a href="https://sapphirehairclinic.com/landing/" target="_blank">
                    <div class="flexb25 subbrandbf">
                        <div class="pro-img">
                            <Image class="brtnesimg" src="assets/images/sapphire-landing.jpg" alt="" />
                        </div>
                            <Image class="subbrandimg" src="assets/images/sapphire-logo.png" alt="" />
                        </div>
                    </a> 
                    <div class="flexb25">
                    <a href="https://galenosgb.com/" target="_blank">
                        <div class="pro-img">
                            <Image src="assets/images/galen-osgb.jpg" alt="" />
                        </div>
                    </a>
                    </div>
                    <div class="flexb25">
                    <a href="https://carmalog.com/" target="_blank">
                        <div class="pro-img">
                            <Image src="/carmalog.jpg" alt="" />
                        </div>
                    </a> 
                    </div>
                    <div class="flexb50">
                    <a href="https://www.mediacrabs.com/wonder/" target="_blank">
                        <div class="pro-video">
                            <video id="myVideo" class="opacity-90" preload="auto" muted="" playsinline="" autoplay="">
                                <source src="/face.mp4" type="video/mp4" />
                            </video>
                            <Image src="/wonder-logo.png" alt="" />
                        </div>
                    </a>
                    </div>
                    <a href="https://glasrigler.at" target="_blank">
                        <div class="flexb25 subbrandbf">
                            <div class="pro-img">
                                <Image class="brtnesimg" src="/glasrigler-site.jpg" alt="" />
                            </div>
                                <Image class="subbrandimg glasrigler" src="/glasrigler.png" alt="" />
                        </div>
                    </a>
                    <a href="https://www.mediacrabs.com/medical-exclusive/" target="_blank">
                    <div class="flexb25 subbrandbf">
                            <div class="pro-img">
                                <Image class="brtnesimg" src="/medical-ex.jpg" alt="" />
                            </div>
                                <Image class="subbrandimg" src="/medical-siyah.png" alt="" />
                            </div>
                    </a>
                    <a href="https://gehairclinic.com/"  target="_blank">
                        <div class="flexb25 subbrandbf">
                            <div class="pro-img">
                                <Image class="brtnesimg" src="/gehair-site.jpg" alt="" />
                            </div>
                                <Image class="subbrandimg" src="/gehair-logo.png" alt="" />
                        </div>
                    </a>
                    <a href="https://crabsmedia.com.tr/cosmedicadentallanding" target="_blank">
                        <div class="flexb25 subbrandbf">
                            <div class="pro-img">
                                <Image class="brtnesimg" src="/cosmedica-dental.jpg" alt="" />
                            </div>
                                <Image class="subbrandimg" src="/cosmedica-logo.png" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}