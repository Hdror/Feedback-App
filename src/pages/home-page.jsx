import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { FeedbackList } from '../cmps/feedback-list'

import { loadFeedbacks } from '../store/feedback.action.js'
import {toggleModal} from '../store/modal.action.js'

export const HomePage = (props) => {
    const { feedbacks } = useSelector(state => state.feedbackModule)
    const { modalState,isModalOpen } = useSelector(state => state.modalModule)
    console.log(feedbacks);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFeedbacks())
    }, [])

    if (!feedbacks.length) return <h1>loading</h1>
    return <main className="main-container page">
        <section>
            <div onClick={() => { isModalOpen ?dispatch(toggleModal()) : dispatch(toggleModal('feedbackModal')) }}>Add Feedback</div>
            {modalState.feedbackModal && <div>kuki baluki</div>}
            <FeedbackList feedbacks={feedbacks} />
        </section>
    </main>
}


