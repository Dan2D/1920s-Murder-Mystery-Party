import React, {useState} from "react";
import {useSpring, animated} from "react-spring";
import ModalPass from "../../modal/Modal";
import charData from "./CharData";
import Character from "./Character";

const CharList = props => {
  const [modalStatus, setModal] = useState(false);
  const [aniProps, setAniProps] = useSpring(() => ({opacity: 0}));

  function modalClose() {setModal(false);}

  setAniProps({opacity: modalStatus ? 1 : 0});
  return (
    <div>
        <animated.div style={aniProps}>
          <ModalPass onClick={modalClose} 
                     show={modalStatus}/>
        </animated.div>
      {charData.map(charProps => (
        props.status === charProps.status ? 
        <Character key={charProps.name} {...charProps} onClick={() => props.onClick()} /> : null
      ))}
    </div>
  );
};

export default CharList;
