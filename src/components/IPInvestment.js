import bg from '../assets/img/bg_ip_investment.png'
const IPInvestment = () => {
    return (
        <section id="ip-investment">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                            <div class="ip-left">
                                <h4 class="c-orange">IP 투자</h4>
                                <h1>즐기기만 하던<br/>게임, 영화 IP<br/>직접 투자하기</h1>
                                <p>안목있는 당신, 생각지도 못했던<br/>멋진 콘텐츠들의 초기 투자자가 되어보세요.<br/>좋아하는 게임, 영화 프로젝트에 투자하기.<br/>떡상각 프로젝트의 초기부터 성공까지 함께</p>
                            </div>
                        </div>
                    <div class="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 div-bg_ip_investment">
                        <img src={bg} class="img-fluid" alt=''/>
                    </div>
                    
                </div>
        </section>
    )
}

export default IPInvestment