import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateCommentForm } from '../../utils/validateCommentForm';

const CommentForm = ({campsiteId}) => {
    // array destructuring syntax
    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        console.log(comment);
        setModalOpen(false);
    };
    return (
        <>
        {/* this is what causes the modal to open */}
        <Button outline onClick={() => setModalOpen(true)}>
            {/* This is the styeling of the button */}
            <i className='fa fa-pencil fa-lg' /> Add Comment
            {/* This is the form when the modal opens */}
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => {
                    return (setModalOpen(false))
                }}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    {/* this is the form value when it first renders */}
                    <Formik initialValue={{
                        rating: 'undefined', 
                        author: '', 
                        commentText: ''
                    }}
                    onSubmit={handleSubmit}
                    // This is connecting the errors file
                    validate={validateCommentForm}
                    >
                        <Form>
                            <FormGroup>
                                {/* here is where the form inputs are created */}
                                <Label htmlFor='rating'>Rating</Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                    {/* adding the if else code block to the view */}
                                    <ErrorMessage name='rating'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>Your Name</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                    {/* adding the if else code block to the view */}
                                    <ErrorMessage name='author'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='commentText'>Comment</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </Button>
        </>
    )};

export default CommentForm;