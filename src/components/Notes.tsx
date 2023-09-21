import * as React from 'react';
import { Note } from '../models/note.model';
import { Button, Card } from 'react-bootstrap';

interface INotesProps {
  note: Note,
  handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({note, handleDelete}) => {
  return (
    <div className="m-3" style={{display:'inline-block'}}>
      <Card style={{ width: '18rem', height: '16rem', backgroundColor:note.color }}>
        <Card.Body>
          <Card.Title style={{fontSize:'1.5rem'}}>{note.title}</Card.Title>
          <Card.Text style={{ height: '3rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{note.text}</Card.Text>
          <div className='tags'>
            {note.tags?.map((tag,index) => (
              <span className='tag' key={index}>{tag}</span>
            ))}
          </div>
          <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
          <Button className='mb-3' variant='danger' style={{margin:'10px'}} onClick={() => handleDelete(note.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
