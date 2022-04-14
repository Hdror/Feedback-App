import { feedbackService } from '../services/feedback.service.js'
import {localStorageServices} from '../services/storage.service.js'

const STORAGE_KEY = 'feedbackDB'

export function loadFeedbacks() {
    return (dispatch) => {
        feedbackService.getFeedbacks()
            .then(feedbacks => {
                localStorageServices.saveToStorage(STORAGE_KEY, feedbacks)
                const action = { type: 'SET_FEEDBACKS', feedbacks }
                dispatch(action)
            })

    }
}

