import React, { useState } from 'react'
import AgeStep from './ageStep/AgeStep'
import EmailStep from './emailStep/EmailStep'
import SummaryStep from './SummaryStep'
import UserDetails from './userDetails/UserDetails'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  designerIns = 'designer_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.designerIns]: 'Designer Insurance',
  [ProductIds.devIns]: 'Developer Insurance'
}

const Buyflow: React.FC<BuyflowProps> = (props) => {

  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name: ''
  })

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>

      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('name')} />
        )) ||
        (currentStep === 'name' && (
          <UserDetails cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
