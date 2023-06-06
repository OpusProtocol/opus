import logo from '../assets/img/logo_opus.svg'
import iconFacebook from '../assets/img/icon_facebook.svg'
import iconInstagram from '../assets/img/icon_instagram.svg'
import iconTwitter from '../assets/img/icon_twitter.svg'
import iconLinked from '../assets/img/icon_linked.svg'
const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row f-top">
                    <div class="col-lg-6">
                        <img src={logo} class="img-fluid logo-footer"/>
                        <div class="f-address">
                            <p>
                                Address:<br/>
                                <small>2nd floor, 11, dosan-daero 90-gil, Gangnam-gu, Seoul (Cheongdam-dong)</small>
                            </p>
                        </div>
                        <div class="f-contact">
                        <p>
                        Contact:<br/>
                                <small><a href='tel:82-2-518-2251'>82-2-518-2251</a><br/>
                                <a href='mailto:opus@lowellpef.co.kr'>opus@lowellpef.co.kr</a></small>
                            </p>
                        </div>
                        <div class="f-socials">
                            <a href=''>
                                <img src={iconFacebook} class="img-fluid logo-footer"/>
                            </a>
                            <a href=''>
                                <img src={iconInstagram} class="img-fluid logo-footer"/>
                            </a>
                            <a href=''>
                                <img src={iconTwitter} class="img-fluid logo-footer"/>
                            </a>
                            <a href=''>
                                <img src={iconLinked} class="img-fluid logo-footer"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <ul>
                                <li>OPUS</li>
                                <li>Highlights</li>
                                <li>Download</li>
                                <li>Partners</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row f-bottom">
                    <div class="col-lg-8">
                    <p class="f-b-first">© 2023 Lowell Private Equity. All rights reserved.</p>
                    <p class="f-b-second">법인회원으로 가입을 원하는 경우, 법인 고객 상담팀 (admin@lowellpef.com)으로 요청주시면 도움 드리겠습니다.</p>
                    </div>
                    <div class="col-lg-4">
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer