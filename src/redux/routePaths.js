
export const paths = {
    homePath: '/',
    categoryNotesPath: '/category',
    categoryNotesPathId: '/category/:id',
    userNotesPath: 'user-notes/number=',
    userNotesPathId: '/category/:id/user-notes/number=/:id', //categoryNotesPath/{id}/userNotesPath/{id}
    newNotesPath: 'new-notes',
    newNotesPathId: '/category/:id/user-notes/number=/:id/new-notes', //categoryNotesPath/{id}/userNotesPath/{id}/newNotesPath
    editNotesPath: 'edit-notes',
    editNotesPathId: '/category/:id/user-notes/number=/:id/edit-notes',
}