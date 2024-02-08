const ages = [1, 45, 87, 45, 12, 45, 32, 1, 9, 7, 6, 12, 45, 100, 89];

const predicate = ( age: number ) => {
    return age > 90;
}

const oldAges = [100];

type coursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 100},
    {title: 'html', price: 200},
    {title: 'html', price: 5000},
    {title: 'react', price: 300}
]

const cheapPredicate = ( price: number ) => price < 250
