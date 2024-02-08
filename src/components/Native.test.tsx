test('old men', () => {
    const ages = [1, 45, 87, 45, 12, 45, 32, 1, 9, 7, 6, 12, 45, 100, 89];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
})

test('courses', () => {

    const courses = [
        {title: 'css', price: 100},
        {title: 'html', price: 200},
        {title: 'html', price: 5000},
        {title: 'react', price: 300}
    ]

    const cheapCourses = courses.filter(( courses: coursesType) =>  courses.price > 250);

    expect(cheapCourses.length).toBe(2);
})