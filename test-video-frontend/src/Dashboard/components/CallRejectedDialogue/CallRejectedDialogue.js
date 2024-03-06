import React, { useEffect } from 'react';

import './CallRejectedDialogue.css';

const CallRejectedDialogue = ({ reason, hideCallRejectedDialogue }) => {

  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialogue({
        rejected: false,
        reason: ''
      });
    }, [4000])
  }, [])

  return (
    <div className="call_rejected_dialog background_secondary_color">
        <span>{reason}</span>
    </div>
  )
}

export default CallRejectedDialogue;