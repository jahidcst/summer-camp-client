import { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';


const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
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
                        instructors.map(data => <InstructorCard
                            key={data._id}
                            data={data}
                        ></InstructorCard>)
                    }
                </div>

            }

        </div>
    );
};

export default Instructors;