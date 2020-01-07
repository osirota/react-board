const initialState = {
    cards: [],
    lanes: [],
}

const cards = (state = initialState, action) => {
    switch (action.type) {
      case 'CARDS_LOADED':
        return {
            ...state,
          cards: action.payload
        }
      case 'LINES_LOADED':
        return {
            ...state,
          lanes: action.payload
        }
      default:
        return state
    }
  }
  export default cards