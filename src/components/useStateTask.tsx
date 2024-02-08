import {useState} from "react"

export const UseStateTask = () => {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler2 = () => {
        setA(a = 0)
        console.log(a)
    }


    return <div>
        <h1 id="h1">{a}</h1>
        <button onClick={onClickHandler}>Number +1</button>
        <button onClick={onClickHandler2}>0</button>

    </div>

}  