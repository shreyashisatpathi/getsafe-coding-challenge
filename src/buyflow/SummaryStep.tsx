import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name : string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const {email, age, name} = props.collectedData
  return (
    <>
      <div>Email: {email}</div>
      <div>Age: {age}</div>
      {name && <div>Name: {name}</div>}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
