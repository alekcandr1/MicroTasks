import React, { ChangeEvent, useState } from 'react';

type OnlyInputType = {
    title: string
    setTitle: ( title: string ) => void
}

const OnlyInput = ( {title, setTitle}: OnlyInputType ) => {
    const changeInputHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input value={ title } onChange={ changeInputHandler }/>
    );
};

export default OnlyInput;