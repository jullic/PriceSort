type Price = number | null;
type Prices = [Price, Price];

interface ICourse {
	name: string;
	prices: Prices;
}

// Список курсов
let courses: ICourse[] = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, null] },
	{ name: "Courses in Italy", prices: [100, 200] },
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1: Prices = [null, 200];
let requiredRange2: Prices = [100, 350];
let requiredRange3: Prices = [200, null];
let requiredRange4: Prices = [null, null];


const filterCourses = (courses: ICourse[], range: Prices): ICourse[] => {

	const rangeFrom: number = range[0] === null ? 0 : range[0];
	const rangeTo: number = range[1] === null ? Infinity : range[1];

	const suitableCourses = courses.filter((course: ICourse) => {
		const courseFrom: number = course.prices[0] === null ? 0 : course.prices[0];
		const courseTo: number = course.prices[1] === null ? Infinity : course.prices[1];

		// if (courseFrom === 0 && courseTo === Infinity) {
		// 	return true;
		// }
		if (rangeFrom <= courseFrom && rangeTo >= courseTo) {
			return true;
		}
		return false;
	});

	return suitableCourses;
};


console.log(filterCourses(courses, requiredRange1));
console.log(filterCourses(courses, requiredRange2));
console.log(filterCourses(courses, requiredRange3));

