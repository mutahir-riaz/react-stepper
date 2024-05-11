import React from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Form2(props) {
  return (
    <div>
       <div className='flex flex-col items-center gap-5 pt-4'>

<TextField id="outlined-basic" className=' w-[50%] ml-[20%]' label="Course Name" variant="outlined" />
<TextField id="outlined-basic" className=' w-[50%]' label="Last GPA" variant="outlined" />

<div className='flex flex-row  gap-96'>

<Button variant="contained" onClick={()=>props.handleBack()}>Back</Button>
      
      <Button variant="contained" onClick={()=>props.handleNext()}>next</Button></div>
       
</div>
     
    </div>
  )
}

export default Form2
