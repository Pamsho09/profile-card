import React, { useContext} from "react";
import styled, { createGlobalStyle } from "styled-components";
import bgTop from "../assets/images/bg-pattern-top.svg"
import bgBottom from "../assets/images/bg-pattern-bottom.svg"
import Card from "../components/Card"
import Search from "../components/Search"
import AppContext from '../context/';
const colors = {
  Darkcyan: " hsl(185, 75%, 39%)",
  Verydarkdesaturatedblue: "hsl(229, 23%, 23%)",
  Darkgrayishblue: "hsl(227, 10%, 46%)",

  Darkgray: "hsl(0, 0%, 59%)",
};
const StyleGlobal = createGlobalStyle`
body{
    padding:0;
    margin:0;
}
*{
    font-family: 'Kumbh Sans', sans-serif;
}
`;
const Main = styled.div`
  widows: 100%;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: ${colors.Darkcyan};
  position:relative;
overflow:hidden;
  .bg{
      position:absolute;
      
  }
  .top{
    transform: rotate(-7deg);

    top: -90%;
    right: 26%;
  }
  .bottom{
    bottom: -83%;
    left: 46%;
    transform: rotate(45deg);
     

  }
`;
function App() {
    const {state}=useContext(AppContext)
  return (
   <>
      <Main>
          <img src={bgTop} className="bg top"/>
          <img src={bgBottom} className="bg bottom"/>
         {
             state.stateCard? <Card  colors={colors}/> : <Search  colors={colors}/>
         }



      </Main>
    <StyleGlobal/></>
  );
}

export default App;
