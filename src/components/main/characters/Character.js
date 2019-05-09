import React from "react";

const Character = props => {
  //Function to import all images dynamically given Reacts restrictions
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
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
    height: "2em",
    width: "2em"
  };

  return (
    <div>
      <div className="character-container">
        <div className="character-info">
          <div className="profile-img" style={charImg} />
          <h3>{props.name}</h3>
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
      <div className="secret-container" style={{display: "none"}}>
        <h4>Secret Character Info</h4>
        <p>{props.secret}</p>
        <h5>Costume Guidelines</h5>
        <p>{props.costume}</p>
      </div>
    </div>
  );
};

export default Character;
