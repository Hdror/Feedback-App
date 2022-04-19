import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { toggleModal } from '../store/modal.action.js'
import { FeedbackModal } from '../cmps/feedback-modal'
import edit from '../assets/svg/edit.svg'
export const Preview = (props) => {
   
    const dispatch = useDispatch()
    const { modalState } = useSelector(state => state.modalModule)

    return <div className="feedback-card">
        <div className="edit-icon" onClick={() => { dispatch(toggleModal('feedbackModal')) }} title="Edit">
            <img src={edit} alt="" />

        </div>
        <div className="feedback-content">
            {props.feedback.comment}
        </div>
        <div className="date-time-container">
            <p>{props.feedback.createdAt.slice(0, 10)}</p>
            <p>{props.feedback.createdAt.slice(11, 16)}</p>
        </div>
        {modalState.feedbackModal &&
            <FeedbackModal feedback={props.feedback} />}
    </div>
}