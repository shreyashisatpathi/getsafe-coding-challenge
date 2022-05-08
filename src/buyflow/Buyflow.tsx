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

  const getEmailStep = () => currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />
  const getAgeStep = (nextStep: string) => currentStep === 'age' && <AgeStep cb={getStepCallback(nextStep)} />
  const getUserDetails = () => currentStep === 'name' && <UserDetails cb={getStepCallback('summary')} />
  const getSummaryStep = () => currentStep === 'summary' && <SummaryStep collectedData={collectedData} />

  const getSteps: any = () => {
    switch (props.productId) {
      case ProductIds.designerIns:
        return getEmailStep() ||
          getAgeStep('name') ||
          getUserDetails() ||
          getSummaryStep()

      case ProductIds.devIns:
        return getEmailStep() ||
          getAgeStep('summary') ||
          getSummaryStep()
      default:
        return null
    }


  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {getSteps()}
    </>
  )
}

export default Buyflow
