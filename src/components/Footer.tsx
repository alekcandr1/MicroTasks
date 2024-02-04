import Button from "./Button2"

export const Footer = () => {

    const func = (first: any) => {
        console.log(first)
    }

    return (
        <footer>
            <h3>
                Footer
            </h3>
            <Button name="BUTTON" callBack={()=>func(123)} />
        </footer>
    )
} 