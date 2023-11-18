import { LuMail } from "react-icons/lu";
import { BsSendFill } from "react-icons/bs";
import { CiFacebook, CiTwitter, CiInstagram, CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


const NewsLetter = () => {
    return (
        <div className='text-center text-white mx-auto justify-content-center' style={{ backgroundImage: `url('https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }}>
            <div className='custom-bg-primary py-5' style={{ backgroundColor: 'rgba(245, 105, 129, 0.35)' }}>
                <h5 className='fs-6 fw-light'>Subscribe</h5>
                <h1 className='text-uppercase fw-bold'>Newsletter</h1>
                <h5 className='mt-4 fw-light'>Subscribe our newsletter to be updated</h5>
                <div className='mt-3'>
                    <div className="input-group input-group-lg w-50 mx-auto focus-ring-success">
                        <div className="input-group-text"><LuMail /></div>
                        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="enter your email" />
                        <div type='button' className="input-group-text custom-bg-primary text-white" aria-label="Close"><BsSendFill /></div>
                    </div>
                </div>
                <div className='fs-1 mt-4'>
                    <CiFacebook className='mx-3' />
                    <CiTwitter className='mx-3' />
                    <CiYoutube className='mx-3' />
                    <CiInstagram className='mx-3' />
                    <FaWhatsapp className='mx-3' />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;