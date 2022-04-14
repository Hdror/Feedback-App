export function toggleModal(modalName) {
    if (modalName) {
        return async (dispatch) => {
            try {
                dispatch({ type: 'OPEN_MODAL', modalName })
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        return async (dispatch) => {
            try {
                dispatch({ type: 'CLOSE_MODAL' })
            } catch (err) {
                console.log(err);
            }
        }
    }
}



