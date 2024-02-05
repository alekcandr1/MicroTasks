import { useState } from "react"
import { Button } from "./Button"
import { NewComponent } from "./NewComponent"


const students = [
    {
        id: 1,
        name: "Alex",
        isMarried: true,
    },
    {
        id: 2,
        name: "Bob",
        isMarried: false,
    }
]
const cars = [
    { manufacturer: "Germany", brand: "BMW" },
    { manufacturer: "South Korea", brand: "Kia" },
]


export const Body = () => {
    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => { 
    //     console.log('Hello Alex');
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler2 = () => {
        setA(a=0)
        console.log(a)
    }

    return (
        <main>
            <div>Main content</div>
            <NewComponent students={students} cars={cars} />

            {/* <button onClick={() => onClickHandler('Alex')}>MyYoutubeChannel - 1</button>
            <button onClick={() => onClickHandler('Bob')}>MyYoutubeChannel - 1</button> */}

            {/* <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button> */}

            {/* <Button name="One" callBack={foo1} /> 
            <Button name="Two" callBack={() => foo2(100200)} /> */}

            <h1 id="h1">{a}</h1>
            <button onClick={onClickHandler}>Number +1</button>
            <button onClick={onClickHandler2}>0</button>


        </main>
    )
}
