import { combineReducers } from "redux"
import { notes } from "./sampleData"
import { SET_PIN, SET_USER_NOTES_ID, POST_NEW_NOTES, FILTER_NOTES, IS_CHECKBOX_ITEMS_MERGE, 
    MOVE_TO_TRASH, UPDATE_NOTE, POP_NOTE } from "./action"
import { paths } from "./routePaths"

const initialState = {
    notes : notes.reverse(),
    notesCategory: 'All Notes',
    filteredNotes : notes,
    paths : paths,
    userNotesId : null,
    isCheckboxItemsMerge: false,
    trash: [],
    temp: []
}

export const notesReducer = (state = initialState, action) => {
    const notes = state.notes
    switch(action.type) {
        case SET_USER_NOTES_ID:
            return {
                ...state,
                userNotesId: action.payload, // user selected id
            }
        case POST_NEW_NOTES:
            const filteredNotes = [action.payload, ...notes]
            return {
                ...state,
                notes: filteredNotes,
                filteredNotes: filteredNotes
            }
        case SET_PIN :
            return {
                ...state,
                filteredNotes: state.filteredNotes.map(note => note.id === state.userNotesId ? {...note, isPin: !note.isPin} : note),
            }
        case FILTER_NOTES: 
            return {
                ...state,
                notesCategory: action.payload,
                filteredNotes: action.payload === 'All Notes' ? notes : 
                                notes.filter(note => note.category === action.payload ? note : null)
            }
        case IS_CHECKBOX_ITEMS_MERGE:
            return {
                ...state,
                isCheckboxItemsMerge: !state.isCheckboxItemsMerge
            }
        case MOVE_TO_TRASH: 
            const trash = [...state.trash, state.userNotesId]
            const fillteredNotes = state.trash ? state.filteredNotes.filter(note => !trash.includes(note.id)) 
                                    : state.filteredNotes
            return {
                ...state,
                trash: trash,
                filteredNotes: fillteredNotes
            }
        case UPDATE_NOTE:
            const updatedNotes = (notesState) => notesState.map(note => note.id === state.userNotesId ? action.payload : note)
            return {
                ...state,
                notes: updatedNotes(notes),
                filteredNotes: updatedNotes(state.filteredNotes)
            }
        case POP_NOTE:
            const popNotes = (notesState) => notesState.slice(1)
            return {
                ...state,
                notes: popNotes(notes),
                filteredNotes: popNotes(state.filteredNotes)
            }

        default:
            return state
    }
}

export const rootReducers = combineReducers({
    notes: notesReducer,
})
