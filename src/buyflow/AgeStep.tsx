import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  const [ageErr, setAgeErr] = useState(false)

  const isValidAge = (): boolean => age > 0 && age <= 100;

  function onClickHandler() {
    const validAge = isValidAge();
    validAge ? props.cb('age', age) : setAgeErr(true)
  }

  return (
    <>
      <div>
        <label>
          Age:{' '}
          <input
            type="number"
            onChange={({ target: { value } }) => {
              setAge(Number(value))
              setAgeErr(false)
            }}
            value={age || 0}
            placeholder="Enter Age"
          ></input>
        </label>
        {ageErr && <p> Age is invalid age must be between 0 to 100</p>}
      </div>
      <button onClick={onClickHandler}>Next</button>
    </>
  )
}

export default AgeStep
