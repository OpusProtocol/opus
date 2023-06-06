import bg from '../assets/img/bg_download.png'
import googlePlay from '../assets/img/google_play.png'
import logoWhite from '../assets/img/logo_opus_white.png'
const Download = () => {
    return (
        <section id="download" class="d-flex align-items-center">
            <div class="container">
            <div class="row">
                <div class="col-lg-6">
                <div class="download-left">
                <img src={logoWhite} class="img-fluid logo-white-download"/>
                <h1>Download <br/>
                    Coming Soon</h1>
                <img src={googlePlay} class="img-fluid logo-google-play"/>
                </div>

                </div>
                <div class="col-lg-6">
                    <img src={bg} class="img-fluid"/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Download