import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
      <h1>
        Dhrubojyoti Das
      </h1>
      <main>
        <HashLink  to={"/#home"}>Home</HashLink>
        <Link to={"/review"}>Review</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#Skills"}>Skills</HashLink>
        <HashLink to={"/#socials"}>Socials</HashLink>
      </main>
    </nav>
  )
}

export default Header;