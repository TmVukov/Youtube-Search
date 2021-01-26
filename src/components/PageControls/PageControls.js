import React, { useContext } from 'react'
import "./PageControls.css"
import { StateContext } from "../../StateProvider"
import useStartAPI from "../../hooks/apiHook"
import useStartAPI2 from "../../hooks/apiHook2"

export default function PageControls() {   
    
    const {currentPage, resultsPerPage, totalResults } = useContext(StateContext)
    
    const totalPages = Math.floor(totalResults/resultsPerPage)
    
        
    return (
        <div className="page__controls">

            <div className="page__info">
                <p>current page: {currentPage < 0 ? 0 : currentPage > totalPages ? totalPages : currentPage}</p>
                <p>total pages: {isFinite(totalPages) ? totalPages : currentPage}</p>
            </div>
            
           <div className="page__btns-box">
                <button onClick={useStartAPI2()}><span>‹</span></button> 
                <button onClick={useStartAPI()}><span>›</span></button>
           </div>           
                      
        </div>
    )
}

