import dots from '../assets/images/bg-dots.svg';

export default function Card(props) {
    return (
        <div className="text-center flex flex-col items-center md:px-4">
            <img src={props.img} alt="" />
            <h3 className="text-xl text-medium text-center mt-7">{props.title}</h3>
            <p className="opacity-75 text-sm mt-5">{props.text}</p>
            <div className='h-1 md:w-full mt-7' style={{ backgroundImage: `url(${dots})` }}></div>
            <div>
                <button className='mt-7 bg-indigo-500 duration-150 px-4 md:px-6 text-sm py-3 drop-shadow-lg border-2 border-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 text-white rounded-md font-medium'>Add & Install Extension</button>
            </div>
        </div>
    )
};