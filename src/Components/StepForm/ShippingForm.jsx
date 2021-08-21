import React,{useState,useEffect} from 'react';
import { PackageInfo, ReviewInfo, RecieverStep, SenderStep,ShippingInfo } from "./Steps"
import ProgressBar from "../ProgressBar"
import { useVisualMode,setInputValue } from '../../Utils';
import {sender} from "./icons"
const ShippingForm = () => {

  const [state, setState] = useState({
    from: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    to: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    weight: 0,
    shipping: "",
  })
  const [errors, setErrors] = useState()
  const { mode, transition } = useVisualMode(4)

  const handleNext=(event)=>{
    event.preventDefault()
    transition(mode + 1)
    console.log(state)
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
      { mode === 1 && <SenderStep title="Enter the Sender's address" handleNext={handleNext}  setInputValue={setInputValue} state={state} errors={errors} setState={setState} setErrors={setErrors}/> }

      { mode===2 && <RecieverStep title="Enter the Reciever's address" handleNext={handleNext} handlePrevious={handlePrevious}  setInputValue={setInputValue} state={state} errors={errors} setState={setState} setErrors={setErrors}/> }

      {mode ===3 && <PackageInfo title="Enter Package information" handleNext={handleNext} handlePrevious={handlePrevious} setInputValue={setInputValue} state={state} errors={errors} setState={setState} setErrors={setErrors}/> }

      {mode===4 && <ShippingInfo title="Shipping information" handleNext={handleNext} handlePrevious={handlePrevious}  setInputValue={setInputValue} state={state} errors={errors} setState={setState} setErrors={setErrors}/> }

      {mode===5 && <ReviewInfo title="Review information" info={state}handlePrevious={handlePrevious} handleSubmit={handleSubmit}/>}
    </div>
  );
}

export default ShippingForm;
