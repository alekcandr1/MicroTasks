import React from 'react';

type ManType = {
    name: string,
    age: number
}
type DevsType = {
    stack: Array<string>
    firstname: string
    lastname: string
}

const people: ManType[] = [
    {name: '(2)Alex Bohon', age: 29},
    {name: '(3)Aleksander Petrov', age: 18},
    {name: '(4)Ivan Sidorov', age: 54}
]

const devs: DevsType[] = [
    {
        stack: ['html', 'css'],
        firstname: '(1)Alex', lastname: 'Gorodko'
    }
]

const newDevs = [...devs, ...people.map(man=>({
    stack: ['html', 'css'],
    firstname: man.name.split(' ')[0],
    lastname: man.name.split(' ')[1]
}))]

const Devs = () => {

    console.log(devs)

    return <div>
        {newDevs.map((man, index) => (
            <div key={index}>
                <span>{man.firstname}</span>
                <span> {man.lastname}</span>
            </div>
        ))}
    </div>
}

export default Devs;