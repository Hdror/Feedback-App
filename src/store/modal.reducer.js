const initialState = {
    isModalOpen: false,
    modalState:{
        feedbackModal:false
    }
}

const closeModalState = {
    feedbackModal:false
}

export function modalReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'CLOSE_MODAL':
            newState = { ...state, modalState: { ...closeModalState }, isModalOpen: false }
            break
        case 'OPEN_MODAL':
            newState = { ...state, modalState: { ...closeModalState, [action.modalName]: true }, isModalOpen: true }
            break
    }
    return newState
}

