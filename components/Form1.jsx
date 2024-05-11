import React from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Form1(props) {
    // console.log(props.handleNext);
    const callFunc = ()=> {props.handleNext()}
  return (
    <div>
      {/* <h1>Form 1</h1> */}
      <div className='flex flex-col items-center gap-5 pt-4'>

      <TextField id="outlined-basic" className=' w-[50%] ml-[20%]' label="Full Name" variant="outlined" />
      <TextField id="outlined-basic" className=' w-[50%]' label="University" variant="outlined" />
      <TextField id="outlined-basic" className=' w-[50%]' label="Email" variant="outlined" />
      <TextField id="outlined-basic" className=' w-[50%]' label="Phone Num" variant="outlined" />
      <Button variant="contained" className=' w-[50%]' onClick={()=>callFunc()}>next</Button>
      </div>
    </div>
  )
}

export default Form1
