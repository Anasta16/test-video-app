import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallRejectedDialogue from '../CallRejectedDialogue/CallRejectedDialogue';
import IncomingCallDialogue from '../IncomingCallDialogue/IncomingCallDialogue';
import CallingDialogue from '../CallingDialogue/CallingDialogue';
import { callStates } from '../../../store/actions/callActions';

const DirectCall = (props) => {

    const { localStream, remoteStream, callState, callerUsername, callingDialogueVisible } = props;

  return (
    <>
        <LocalVideoView 
            localStream={localStream}
        />
        {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
        {/* <CallRejectedDialogue /> */}
        {callState === callStates.CALL_REQUESTED && <IncomingCallDialogue callerUsername={callerUsername} />}
        {callingDialogueVisible && <CallingDialogue />}
    </>
  )
}

function mapStoreStateToProps({call}) {
    return {
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(DirectCall);
