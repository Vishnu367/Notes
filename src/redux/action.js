
const SET_NOTES_ID = 'SET_NOTES_ID'
const GET_USER_NOTES = 'GET_USER_NOTES'
const SET_NOTES_CREATED_AT = 'SET_NOTES_CREATED_AT'

const setNotesId = (notesId) => ({type: SET_NOTES_ID, payload: notesId})
const getUserNotes = (notesId) => ({type: GET_USER_NOTES, payload: notesId})
const setNotesCreatedAt = (notesCreatedAt) => ({type: SET_NOTES_CREATED_AT, payload: notesCreatedAt})

export {
    SET_NOTES_ID, GET_USER_NOTES, SET_NOTES_CREATED_AT,
    setNotesId, getUserNotes, setNotesCreatedAt,
}