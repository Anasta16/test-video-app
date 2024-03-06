import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallRejectedDialogue from '../CallRejectedDialogue/CallRejectedDialogue';
import IncomingCallDialogue from '../IncomingCallDialogue/IncomingCallDialogue';
import CallingDialogue from '../CallingDialogue/CallingDialogue';

const DirectCall = (props) => {

    const { localStream, remoteStream } = props;

  return (
    <>
        <LocalVideoView 
            localStream={localStream}
        />
        {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
        {/* <CallRejectedDialogue /> */}
        <IncomingCallDialogue />
        {/* <CallingDialogue /> */}
    </>
  )
}

function mapStoreStateToProps({call}) {
    return {
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(DirectCall);
