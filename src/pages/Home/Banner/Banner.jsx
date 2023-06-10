

const Banner = () => {
    return (
        <div className="carousel w-full h-[550px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/yoga-woman-young-woman-doing-yoga-morning_654080-1084.jpg?w=900&t=st=1686416825~exp=1686417425~hmac=78cb5758b015d68476756dfe184e9acc1106aa73bcbc05c428483a1e9df7cb78" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 rounded-xl top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-10 space-y-5 '>
                        <h2 className='text-5xl font-bold '>
                            Start Healing , <br /> Your Mind <br />Body & Soul
                        </h2>
                        <p>Duis aute irure dolor in reprehenderit in volurate velit cillum <br /> nulla pariatur nostrud exercitation.</p>

                        <div>
                            <button className="btn btn-outline mt-5 mr-5">Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
                    <a href="#slide4" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-teal-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/trainer-helping-women-practicing-meditation-hall_7502-5150.jpg?w=826&t=st=1686416943~exp=1686417543~hmac=ec26b6c04deca0feeac2306484b97f2881c1de6f9c5d5cd6dd9d066844213f72" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 rounded-xl top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-10 space-y-7 '>
                        <h2 className='text-5xl font-bold '>
                            Start Healing , <br /> Your Mind <br />Body & Soul
                        </h2>
                        <p>Duis aute irure dolor in reprehenderit in volurate velit cillum <br /> nulla pariatur nostrud exercitation.</p>

                        <div className=''>
                            <button className="btn btn-primary mr-5">Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide1" className="btn btn-circle  bg-teal-600 mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-teal-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/one-hiking-lifestyle-summer-yoga_1150-1002.jpg?w=826&t=st=1686417011~exp=1686417611~hmac=78b23657cc3b64f392855a5b5ad5ccf84d8235a72b887281c9bac1f720b2047e" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 rounded-xl top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-10 space-y-7 '>
                        <h2 className='text-5xl font-bold '>
                            Start Healing , <br /> Your Mind <br />Body & Soul
                        </h2>
                        <p>Duis aute irure dolor in reprehenderit in volurate velit cillum <br /> nulla pariatur nostrud exercitation.</p>

                        <div className=''>
                            <button className="btn btn-primary mr-5">Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide2" className="btn btn-circle  bg-teal-600 mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle  bg-teal-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/sexy-brunette-female-doing-yoga-pilates-restroom-with-green-palms_613910-9066.jpg?w=826&t=st=1686417066~exp=1686417666~hmac=b6c4b291aace757a73c2feb8842007f7e5dab6a718a7e077de247c29ff2e072f" className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 rounded-xl top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-10 space-y-7 '>
                        <h2 className='text-5xl font-bold '>
                            Start Healing , <br /> Your Mind <br />Body & Soul
                        </h2>
                        <p>Duis aute irure dolor in reprehenderit in volurate velit cillum <br />nulla pariatur nostrud exercitation.</p>

                        <div className=''>
                            <button className="btn btn-primary mr-5">Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5  ">
                    <a href="#slide3" className="btn btn-circle  bg-teal-600 mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-teal-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;