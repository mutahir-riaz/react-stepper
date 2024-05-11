import React from 'react'

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MainStepper from './MainStepper';

function Home() {
  return (
    <div>
        <div className='text-center mt-10'>
            <h1 className='text-3xl text-black font-bold font-sans'>Sign up for a course now</h1>
            <p className='text-small text-black pt-4 pb-8 font-sans'>Fill in the form and get access for our online course for free!</p>
        </div>
        <div className='w-[80%] pt-5 ml-[10%] bg-gray-100'>

        <MainStepper></MainStepper>
        </div>
    </div>
  )
}

export default Home
