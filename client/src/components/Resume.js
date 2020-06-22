import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
 
const Resume = () => {
    return (
        <div className='resume'>
        <PDFViewer
            document={{
                url: '/img/ty.pdf',
            }}
            navbarOnTop={true}
            css='view'
            hideRotation={true}

        />
        </div>
    )
}
 
export default Resume;