
import React, { useRef, useState, useEffect } from 'react';
import './NewNotes.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setUserNotesId, postNewNotes, updateNote, moveToTrash } from '../../../redux/action';

function NewNotes(params) {

    const [scroll, setScroll] = useState(false)
    const [pin, setPin] = useState(false)
    const isEdit = params.value

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const textareaRef = useRef(null);
    const containerRef = useRef(null)

    const notesData = useSelector(data => data.notes)
    const { notes, paths, userNotesId } = notesData && notesData
    const { homePath,categoryNotesPath, userNotesPath } = paths
    const editNotes = notes.find(note => note.id === userNotesId)

    // const editNotesInitialValues = {
    //     id: editNotes.id,
    //     title: editNotes.title,
    //     category: editNotes.category,
    //     content: editNotes.content,
    //     isPin: editNotes.isPin,
    // }

    const newNotesInitialValues = {
        id: notes && notes.length + 1,
        title: '',
        category: 'Notes',
        content: '',
        isPin: false,
    }

    const formikData = useFormik({
        // initialValues: {
        //     id: notes && notes.length + 1,
        //     title: '',
        //     category: 'Notes',
        //     content: '',
        //     isPin: false,
        // },
        initialValues: (isEdit === 'edit') ? '' : newNotesInitialValues,
        onSubmit: (values) => {
            const date = new Date()
            const notesObject = {
                "id": values.id,
                "category": values.category ? values.category : 'Notes',
                "title": values.title,
                "content": values.content,
                "createdAt": {
                                "date": date.toISOString().replace('/', '-').replace('/', '-').split('T')[0], 
                                "time": date.toLocaleTimeString()
                            },
                'isPin': values.isPin,
            };
            (isEdit === 'edit') ? dispatch(updateNote(notesObject)) : dispatch(postNewNotes(notesObject))
            navigate(`${categoryNotesPath}/${values.category}/${userNotesPath}/${values.id}`)
            dispatch(setUserNotesId(values.id))
            
            formikData.resetForm()
            console.log(notesObject)
        },
    });


    useEffect(() => {
        const handleScroll = (event) => setScroll(event.target.scrollTop > 0)
        containerRef.current.addEventListener('scroll', handleScroll)
        // return () => containerRef.current.removeEventListner('scroll', handleScroll)
    }, [containerRef])

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [formikData.values.content]);

    const handleCancelNotes = () => {
        navigate(-1)
        formikData.resetForm()
    }

    return (
        <div
            id='new-notes-container'
            className='notes-container-item'
            ref={containerRef}
        >
            <form
                id='new-notes-input-form'
                className='container'
                onSubmit={formikData.handleSubmit}
            >
                <div
                    id='new-notes-nav'
                    className={scroll && 'box-shadow'}
                >   
                    <div className='flex-justify-center-align-center'>
                        {/* <button
                            id='new-notes-cancel'
                            className='note-menu-btn'
                            onClick={handleCancelNotes}
                        >
                            <i className='fa-solid fa-arrow-left'/>
                        </button> */}
                        <h2
                            id='nav-title'
                            className={scroll ? 'display-inline' : 'display-none'}
                        > 
                            {formikData.values.title}
                        </h2>
                    </div>
                    <div>
                        <button 
                            type='button'
                            className='note-menu-btn'
                        >
                            <i 
                                id='pin-input' 
                                className='fa-solid fa-star pin '
                                onClick={() => formikData.setFieldValue('isPin', !formikData.values.isPin)}
                            >
                                <i id='un-pin-input' className={`fa-solid fa-star un-pin 
                                                                ${formikData.values.isPin ? 'display-none' : 'display-inline'}`}></i>
                            </i>
                            <span className='note-menu-btn-info'>pin</span>
                        </button>
                        <button     //delete btn
                            type='button'
                            className='note-menu-btn'
                            onClick={() => dispatch(moveToTrash())}
                        >
                            <i className='fa-solid fa-trash'></i>
                            <span className='note-menu-btn-info'>trash</span>
                        </button>
                    </div>
                </div>
                <div id="form-input-container">
                    <input
                        type='text'
                        name='title'
                        id='title-input'
                        className={`notes-input ${scroll && 'title-background-transparent'}`}
                        value={formikData.values.title}
                        onChange={formikData.handleChange}
                        placeholder='Title'
                        disabled={scroll ? true : false}
                    />

                    <textarea
                        type='text'
                        name='content'
                        id='content-input'
                        className='notes-input'
                        value={formikData.values.content}
                        onChange={formikData.handleChange}
                        placeholder='Note'
                        ref={textareaRef}
                        align='left'
                        required
                    />

                    {/* <div
                        id='content-save-container'
                    >
                        <div>1</div>
                        <button
                            type='submit'
                            id='notes-submit-btn'
                            className='btn btn-large btn-primary'
                        >
                            Save
                        </button>
                    </div> */}
                </div>
            </form>
        </div>
    );
}

export default NewNotes;
