import React from "react"

import styles from "../config/Styles"
const { RemoteVideo, LocalVideo, Modal, ModalVideo, VideoBox } = styles

const VideoFrame = ({ remoteVideo, localVideo, hangupButton, stopCall, remoteID, inVideoCall }) => {
    return (
        <Modal style={{display: (inVideoCall ? "" : "none")}}>
            <ModalVideo>
                <div>
                    <RemoteVideo ref={remoteVideo} autoPlay playsinline/>
                    <VideoBox>
                        <LocalVideo ref={localVideo} muted autoPlay playsinline/>
                    </VideoBox>
                </div>

                <button ref={hangupButton} onClick={() => { stopCall(remoteID) }}>Hang Up</button>
            </ModalVideo>
        </Modal>
    )
}

export default VideoFrame