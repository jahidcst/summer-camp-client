import { useEffect, useState } from 'react';
import ClassCard from './ClassCard';


const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='my-16'>
            <div className='text-center mb-6 '>
                <p className=' text-xl font-thin mb-2 text-purple-400 underline uppercase'>Our Popular Classes</p>
                <h2 className='text-3xl font-serif font-light '>Practice Whereever You Want Whenever You Need!
                </h2>
            </div>

            {
                <div className="grid md:grid-cols-3 gap-10 ">
                    {
                        classes.map(data => <ClassCard
                            key={data._id}
                            data={data}
                        ></ClassCard>)
                    }
                </div>

            }

        </div>
    );
};

export default PopularClasses;