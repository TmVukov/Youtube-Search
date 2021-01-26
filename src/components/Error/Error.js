import React, { useContext } from 'react'
import "./Error.css"
import { StateContext } from "../../StateProvider"

export default function Error() {

    const { setError } = useContext(StateContext)

    return (
        <div className="error__box">
            <div className="error__box-top">
                <h4>Error happened!</h4>
                <button class="error__btn" onClick={()=>setError(false)}>✖</button>
            </div>
            
            <div className="error__box-bottom">
                <p>Something went wrong.</p> 
                <p>Please refresh the page.</p>
            </div> 
        </div>
    )
}
