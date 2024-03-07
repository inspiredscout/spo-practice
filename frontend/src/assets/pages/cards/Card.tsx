import styles from './Cards.module.css'
import {Link} from "react-router-dom";

function Card() {

    return (
        <main>
            <header>
                <nav className={styles.navbar}>
                    <img src='./logo.svg' alt=''/>
                    <div className={styles.conteiner}>
                        <ul>
                            <Link to='/Catalog'>
                                <li>Back to Catalog</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>

        </main>
    )
}

export default Card