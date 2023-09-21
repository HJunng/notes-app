import * as React from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesModalProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotesModal: React.FunctionComponent<ICreateNotesModalProps> = ({ notes, setNotes }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("모든 값을 입력해주세요!");
    }

    setError("");
    setNotes([...notes, {
      id: (new Date()).toLocaleString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toLocaleString()
    }]);

    // 폼 초기화
    if (titleRef.current) {
      titleRef.current.value = "";
    }
    if (textRef.current) {
      textRef.current.value = "";
    }
    if (colorRef.current) {
      colorRef.current.value = "#dfdfdf"; // 기본 색으로 설정
    }

    handleClose();  // 모달 닫기
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        + Create Note
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateNotesModal;
