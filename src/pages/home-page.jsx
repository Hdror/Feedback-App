import { useDispatch, useSelector } from 'react-redux'

import { toggleModal } from '../store/modal.action.js'
import { FeedbackModal } from '../cmps/feedback-modal'

export const HomePage = () => {
    const { modalState } = useSelector(state => state.modalModule)
    const dispatch = useDispatch()

    return <main className="home-page main-container page">
        <section className="home-page-container">
            {modalState.feedbackModal &&
                <FeedbackModal />}
            <div className="banner">
                Gathering <span>Feedback</span>  is what we do
                <p>The best platform for gathering your page feedback, with high attention to user experience </p>
                <div className="add-btn" onClick={() => { dispatch(toggleModal('feedbackModal')) }}>Add Feedback</div>
            </div>
        </section>
    </main>
}


