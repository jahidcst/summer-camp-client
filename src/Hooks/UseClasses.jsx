import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseClasses = () => {
   
    const {data: classes= [], refetch ,isLoading:classesLoading} = useQuery({
        queryKey:['classes'],
        queryFn: async () =>{
            const res = await axios.get('https://summer-vacetion-server-jahidcst.vercel.app/classes')
            return res.data;
        }
    })

    return [classes,refetch,classesLoading]
};

export default UseClasses;