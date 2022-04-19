
export function FeedbackPreview(props) {
    const { comment, wasHelpful, id } = props.feedback
    return <div className="preview-card  clean-link" >
        <h1>{comment}</h1>
        <h1>The page was {!!wasHelpful?'helpful':'not helpful'}</h1>
    </div>

}