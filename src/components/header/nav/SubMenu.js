import React from "react";

const SubMenu = props => {
    return (
        <div className={props.open}>
            <a href="https://vintagedancer.com/category/1920s/" target="blank">ATTIRE</a>
            <a href="http://www.1920s-fashion-and-music.com/hollywood-in-the-1920s.html" target="blank">HISTORY</a>
            <a href="http://www.dieselpunks.org/profiles/blogs/a-flapper-to-english" target="blank">SLANG</a>
            <a href="https://cocktails.lovetoknow.com/cocktail-recipes/1920s-drink-recipes" target="blank">DRINKS</a>
            <a href="https://open.spotify.com/playlist/59SthW7SLui6hMa890seZL" target="blank">MUSIC</a>
        </div>
    )
}

export default SubMenu;