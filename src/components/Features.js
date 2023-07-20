import './Features.css';
import Tabs from './Tabs';

const Features = () => {
    return (
        <div className='container mx-auto h-full md:h-full lg:h-screen md:mt-11 lg:mt-0'>
            <section>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-medium text-center'>Features</h2>
                    <p className="mt-5 text-center opacity-50 text-lg leading-7 w-6/12">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
            </section>
            <section className='mt-11'>
                <Tabs />
            </section>
        </div>
    )
};

export default Features;