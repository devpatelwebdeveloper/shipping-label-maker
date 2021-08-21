import React from 'react';
import { PackageInfo, ReviewInfo, RecieverStep, SenderStep,ShippingInfo } from "./Steps"
import { useVisualMode } from '../../Utils';
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

  return (
    <div>
      { mode === 1 && <SenderStep title="Enter the Sender's address"handleNext={handleNext} /> }
      { mode===2 && <RecieverStep title="Enter the Reciever's address"handleNext={handleNext} handlePrevious={handlePrevious}/> }
      {mode ===3 && <PackageInfo title="Enter Package information"handleNext={handleNext} handlePrevious={handlePrevious}/>}
      {mode===4 && <ShippingInfo title="Shipping information"handleNext={handleNext} handlePrevious={handlePrevious}/>}
      {mode===5 && <ReviewInfo title="Review information"/>}
    </div>
  );
}

export default ShippingForm;
