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
    {manufacturer: "Germany", brand: "BMW"},
    {manufacturer: "South Korea", brand: "Kia"},
]


export const Body = () => {
    return (
        <main>
            <div>Main content</div>
            <NewComponent students={students} cars={cars} />
        </main>
    )
}