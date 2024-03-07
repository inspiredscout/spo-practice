import styles from './Backet.module.css'
import {Link} from "react-router-dom";

function Backet(){
    return(
        <main>
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src='./logo.svg' alt=''/>
                    </div>

                    <div className={styles.rightpanel}>
                        <div className={styles.contact}>
                        <div className={styles.social}>
                                <Link to='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src='./Inst.svg' alt=''/></Link>
                                <Link to='https://www.youtube.com/watch?v=johcE5s525M'><img src='./VK.svg' alt=''/></Link>
                                <Link to='https://www.youtube.com/watch?v=88EySRVKOnk'><img src='./Telegram.svg' alt=''/></Link>
                            </div>

                            <div className={styles.phone}>
                                <img src='./Phone.png'/>
                                <p>+7 123 456 14 88</p>
                            </div>
                        </div>

                        <div className={styles.button}>
                            <ul>
                                <Link style={{textDecoration: 'none'}} to='/'>
                                    <li>Home</li>
                                </Link>
                            </ul>

                            <ul>
                                <Link style={{textDecoration: 'none'}} to='/Catalog'>
                                    <li>Catalog</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                </nav>
            </header>

        </main>
    )
}

export default Backet