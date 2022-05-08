import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}
const re = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false);

  const isValidEmail = (): boolean => re.test(email)

  function onClickHandler() {
    const validEmail = isValidEmail()
    validEmail ? props.cb('email', email) : setEmailErr(true)
  }

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
            setEmailErr(false)
          }}
          value={email}
        ></input>
      </div>
      {emailErr && <p> Email is invalid</p>}
      <button onClick={onClickHandler}>Next</button>

    </>
  )
}

export default EmailStep
