
import { FeedbackPreview } from './feedback-preview.jsx'

export function FeedbackList(props) {
        const { feedbacks } = props
        console.log(feedbacks);
        return <section className="feedback-list">
            {feedbacks.map(feedback =>
                <FeedbackPreview key={feedback.id} feedback={feedback} />
            )}
        </section>
}