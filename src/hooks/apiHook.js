import { useContext } from "react"
import { gapi } from 'gapi-script';
import { StateContext } from "../StateProvider"
import moment from "moment"

export default function ApiHook(){     

    const { 
      query, type, 
      order, topic, 
      startDate, endDate, 
      setItems, 
      nextPageToken, setNextPageToken, 
      setPrevPageToken, 
      setResultsPerPage, setTotalResults, 
      currentPage, setCurrentPage, 
      setLoading, setError 
    } = useContext(StateContext)
    

    const API_KEY = `${process.env.REACT_APP_API_KEY}`    
      
   
    const loadClient = () => {
      gapi.client.setApiKey(`${API_KEY}`);
      return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(()=>console.log("GAPI client loaded for API") ,
                  (err)=>console.error("Error loading GAPI client for API", err))
    }   
   
    const search = () => {
      return gapi.client.youtube.search.list({
          "part": [
              "snippet"
            ],
            "type": `${type}`,                                            
            "maxResults": 50,
            "order": `${order}`,
            "q": `${query}`,
            "topicId" : `${topic}`,
            "pageToken": `${nextPageToken}`,
            "publishedAfter": startDate ? `${moment(startDate).toISOString()}` : null,
            "publishedBefore": endDate ? `${moment(endDate).toISOString()}`: null,                       
      })
      .then(response => {  
          setLoading(false)
        
          const {result: {items}} = response
          setItems(items)

          const {result: {nextPageToken}} = response
          setNextPageToken(nextPageToken)

          const {result: {prevPageToken}} = response
          setPrevPageToken(prevPageToken)

          const {result: {pageInfo: {resultsPerPage}}} = response
          setResultsPerPage(resultsPerPage)
          
          const {result: {pageInfo: {totalResults}}} = response
          setTotalResults(totalResults)                    

          console.log(response)                          
          },
          
      )
      .catch(
        err => {
          setError(true)
          setLoading(false)
          setCurrentPage(currentPage)             
          console.log("Execute error", err.message)
        } 
      )
    } 

    const startAPI = () =>{
      loadClient().then(()=>{
        setLoading(true)
        setError(false)
        setCurrentPage(currentPage+1)    
        search()
    })     
  }
  return startAPI    
}
