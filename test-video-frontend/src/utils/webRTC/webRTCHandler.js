import store from "../../store/store";
import { setLocalStream, setCallState, callStates } from '../../store/actions/callActions';

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