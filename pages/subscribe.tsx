import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ComponentPropTypes } from '../utils/interfaces/returns'
const Subscribe = (props: ComponentPropTypes) => {
  const [email, setEmail] = useState('')
  const [validInputs, setValidInputs] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { NEXT_PUBLIC_EMAIL_SERVICE } = process.env
  const { NEXT_PUBLIC_EMAIL_TEMPLATE } = process.env
  const { NEXT_PUBLIC_EMAIL_SECRET } = process.env

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const previousSubmit = Number(localStorage.getItem('subscriptionSubmitTs'))
    if (Date.now() - previousSubmit < 60000 * 5) {
      props.updateInfoMessage(
        `Wait ${((60000 * 5 - (Date.now() - previousSubmit)) / 1000).toFixed(
          0
        )} seconds before trying again.`,
        15000,
        'error'
      )
    } else {
      const params = { email: email }
      emailjs.send(
        //@ts-ignore
        NEXT_PUBLIC_EMAIL_SERVICE,
        //@ts-ignore
        NEXT_PUBLIC_EMAIL_TEMPLATE,
        params,
        //@ts-ignore
        NEXT_PUBLIC_EMAIL_SECRET
      )
      localStorage.setItem('formSubmitTs', String(Date.now()))
      setEmail('')

      props.updateInfoMessage('Subscription sent.', 15000, 'success')
    }
  }

  useEffect(() => {
    if (email.includes('@')) {
      const splitHelper = email.split('@')
      if (splitHelper.length > 1) {
        if (splitHelper[1].length > 0 && splitHelper[1].includes('.')) {
          setValidInputs(true)
        } else {
          setValidInputs(false)
          setErrorMessage('Not valid')
        }
      } else {
        setValidInputs(false)
      }
    } else {
      setErrorMessage('Should contain @')
      setValidInputs(false)
    }
  }, [email])
  return (
    <div className="subscribe">
      <div className="home__profile">
        <h1>Subscribe</h1>
        <h3>Get notifications from new blog posts</h3>
      </div>
      <form
        className="contact-form"
        style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}
        onSubmit={submit}
      >
        <div>
          <p>
            Email
            {!validInputs && email && (
              <span style={{ color: '#e86680' }}> - {errorMessage}</span>
            )}
          </p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
            name="email"
          ></input>
        </div>
        <button disabled={!validInputs}>Submit</button>
      </form>
    </div>
  )
}
export default Subscribe
