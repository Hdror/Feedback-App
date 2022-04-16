import { useState } from 'react'

import thumbs_down from '../assets/svg/thumbs-down.svg'
import thumbs_up from '../assets/svg/thumbs-up.svg'

export const FeedbackModal = (props) => {

    const [isTextareaOpen, setTextareaState] = useState(false)
    

    const openTextarea = () => {
        if (isTextareaOpen) return
        setTextareaState(true)
    }
    
    return <div className="feedback-modal">
        <div>
            <div className="modal-header">Is this page helpful?</div>
            <div className="yes-no-container flex">
                <div onClick={()=>openTextarea()} className="flex">
                    <img src={thumbs_up} alt="" />
                    <p>Yes</p>
                </div>
                <div onClick={()=>openTextarea()} className="flex">
                    <img src={thumbs_down} alt="" />
                    <p>No</p>
                </div>
            </div>
        </div>
        {!!isTextareaOpen && <div className="textarea-container">
                <textarea name="feedback" id="" placeholder="Any additional feedback?" ></textarea>
                <div className="skip-submit-container flex">
                    <p>Skip</p>
                    <div className="submit-btn">Submit</div>
                </div>
            </div>
        }

    </div>
}