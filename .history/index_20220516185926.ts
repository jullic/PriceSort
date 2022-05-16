interface course {
	name: string;
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
let requiredRange2: number[] = [100, 350];
let requiredRange3: number[] = [200, null];

const filterCourses = (range: number[], courses: course[]): course[] => {

	const from = range[0];
	const to = range[1];

	const newCourses: course[] = courses.filter((course: course) => {
		if (course.prices[0] === null) {
			return course;
		}
	});

	return [];
};

filterCourses(requiredRange1, courses);
filterCourses(requiredRange2, courses);
filterCourses(requiredRange3, courses);

