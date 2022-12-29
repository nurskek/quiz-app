import {useState} from "react";

import QuizScreen from "./components/QuizScreen.js";
import JoinScreen from "./components/JoinScreen.js";
// import Navbar from "./components/Navbar.js";

import styled from "styled-components";

const Navbar = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #d5d5d5;
`;

const Logo = styled.div`
  color: #111;
`;

const QuizContainer = styled.div`
  position: relative;
  margin: 50px auto 20px;
  width: 95%;
  max-width: 650px;
  min-height: 350px;
  background: #fff;
  border: 1px  solid #eee;
  box-shadow: 0px 2px 5px 2px rgba(0, 0 , 0,  0.05);
`;

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      <Navbar>
            <Logo className="logo">Quiz App</Logo>
        </Navbar>
      <QuizContainer className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)}/>
          ) : (
            <JoinScreen start={() => setIsQuizStarted(true)}/>
          )
        }
      </QuizContainer>

    </>
  )
}
export default App;