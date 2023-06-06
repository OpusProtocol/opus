import bg from '../assets/img/bg_realestate.png'
const RealEstate = () => {
    return (
        <section id="real-estate">
            <div class="row">
                <div class="col-lg-6">
                    <img src={bg} class="img-fluid"/>
                </div>
                <div class="col-lg-6">
                    <div class="real-right">
                        <h4 class="c-orange">부동산</h4>
                        <h1>정기적으로월세 <br/>배당금을 <br/>받아보세요.<br/>매각차익은 덤.</h1>
                        <p>이율은 높게, 관리 부담은 적게<br/>
    매각, 운용보수를 동시에 받을 수 있는 <br/>부동산 조각 투자하기</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RealEstate