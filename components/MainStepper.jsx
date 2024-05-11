import { Step, Stepper,StepLabel,Button,Typography } from '@mui/material'
import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
// Steppers Step
function getStepContent (activeStep , handleNext , handleBack){

    switch(activeStep){
        case 0:
            return <Form1 handleNext={handleNext} />
        case 1:
            return <Form2 handleNext={handleNext} handleBack={handleBack}/>
        case 2:
            return <Form3 handleBack={handleBack}/>
    }
}
function MainStepper() {
    const [activestep,setactivestep] = useState(0)
 const steps = [
    "Personal Information",
    "Select Course",
    "Setting Password"
 ]
 const handleNext = ()=>{
    setactivestep(activestep+1)
 }
 const handleBack = ()=>{
    setactivestep(activestep-1)
 }
    return (
    <div>
      <Stepper activeStep={activestep} alternativeLabel>
        {
            steps.map((v,i)=>{
                return (
                    <Step key={i}>
                        <StepLabel>{v}</StepLabel>
                    </Step>
                )
            })
        }
      </Stepper>
    {
        activestep == steps.length? "submit":
        <Typography>{getStepContent(activestep,handleNext,handleBack)}</Typography>
    }
    </div>
  )
}

export default MainStepper
