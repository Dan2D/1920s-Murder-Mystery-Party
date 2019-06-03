import React, {useState} from "react";
import {useSpring, animated} from "react-spring";
import ModalPass from "../../modal/Modal";
import "../Suspects.css";
const Character = props => {
  const [modalStatus, setModal] = useState(false);
  const [aniProps, setAniProps] = useSpring(() => ({opacity: 0}));

  function modalClose() {setModal(false);}

  setAniProps({opacity: modalStatus ? 1 : 0});

  //Function to import all images dynamically given Reacts restrictions
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context(
      "../../../images/characters",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  let charImg = {
    backgroundImage: `url(${images[props.profile]})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "4vw",
    width: "4vw"
  };

  return (
    <div>
        <animated.div style={aniProps}>
          <ModalPass onClick={modalClose} 
                     show={modalStatus}/>
        </animated.div>
      <div className="character-container">
        <div className="character-info"
             data-char={props.name}
             data-status={props.status}  
             style={props.name === "Ramona Simpson" ? {display: 'none'} : null}>
              <button className="character-title"    
                      onClick={props.status === "Suspect" ? () => {props.onClick()} : null}>
                  <div className="profile-img"
                       style={charImg} />
                  <h3>{props.name}</h3>
              </button>
          <hr></hr>
          <ul>
            <li>Age: {props.age}</li>
            <li>Sex: {props.sex}</li>
            <li>Occupation: {props.occupation}</li>
            <li>Hometown: {props.homeTown}</li>
            <li>Characteristics: {props.chars}</li>
          </ul>
        </div>
      </div>
      <div className="secret-container" 
           data-char={props.name}>
        <h4>Secret Character Info</h4>
        <p>{props.secret}</p>
        <hr/>
        {props.costume ? <h4>Costume Guidelines</h4> : null}
        <p>{props.costume}</p> 

      </div>
    </div>
  );
};

export default Character;
