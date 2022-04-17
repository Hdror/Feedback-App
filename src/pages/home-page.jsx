import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { FeedbackList } from '../cmps/feedback-list'
import { FeedbackModal } from '../cmps/feedback-modal'

import { loadFeedbacks } from '../store/feedback.action.js'
import {toggleModal} from '../store/modal.action.js'

export const HomePage = () => {
    const { feedbacks } = useSelector(state => state.feedbackModule)
    const { modalState,isModalOpen } = useSelector(state => state.modalModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFeedbacks())
    }, [dispatch])

    if (!feedbacks.length) return <h1>loading</h1>
    return <main className="main-container page">
        <section>
            <div onClick={() => { dispatch(toggleModal('feedbackModal')) }}>Add Feedback</div>
            {modalState.feedbackModal && 
            <FeedbackModal/>}
            <FeedbackList feedbacks={feedbacks} />
        </section>
    </main>
}


