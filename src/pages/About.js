import "./home.css"
import background from "./Background.png" 
import tire from "./tireone.png"
import logo from "./EclecticTireCompanyLogo.png"
import ecinsta from "./ecinsta.png"
import ecfb from "./ecfb.png"
import minsta from "./minsta.png"
import mfb from "./mfb.png" 
import { Link } from "react-router-dom"

export default function About() {
    return  <div>
        <section class="frontpage" style={{
                        backgroundImage: 'url('+background+')',
                        }}>
        <section class="page">
            <section class="middlebox">
                <section class="line">
                    <section class="box">
                        <Link to="/ProductPage">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                        </Link>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                </section>
                <section class="line">
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                </section>
                <section class="line">
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                    <section class="box">
                        <h2>Item 001</h2>
                        <img src={tire} width="350" height="500" />
                        <p>Ferarri Michelin 420 Tires</p>
                    </section>
                </section>
            </section>
        </section>
        <section class="foot">
            <section class="eclectic">
                <img src={logo} width="300" height="150" />
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