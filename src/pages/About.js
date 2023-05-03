import "./home.css"
import background from "./Background.png" 
import hbi from "./HBIndustry.png"

export default function About() {
    return  <div>
        <section class="frontpage" style={{
                        backgroundImage: 'url('+background+')',
                        }}>
                <section class="outside">
                <section class="space">
                <section class="title">
                    <h1>About PACKDKITCHEN</h1>
                </section>
                </section>
                </section>
                <section class="outside">
                <section class="box">
                    <section class="fill">
                        <h1>David Pack<br></br>Owner and CEO</h1>
                        <img src={hbi} width="300" height="300" />
                        <section class="content">
                            <h2><b>Accolades</b></h2>
                            <p>I have been a professional chef for X years. WOrking as the head chef at a number of establishments including; xxx, xxx, xxx. I have also helped a number of clients since starting PACKDKITCHEN, and I look forward to helping you too!!</p>
                        </section>
                    </section>
                </section>
                </section>
                <section class="outside">
                <section class="title">
                    <h1>Recent Work</h1>
                </section>
                </section>
                <section class="middle">
                    <section class="leftbox">
                        <img src={hbi} width="600" height="200" />
                        <h2>Glazed Salmon w/ Truffle Mac and Cheese</h2>
                    </section>
                    <section class="rightbox">
                        <img src={hbi} width="600" height="200" />
                        <h2>Glazed Salmon w/ Truffle Mac and Cheese</h2>
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