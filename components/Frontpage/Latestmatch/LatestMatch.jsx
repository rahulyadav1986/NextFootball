import Link from "next/link";
import { useState } from "react";
import styles from "./Latestmatch.module.scss";
const LatestMatch = ({Data})=>{
    // const [clicklatest, setClickLatest]= useState();
    // const onclickLatest = ()=> setClickLatest(!clicklatest);

    const [clickPop, setClickPop] = useState(false);
    const getPop = (i) => {
        setClickPop(i)
    }
    return(
        <>
            {/* <div id="latest" className={styles.latest_match_wrapper}>
                <img className={styles.particles} src="/images/background01.jpg" alt="" />
                <img className={styles.particles2} src="/images/background03.jpg" alt="" />
                <div className={`${styles.container} container`}>
                    <h2>Latest Match</h2>
                    {
                       LatestData.slice(0,1).map((item,i)=>{
                        return(
                            <div className={styles.click_thumb} key={i} onClick={onclickLatest}><img src={item.thumbnail} alt="" /></div>
                        )
                       }) 
                    }
                    
                    {
                        LatestData.slice(0,1).map((item,i)=>{
                            return(
                                <ul key={i} className="d-flex align-itms-center justify-content-between">                       
                                    <li className="d-flex align-items-center">
                                        <img src="/images/ball.png" alt="" />                            
                                        <h3>{item.side1.name}<br /><Link target="_blank" href={item.side1.url}>Explore <i class="fa-solid fa-arrow-right"></i></Link></h3>
                                    </li>
                                    <li className={styles.versus}>VS</li>
                                    <li className="d-flex align-items-center">
                                        <img src="/images/ball.png" alt="" />                            
                                        <h3>{item.side2.name}<br /><Link target="_blank" href={item.side2.url}><i class="fa-solid fa-arrow-left"></i>Explore</Link></h3>
                                    </li>
                                </ul>
                            )
                        })
                    }

                    <div onClick={onclickLatest} className={clicklatest ? `${styles.pop_over_latest_video} ${styles.active}` : `${styles.pop_over_latest_video}`}>
                        <div className={styles.inner_pop}>
                            {
                                LatestData.slice(0,1).map((item,i)=>{
                                    return(
                                        <div dangerouslySetInnerHTML={{__html: item.embed}}></div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>

                    
                </div>
            </div> */}

            <div id="latest" className={styles.latest_new_wrapper}>
                <img className={styles.particles2} src="/images/background03.jpg" alt="" />
                <div className={`${styles.container} container d-flex `}>
                   <div className={styles.left_details}>
                        <img src="/images/bg-6.webp" alt="" />
                   </div> 
                   <div className={styles.right_details}>                    
                    <h2>Latest Matches</h2>
                    <div className={`${styles.match_details} d-flex flex-wrap`}>
                        {
                        Data.slice(0,3).map((item,i)=>{
                            return(
                                    
                                    <div key={i} className={`${styles.list} d-flex`}>
                                        <div className={styles.thumbnail} onClick={() => getPop(i)}>
                                            <img src={item.thumbnail} alt="" />
                                            <i class="fa-solid fa-circle-play"></i>
                                        </div>
                                        <div className={`${styles.details}`}>
                                            <div className={`${styles.compitition} d-flex align-items-center`}>
                                                <img src="/images/trophy.png" className={styles.trophy} alt="" />
                                                <h6>{item.competition.name}</h6>
                                            </div>
                                            <ul className={`${styles.team_match} d-flex align-itms-center flex-column justify-content-between`}>                       
                                                <li className="d-flex align-items-center">
                                                    <img src="/images/ball.png" alt="" />                            
                                                    <div className={`${styles.side} d-flex align-items-center`}>
                                                        <h3>{item.side1.name}</h3>
                                                        <Link target="_blank" href={item.side1.url}>Explore <i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </li>
                                                <li className={styles.versus}>VS</li>
                                                <li className="d-flex align-items-center">
                                                    <img src="/images/ball.png" alt="" />                            
                                                    <div className={`${styles.side} d-flex align-items-center`}>
                                                        <h3>{item.side2.name}</h3>
                                                        <Link target="_blank" href={item.side2.url}>Explore <i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                   
                      
                   </div> 
                </div>               
                {
                    
                    Data.slice(0,3).map((item,i)=>{
                        return(
                            <>
                                {
                                    clickPop === i ?
                                    <div onClick={() => getPop(!clickPop)} className={styles.pop_over_latest_video}>
                                        <div className={styles.inner_pop}>
                                            <div key={i} dangerouslySetInnerHTML={{__html: item.embed}}></div>
                                        </div>
                    
                                    </div>
                                    :
                                    ""
                                }
                            </>
                            
                        )
                    }) 
                }    
                    
            </div>
        </>
    )

}

export default LatestMatch;