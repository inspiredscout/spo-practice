import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';
import { fetchData, Product } from "./CatalogData";

const Catalog: React.FC = () => {
    const [data, setData] = useState<Product[]>([]); // Хранение данных о продуктах

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData(); // Получение данных с помощью функции fetchData из CatalogData.ts
                setData(result); // Установка полученных данных в состояние
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchDataFromApi(); // Вызов функции для получения данных при загрузке компонента

    }, []);

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
                                <Link to='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src='./Inst.svg'
                                                                                            alt=''/></Link>
                                <Link to='https://www.youtube.com/watch?v=johcE5s525M'><img src='./VK.svg'
                                                                                            alt=''/></Link>
                                <Link to='https://www.youtube.com/watch?v=88EySRVKOnk'><img src='./Telegram.svg'
                                                                                            alt=''/></Link>
                            </div>

                            <div className={styles.phone}>
                                <img src='./Phone.png' alt=''/>
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
                                <Link style={{textDecoration: 'none'}} to='/Backet'>
                                    <li>Backet</li>
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
                                <img src={'./1.jpg'} alt=''/>
                            </div>
                        </Link>

                        <div className={styles.info}>
                            {data ? (
                                <div>
                                    {data.map((Product, index) => (
                                        <h3 key={index}>{Product.name}</h3>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>
                        <div className={styles.info}>
                            {data ? (
                                <div>
                                    {data.map((userData, index) => (
                                        <h3 key={index}>{userData.name}</h3>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>
                        <div className={styles.info}>
                            {data ? (
                                <div>
                                    {data.map((userData, index) => (
                                        <h3 key={index}>{userData.name}</h3>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>
                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>
                        <div className={styles.info}>
                            {data ? (
                                <div>
                                    {data.map((userData, index) => (
                                        <h3 key={index}>{userData.name}</h3>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>

                    </div>
                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h3>Name</h3>
                            <p>Price</p>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className={styles.position}>
                        <div className={styles.image}>
                            <img src={'./1.jpg'} alt=''/>
                        </div>

                    </div>

                </div>


            </div>
        </main>
    );
};

export default Catalog;