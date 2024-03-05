import {Card} from './Catalog.data.ts'

export const getCardList = (): Promise<Card> =>
    fetch('http://localhost:3000/api')
        .then(result => {
            if (result.ok) {
                return result.json().then(data => data as Card)
            } else {
                throw new Error(result.statusText)
            }
        });