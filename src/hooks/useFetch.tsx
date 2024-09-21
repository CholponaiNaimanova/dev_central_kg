import { useQuery } from "@tanstack/react-query"
const  jobs_url = 'http://3.38.98.134/jobs'

const useFetch = ({
    url
} = {
    url: jobs_url
}) => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.statusCode === 200){
                return data.data;
            }else{
                return [];
            }
        } catch (error){
            console.log(error);
        }
    }
    const {data, isLoading } = useQuery({
        queryKey: [url],
        queryFn: () => fetchData(),
    })
    return {data, loading: isLoading}
}

export default useFetch