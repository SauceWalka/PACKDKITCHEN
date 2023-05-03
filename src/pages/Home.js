import Slider from "./Slider"
import background from "./Background.png"
import bar from "./bar.png"
import chef from "./chef.png"
import prep from "./prep.png"
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
        <section class="leftbox">
            <section class="head">
                <h1><b>Personal Chef<br></br>Service</b></h1>
                <img src={chef} width="150" height="150" />
            </section>
            <p>We offer a variety of services that relate to helping those in need of a personal chef. If you click below we have times that are still avaliable to book David for you or your family. So its time to get booking so you get eating!!!</p>   
            <button>Book Now</button>
        </section>
        <section class="rightbox">
            <section class="head">
                <h1><b>Meal Prep<br></br> Service</b></h1>
                <img src={prep} width="150" height="150" />
            </section>
            <p>As a private Chef a bulk of what I do is creating delicious health concious meal preps for anyone. So whether you are looking for something specific or want some suggestions click below to talk to me about what we can do!!!</p>
            <button>Email Me</button>
        </section>
    </section>
    <section class="middle">
        <section class="bottom">
            <h1><b>Our Products (Ready to Order)</b></h1>
            <section class="products">
                <section class="item">
                        <img src={bar} width="200" height="200" />
                        <h3>Whey Based<br></br>Protein Bar</h3>
                        <h2><b>$15.99</b> per 10</h2>
                </section>
                <section class="item">
                        <img src={bar} width="200" height="200" />
                        <h3>Whey Based<br></br>Protein Bar</h3>
                        <h2><b>$15.99</b> per 10</h2>
                </section>
                <section class="item">
                        <img src={bar} width="200" height="200" />
                        <h3>Whey Based<br></br>Protein Bar</h3>
                        <h2><b>$15.99</b> per 10</h2>
                </section>
                <section class="item">
                        <img src={bar} width="200" height="200" />
                        <h3>Whey Based<br></br>Protein Bar</h3>
                        <h2><b>$15.99</b> per 10</h2>
                </section>
                <section class="item">
                        <img src={bar} width="200" height="200" />
                        <h3>Whey Based<br></br>Protein Bar</h3>
                        <h2><b>$15.99</b> per 10</h2>
                </section>
            </section>
        </section>
    </section>
        <section class="foot">
            <section class="eclectic">
                <h1>PACKDKITCHEN LLC.</h1>
                <h2>XXX-XXX-XXXX</h2>
                <h2>Established. 2023</h2>
            </section>
            <section class="footdesc">
            <section class="center">
                <h1><b>Contact</b></h1>
                <h2><b>Scheduler</b> username</h2>
                <h2><b>Email:</b> xxx@gmail.com</h2>
            </section>
            <section class="center">
                <h1><b>Social</b></h1>
                <h2><b>Facebook</b> username</h2>
                <h2><b>Instagram</b> username</h2>
            </section>
            <section class="center">
                <h1><b>Associates Links</b></h1>
                <h2>Dani K <a href="danikgymandwellness.com">Dani K Gym</a></h2>
                <h2>Site created by <a href="hbindustry.co">HBIndustry</a></h2>
            </section>
            <section class="center">
                <h1><b>Resources</b></h1>
                <h2>Images Provided by PACKDKITCHEN</h2>
                <h2>Graphics Created by <a href="hbindustry.co">HBIndustry</a></h2>   
            </section>
        </section>
        </section>
    </section>
    </div>
}

