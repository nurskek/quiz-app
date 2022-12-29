import styled from "styled-components";

const ResultScr = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

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

function QuizResult({result, retry}) {
    return (
        <ResultScr>
            <h2>Result: {result.percentage} points</h2>
            <p>Selected {result.correct} correct option out of {result.total} questions.</p>
            <Button onClick={retry}>Retry</Button>
        </ResultScr>
    );
}
export default QuizResult;