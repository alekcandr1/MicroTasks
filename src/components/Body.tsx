import React, { useState } from 'react'
import { Button } from './Button'
import { NewComponent } from './NewComponent'
import { UseStateTask } from './useStateTask'
import { Filter } from './Filter'
import { Filter2 } from './Filter2'
import Messages from './Messages';

const students = [
    {
        id: 1,
        name: 'Alex',
        isMarried: true,
    },
    {
        id: 2,
        name: 'Bob',
        isMarried: false,
    }
]
const cars = [
    {manufacturer: 'Germany', brand: 'BMW'},
    {manufacturer: 'South Korea', brand: 'Kia'},
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

    const [messages, setMessages] = useState([
        {message: 'Message 1'},
        {message: 'Message 2'},
        {message: 'Message 3'}
    ])

    const addMessage = ( title: string ) => {
        let newMessage = {message: title}
        setMessages([newMessage, ...messages])
    }


        return (
        <main>
            <div>Main content</div>
            <NewComponent students={ students } cars={ cars }/>

            {/* <button onClick={() => onClickHandler('Alex')}>MyYoutubeChannel - 1</button>
            <button onClick={() => onClickHandler('Bob')}>MyYoutubeChannel - 1</button> */ }

            {/* <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button> */ }

            {/* <Button name="One" callBack={foo1} />
            <Button name="Two" callBack={() => foo2(100200)} /> */ }

            <UseStateTask/>
            <Filter2/>
            <Messages messages={ messages } addMessage={ addMessage }/>





            </main>
    );
}