interface course {
	name: string;
	// prices: [number | null, number | null];
	prices: number[];
}


// Список курсов
let courses: course[] = [
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
let requiredRange1: number[] = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterCourses = (range: number[]): course[] => {


	return [];
};

filterCourses(requiredRange1);

