import Slider from "./Slider"
import background from "./Background.png"
import logo from "./EclecticTireCompanyLogo.png"
import people from "./people.png"
import ad from "./ad.jpg"
import ecinsta from "./ecinsta.png"
import ecfb from "./ecfb.png"
import minsta from "./minsta.png"
import mfb from "./mfb.png"
import "./home.css"

export default function Home() {
    return <div>
    <section class="frontpage" style={{
                    backgroundImage: 'url('+background+')',
                    }}>
        <section class="top">
            <Slider/>
        </section>
    <section class="middle">
        <section class="rightbox">
            <section class="head">
                <h1><b><i>Reach Out Or Check Us Out</i></b></h1>
            </section>
    <section class="infobox">
            <section class="other">
                <h3><i>Phone</i></h3>
                <p>(443) xxx-xxxx</p>
                <br></br>
                <h3><i>Email</i></h3>
                <button><i>Reach Out</i></button>
            </section>
            <section class="other">
                <h3><i>Eclectic<br></br>HomePage</i></h3>
                <button><i>ECM Home</i></button>
                <br></br>
                <h3><i>Licoln Parts<br></br>Website</i></h3>
                <button><i>Get Parts</i></button>
            </section>
    </section>    
        </section>
    </section>
    <section class="bottomad">
            <img src={ad} width="2650" height="550" />
        </section>
        <section class="foot">
            <section class="eclectic">
                <img src={logo} width="300" height="150" />
                <h1>443-xxx-xxxx</h1>
            </section>
            <section class="footdesc">
            <section class="center">
                <h1><b>Contact</b></h1>
                <h2><b>Reach Eclectic</b> xxx@gmail.com</h2>
                <h2><b>Tire Issues</b> xxx@gmail.com</h2>
                <h2><b>Web Issues</b> JohnLindemon@HBIndustry.co</h2>
                <h2><b>Stripe Payment</b> JohnLindemon@HBIndustry.co</h2>
            </section>
            <section class="center">
                <h1><b>Associates Links</b></h1>
                <h2>Owned by <a href="danikgymandwellness.com">Eclectic Motors</a></h2>
                <h2>Site created by <a href="hbindustry.co">HBIndustry</a></h2>
                <h2>Tires Supplied by <a href="hbindustry.co">Michelin Tires</a></h2>
                <h2>Get Lincoln Part <a href="hbindustry.co">Buy Now</a></h2>
            </section>
            <section class="center">
                <h1><b>Support Links</b></h1>
                <h2>Frequently Asked Questions</h2>
                <h2>Full Tire Catalog</h2>
                <h2>Stripe Payment Issues</h2>
                <h2>Issues With Shipping</h2>
                <h2>Common Issues With Products</h2>
            </section>
            <section class="center">
                <h1><b>Eclectic Social</b></h1>
                <section class="upanddown">
                <img src={ecinsta} width="50" height="50" />
                <img src={ecfb} width="50" height="50" />
                </section>   
            </section>
            <section class="center">
                <h1><b>Michelin Social</b></h1>
                <section class="upanddown">
                <img src={minsta} width="50" height="50" />
                <img src={mfb} width="50" height="50" />
                </section>   
            </section>
        </section>
        </section>
    </section>
    </div>
}

