import React, { useState } from 'react';
import './App.css';
import {Note} from './models/note.model';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotesModal from './components/CreateNotesModal';
import SelectBasicExample from './components/SelectBasicExample';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id:(new Date()).toLocaleString(),
    title: "Meetings",
    text:" Schedule meeting with UI/UX Team",
    color: "#fff0ba",
    date: (new Date()).toLocaleString(),
    tags: ["Work"]
  }]);

  const[showModal, setShowModal] = useState(false); //Modal state

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Header/>
      <Container className='mt-5 notePage'>
        <Row className='notePage'>
          {/** 사이드바 */}
          <Col xs={3} className='sidebar'>
            <h3>Sidebar</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
          
          {/** Main Content */}
          <Col xs={9}>
            <Row className='mt-3'>
              <Col className='NotesHeader'>
                <h2 style={{display:'inline-block'}}>Notes</h2>
                <CreateNotesModal notes={notes} setNotes={setNotes} />
              </Col>
            </Row>
            <NotesList notes={notes} setNotes={ setNotes } />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
