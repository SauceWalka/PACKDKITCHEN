import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Dropbox from "./Dropbox"
import logo from "./EclecticTireCompanyLogo.png"

export default function Navbar() {
    return ( 
    <nav class="nav">
        <Link to="/" class="site-title">
            <img src={logo} width="290" height="160"/>
        </Link>
        <section class="bar">
        <section class="topofbar">
        <h2><b>Find Your Tires</b></h2>
        <section class="alignment">
        <section class="drop">
            <button onclick="Dropbox()" class="dropbtn">Make</button>
                <section id="myDropdown" class="dropdown-content">
                    <a href="#">Lincoln</a>
                    <a href="#">Ferrari</a>
                    <a href="#">Porsche</a>
                </section>
        </section>
        </section>
        <section class="alignment">
        <section class="drop">
        <button onclick="Dropbox()" class="dropbtn">Model</button>
                <section id="myDropdown" class="dropdown-content">
                    <a href="#">Lincoln</a>
                    <a href="#">Ferrari</a>
                    <a href="#">Porsche</a>
                </section>
        </section>
        </section>
        <section class="alignment">
        <section class="drop">
        <button onclick="Dropbox()" class="dropbtn">Year</button>
                <section id="myDropdown" class="dropdown-content">
                    <a href="#">Lincoln</a>
                    <a href="#">Ferrari</a>
                    <a href="#">Porsche</a>
                </section>
        </section>
        </section>
        <section class="ulbox">
        <ul>
            <CustomLink to="/About">Find</CustomLink>
        </ul>
        </section>
        <h2>or</h2>
        <section class="align">
        <section class="search">
            Search
        </section>
        </section>
        <section class="ulbox">
        <ul>
            <CustomLink to="/About">Find</CustomLink>
        </ul>
        </section>
        </section>
        <section class="bottomofbar">
        <h2><b>Find by Tire Size</b></h2>
        <section class="align">
        <section class="drop">
        <button onclick="Dropbox()" class="dropbtton">Tire Size</button>
                <section id="myDropdown" class="dropdown-content">
                    <a href="#">Lincoln</a>
                    <a href="#">Ferrari</a>
                    <a href="#">Porsche</a>
                </section>
        </section>
        </section>
        <section class="ulbox">
        <ul>
            <CustomLink to="/About">Find</CustomLink>
        </ul>
        </section>
        <h2><b>or Tire Type</b></h2>
        <section class="align">
        <section class="drop">
        <button onclick="Dropbox()" class="dropbtton">Tire Type</button>
                <section id="myDropdown" class="dropdown-content">
                    <a href="#">Lincoln</a>
                    <a href="#">Ferrari</a>
                    <a href="#">Porsche</a>
                </section>
        </section>
        </section>
        <section class="ulbox">
        <ul>
            <CustomLink to="/About">Find</CustomLink>
        </ul>
        </section>
    </section>
    </section>
    </nav>
  )
}


function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}