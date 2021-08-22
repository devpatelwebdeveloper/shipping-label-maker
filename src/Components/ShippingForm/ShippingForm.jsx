import React,{useState,useEffect} from 'react';
import { PackageInfo, ReviewInfo, RecieverStep, SenderStep,ShippingInfo } from "../Steps"
import Label from "../Label"
import ProgressBar from "../ProgressBar"
import { useVisualMode,setInputValue } from '../../Utils';
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
    shippingOption: 0,
  })
  const [errors, setErrors] = useState()
  const [confirmed,setConfirmed]=useState(false)
  const { mode, transition } = useVisualMode(1)

  const handleNext=(event)=>{
    event.preventDefault()
    transition(mode + 1)
    console.log(state)
  }
  const handlePrevious=(event)=>{
    event.preventDefault()
    transition(mode - 1)    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setConfirmed(true)
    transition(mode + 1)
  }

  // Progress Bar Steps
  const steps = [
    {
      stepSuccess: mode === 1? 'wait' : mode > 1 ? "success":"empty",
      stepId: "step-1",
      
    },
    {
      stepSuccess: mode === 2? 'wait' : mode > 2 ? "success" : "empty",
      stepId: "step-2",
      
    },
    {
      stepSuccess: mode === 3? 'wait' : mode > 3 ? "success" : "empty",
      stepId: "step-3",
      
    },
    {
      stepSuccess: mode === 4? 'wait' : mode > 4 ? "success" : "empty",
      stepId: "step-4",
      
    },
    {
      stepSuccess: mode === 5? 'wait' : mode > 5 ? "success" : "empty",
      stepId: "step-5", 
    },   
  ]

  
  if(confirmed){
    return(
      <>
      <ProgressBar steps={steps}/>
      <Label info={state} />
      </>
    )
  }

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
