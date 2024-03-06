import {Card} from './Catalog.data.ts'

export const getCardList = (): Promise<Card[]> =>
     fetch('https://randomuser.me/api/')
        .then(async (result) => {
            if (result.ok) {
                return (await result.json()) as Card[]
            } else {
                throw new Error(result.statusText)
            }
        });