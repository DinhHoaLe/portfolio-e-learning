import { Button, Space, Select } from "antd";
import { CourseCard } from "./SearchCard.Component";

const gridCourses = [
  {
    id: 1,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "407,189",
    duration: "56.5 total hours",
    lectures: "598 lectures",
    level: "All Levels",
    price: "₫269,000",
    oldPrice: "₫2,289,000",
    image: "https://img-c.udemycdn.com/course/304x171/1362070_b9a1_2.jpg",
    isBestseller: true,
  },
  {
    id: 2,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "407,189",
    duration: "56.5 total hours",
    lectures: "598 lectures",
    level: "All Levels",
    price: "₫269,000",
    oldPrice: "₫2,289,000",
    image: "https://img-c.udemycdn.com/course/480x270/4471614_361e_8.jpg",
    isBestseller: true,
  },
  {
    id: 3,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "407,189",
    duration: "56.5 total hours",
    lectures: "598 lectures",
    level: "All Levels",
    price: "₫269,000",
    oldPrice: "₫2,289,000",
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg",
    isBestseller: true,
  },
  {
    id: 4,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "407,189",
    duration: "56.5 total hours",
    lectures: "598 lectures",
    level: "All Levels",
    price: "₫269,000",
    oldPrice: "₫2,289,000",
    image: "https://img-c.udemycdn.com/course/480x270/6704021_a06b.jpg",
    isBestseller: true,
  },
  {
    id: 5,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "407,189",
    duration: "56.5 total hours",
    lectures: "598 lectures",
    level: "All Levels",
    price: "₫269,000",
    oldPrice: "₫2,289,000",
    image: "https://img-c.udemycdn.com/course/480x270/6324929_df40.jpg",
    isBestseller: true,
  },
];

export const SearchPagebody = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Top Navigation / Filters */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <Button shape="round" icon={<span className="mr-1">≡</span>}>
          All filters
        </Button>
        <Button shape="round">Quizzes</Button>
        <Button shape="round">Coding Exercises</Button>
        <Button shape="round">Practice Tests</Button>
        <div className="ml-auto flex items-center gap-2">
          <span className="font-bold text-xs text-gray-600 uppercase">
            Sort by
          </span>
          <Select
            defaultValue="most-relevant"
            variant="borderless"
            className="font-bold"
          >
            <Select.Option value="most-relevant">Most Relevant</Select.Option>
          </Select>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {gridCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
