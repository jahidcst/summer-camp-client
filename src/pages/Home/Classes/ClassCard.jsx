

const ClassCard = ({ data }) => {

    const { img, classname, price, teacher, students } = data;
    return (
        <div className="">
            <div className="card w-80 shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-s" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="card-title pb-2"> {classname}</h2>
                    <p> Price: ${price}</p>
                    <p> teacher: {teacher}</p>
                    <p> students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;