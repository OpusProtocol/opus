import { useEffect, useState } from 'react'
import bg from '../assets/img/bg_banner.png'
import $ from 'jquery'
const Banner = () => {
  const click = useState(0)
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }

    on('click', '.mobile-nav-toggle', function(e) {
      if($('#navbar').hasClass('navbar-mobile')){
        $('#navbar').removeClass('navbar-mobile')
        $('.mobile-nav-toggle').addClass('bi-list')
        if($('.mobile-nav-toggle').hasClass('bi-x')){
          $('.mobile-nav-toggle').removeClass('bi-x')
        }
      }else{
        $('#navbar').addClass('navbar-mobile')
        $('.mobile-nav-toggle').addClass('bi-x')
        if($('.mobile-nav-toggle').hasClass('bi-list')){
          $('.mobile-nav-toggle').removeClass('bi-list')
        }
      }
    })
  }, [click])
    return (
      <section id="banner" class="d-lg-flex align-items-center">
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