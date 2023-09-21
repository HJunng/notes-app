import * as React from 'react';
import { Note } from '../models/note.model';
import { Button, Card } from 'react-bootstrap';

interface INotesProps {
  note: Note,
  handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({note, handleDelete}) => {
  return (
    <div className="mb-3">
      <Card style={{ width: '18rem', backgroundColor:note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
          <Card.Text>{note.text}</Card.Text>
          <Button className='mb-3' variant='danger' onClick={() => handleDelete(note.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
