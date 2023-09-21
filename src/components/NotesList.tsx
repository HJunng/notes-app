import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';
import { Button } from 'react-bootstrap';

interface INotesListProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes, setNotes}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  const renderNotes = () => {
    return notes.map(note => {
      return <Notes key={ note.id } note={ note } handleDelete={ handleDelete }/>
    })
  }
  return (
    <>
    <div className='mt-3 flex notesNav' style={{alignItems:'center', justifyContent:'space-between'}}>
      <h2 style={{display:'inline-block'}}>Notes</h2>
      <Button as='input' variant='warning' type='button' value=' + create' />{' '}
    </div>
      <div>{ renderNotes() }</div>
    </>
  );
};

export default NotesList;
