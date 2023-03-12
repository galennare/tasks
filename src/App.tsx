import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header &#xd83c;&#xdf89;</h1>
            <p>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="App-div">
                            <p>Hello World!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="App-div">
                            <p>Names of very cool cats:</p>
                            <ul>
                                <li>Venus</li>
                                <li>Lulu</li>
                                <li>Newton</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img
                src="https://media4.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif"
                alt="Dancing cat"
            />
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://media4.giphy.com/media/9V8YiWAcXYxT14YXHI/giphy.gif"*/}
            {/*        alt="Bongo cat"*/}
            {/*    />*/}
            {/*</div>*/}
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
