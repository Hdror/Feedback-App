import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { FeedbackModal } from '../cmps/feedback-modal'

import { localStorageServices } from '../services/storage.service.js'
import { toggleModal } from '../store/modal.action.js'
import { removeFeedback } from '../store/feedback.action.js'

import edit from '../assets/svg/edit.svg'
import remove from '../assets/svg/remove.svg'

export const UserFeedback = () => {
    const { modalState, isModalOpen } = useSelector(state => state.modalModule)
    const [userFeedback, setUserFeedback] = useState([])
    const [modalId, setModalId] = useState(null)
    const { feedbacks } = useSelector(state => state.feedbackModule)
    const dispatch = useDispatch()

    useEffect(() => {
        const feedback = localStorageServices.loadFromStorage('userFeedbackDB') || []
        setUserFeedback(feedback)
    }, [feedbacks])

    const onModalOpen = (modalId) => {
        setModalId(modalId)
        if (isModalOpen) toggleModal()
        else dispatch(toggleModal('feedbackModal'))
    }

    const onRemoveFeedback = (feedbackId)=>{
        console.log(feedbackId);
        dispatch(removeFeedback(feedbackId))
    }


    if (!userFeedback.length) return <h1>loading</h1>
    return <main className="user-feedback main-container page">
        <section>
            <h1>Your Latest Feedback</h1>
            <div className="feedback-list">
                {userFeedback.map(feedback => {
                    return <div key={feedback.id} className="feedback-card">
                        <div className="edit-icon" onClick={() => onModalOpen(feedback.id)} title="Edit">
                            <img src={edit} alt="" />
                        </div>
                        <div className="remove-icon" onClick={() => onRemoveFeedback(feedback.id)} title="Remove">
                            <img src={remove} alt="" />
                        </div>
                        <div className="feedback-content">
                            {feedback.comment}
                        </div>
                        <div className="date-time-container">
                            <p>{feedback.createdAt.slice(0, 10)}</p>
                            <p>{feedback.createdAt.slice(11, 16)}</p>
                        </div>
                        {modalState.feedbackModal && modalId === feedback.id &&
                            <FeedbackModal feedback={feedback} />}
                    </div>
                })}
            </div>
        </section>
    </main>
}
