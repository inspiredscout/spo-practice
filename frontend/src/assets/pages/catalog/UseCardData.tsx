import { Card } from './CatalogData.ts'
import styles from "./Catalog.module.css";
import {Link} from "react-router-dom";

interface CardInformation{
    cardinfo: Card;
}

export const CatalogCard = ({ cardinfo } : CardInformation): JSX.Element =>{
    const CatalogCardInformation = `${cardinfo.card.name} ${cardinfo.card.price}`;
    return (
        <div className={styles.position}>
            <Link to='/Catalog/info'>
                <div className={styles.image}>
                    <img src='./1.jpg' alt=''/>
                </div>
            </Link>

            <div className={styles.info}>
                <h3>CatalogCardInformation : {card.name}</h3>
                <p>Price</p>
                <button>Add</button>
            </div>
        </div>
    )
}