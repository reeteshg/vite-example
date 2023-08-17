import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

export default () => {
  return useQuery({
    queryKey: ["dog", "random"],
    queryFn: () => axios.call("get", "https://dog.ceo/api/breeds/image/random"),
    select: (response) => response.data, //extract data from Axios response
    // refetchOnWindowFocus: false //if set to true, the data will not refetch if the user navigates away from the window
    // cacheTime: 1000 * 10, //Length of time before the inactive data is removed from the cache (Default is 5 mins)
    // staleTime: 1000 * 10 //Will make the data "stale" after 10 seconds, this means after 10 seconds if the user moves away from the window and back, it'll refresh
  })
}
