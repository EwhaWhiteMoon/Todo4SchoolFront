import { Worker } from 'cluster';
import React, { ReactPropTypes } from 'react';
import {Col, Container, Row} from "react-bootstrap";


import { Work } from "./WorkCard/WorkCard"
import WorkList from "./WorkList/WorkList"

function App() {
  const testWork:Array<Work> = ['국어', '영어', '수학'].map((v): Work=>{return{
    title: v,
    start: new Date(),
    end: new Date(),
    description: v + "과목 수행평가입니다...여러줄치면어떻게될까ㅁㄴㅇㄻㄴㅇㄹ",
  };})
  return (
    <>
    <h1 className = "text-center"> Todo를 만들자!!</h1>
    <Container>
      <Row>
        <Col><WorkList title = "할 일" works = {testWork}></WorkList></Col>
        <Col><WorkList title = "하는 중" works = {testWork}></WorkList></Col>
        <Col><WorkList title = "완료" works = {testWork}></WorkList></Col> 
      </Row>
    </Container>
    </>
  );
}

export default App;
