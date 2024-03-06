import styles from './Backet.module.css'
import {Link} from "react-router-dom";

function Backet(){
    return(
        <main>
            <header>
                <nav className={styles.navbar}>
                    <img src='./logo.svg' alt=''/>
                    <div className={styles.conteiner}>
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

                </nav>
            </header>

        </main>
    )
}

export default Backet