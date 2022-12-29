import {useState, useEffect, useRef} from "react";
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

const QuestionCount = styled.div`
  margin: 20px 0;
  text-align: center;
  font-size: 15px;
  color: #555;
`;

const MainDiv = styled.div`
    padding: 20px 40px;
`;

const Span = styled.span`
  font-size: 15px;
  color: #555;
  font-weight: 600;
`;

const P = styled.p`
  margin-top: 5px;
  color: #111;
`;

const Options = styled.div`
  margin: 40px 0px 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap:20px;
`;

const SingleOption = styled.div`
  width: calc(50% - 20px);
  border: 1px solid #bbb;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Control = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #eee;
`;

function Question({question, totalQuestions, currentQuestion, setAnswer}){
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    function goToNextQuestion() {
        if(timer) {
            clearTimeout(timer);
        }
        setAnswer(selectedOption);
        setSelectedOption(null);
    }

    useEffect(()=>{
        progressBar.current.classList.remove("active");
        setTimeout(()=>{
            progressBar.current.classList.add("active");
        },0);
        timer.current = setTimeout(goToNextQuestion, 30*1000);
    }, [question]);

    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <QuestionCount>
                <b> {currentQuestion} </b>
                 of
                <b> {totalQuestions}</b>
            </QuestionCount>
            <MainDiv>
                <div className="title">
                    <Span>Question:</Span>
                    <P>{question.title}</P>
                </div>
                <Options>
                    {
                        question.options.map((option, index)=>{
                            return (
                                <div
                                    className={index == selectedOption ? "option active" : "option"}
                                    key={index}
                                    onClick={()=>setSelectedOption(index)}
                                >
                                    {option}
                                </div>

                            );
                        })
                    }
                </Options>
                <Control>
                    {/* <Timer setStop={setStop} /> */}
                    <Button onClick={goToNextQuestion}>Next</Button>
                </Control>
            </MainDiv>
        </div>
    );
}

export default Question;