import React, { useEffect, useState } from 'react'
import { changeInfoMessageColor } from '../../utils/css'
import { CancelIcon } from '../../utils/icons'
const InfoMessage = ({
  content,
  type,
  updateInfoMessage,
}: {
  content: string | null
  type: string
  updateInfoMessage: Function
}) => {
  useEffect(() => {
    changeInfoMessageColor(type)
  }, [type, content])
  return (
    <div className="info-message">
      <p>{content}</p>
      <div
        className="info-message__message-cancel cursor-pointer"
        onClick={(e) => {
          updateInfoMessage(null, 0, 'success')
        }}
      >
        <CancelIcon width={22} height={22} />
      </div>
    </div>
  )
}
export default InfoMessage
