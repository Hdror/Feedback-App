const initialState = {
    feedbacks: [],
}

export function feedbackReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_FEEDBACKS':
            newState = { ...state, feedbacks: [...action.feedbacks] }
            break;
            case 'ADD_FEEDBACK':
                newState = { ...state, feedbacks: [...state.feedbacks, action.feedback] }
                break
              case 'REMOVE_FEEDBACK':
                newState = { ...state, feedbacks: state.feedbacks.filter(feedback => feedback._id !== action.feedbackId) }
                break
              case 'UPDATE_FEEDBACK':
                newState = {
                  ...state, feedbacks: state.feedbacks.map(currfeedback => {
                    return (currfeedback.id === action.feedback.id) ? action.feedback : currfeedback
                  })
                }
                break
        default:
    }
    return newState;
}
