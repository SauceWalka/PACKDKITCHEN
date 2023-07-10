import "./home.css"
import background from "./Background.png" 
import logo from "./EclecticTireCompanyLogo.png"
import ecinsta from "./ecinsta.png"
import ecfb from "./ecfb.png"
import minsta from "./minsta.png"
import mfb from "./mfb.png"
import tire from "./tireone.png" 

export default function ProductPage() {
    return  <div>
        <section class="frontpage" style={{
                        backgroundImage: 'url('+background+')',
                        }}>
        <section class="page">
            <section class="middlebox">
            <section class="ownerspic">
                <section class="A">
                    <img src={tire} width="400" height="600" />
                    <h2><b><i>Product Name</i></b></h2>
                    <button>Add to Cart</button>
                    <p>Introducing the Michelin XTRA GRIP 2023 Tire – where innovation meets exceptional performance. Engineered with precision and crafted with utmost care, this tire sets a new standard for reliability, safety, and control on the road.<br></br>Designed to excel in all weather conditions, the Michelin XTRA GRIP 2023 Tire provides unparalleled traction, whether you're navigating wet roads, icy surfaces, or dry pavements. Its advanced tread pattern, featuring a unique combination of deep grooves and biting edges, ensures maximum grip and superb handling, inspiring confidence in every turn.<br></br>Constructed with cutting-edge materials and Michelin's renowned expertise, this tire offers an extended lifespan without compromising on performance. The durable rubber compound is built to withstand the rigors of everyday driving, delivering exceptional tread life and reduced rolling resistance for improved fuel efficiency.</p>
                </section>
                <section class="A">
                    <h2><b><i>Related Products</i></b></h2>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                    <section class="B">
                        <img src={tire} width="100" height="150" />
                        <h3><i>Product Name</i></h3>
                        <button>Add to Cart</button>
                    </section>
                </section>
            </section>
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
        </section>
    </div>
}