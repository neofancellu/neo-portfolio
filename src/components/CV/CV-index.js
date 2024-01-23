import Loader from 'react-loaders'
import './CV-index.scss'

import pdfurl from './Neo-Fancellu-CV.pdf'



const CV = () =>{
    const url = pdfurl

    return(
        <>
        <iframe src={url} width="50%" height="98%" title='CV' className='CV' />
        <Loader type='cube-transition'/>   
        </>
    )
}


export default CV