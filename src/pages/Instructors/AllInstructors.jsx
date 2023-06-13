
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllInstructors = () => {
  const [instructor, setInstructor] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/instructor')
      .then(res => res.json())
      .then(data => setInstructor(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
         <Helmet>
                <title>Yogastic | Instructor</title>
            </Helmet>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
        {instructor.map(({ img, classname, email, teachername }) => (
         <div key={classname} className="card w-80  shadow-xl">
         <figure className="">
             <img src={img} alt="Shoes" className="rounded-sm h-[200px]" />
         </figure>
         <div className="card-body text-start">
             <h2 className="card-title pb-2">Name: {teachername}</h2>
             <p> Class: {classname}</p>
             <p> Email: {email}</p>
         </div>
     </div>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
