
import { FeedbackPreview } from './feedback-preview.jsx'

export function FeedbackList(props) {
        const { feedbacks } = props
        return <section className="feedback-list">
            {feedbacks.map((feedback,idx) =>
                <FeedbackPreview key={idx} feedback={feedback} />
            )}
        </section>
}