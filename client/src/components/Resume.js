import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
 
const Resume = () => {
    return (
        <div className='resume'>
            <object data='/img/ty.pdf' type='application/pdf' width='100%' height='100%'>
            </object>
        </div>
    )
}
 
export default Resume;