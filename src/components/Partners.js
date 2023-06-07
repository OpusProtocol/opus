import p1 from '../assets/img/partner_1.svg'
import p2 from '../assets/img/partner_2.svg'
import p3 from '../assets/img/partner_3.svg'
const Partners = () => {
    return (
        <section id="partner">
            <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h4>Partners</h4>
                </div>
                <div class="col-lg-6">
                    <div class="partner-right">
                        <img src={p1} class="img-fluid" alt=''/>
                        <img src={p2} class="img-fluid" alt=''/>
                        <img src={p3} class="img-fluid" alt=''/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Partners