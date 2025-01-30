import React from 'react'
import Form from '../components/Form'

function Landing() {
    return (
        <div className='w-full'>
            <h1 className='text-5xl text-center font-semibold py-5 text-primary'>CoinFlux</h1>
            <h3 className='text-secondary text-center'>Your Smart Currency Exchange Companion</h3>

            <Form/>
        </div>
    )
}

export default Landing