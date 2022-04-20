import { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import thumbs_down from '../assets/svg/thumbs-down.svg'
import thumbs_up from '../assets/svg/thumbs-up.svg'

import { addFeedback, updateFeedback } from '../store/feedback.action.js'
import { toggleModal } from '../store/modal.action.js'

export const FeedbackModal = (props) => {

    const [isTextareaOpen, setTextareaState] = useState(false)
    const [textareaValue, setTextareaValue] = useState("");
    const [isPageHelpful, setIsPageHelpful] = useState();
    const textareaEl = useRef()
    const dispatch = useDispatch()


    useEffect(() => {
         if (props.feedback) {
            onWasHelpful(props.feedback.wasHelpful)
            setTextareaValue(props.feedback.comment)
         }
    }, [])

    const onWasHelpful = (isHelpful) => {
        if (!isTextareaOpen) {
            setTextareaState(true)
        }
        setIsPageHelpful(isHelpful)
        textareaEl.current.focus()
    }

    const onSubmitFeedback = () => {
        if (!textareaValue.length) return
        const feedback = {
            "wasHelpful": isPageHelpful,
            "comment": textareaValue,
        }
        if (props.feedback) {
            feedback.id = props.feedback.id
            dispatch(updateFeedback(feedback))
        } else dispatch(addFeedback(feedback))
        dispatch(toggleModal())
    }


    const isActive = (isThumbsUp) => {
        if (!isTextareaOpen) return
        if (isThumbsUp && isPageHelpful) return 'active'
        else if (!isThumbsUp && !isPageHelpful) return 'active'
    }

    return <div className="feedback-modal">
        <div>
            <div className="modal-header">Is this page helpful?</div>
            <div className="yes-no-container flex">
                <div onClick={() => onWasHelpful(true)} className="flex">
                    <img className={isActive(true)} src={thumbs_up} alt="" />
                    <p>Yes</p>
                </div>
                <div onClick={() => onWasHelpful(false)} className="flex">
                    <img className={isActive(false)} src={thumbs_down} alt="" />
                    <p>No</p>
                </div>
            </div>
        </div>
        <div className={isTextareaOpen ? 'textarea-container active' : "textarea-container"}  >
            <textarea type="text" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} name="feedback" ref={textareaEl} placeholder="Any additional feedback?" ></textarea>
            <div className="skip-submit-container flex">
                <p>Skip</p>
                <div onClick={() => onSubmitFeedback()} className={textareaValue.length ? "submit-btn on" : "submit-btn"}>Submit</div>
            </div>
        </div>
    </div>
}