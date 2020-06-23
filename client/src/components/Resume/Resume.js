import React from 'react'
import './Resume.css'
import Footer from '../Footer/Footer'

 
const Resume = () => {
    return (
        <div>
        <div className='resume'>
            <object data='/img/ty.pdf' type='application/pdf' width='100%' height='100%'>
            </object>
        </div>
        <Footer/>
        </div>
    )
}
 
export default Resume;