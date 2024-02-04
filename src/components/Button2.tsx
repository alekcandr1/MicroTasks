type Button2PropsType = {
    name: string
    callBack: () => void
}

const Button2 = (props: Button2PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return <button onClick={onClickHandler}>{props.name}</button>
}

export default Button2;