import { combineReducers } from "redux"
import { sampleData } from "./sampleData"
import { SET_NOTES_ID, GET_USER_NOTES, SET_NOTES_CREATED_AT } from "./action"

const initialState = {
    sampleNotesData : sampleData,
    notesId : null,
    userNotes : null,
    notesCreatedAtTemp : null,
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTES_ID:
            return {
                ...state,
                notesId: action.payload
            }
        case GET_USER_NOTES:
            const note = state.sampleNotesData.notes.filter(note => note.id === action.payload)
            return {
                ...state,
                userNotes: note || null 
            }
        case SET_NOTES_CREATED_AT:
            return {
                ...state,
                notesCreatedAtTemp: action.payload
            }

        default:
            return state
    }
}

export const rootReducers = combineReducers({
    notes: notesReducer,
})
