import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseInstructors = () => {
   
    const {data:instructors=[], isLoading: instructorLoading} = useQuery({
        queryKey:['all-instructor'],
        queryFn:async()=>{
            const res = await axios.get('https://summer-vacetion-server-jahidcst.vercel.app/all-instructor?role=instructor');
            return res.data;
        }
    })

    return [instructors,instructorLoading]
};

export default UseInstructors;