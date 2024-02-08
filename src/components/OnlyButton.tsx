import React from 'react';

type OnlyButtonType = {
    name: string
    callBack: () => void
}
const OnlyButton = ( {name, callBack}: OnlyButtonType ) => {
    const onClickHandler = () => {
        callBack()
    }
    return (
        <button onClick={ onClickHandler }>{ name }</button>
    );
};

export default OnlyButton;