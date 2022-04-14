const initialState = {
    feedbacks: [],
}

export function feedbackReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_FEEDBACKS':
            newState = { ...state, feedbacks: [...action.feedbacks] }
            break;
        default:
    }
    return newState;
}
