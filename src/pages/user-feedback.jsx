import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { FeedbackModal } from '../cmps/feedback-modal'

import { localStorageServices } from '../services/storage.service.js'
import { toggleModal } from '../store/modal.action.js'

import edit from '../assets/svg/edit.svg'

export const UserFeedback = (props) => {
    const { modalState, isModalOpen } = useSelector(state => state.modalModule)
    const [userFeedback, setUserFeedback] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const feedback = localStorageServices.loadFromStorage('userFeedbackDB') || []
        setUserFeedback(feedback)
    }, [dispatch])

    if (!userFeedback.length) return <h1>loading</h1>
    return <main className="user-feedback main-container page">
        <section>
            <div onClick={() => { isModalOpen ? dispatch(toggleModal()) : dispatch(toggleModal('feedbackModal')) }}>Add Feedback</div>
            {modalState.feedbackModal &&
                <FeedbackModal />}
            <h1>Your Latest Feedback</h1>
            {userFeedback.map(feedback => {
                return <div key={feedback.id} className="feedback-card">
                    <div className="edit-icon">
                        <img src={edit} alt="" onClick={() => { isModalOpen ? dispatch(toggleModal()) : dispatch(toggleModal('feedbackModal')) }} />
                        {modalState.feedbackModal &&
                            <FeedbackModal feedback={feedback} />}
                    </div>
                    <div className="feedback-content">
                        {feedback.comment}
                    </div>
                    <div className="date-time-container">
                        <p>{feedback.createdAt.slice(0, 10)}</p>
                        <p>{feedback.createdAt.slice(11, 16)}</p>
                    </div>
                </div>
            })}
        </section>
    </main>
}
