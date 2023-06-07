import bg from '../assets/img/bg_banner.png'
const Banner = () => {
    return (
      <section id="banner" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
              <div class="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <h1>
                모두를 위한 <br/>
                조각투자
                </h1>
                <p>
                다양한 포트폴리오 구성까지 <br/>
                한 번에 <span class="c-orange">오퍼스</span>에서 바로
                </p>
              </div>
              <div class="col-lg-6 d-lg-block d-none">
                &nbsp;
              </div>
          </div>
        </div>
        <img src={bg} class="img-fluid bg-banner" alt='About Opus'/>
      </section>
    )
}

export default Banner