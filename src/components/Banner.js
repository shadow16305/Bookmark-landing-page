import hero from '../assets/images/illustration-hero.svg';
import rectangleOne from '../assets/images/Rectangle.svg';

const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row md:mt-7 px-11 z-0">
            <div className="grid md:grid-cols-2">
                <div className='flex flex-col md:justify-center order-2 md:order-1 text-center md:text-start'>
                    <h1 className="text-2xl md:text-5xl md:w-9/12 font-medium leading-10">A Simple Bookmark Manager</h1>
                    <p className="opacity-50 mt-6 md:w-9/12 text-lg leading-7">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='mt-6 flex flex-row'>
                        <button className='me-2 bg-indigo-500 duration-150 px-4 md:px-6 text-sm py-3 drop-shadow-lg border-2 border-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 text-white rounded-md font-medium'>Get it on Chrome</button>
                        <button className='bg-gray-200 duration-150 px-4 md:px-6 text-sm py-3 drop-shadow-lg rounded-md md:ms-3 border-2 hover:bg-transparent hover:border-slate-900'>Get it on Firefox</button>
                    </div>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={hero} className='relative z-10' alt="" />
                    <img src={rectangleOne} className='absolute hidden lg:block z-0 top-52 md:top-96 md:right-0' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner;