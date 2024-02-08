import React, { ChangeEvent, useState } from 'react';

type InputType = {
    // setMessages: () => void
    addMessage: ( title: string ) => void
}
const Input = ( {addMessage}: InputType ) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.currentTarget.value)
    }
    const buttonHandler = (title: string) => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} type="text" onChange={ onChangeInputHandler }/>
            <button onClick={ ()=>buttonHandler(title) }>+</button>
        </div>
    );
};

export default Input;