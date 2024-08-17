
const SET_USER_NOTES_ID = 'SET_USER_NOTES_ID'
const POST_NEW_NOTES = 'POST_NEW_NOTES' 
const SET_PIN = 'SET_PIN'
const FILTER_NOTES = 'FILTER_NOTES'
const IS_CHECKBOX_ITEMS_MERGE = 'IS_CHECKBOX_ITEMS_MERGE'
const MOVE_TO_TRASH = 'MOVE_TO_TRASH'
const UPDATE_NOTE = 'UPDATE_NOTE'
const POP_NOTE = 'POP_NOTE'

const setUserNotesId = (notesId) => ({type: SET_USER_NOTES_ID, payload: notesId})
const postNewNotes = (newNotesObject) => ({type: POST_NEW_NOTES, payload: newNotesObject})
const setPin = (pin) => ({type: SET_PIN, payload: pin})
const setFilterNotes = (category) => ({type: FILTER_NOTES, payload: category})
const setCheckboxItemsMerge = () => ({type: IS_CHECKBOX_ITEMS_MERGE})
const moveToTrash = () => ({type: MOVE_TO_TRASH})
const updateNote = (editedNotesObject) => ({type: UPDATE_NOTE, payload: editedNotesObject})
const popNotes = () => ({type: POP_NOTE})

export {
    SET_USER_NOTES_ID, POST_NEW_NOTES, SET_PIN, FILTER_NOTES, IS_CHECKBOX_ITEMS_MERGE, MOVE_TO_TRASH,UPDATE_NOTE,POP_NOTE,
    setUserNotesId, postNewNotes, setPin, setFilterNotes, setCheckboxItemsMerge, moveToTrash, updateNote, popNotes
}