import styles from './Home.module.css'
import {Link} from "react-router-dom";

function Home() {

    return (
        <main>
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.conteiner}>
                        <img src='./logo.svg' alt=''/>
                        <p>A convenient store with a bunch of goods for your car.</p>
                        <ul>
                            <Link to='Catalog'>
                                <li>Catalog</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className={styles.info}>
                <h1>About us</h1>
                <p>We are a store that provides the best
                    <br/> products for cars. You can order parts
                    <br/>and products or purchase them in one of
                    <br/>our stores.</p>
            </div>

            <div className={styles.workclock}>
                <h1>The addresses of our branches and their contacts</h1>
                <p>Working hours: daily from 10.00 to 20.00. Our single
                    <br/> contact number:<br/>+7 123 456 14 88</p>
            </div>


            <div className={styles.workclockinfo}>
                <ul>
                    <li><h1>Metro Barricade</h1>
                        <p>Zamoronov Street, 18
                            <br/>+7 123 456 11 88</p></li>
                    <li><h1>Frunzenskaya metro station</h1>
                        <p>Kholunov Lane, 8
                            <br/>+7 123 456 12 88</p></li>
                    <li><h1>Tulskaya metro station</h1>
                        <p>72 Lyusinovskaya Street
                            <br/>+7 123 456 13 88</p></li>
                    <li><h1>Proletarskaya metro station</h1>
                        <p>1st Dubrovskaya street, 1A
                            <br/>+7 123 456 15 88</p></li>
                </ul>
            </div>


            <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1b7f88618406004131f94fb896aab325dd2846491ac9420e7f505639549364a&amp;source=constructor" ></iframe>

</main>
)
}

export default Home