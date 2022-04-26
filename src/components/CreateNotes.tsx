import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNotesProps{
    notes: Note[]
    setNotes:  React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    const [error, setError] = useState<string>('')
    const titleRef = useRef<HTMLInputElement | null>(null)
    const textRef = useRef<HTMLTextAreaElement | null>(null)
    const colorRef = useRef<HTMLInputElement | null>(null)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(titleRef.current?.value === '' || textRef.current?.value === ''){
            return setError('you cant leave blank fields')
        }
        setError('');
        setNotes([...notes, {
            id: (new Date).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    }
    return(
    <>
        <h2>Create Notes</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className='mt-3 mb-3' onSubmit={(e)=>{handleSubmit(e)}}>
            <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='new title' ref={titleRef}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Text</Form.Label>
                <Form.Control type='text' placeholder='new description' as='textarea' rows={3} ref={textRef}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' >
                <Form.Label htmlFor="colorInput">Notes color</Form.Label>
                <Form.Control type='color' id='colorInput' title='choose color' defaultValue='beige' ref={colorRef}></Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit'>SUBMIT</Button>
        </Form>
    </>)
}

export default CreateNotes