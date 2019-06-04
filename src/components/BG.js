import homeBgLg from "../images/bg/Poster-Girl.png";
import newsBgLg from "../images/bg/Poster-Rules.png";
import suspectsBgLg from "../images/bg/Male-Closeup.png";
import homeBgSml from "../images/bg/Poster-Girl-Small.png";
import newsBgSml from "../images/bg/Poster-Rules-Small.png";
import suspectsBgSml from "../images/bg/Male-Closeup-Small.png";

let homeBg = homeBgLg;
let newsBg = newsBgLg;
let suspectsBg = suspectsBgLg;

if (window.innerWidth < 469){
     homeBg = homeBgSml;
     newsBg = newsBgSml;
     suspectsBg = suspectsBgSml;
}

const bgImgObj = {
    homeBg: homeBg,
    newsBg: newsBg,
    suspectsBg: suspectsBg,
}


export default bgImgObj;