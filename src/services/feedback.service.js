import { httpService } from './http.service.js'
const axios = require('axios')

export const feedbackService = {
    getFeedbacks,
    save,
    remove
}


export async function getFeedbacks() {
    try {
        const res = await axios.get(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback`)
        const feedbacks = res.data
        return feedbacks
    } catch (err) {
        console.log('Error getting feedbacks:', err)
    }
}

function remove(feedbackId) {
    return httpService.delete(`feedback/${feedbackId}`)
}

function save(feedback) {
    if (feedback.id) {
      // EDIT
      return httpService.put(`feedback/${feedback.id}`, feedback)
    } else {
      // ADD
      return httpService.post('feedback', feedback)
    }
  }




