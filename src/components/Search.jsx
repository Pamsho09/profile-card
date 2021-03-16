import React, { useState, useRef ,useContext} from "react";
import styled from "styled-components";
import github from "../assets/images/personaje-github.png";
import AppContext from '../context/';
function Search(props) {
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
    justify-content: center;
    .logo {
      width: 50px;
      height: 50px;
    }
    form {
      width: 80%;
      display: flex;

      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 2em;
      input {
        width: 100%;
        text-align: center;
        border: none;
        border-radius: 1em;

        height: 4em;
      }
      .Text {
        font-weight: 700;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
      }
      .search {
        background: ${props.colors.Verydarkdesaturatedblue};
        color: #fff;
      }
    }
  `;
 const {state, addInfo, changeState}=useContext(AppContext)
  const [user, setUser] = useState(null);
  const usersRef = useRef(null);
  console.log(props)
  const handleSubmit = (e) => {
    e.preventDefault();
    let name =user.current.value

    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => {

    


    changeState({
        stateCard: true,
        addInfo:[data],
    })

      });
  };

  return (
    <CardC>
      <img className="logo" src={github} />
      <h3>Search your github profile</h3>

      <form method="GET" onSubmit={handleSubmit}>
        <input
          required
          className="Text"
          type="Text"
          ref={usersRef}
          name="user"
          onChange={()=>{setUser(usersRef)}}
          placeholder="pamsho_js"
          
        />
        <input className="search" type="submit" value="search" />
      </form>
    </CardC>
  );
}

export default Search;
