import React from 'react';
import { PackageInfo, ReviewInfo, RecieverStep, SenderStep,ShippingInfo } from "./Steps"
import ProgressBar from "../ProgressBar"
import { useVisualMode } from '../../Utils';
import {sender} from "./icons"
const ShippingForm = () => {

  const { mode, transition } = useVisualMode(1)

  const handleNext=(event)=>{
    event.preventDefault()
    transition(mode + 1)
  }
  const handlePrevious=(event)=>{
    event.preventDefault()
    transition(mode - 1)    
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
     
  }
  // Progress Bar Steps
  const steps = [
    {
      stepSuccess: mode === 1 || mode > 1 ? "wait" : "empty",
      stepId: "step-1",
      stepName: "Senders",
      stepIcon: sender,
    },
    {
      stepSuccess: mode === 2 || mode > 2 ? "wait" : "empty",
      stepId: "step-2",
      stepName: "Reciever",
      stepIcon: sender,
    },
    {
      stepSuccess: mode === 3 || mode > 3 ? "wait" : "empty",
      stepId: "step-3",
      stepName: "Package",
      stepIcon: sender,
    },
    {
      stepSuccess: mode === 4 || mode > 4 ? "wait" : "empty",
      stepId: "step-4",
      stepName: "Shipping",
      stepIcon: sender,
    },
    {
      stepSuccess: mode === 5 || mode > 5 ? "wait" : "empty",
      stepId: "step-5",
      stepName: "Verify",
      stepIcon: sender,
    },
  ]

  return (
    <div>
      <ProgressBar steps={steps}/>
      { mode === 1 && <SenderStep title="Enter the Sender's address" handleNext={handleNext} /> }
      { mode===2 && <RecieverStep title="Enter the Reciever's address" handleNext={handleNext} handlePrevious={handlePrevious}/> }
      {mode ===3 && <PackageInfo title="Enter Package information" handleNext={handleNext} handlePrevious={handlePrevious}/>}
      {mode===4 && <ShippingInfo title="Shipping information" handleNext={handleNext} handlePrevious={handlePrevious}/>}
      {mode===5 && <ReviewInfo title="Review information" handlePrevious={handlePrevious} handleSubmit={handleSubmit}/>}
    </div>
  );
}

export default ShippingForm;
