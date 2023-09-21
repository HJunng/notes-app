import * as React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

interface ITagsProps {
  allTags: string[],
  selectedTags: string[],
  customTag:string,
  handleTagChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleCustomTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  addCustomTag: () => void
}

const Tags: React.FunctionComponent<ITagsProps> = ({allTags,selectedTags,customTag,handleTagChange,handleCustomTagChange,addCustomTag}) => {
  return (
    <>
      <Form.Group className='mb-3' controlId='formBasicTags'>
        <Form.Label>Tags</Form.Label>
        <Form.Select multiple onChange={handleTagChange}>
          {allTags.map((tag,index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicTags'>
        <Form.Label>Tags</Form.Label>
        <Form.Select multiple aria-label='Default select Tag' onChange={handleTagChange}>
          {allTags.map((tag,index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' style={{display:'flex'}}>
          <Form.Control style={{flex:'8'}} type='text' placeholder='Add a tag' value={customTag} onChange={handleCustomTagChange} />
          <Button style={{flex: '2'}} variant='secondary' onClick={addCustomTag}>Add Tag</Button>
      </Form.Group>
    </>
  );
};

export default Tags;
