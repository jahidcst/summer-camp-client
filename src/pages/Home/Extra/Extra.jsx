
const Extra = () => {
    return (
        <div className="my-12">
            <div>
                <p>WHAT WE OFFER</p>
                <h2>Our Pricing Plans</h2>
                <p>Molestiae non recusandae itaque earum rerum hic teneaur a sapiente delectus, rae aut reiciendis officia deserunt mollitia animi omnis dolor</p>
            </div>


            <div className="flex gap-7 mt-8">
                <div className="card card-compact w-96 bg-teal-100 shadow-xl">
                    <figure><img className="" src="https://img.freepik.com/free-photo/woman-practicing-advanced-yoga-by-water_1157-37143.jpg?w=900&t=st=1686466296~exp=1686466896~hmac=3aecadc1977145c32024ed3ea03298e6c6f2dc0ae538583ad60069f50bef27c3" alt="Shoes" /></figure>
                    <div className="card-body text-center text-black mt-5">
                        <h2 className=" text-2xl font-serif ">Standard</h2>
                        <div className="text-start pl-16 pb-3 text-lg text-gray-500">
                             <p>Pay as you go</p>
                            <p>Perfect for non-residence</p></div>
                        <p className="text-lg text-gray-500"><span className="font-serif text-5xl font-semibold text-purple-400">$30</span> /per month</p>
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