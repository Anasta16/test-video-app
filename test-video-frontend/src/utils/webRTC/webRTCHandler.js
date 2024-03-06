import store from "../../store/store";
import { setLocalStream, setCallState, callStates, setCallingDialogueVisible, setCallerUsername } from '../../store/actions/callActions';
import * as wss from '../wssConnection/wssConnection';

const defaultConstraints = {
    video: true,
    audio: true
};

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultConstraints)
    .then(stream => {
        store.dispatch(setLocalStream(stream));
        store.dispatch(setCallState(callStates.CALL_AVAILABLE));
    })
    .catch(err => {
        console.error('error occurred when trying to get access to user media/local stream');
        console.log(err);
    })
}

let connectedUserSocketId;

export const callToOtherUser = (calleeDetails) => {
    connectedUserSocketId = calleeDetails.socketId;
    store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
    store.dispatch(setCallingDialogueVisible(true));
    wss.sendPreOffer({
        callee: calleeDetails,
        caller: {
            username: store.getState().dashboard.username
        }
    })
}

export const handlePreOffer = (data) => {
    connectedUserSocketId = data.callerSocketId;
    store.dispatch(setCallerUsername(data.callerUsername));
    store.dispatch(setCallState(callStates.CALL_REQUESTED));
}