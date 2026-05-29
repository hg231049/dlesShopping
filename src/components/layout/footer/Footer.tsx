import Logo from '../Logo';
import FooterBusiness from './FooterBusiness';
import FooterPolicy from './FooterPolicy'; 
import FooterCs from './FooterCs'; 

const Footer = () => {
    return <footer className='p-[64px_0_48px_0] bg-[#FBFBFB]'>
            <div className="inner">
                <div className="footer-wrap flex flex-col justify-between lg:flex-row">
                    <div className="footer-box box1 flex flex-col gap-5 mb-10 lg:max-w-[142px] lg:justify-between lg:gap-0 lg:mb-0">
                        <Logo/>
                        <FooterBusiness/>
                    </div>
                    <div className="footer-box box2 flex flex-col-reverse gap-[30px] lg:flex-row lg:gap-18">
                        <FooterPolicy/>
                        <FooterCs/>
                    </div>
                </div>
            </div>
        </footer>
}

export default Footer;