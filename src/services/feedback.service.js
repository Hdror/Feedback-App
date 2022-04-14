
const axios = require('axios')

export const feedbackService = {
   getFeedbacks,
}


export async function getFeedbacks() {
    try {
        const res = await axios.get(`https://6239be97bbe20c3f66c93c18.mockapi.io/api/v1/feedback`)
        const feedbacks = res.data
        console.log(feedbacks);
        return feedbacks
    } catch (err) {
        console.log('Error getting feedbacks:', err)
    }
}




