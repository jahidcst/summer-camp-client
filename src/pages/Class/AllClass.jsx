
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Helmet>
                <title>Yogastic | Classes</title>
            </Helmet>
            <h2 className="text-4xl font-serif text-center my-8 underline  text-emerald-400"> Our Classes : {classes.length}</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
                {classes.map(({ img, classname, price, teacher, students }) => (
                    <div key={classname} className="card w-80 shadow-xl">
                        <figure>
                            <img src={img} alt="Shoes" className="rounded-sm" />
                        </figure>
                        <div className="card-body text-start">
                            <h2 className="card-title pb-2">Name: {classname}</h2>
                            <p>Price: ${price}</p>
                            <p>Teacher: {teacher}</p>
                            <p>Students: {students}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllClass;
