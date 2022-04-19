import { feedbackService } from '../services/feedback.service.js'
import { localStorageServices } from '../services/storage.service.js'
import { storageService } from '../services/async.storage.service.js'

const STORAGE_KEY = 'feedbackDB'
const USER_STORAGE_KEY = 'userFeedbackDB'

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

export function addFeedback(feedback) {
  return (dispatch) => {
    console.log(feedback);
    feedbackService.save(feedback)
      .then((savedFeedback) => {
        storageService.post(USER_STORAGE_KEY, savedFeedback)
        dispatch({ type: 'ADD_FEEDBACK', feedback: savedFeedback })


      })
      .catch((err) => {
        console.log('Cannot add feedback', err)
      })
  }
}

export function updateFeedback(feedback) {
  return async (dispatch) => {
    try {
      const feedbackToSave = await feedbackService.save(feedback)
      await storageService.put(USER_STORAGE_KEY, feedbackToSave)
      dispatch({ type: 'UPDATE_FEEDBACK', feedback: feedback })
      return feedback
    } catch (err) {
      console.log('Cannot update feedback', err)
    }
  }
}

export function removeFeedback(feedbackId) {
  return async (dispatch) => {
    try {
      await feedbackService.remove(feedbackId)
      await storageService.remove(USER_STORAGE_KEY, feedbackId)
      dispatch({ type: 'REMOVE_FEEDBACK', feedbackId })
    } catch (err) {
      console.log('Cannot remove feedback', err)
    }
  }
}
