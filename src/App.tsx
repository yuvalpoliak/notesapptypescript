import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Note } from './models/note.model';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'meetings',
    text: 'meeting with QA',
    color: 'beige',
    date: (new Date).toString()
  }]);
  return (
    <>
      <Header/>
      <Container className='mt-5'>
        <Row>
          <Col>
          <NotesList notes= { notes } setNotes={ setNotes }/>
          </Col>
        </Row>
        <Row>
          <Col>
          <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
