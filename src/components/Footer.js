import Form from './Form';
import FooterNav from './FooterNav';

const Footer = () => {

    return (
        <div className="bg-indigo-500 mx-auto mt-11 lg:mt-0">
            <div className="p-9 flex flex-col items-center">
                <div>
                    <h4 className="text-white text-sm tracking-[5px]"> 35,000+ ALREADY JOINED</h4>
                </div>
                <div className="mt-9">
                    <h2 className="text-3xl text-white text-center max-w-md">Stay up-to-date with what
                        we’re doing</h2>
                </div>
                <div className='mt-10'>
                    <Form />
                </div>
            </div>
            <div className='mt-10'>
                <FooterNav />
            </div>
        </div>
    )
};

export default Footer;