import React, { useState } from 'react';
import styles from './Backet.module.css';
import { Link } from 'react-router-dom';

const Product = () => {
    const [count, setCount] = useState(0); // Состояние для счетчика

    const increment = () => {
        setCount(count + 1); // Функция для увеличения счетчика
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1); // Функция для уменьшения счетчика, предотвращает отрицательные значения
        }
    };

    return (
        <div className={styles.position}>
            <div className={styles.image}>
                <img src="./1.jpg" alt=""/>
            </div>
            <div className={styles.details}>
                <div className={styles.productInfo}>
                    <h3>yourDetail</h3>
                    <p>Price: {Math.floor(Math.random() * 50) * 1000 + 5000}</p>
                </div>
            </div>
            <div className={styles.counter}>
                <button className={styles.counterButton} onClick={decrement}>-</button>
                <span className={styles.counterValue}>{count}</span>
                <button className={styles.counterButton} onClick={increment}>+</button>
            </div>
        </div>


    );
};

const Backet = () => {
    return (
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
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <li>Home</li>
                                </Link>
                            </ul>

                            <ul>
                                <Link style={{ textDecoration: 'none' }} to="/Catalog">
                                    <li>Catalog</li>
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
                    <Product />
                    <Product />
                </div>
            </div>
        </main>
    );
};

export default Backet;
