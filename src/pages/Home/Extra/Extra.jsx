import { FaCheck} from 'react-icons/fa';
const Extra = () => {
    return (
        <div className="my-12">
            <div className='text-center space-y-3'>
                <p className='text-lg text-purple-400 underline'>WHAT WE OFFER</p>
                <h2 className='text-5xl font-serif font-medium'>Our Pricing Plans</h2>
                <p className='text-gray-400'>Molestiae non recusandae itaque earum rerum hic teneaur a sapiente delectus, rae aut reiciendis officia deserunt mollitia animi omnis dolor</p>
            </div>


            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3   mt-8">
                <div className="card card-compact  bg-teal-100 shadow-xl">
                    <figure><img className="" src="https://img.freepik.com/free-photo/woman-practicing-advanced-yoga-by-water_1157-37143.jpg?w=900&t=st=1686466296~exp=1686466896~hmac=3aecadc1977145c32024ed3ea03298e6c6f2dc0ae538583ad60069f50bef27c3" alt="Shoes" /></figure>
                    <div className="card-body text-center text-black mt-5">
                        <h2 className=" text-2xl font-serif ">Standard</h2>
                        <div className="text-start pl-16 pb-3 text-lg text-gray-500">
                             <p className='flex items-center gap-2'> <FaCheck></FaCheck> Pay as you go</p>
                            <p className='flex items-center gap-2'> <FaCheck></FaCheck>Perfect for non-residence</p></div>
                        <p className="text-lg text-gray-500"><span className="font-serif text-5xl font-semibold text-purple-400">$30</span> /per month</p>
                        <div className="card-actions justify-center pt-4">
                            <button className="btn btn-info rounded-br-3xl rounded-tl-3xl">Enroll  Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-teal-100 shadow-xl">
                    <figure><img className="" src="https://img.freepik.com/free-photo/health-beautiful-female-body-peace_1139-721.jpg?w=900&t=st=1686468670~exp=1686469270~hmac=7f246dabaec4940b2caaa54bf0a5f7b0f9ed641f0a5ce7e2140aca978041a904" alt="Shoes" /></figure>
                    <div className="card-body text-center text-black mt-5">
                        <h2 className=" text-2xl font-serif ">Professional</h2>
                        <div className="text-start pl-16 pb-3 text-lg text-gray-500">
                             <p className='flex items-center gap-2'> <FaCheck></FaCheck> Short-term comitment</p>
                            <p className='flex items-center gap-2'> <FaCheck></FaCheck>Online training for all</p></div>
                        <p className="text-lg text-gray-500"><span className="font-serif text-5xl font-semibold text-purple-400">$120</span> /per month</p>
                        <div className="card-actions justify-center pt-4">
                            <button className="btn btn-info rounded-br-3xl rounded-tl-3xl">Enroll  Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-teal-100 shadow-xl">
                    <figure><img className="" src="https://img.freepik.com/free-photo/young-blonde-woman-sportswear-is-meditating-yoga-mat-with-closed-eyes-recording_1268-17254.jpg?w=900&t=st=1686468812~exp=1686469412~hmac=ca39e61ebdaea307f04365457b89907b93e9d390bcfe82829164c35c01f8f6a4" alt="Shoes" /></figure>
                    <div className="card-body text-center text-black mt-5">
                        <h2 className=" text-2xl font-serif ">Private</h2>
                        <div className="text-start pl-16 pb-3 text-lg text-gray-500">
                             <p className='flex items-center gap-2'> <FaCheck></FaCheck> Long-term comitment</p>
                            <p className='flex items-center gap-2'> <FaCheck></FaCheck>24/7 Available</p></div>
                        <p className="text-lg text-gray-500"><span className="font-serif text-5xl font-semibold text-purple-400">$200</span> /per month</p>
                        <div className="card-actions justify-center pt-4">
                            <button className="btn btn-info rounded-br-3xl rounded-tl-3xl">Enroll  Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Extra;