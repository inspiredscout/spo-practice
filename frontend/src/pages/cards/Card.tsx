import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import styles from './Cards.module.css';

function Card() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_PATH}/product?id=${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

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
        </main>
    );
}

export default Card;
