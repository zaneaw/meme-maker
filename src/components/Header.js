import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img src="./images/troll-face.png" className="header--image" alt="troll face"/>
            <h2 className="header--title">Meme Maker</h2>
            <h4 className="header--project">Built by Zane with ReactJS</h4>
        </header>
    );
}
