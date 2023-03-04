import styles from './Hero.module.scss';
const Hero = ()=>{
    return(
        <>
            <div className={styles.hero_container}>
                <div className={styles.slide_item}>
                    <img className={styles.hero_bg} src="/images/hero_bg.jpg" alt="" />
                    <div className={styles.content_wrapper}>
                        <div className={`${styles.container} container d-flex align-items-center justify-content-between`}>
                            <div className={`${styles.content_area} d-flex flex-column justify-content-center`}>
                                <div className={styles.tag_line}>welcome to</div>
                                <h3>pro soccer<br /><span>football club</span></h3>                               
                            </div>
                            <img className={styles.hero_avator} src="/images/hero_avator2.png" alt="" />
                        </div>
                    </div>
                </div>
                <a href="#latest" className={`${styles.down_arrow} d-flex align-items-center justify-content-center`}><i class="fa-solid fa-chevron-down"></i></a>
            </div>
        </>
    )
}

export default Hero;