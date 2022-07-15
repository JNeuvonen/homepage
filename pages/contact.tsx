import emailjs from '@emailjs/browser'
import React, { useEffect, useState } from 'react'
import { ComponentPropTypes } from '../utils/interfaces/returns'
const Contact = (props: ComponentPropTypes) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [inputsValid, setInputsValid] = useState(false)

  useEffect(() => {
    const elem = document.getElementById('form-cta') as HTMLElement
    if (message && title) {
      setInputsValid(true)
      elem.style.filter = 'opacity(1)'
    } else {
      setInputsValid(false)
      elem.style.filter = 'opacity(0.3)'
    }
  }, [message, title])
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title || !message) {
      props.updateInfoMessage(
        'Required input field is missing.',
        15000,
        'error'
      )
    } else {
      const params = {
        email,
        title,
        name,
        message,
      }

      const previousSubmit = Number(localStorage.getItem('formSubmitTs'))

      if (Date.now() - previousSubmit < 60000 * 5) {
        props.updateInfoMessage(
          `Wait ${((60000 * 5 - (Date.now() - previousSubmit)) / 1000).toFixed(
            0
          )} seconds before trying again.`,
          15000,
          'error'
        )
      } else {
        emailjs.send(
          'service_3h88b0t',
          'template_epq8dhv',
          params,
          'fBsTQJhO4KbfOJuU0'
        )
        localStorage.setItem('formSubmitTs', String(Date.now()))
        setEmail('')
        setTitle('')
        setMessage('')
        setName('')
        props.updateInfoMessage('Message sent succesfully.', 15000, 'success')
      }
    }
  }
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h1>Contact me</h1>
      <div style={{ marginTop: 30 }}>
        <p>Name</p>
        <input
          autoComplete="on"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <p>E-mail</p>
        <input
          autoComplete="on"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <p>Title *</p>
        <input onChange={(e) => setTitle(e.target.value)} value={title}></input>
      </div>
      <div>
        <p>Message *</p>
        <textarea
          className="contact-form__message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>

      <button disabled={!inputsValid} id="form-cta">
        Submit
      </button>
    </form>
  )
}
export default Contact
