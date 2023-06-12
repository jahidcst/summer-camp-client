
// const InstructorCard = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default InstructorCard;
const InstructorCard = ({ data }) => {

    const { img, classname, teachername, email } = data;
    return (
        <div className="">
            <div className="card w-80  shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-sm h-[200px]" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="card-title pb-2">Name: {teachername}</h2>
                    <p> Class: {classname}</p>
                    <p> Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;