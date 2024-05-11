import React from 'react'


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Form3(props) {
  return (
    <div>
       <div className='flex flex-col items-center gap-5 pt-4'>

<TextField id="outlined-basic" className=' w-[50%] ml-[20%]' label="Password" variant="outlined" />
<TextField id="outlined-basic" className=' w-[50%]' label="Confirm Password" variant="outlined" />

<div className='flex flex-row  gap-96'>

      <Button variant="contained" onClick={()=>props.handleBack()}>Back</Button>
</div>
       
</div>

    </div>
  )
}

export default Form3
