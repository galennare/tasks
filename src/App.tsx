import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 & Galen Nare with React Hooks and TypeScript
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
        </div>
    );
}

export default App;
