import React, { useState } from 'react';
import './App.css';
import {Note} from './models/note.model';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotesModal from './components/CreateNotesModal';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id:(new Date()).toLocaleString(),
    title: "Meetings",
    text:" Schedule meeting with UI/UX Team",
    color: "#fdfac9",
    date: (new Date()).toLocaleString()
  }]);

  const[showModal, setShowModal] = useState(false); //Modal state

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Header/>
      <Container className='mt-5'>
        <Row>
        <Row className='mt-3'>
          <Col className='NotesHeader'>
            <h2 style={{display:'inline-block'}}>Notes</h2>
            <CreateNotesModal notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
          <Col>
            <NotesList notes={notes} setNotes={ setNotes } />
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default App;
