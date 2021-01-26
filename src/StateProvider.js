import React, { useState, createContext } from 'react'

export const StateContext = createContext()

export default function StateProvider({children}) {
    const [query, setQuery] = useState("")
    const [order, setOrder] = useState("")
    const [type, setType] = useState("")
    const [option, setOption] = useState("")
    const [topic, setTopic] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [items, setItems] = useState([])
    const [nextPageToken, setNextPageToken] = useState("")
    const [prevPageToken, setPrevPageToken] = useState("")
    const [resultsPerPage, setResultsPerPage] = useState(null)
    const [totalResults, setTotalResults] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [btnValue, setBtnValue] = useState("")

    return (
        <StateContext.Provider value={{
               query, setQuery,
               order, setOrder,
               type, setType,
               option, setOption,            
               topic, setTopic,
               items, setItems,
               startDate, setStartDate,
               endDate, setEndDate,
               nextPageToken, setNextPageToken,
               prevPageToken, setPrevPageToken,
               resultsPerPage, setResultsPerPage,
               totalResults, setTotalResults, 
               currentPage, setCurrentPage, 
               loading, setLoading,
               error, setError,
               
               btnValue, setBtnValue
            }}>
            {children}
        </StateContext.Provider>
    )
}