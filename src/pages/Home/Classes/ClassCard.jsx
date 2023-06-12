

const ClassCard = ({ classItem }) => {

    const { img, classname, price, teacher, students } = classItem;
    return (
        <div className="">
            <div className="card w-80 shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-sm" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="card-title pb-2">Name: {classname}</h2>
                    <p> Price: ${price}</p>
                    <p> teacher: {teacher}</p>
                    <p> students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;