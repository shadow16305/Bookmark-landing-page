import { useForm } from 'react-hook-form';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

    return (
        <form className='flex flex-col md:flex-row' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
                <input className='py-2 px-5 border-2 border-indigo-500 rounded-md'
                    type="text"
                    placeholder="Enter your email adress"
                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                />
                {errors.email && <span className='bg-red-500 rounded-md text-white py-1 px-3'>Whoops, make sure it’s an email</span>}
            </div>
            <div className='px-5 flex justify-center'>
                <input type="submit" className='px-8 drop-shadow-lg py-2 duration-150 flex items-center tracking-widest text-lg md:text-sm uppercase font-normal leading-snug cursor-pointer text-white hover:bg-white hover:text-red-500 border-2 border-red-500 rounded-md bg-red-500' />
            </div>
        </form>
    )
};

export default Form;