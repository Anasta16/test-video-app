import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
import CallRejectedDialogue from '../CallRejectedDialogue/CallRejectedDialogue';
import IncomingCallDialogue from '../IncomingCallDialogue/IncomingCallDialogue';
import CallingDialogue from '../CallingDialogue/CallingDialogue';
import { callStates, setCallRejected } from '../../../store/actions/callActions';

const DirectCall = (props) => {

    const { 
        localStream, 
        remoteStream, 
        callState, 
        callerUsername, 
        callingDialogueVisible, 
        callRejected, 
        hideCallRejectedDialogue 
    } = props;

  return (
    <>
        <LocalVideoView 
            localStream={localStream}
        />
        {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
        {callRejected.rejected && <CallRejectedDialogue 
            reason={callRejected.reason}
            hideCallRejectedDialogue={hideCallRejectedDialogue}
        />}
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

function mapDispatchToProps(dispatch) {
    return {
        hideCallRejectedDialogue: (callRejectedDetails) => dispatch(setCallRejected(callRejectedDetails))
    }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
