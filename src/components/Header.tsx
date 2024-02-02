type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    return (
    <header>
        <h1>{props.title}</h1>
    </header>
    )
}