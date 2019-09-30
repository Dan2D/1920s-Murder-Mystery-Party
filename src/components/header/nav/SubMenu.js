import React from "react";

const SubMenu = props => {
    return (
        <div className={props.open}>
            <a data-testid="sub-attire" href="https://vintagedancer.com/category/1920s/" target="blank">ATTIRE</a>
            <a data-testid="sub-history" href="http://www.1920s-fashion-and-music.com/hollywood-in-the-1920s.html" target="blank">HISTORY</a>
            <a data-testid="sub-slang" href="http://www.dieselpunks.org/profiles/blogs/a-flapper-to-english" target="blank">SLANG</a>
            <a  data-testid="sub-drinks"href="https://cocktails.lovetoknow.com/cocktail-recipes/1920s-drink-recipes" target="blank">DRINKS</a>
            <a  data-testid="sub-music" href="https://open.spotify.com/playlist/59SthW7SLui6hMa890seZL" target="blank">MUSIC</a>
        </div>
    )
}

export default SubMenu;