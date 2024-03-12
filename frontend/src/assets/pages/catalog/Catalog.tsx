import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';
import axios from 'axios';

export const getRandomIndex = () => Math.floor(Math.random() * 3);
const Catalog: React.FC = () => {
    const [products, setProducts] = useState<{ id: number, name: string, price: string, photos: { id: number, photoId: number, url: string }[]}[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://spo.ultrapivomode.space/api/product/getAll');
                setProducts(response.data.allProduct);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };


        fetchData();
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

                <div className={styles.productCardContainer}>
                    {products.map((product) => {
                        const randomIndex = getRandomIndex();
                        const randomPhoto = product.photos[randomIndex];

                        return (
                            <div key={product.id} className={styles.productCard}>
                                <img src={randomPhoto.url} alt={product.name}/>
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                            </div>
                        );
                    })}
                </div>


            </div>
        </main>
    )
        ;
};

export default Catalog;