import Card from './Card';
import chrome from '../assets/images/logo-chrome.svg';
import firefox from '../assets/images/logo-firefox.svg';
import opera from '../assets/images/logo-opera.svg';

const Extensions = () => {
    return (
        <div className='container mx-auto h-full lg:h-screen mt-11'>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-medium text-center'>Download the extension</h2>
                <p className="mt-5 text-center opacity-50 text-lg leading-7 w-5/12">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-center mt-10 gap-8 h-full'>
                <div>
                    <div className='shadow-lg rounded-lg pb-5'>
                        <Card img={chrome} title='Add to Chrome' text='Minimum version 62' />
                    </div>
                </div>
                <div>
                    <div className='mt-5 md:mt-7 shadow-lg rounded-lg pb-5'>
                        <Card img={firefox} title='Add to Firefox' text='Minimum version 55' className='mt-5' />
                    </div>
                </div>
                <div>
                    <div className='mt-5 md:mt-11 shadow-lg rounded-lg pb-5'>
                        <Card img={opera} title='Add to Opera' text='Minimum version 46' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Extensions;