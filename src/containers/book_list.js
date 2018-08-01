import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return ( <li 
                    key = {book.title}
                    onClick = { () => this.props.selectBook(book) }
                    className = "list-group-item"> 
                    {book.title}
                    </li>
                    );
        });
    }
    
    
    
    render() {
        return(
            <ul className = "list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
   //whatever returned will show up as props inside of book list container
    
   return {
    //global state's key 'books'  
    books: state.books
   }
}


//returned from this function appears as props on booklist container.
//this.selectBook() ,will call selectBook on props in bookList, 1st argument available at props
function mapDispatchToProps(dispatch) {
   
    //whenever selectBook is called, result be passed to all reducers
    //dispatch receives all these actions and distributes to reducers

    return bindActionCreators({ selectBook: selectBook}, dispatch)
}










//when app state changes container re-renders
//connect takes a function and component and makes it a container
// 'connect' comes from react-redux
//container a component aware of state
//promote booklist to container needs to know abt new dispatch method selectbook() available as a prop

//HERE WE EXPORT A CONTAINER 'BookList'OF THE FOLLOWING CODE.TURNS BookList to a container from a component and exports
export default connect (mapStateToProps, mapDispatchToProps)(BookList);