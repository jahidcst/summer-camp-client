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
                <p className=' text-xl font-thin mb-2 text-purple-400 underline uppercase'>Meet Our Instructors</p>
                <h2 className='text-md font-medium '>We are a team of experienced people, nutrition, sports and fitness passionate experts with talent and knowledge unsurpassed in the industry. Get to know us.
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