import React from 'react';
import '../styles/ChatStatus.css';

export default function ChatStatus({ isTyping }) {
  return (
    <div className='ChatStatusRoot'>
      <div className='back-button'>Back</div>
      <div className='typing-status'>
        {isTyping ? (
          <div className='typing-animation'>
            Avatar is typing
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          'Idle'
        )}
      </div>
    </div>
  );
}
