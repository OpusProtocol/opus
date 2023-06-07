import bg from '../assets/img/bg_personal_investment.png'
const PersonalInvestment = () => {
    return (
        <section id="personal-investment">
            <div class="row">
                <div class="col-lg-6">
                    <img src={bg} class="img-fluid" alt=''/>
                </div>
                <div class="col-lg-6">
                    <div class="personal-right">
                        <h4 class="c-orange">동산 투자</h4>
                        <h1>나도 투자 할 수 있는 <br/>대형 건설프로젝트, <br/>선박, 창고 투자</h1>
                        <p>투자금액이 많이 필요해 접근성이 높았던 <br/>대형 투자상품의 허들을 낮췄어요. <br/>누구나 소액으로 투자할 수 있는 동산 투자.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonalInvestment