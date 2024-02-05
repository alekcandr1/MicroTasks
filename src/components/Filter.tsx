import { useState } from "react"

type FilterType = 'ALL' | 'USD' | 'BYN' | 'EUR'

export const Filter = () => {

    const [money, setMoney] = useState([
        { banknote: 'USD', nominal: 100, number: 'a1234567890' },
        { banknote: 'BYN', nominal: 50, number: 'c1234567890' },
        { banknote: 'EUR', nominal: 100, number: 'r1234567890' },
        { banknote: 'USD', nominal: 20, number: 'e1234567890' },
        { banknote: 'BYN', nominal: 10, number: 't1234567890' },
        { banknote: 'BYN', nominal: 100, number: 'v1234567890' },
        { banknote: 'USD', nominal: 100, number: 'x1234567890' },
        { banknote: 'EUR', nominal: 20, number: 'z1234567890' },
        { banknote: 'EUR', nominal: 10, number: 'y1234567890' },
        { banknote: 'USD', nominal: 100, number: 'p1234567890' },
    ])

    const [typeBanknote, setTypeBanknote] = useState<FilterType>('ALL');

    const onClickFilterHandler = (banknote: FilterType) => {
        setTypeBanknote(banknote)
    }

    let currentMoney = money

    if (typeBanknote === 'ALL') {
        currentMoney = money
    } else {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === typeBanknote)
    }


    return <div>
        <button onClick={() => onClickFilterHandler('ALL')}>All</button>
        <button onClick={() => onClickFilterHandler('USD')}>USD</button>
        <button onClick={() => onClickFilterHandler('BYN')}>BYN</button>
        <button onClick={() => onClickFilterHandler('EUR')}>EUR</button>

        <ul>
            {currentMoney.map((money, index) => {
                return <li key={index}>
                    <span>{money.banknote}</span>
                    <span> {money.nominal}</span>
                    <span> {money.number}</span>
                </li>
            })}
        </ul>

    </div>

}