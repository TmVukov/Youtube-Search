import React, { useContext } from 'react'
import "./Search.css"
import { StateContext } from "../../StateProvider"
import useStartAPI from "../../hooks/apiHook"


export default function Search() {    
    
    const { 
        setQuery, 
        order, setOrder, 
        setStartDate, setEndDate, 
        type, setType, 
        option, setOption, 
        setTopic 
    } = useContext(StateContext) 
    
    

    return (        
        <section className="search">

             <div className="search__box">

                <div className="search__custom-select">
                    <select name="type" id="type" onChange={e=>setType(e.target.value)}>                    
                        <option value="type">select type</option>
                        <option value="channel">channel</option>
                        <option value="playlist">playlist</option>
                        <option value="video">video</option>                        
                    </select>
                    <span className="search__custom-arrow"></span>
                </div> 


                {
                   type === "channel" ?
                   
                   <div className="search__custom-select">
                         <select name="option" id="option" onChange={e=>setOption(e.target.value)}>
                             <option value="select">search by</option>                
                             <option value="keyword">keyword</option>
                             <option value="topicId">topicId</option>         
                         </select>
                         <span className="search__custom-arrow"></span>
                    </div>

                    :

                   type === "video" || type === "playlist" ?
                   
                   <input type="text" placeholder="keyword1, keyword2, ..." onChange={e=>setQuery(e.target.value)} className="search__input-keyword"/> :

                   null
                }    
                

                {                
                     type === "channel" && option === "keyword" ?
                     
                     <input type="text" placeholder="keyword1, keyword2, ..." onChange={e=>setQuery(e.target.value)} className="search__input-keyword"/> :

                     type === "channel" && option === "topicId" ?

                     <div className="search__custom-select">
                     <select onChange={e=>setTopic(e.target.value)}>
                         <option value="select">select topicId </option>                
                         <option value="/m/0ggq0m">Classical music</option>                                       
                         <option value="/m/02lkt">Electronic music</option>
                         <option value="//m/0glt670">Hip hop music</option>
                         <option value="/m/05rwpb">Independent music</option>                
                         <option value="/m/03_d0">Jazz</option>                                        
                         <option value="/m/064t9">Pop music</option>
                         <option value="/m/06cqb">Reggae</option>
                         <option value="/m/06j6l">Rhythm and blues</option>
                         <option value="/m/06by7">Rock music</option>
                         <option value="/m/0gywn">Soul music</option>
                         <option value="/m/018w8">Basketball</option>
                         <option value="/m/01cgz">Boxing</option>
                         <option value="/m/02vx4">Football</option>
                         <option value="/m/01h7lh">Mixed martial arts</option>
                         <option value="/m/0410tth">Motorsport</option>
                         <option value="/m/07bs0">Tennis</option>
                         <option value="/m/09kqc">Humor</option>
                         <option value="/m/02vxn">Movies</option>
                         <option value="/m/05qjc">Performing arts</option>
                         <option value="/m/0f2f9">TV shows</option>
                         <option value="/m/032tl">Fashion</option>
                         <option value="/m/027x7n">Fitness</option>
                         <option value="/m/02wbm">Food</option>
                         <option value="/m/03glg">Hobby</option>
                         <option value="/m/068hy">Pets</option>
                         <option value="/m/041xxh">Physical attractiveness [Beauty]</option>
                         <option value="/m/07c1v">Technology</option>
                         <option value="/m/07bxq">Tourism</option>
                         <option value="/m/07yv9">Vehicles</option>
                         <option value="/m/09s1f">Business</option>
                         <option value="/m/09s1f">Business</option>
                         <option value="/m/0kt51">Health</option>
                         <option value="/m/01h6rj">Military</option>
                         <option value="/m/05qt0">Politics</option>
                         <option value="/m/06bvp">Religion</option>
                         <option value="/m/01k8wb">Knowledge</option>                        
                     </select>
                     <span className="search__custom-arrow"></span>
                    </div>

                     :
                     
                     null                                 
                }

                {    
                    type === "channel" &&  (option === "keyword"  || option === "topicId") ?

                    <div className="search__custom-select">
                        <select name="order" id="order" onChange={e=>setOrder(e.target.value)}>
                            <option value="select">search by</option>                
                            <option value="rating">rating</option>
                            <option value="relevance">relevance</option>                
                            <option value="videoCount">videoCount</option>
                            <option value="viewCount">viewCount</option>
                        </select>
                        <span className="search__custom-arrow"></span>
                    </div>

                     :     
 
                     type === "playlist" ? 
 
                     <div className="search__custom-select">
                         <select name="order" id="order" onChange={e=>setOrder(e.target.value)}>
                             <option value="select">search by</option>                
                             <option value="title">title</option>
                             <option value="rating">rating</option>         
                         </select>
                         <span className="search__custom-arrow"></span>
                     </div>

                      :                    
                    
                    type === "video" ?
                    
                    <div className="search__custom-select">
                        <select name="order" id="order" onChange={e=>setOrder(e.target.value)}>
                            <option value="select">search by</option>
                            <option value="date">date</option>
                            <option value="rating">rating</option>
                            <option value="relevance">relevance</option>
                            <option value="title">title</option>
                        </select>
                        <span className="search__custom-arrow"></span>
                    </div>
                     :                   

                    null
                }

                <div>
                    {
                        type === "video" && order !== "date" && order !== "" && order !== "select" ? 

                        <div className="search__datepicker">
                            <p>optional query</p>
                            <label htmlFor="start">start:</label>
                            <input type="date" className="search__input-date" onChange={e=>setStartDate(e.target.value)}/>
                            <label htmlFor="end">end:</label>
                            <input type="date" className="search__input-date" onChange={e=>setEndDate(e.target.value)}/>
                        </div>
                         : 
                        null
                    }
                </div>

                <button onClick={useStartAPI()} className="search__btn">Search</button>

             </div>
            

            {                
                order === "date" ? 
                <p><strong>date</strong> – resources are sorted in reverse chronological order based on the date they were created</p> :

                order === "rating" ? 
                <p><strong>rating</strong> – resources are sorted from highest to lowest rating</p> :

                order === "relevance" ? 
                <p><strong>relevance</strong> – resources are sorted based on their relevance to the search query</p> :

                order === "title" ? 
                <p><strong>title</strong> – resources are sorted alphabetically by title</p>:

                order === "videoCount" ? 
                <p><strong>videoCount</strong> – channels are sorted in descending order of their number of uploaded videos</p>:

                order === "viewCount" ? 
                <p><strong>viewCount</strong> – resources are sorted from highest to lowest number of views</p> :
                
                null                
            }      
        
        </section>
    )
}



