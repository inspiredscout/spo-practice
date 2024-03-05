import styles from './Catalog.module.css'
import {Link} from "react-router-dom";
function Catalog() {
    return(
        <main>

            <header>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src='./logo.svg' alt=''/>

                    </div>

                        <div className={styles.conteiner}>
                            <ul>
                                <Link to='/'>
                                    <li>Home</li>
                                </Link>
                            </ul>
                        </div>

                </nav>
            </header>

            <div className={styles.catalog}>
                <div className={styles.filters}>

                    <ul className={styles.types}>
                        <li>Oils and liquids</li>
                        <li>Accessories</li>
                        <li>Tires and rims</li>
                        <li>Product for maintenance</li>
                    </ul>

                    <ul className={styles.brands}>
                        <li><h1>Brands</h1></li>
                        <li>GigaPremium</li>
                        <li>GigaGold</li>
                        <li>GigaPlatinum</li>
                        <li>GigaSilver</li>
                    </ul>
                </div>

                <div className={styles.cards}>
                    <div className={styles.position}>
                        <Link to='/Catalog/info'>
                            <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                            </div>
                        </Link>

                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                </div>


            </div>

        </main>
    )
}

export default Catalog