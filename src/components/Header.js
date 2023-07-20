import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className='flex flex-col mx-auto h-screen md:h-full lg:h-screen'>
            <Navbar />
            <Banner />
        </div>
    )
};

export default Header;