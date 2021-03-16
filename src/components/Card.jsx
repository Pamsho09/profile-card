import React ,{useContext}from "react";
import styled from "styled-components";
import bg from "../assets/images/bg-pattern-card.svg";
import person from "../assets/images/image-victor.jpg"
import AppContext from '../context/';
function Card(props) {
  const {state}=useContext(AppContext)
const {addInfo}=state

    const CardC = styled.div`
  background-color: #fff;
  width: 320px;
  border-radius: 15px;
  height: 375px;
  z-index: 11;
  overflow: hidden;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span{
      font-weight:400;
      color:${props.colors.Darkgrayishblue}
  }
   .data {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom:2em;
    h3{
      margin:0.5em;
    }
    border-bottom: 1px solid hsl(0deg 0% 88%);;
position: relative;
&::after{
    content:'';
    position:absolute;
    top:-52.5px;
    right:107.8px;
    width:95px;
    height:95px;
    border:5px solid #fff; 
    border-radius:50%;
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url(${addInfo[0].avatar_url})
}
  }
  .information {
    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5em;
      h3 {
        margin: 0;
      }
      span{
       font-size: 11px;

      }
    }
  }
  .back {
    widows: 100%;
  }
`;

  console.log(state);
  return (
    <CardC>
      <img className="back" src={bg} />
      <div className="data">
        <h3>
         {addInfo[0].login} 
        </h3>
        <span>{addInfo[0].name}</span>
      </div>

      <div className="information">
        <div className="info">
          <h3>{addInfo[0].following}</h3>
          <span>Following</span>
        </div>
        <div className="info">
          <h3>{addInfo[0].followers}</h3>
          <span>Followers</span>
        </div>
        <div className="info">
          <h3>{addInfo[0].public_repos}</h3>
          <span>Repos</span>
        </div>
      </div>
    </CardC>
  );
}

export default Card;
