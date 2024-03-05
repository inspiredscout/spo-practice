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
                        <div className={styles.contact}>
                            <div className={styles.social}>
                                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src='./Inst.svg' alt=''/></a>
                                <a href='https://www.youtube.com/watch?v=johcE5s525M'><img src='./VK.svg' alt=''/></a>
                                <a href='https://www.youtube.com/watch?v=lqdueOTo5UA'><img src='./Telegram.svg' alt=''/></a>
                            </div>

                            <div className={styles.phone}>
                                <img src='./Phone.png'/>
                                <p>+7 123 456 14 88</p>
                            </div>
                        </div>

                        <div className={styles.conteiner}>
                            <ul>
                                <Link to='/'>
                                    <li>Home</li>
                                </Link>
                            </ul>
                        </div>

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

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src='./1.jpg' alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h2>Name</h2>
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