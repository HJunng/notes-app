import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
  const[error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(titleRef.current?.value === "" || textRef.current?.value === ""){
      return setError("모든 값을 입력해주세요!");
    }

    setError("");
    setNotes([...notes, {
      id: (new Date()).toLocaleString(),
      title: (titleRef.current as HTMLInputElement).value,
      text:(textRef.current as HTMLTextAreaElement).value,
      color:(colorRef.current as HTMLInputElement).value,
      date: (new Date()).toLocaleString()
    }]);

    //폼 초기화
    (titleRef.current as HTMLInputElement).value="";
    (textRef.current as HTMLTextAreaElement).value="";
    (colorRef.current as HTMLInputElement).value="#dfdfdf";

    
  }

  return (
    <>
      <h2>Create Notes</h2>
      { error && <Alert variant='danger'>{ error }</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='제목을 입력해주세요' ref={titleRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control as='textarea' placeholder='내용을 입력해주세요' ref={textRef} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='colorInput'>Notes Colors</Form.Label>
          <Form.Control type='color' id='colorInput' defaultValue='#dfdfdf' title='Choose your color' ref={colorRef} />
        </Form.Group>
        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </>
  );
};

export default CreateNotes;
