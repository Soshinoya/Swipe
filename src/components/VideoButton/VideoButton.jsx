const VideoButton = ({ text }) => {
    return (
        <button className="video-button button button--secondary d-flex align-items-center position-absolute">
            <i className="fas fa-play"></i>
            <p className="video-button__text">{text}</p>
        </button>
    )
}

export default VideoButton
