import React from 'react'

import './chatinput.scss'

function ChatInput (props) {
  const { currentUserId, currenDialogId, sendMessage } = props
  const handleSubmit = e => {
    e.preventDefault()
  }
  const onEnter = e => {
    if (e.key === 'Enter') {
      const data = {
        sender: currentUserId,
        text: e.target.value
      }
      e.preventDefault()
      sendMessage(currentUserId, currenDialogId, data)
      e.target.value = ''
    }
  }

  return (
    <div className='chatInput'>
      <form onSubmit={handleSubmit}>
        <label className='label-input' htmlFor='file'>
          <i>Icon</i>
        </label>
        <input type='file' id='file' />
        <textarea type='text' placeholder='type here' onKeyPress={onEnter} />
        <label className='label-input' htmlFor='file'>
          <i>Icon</i>
        </label>
        <input type='file' id='file' />
      </form>
    </div>
  )
}

export default ChatInput
