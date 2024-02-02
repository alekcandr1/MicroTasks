type NewComponentPropsType = {
    students: Array<StudentPropsType>
    cars: Array<CarsPropsType>
}

type StudentPropsType = {
    id: number
    name: string
    isMarried: boolean
}

type CarsPropsType = {
    manufacturer: string
    brand: string
}


export const NewComponent = (props: NewComponentPropsType) => {
    // debugger;

    const renderCars = <ul>
        {
            props.cars.map((car, index) => {
                return <li>
                    {car.brand}
                </li>
            })

        }
    </ul>
    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={index}>{objectFromStudentArray.name}
                            <span>{objectFromStudentArray.isMarried ? " (Женат)" : " (Не женат)"}</span>
                        </li>
                    )
                })}

            </ul>
            {renderCars}

        </div>


    )
}