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


const filterCourses = (courses: ICourse[], range: Prices): ICourse[] => {

	let suitableCourses: ICourse[] | null = null;

	if (range[0] === null) {
		suitableCourses = courses.filter(course => {
			if (course.prices[0] !== null && course.prices[1] <= range[1]) {
				return true;
			}
		});
	}


	return [];
};