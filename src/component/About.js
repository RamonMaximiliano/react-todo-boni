import '../style/app.css';

import { Link } from "react-router-dom"

function About(props) {
    return (
        <div className="mainAbout">
            <a href="https://github.com/RamonMaximiliano" className="about" target="_blank">Click to go to GitHub</a>
            <Link to={"/"} className="about">Click Home page</Link>
        </div>
    );
}

export default About