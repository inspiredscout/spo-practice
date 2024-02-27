import styles from './Catalog.module.css'
import {Link} from "react-router-dom";
function Catalog() {
    return(
        <main>

            <header>
                <nav className={styles.navbar}>
                    <div className={styles.conteiner}>
                        <img src='./logo.svg' alt=''/>
                        <ul>
                            <Link to='/'>
                                <li>Home</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className={styles.info}>
                <p>Гриша когда работать будешь????????</p>
            </div>

        </main>
    )
}

export default Catalog