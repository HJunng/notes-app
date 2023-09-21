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
    color: "#fff0ba",
    date: (new Date()).toLocaleString(),
    tags: ["Work"]
  }]);

  const [allTags, setAllTags] = useState<string[]>(['Work','Personal','Important']);
  const [filterNotes, setFilterNotes] = useState<Note[]>(notes);

  const filterByTag = (tag: string) => {
    if(tag === 'All'){
      setFilterNotes(notes); //모든 노트를 보여줍니다.
    }else{
      setFilterNotes(notes.filter(note => note.tags?.includes(tag)));
    }
  }


  return (
    <>
      <Header/>
      <Container className='mt-5 notePage'>
        <Row className='notePage'>
          {/** 사이드바 */}
          <Col xs={3} className='sidebar p-4'>
            <h3 className='text-center bg-light p-2 rounded'>Tags</h3>
            <ul className='list-group mt-3'>
              <li className='list-group-item' style={{padding:'1rem 2rem'}} onClick={() => filterByTag('All')}>All</li>
              {allTags.map((tag,index) => (
                <li key={index} style={{padding:'1rem 2rem'}} className='list-group-item d-flex justify-cnotent-between align-items-center' onClick={() => filterByTag(tag)}>
                  {tag}
                </li>
              ))}
            </ul>
          </Col>
          
          {/** Main Content */}
          <Col xs={9}>
            <Row className='mt-3'>
              <Col className='NotesHeader'>
                <h2 style={{display:'inline-block'}}>Notes</h2>
                <CreateNotesModal notes={notes} setNotes={setNotes} allTags={allTags} setAllTags={setAllTags} />
              </Col>
            </Row>
            <NotesList notes={filterNotes} setNotes={ setNotes } />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
