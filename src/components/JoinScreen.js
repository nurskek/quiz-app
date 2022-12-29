import styled from "styled-components";

const Button = styled.button`
    padding: 10px 20px;
    background: #111;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
`;

const JoinScr = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  padding: 20px;
`;

const H2 = styled.h2`
    font-size: 25px;
    color: #111;
`;

const P = styled.p`
    max-width: 350px;
    color: #555;
`;

function JoinScreen({start}) {
    return (
        <JoinScr>
            <H2>Join Quiz</H2>
            <P>Answer to completely random questions~</P>
            <Button onClick={start}>Start</Button>
        </JoinScr>
    );
}

export default JoinScreen;