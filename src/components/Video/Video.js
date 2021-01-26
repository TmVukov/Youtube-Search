import React, { useContext } from 'react'
import "./Video.css"
import { StateContext } from "../../StateProvider"
import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error"
import template from "./no-thumbnail.jpg"


export default function Video() {    

    const { items, loading, error, type } = useContext(StateContext)

    return (
        <section className="video__container">
           {
               loading ? <Spinner/> : 
               
               error ? <Error/> :
               
               items.map((item,i)=>(
                  <div key={i} className="video">
                   
                   <img 
                    src={item.snippet.thumbnails.medium.url} 
                    alt={item.snippet.title}
                    onError={e=>{e.target.src=template; e.target.style="padding: 60px 0"}}                   
                   />
                   

                   {
                       type === "video" ? 
                       <a href={"https://www.youtube.com/watch?v=" + item.id.videoId} target="_blank" rel="noreferrer">
                           <h5>{item.snippet.title}</h5>
                        </a> :

                       type === "channel" ?
                       <a href={"https://www.youtube.com/channel/" + item.id.channelId} target="_blank" rel="noreferrer">
                           <h5>{item.snippet.title}</h5>
                       </a> :

                       type === "playlist" ?
                       <a href={"https://www.youtube.com/playlist?list=" + item.id.playlistId} target="_blank" rel="noreferrer">
                           <h5>{item.snippet.title}</h5>
                       </a> :

                       null
                   }
                  </div>
               ))
           }
        </section>
    )
}

