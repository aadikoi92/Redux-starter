//all reducers get two args viz current state and action
//reducers get called when an action occurs
//state a little nuanced, is not the application state
//onnly the state this reducer responsible for
//same state previously generated by the reducer earlier
//reducer called when action dispatched  by app
//arg arrives as undefined = null
//like in books reducer only responsible for creating 'books'
//so the state passed as ana rg to boooks reducer is only the state that was previously passed
//same state is produced by reducers is flowing back whenever action occurs
//IT IS NOT THE SAME AS APPLICATION STATE


export default function (state = null, action){
    
    switch (action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    
    return state;
}