function JoinScreen({start}) {
    return (
        <div className="join-screen">
            <h2>Join Quiz</h2>
            <p>Answer to completely random questions~</p>
            <button onClick={start}>Start</button>
        </div>
    );
}

export default JoinScreen;