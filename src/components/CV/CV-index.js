import Loader from 'react-loaders'
import './CV-index.scss'

import CV_IMAGE from '../../assets/images/cv_image.png'


const CV = () =>{
    return(
        <>
        <img src={CV_IMAGE} alt='cv' className='CV' />
        <Loader type='cube-transition'/>   
        </>
    )
}


export default CV