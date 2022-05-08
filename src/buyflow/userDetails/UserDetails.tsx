import React, { useState } from 'react'

interface UserDetailsProps {
  cb: (field: string, value: string) => void
}
const re = /^[a-z,.'-]+$/i;

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)

  const isValidFirstName = re.test(firstName)
  const isValidLastName = re.test(lastName)

  function onClickHandler() {
    if (isValidFirstName && isValidLastName) {
      props.cb('name', firstName + ' ' + lastName)
    }
    if (!isValidFirstName) {
      setFirstNameError(true)
    }
    if (!isValidLastName) {
      setLastNameError(true)
    }
  }


  return (
    <>
      <div>
        FirstName:{' '}
        <input
          type="first_name"
          onChange={({ target: { value } }) => {
            setFirstName(value)
            setFirstNameError(false)
          }}
          value={firstName}
        ></input>
      </div>
      <div>
        LastName:{' '}
        <input
          type="last_name"
          onChange={({ target: { value } }) => {
            setLastName(value)
            setLastNameError(false)
          }}
          value={lastName}
        ></input>

      </div>
      {firstNameError && <p> First Name is invalid</p>}
      {lastNameError && <p> Last Name is invalid</p>}
      <button onClick={onClickHandler}>Next</button>
    </>
  )
}

export default UserDetails;



