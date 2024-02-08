import React, { useState } from 'react';
import Input from './Input';
import OnlyInput from './OnlyInput';
import OnlyButton from './OnlyButton';

type MessageType = {
    message: string
}

type MessagesPropsType = {
    messages: MessageType[]
    addMessage: ( title: string ) => void
}
const Messages = ( {messages, addMessage}: MessagesPropsType ) => {

    let [title, setTitle] = useState('')

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return <div>
        <h3>Input</h3>

        <OnlyInput title={title} setTitle={setTitle} />
        <OnlyButton callBack={onClickButtonHandler} name={'+'} />

        <ul>
            {
                messages.map(( m, index ) => {
                    return <li key={ index }>{ m.message }</li>
                })
            }
        </ul>
    </div>
};

export default Messages;