export function selectBook (book) {
    //selectBook is an action creator, returns action with a 'type' property

    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}



//an action is a plain js object with a 'type' as key