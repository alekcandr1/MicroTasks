import { useState } from "react"

type FilterType = 'ALL' | 'USD' | 'BYN' | 'EUR'

export const Filter2 = () => {

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

    const [filter, setFilter] = useState<FilterType>('ALL')

    const onClickHandler = (filter: FilterType) => {
        setFilter(filter)
    }
    let currentBanknote = money
    filter === 'ALL' ? currentBanknote = money : currentBanknote = money.filter(money => money.banknote === filter)
    

    return <div>
        <h3>Filter</h3>
        <button onClick={()=>onClickHandler('ALL')}>ALL</button>
        <button onClick={()=>onClickHandler('USD')}>USD</button>
        <button onClick={()=>onClickHandler('BYN')}>BYN</button>
        <button onClick={()=>onClickHandler('EUR')}>EUR</button>

        <ul>
            {currentBanknote.map((money, index)=>{
                return <li key={index}>
                    <span>{money.banknote}</span>
                    <span>   {money.nominal}</span>
                    <span>   {money.number}</span>
                </li>
            })}
        </ul>
    </div>
}