import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    title: "Home Cooking Essentials",
    instructor: "Ipshita Tandon",
    price: 499,
    image: "https://i.pinimg.com/736x/fb/41/5d/fb415dcac2712f57d0c7275423b0b8bb.jpg",
    description: "Learn the fundamentals of home cooking with authentic recipes passed down through generations. Perfect for beginners looking to master kitchen basics.",
    duration: "6 weeks",
    students: 234,
  },
  {
    id: 2,
    title: "Global Cuisine Masterclass",
    instructor: "Stuti Tiwari",
    price: 599,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Explore diverse cooking techniques and recipes from around the world. Learn to create authentic international dishes in your own kitchen.",
    duration: "8 weeks",
    students: 189,
  },
  {
    id: 3,
    title: "Family-Style Comfort Cooking",
    instructor: "Shrey Saxena",
    price: 399,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Master the art of creating delicious, heartwarming meals that bring families together. Perfect for busy parents and home cooks.",
    duration: "4 weeks",
    students: 312,
  },
  {
    id: 4,
    title: "Asian Street Food",
    instructor: "Krishang Bose",
    price: 449,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    description: "Discover the vibrant flavors of Asian street food. Learn to create popular street dishes from Thailand, Vietnam, Japan, and more.",
    duration: "5 weeks",
    students: 156,
  },
  {
    id: 5,
    title: "The Ultimate Baking Masterclass",
    instructor: "Sarah Johnson",
    price: 549,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description: "Master the art of bread making from scratch. Learn to make sourdough, baguettes, and various artisanal breads with professional techniques.",
    duration: "7 weeks",
    students: 278,
  },
  {
    id: 6,
    title: "Healthy Meal Mastery",
    instructor: "Lisa Chen",
    price: 349,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    description: "Learn efficient meal prep techniques for healthy, delicious meals. Perfect for busy professionals who want to eat healthy on a schedule.",
    duration: "4 weeks",
    students: 423,
  },
];

const CourseCard = ({ course, onClick }) => (
  <div
    onClick={onClick}
    className="group relative overflow-hidden rounded-xl bg-white shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
  >
    <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
      <img
        src={course.image}
        alt={course.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
          {course.duration}
        </span>
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          {course.students} students
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
      <p className="text-sm text-gray-600">by {course.instructor}</p>
      <div className="flex items-center justify-between pt-2">
        <span className="flex items-center text-lg font-bold text-gray-900">
          ₹{course.price}
        </span>
        <button className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-700">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

const CourseDetail = ({ course, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
            <p className="text-sm text-gray-600">by {course.instructor}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>📚</span> {course.duration}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>💬</span> Direct access to instructor
            </div>
          </div>
          <p className="text-gray-600">{course.description}</p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                ${course.price}
              </span>
              <span className="text-sm text-gray-600">
                {course.students} enrolled
              </span>
            </div>
            <button className="w-full rounded-lg bg-green-600 py-3 text-center font-medium text-white transition-colors hover:bg-green-700">
              Subscribe to Course
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CookingCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-lime-100 relative overflow-hidden w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="inline-block">
              Cooking Courses
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn authentic cooking from passionate home chefs. Join our community
            of food enthusiasts and master the art of cooking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>

        {selectedCourse && (
          <CourseDetail 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#D9F99D" fillOpacity="0.5"></path>
        </svg>
      </div>
    </div>
  );
};

export default CookingCourses;