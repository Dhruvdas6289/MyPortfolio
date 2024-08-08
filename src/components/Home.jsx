import React from "react";
import vg from "../assets/2.webp";
import me from "../assets/vic.jpg";
import {AiFillInstagram,AiFillFacebook,AiFillGithub} from "react-icons/ai";
const Home = () => {
  return (
    <>

        <div className="home" id="home">
          

        <main>
        <img src={me} alt="Profile" className="profile-pic" />
            <h1 >
              Web Developer
            </h1>
            <p>Full Stack</p>

        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
            Full Stack Web Developer.<br  />
            I am  here to develope your Web App as per your needs.<br  />
            Go through my Web Application for details.<br  />
            Dont forget to add your thoughts in the comment section.
        </p>
      </div>

    </div>

    <div className="home3" id="about">
      <div>
      <h1>About me</h1>
      <p>
      Hello! I am a 4th-year student at Techno India University, currently pursuing a Bachelor of Technology (B.Tech) in Computer Science Engineering (CSE). My primary interest lies in web development, where I enjoy creating intuitive and dynamic web applications. With a strong foundation in computer science principles and a passion for coding, I am eager to further my skills and knowledge in the field of web development. I am excited about the opportunities ahead and look forward to contributing to innovative projects and learning from industry experts.
      </p>
    </div>
    </div>

    <div className="skills" id="Skills">
      <div>
        <h1>My Skills</h1>
        <p>
          <ul>
            <li>C/C++</li>
            <li>Object Oriented Programing in C++</li>
            <li>Data Structure and Algorith in C++</li>
            <li>Data Base Management System using SQL</li>
            <li>Python(Basics)</li>
            <li>HTML,CSS,Java Script</li>
            <li>PHP for Backend</li>
            <li>React Js</li>
            <li>Graphic  Designing</li>
            <li>Amazon Web Services</li>
          </ul>
        </p>
      </div>
    </div>

    <div className="home4" id="socials">
      <div>
        <h1>Socials</h1>
        <article>
          <div
          style={{animationDelay: "0.3s"}}> 
            <AiFillInstagram 
            onClick={() => window.open('https://www.instagram.com/silver_shed01234', '_blank')} />
            <p>Insta</p>
          </div>
          <div
          style={{animationDelay: "0.5s"}}> 
            <AiFillFacebook 
            onClick={() => window.open('https://www.facebook.com/dhruv.das.39142', '_blank')}/>
            <p>FB</p>
          </div>

          <div
          style={{animationDelay: "0.7s"}}> 
            <AiFillGithub
            onClick={() => window.open('https://github.com/Dhruvdas6289', '_blank')}/>
            <p>GitHub</p>
          </div>
          
        </article>
      </div>
    </div>
    </>

  )
}

export default Home;