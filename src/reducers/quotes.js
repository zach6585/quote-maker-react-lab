import uuid from 'uuid';

export default (state = [], action) => {
    switch (action.type){
      case 'ADD_QUOTE':
        const quote={
          id: uuid(),
          content: action.content,
          author: action.author,
          votes: action.votes
        }
        return( state.concat(quote))
      case 'REMOVE_QUOTE':
        return {quotes: state.quotes.filter(quote => quote.id !== action.payload)}
      case 'UPVOTE_QUOTE':
        return state;
      case 'DOWNVOTE_QUOTE':
        return state;
      default:
          return state;
      }
    
}
