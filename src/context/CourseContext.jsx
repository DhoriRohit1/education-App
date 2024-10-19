// src/context/CourseContext.js
import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn web development from scratch.',
      instructor: 'John Doe',
      isFeatured: true,
      category: 'Web Development',
      imageUrl: 'https://blog.pwskills.com/wp-content/uploads/2023/05/Untitled-1-1.png',
      videoUrl: 'https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLNRk_NOPmoCXKPMTIkV-JjfD467V75jZi&ab_channel=ShradhaKhapra',
      lessons: [
      ],
    },
    {
      id: 2,
      title: 'Data Science with Python',
      description: 'Data analysis and visualization using Python.',
      instructor: 'Jane Smith',
      isFeatured: true,
      category: 'Data Science',
      imageUrl: 'https://abctrainings.in/media/thumbnails/data_science_using_python.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=JDcZBzb46ts&ab_channel=GreatLearning',
      lessons: [
      ],
    },
    {
      id: 3,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript and its frameworks.',
      instructor: 'Alex Johnson',
      isFeatured: false,
      category: 'JavaScript',
      imageUrl: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/12/Advanced-JavaScript-Tutorial-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=VlPiVmYuoqw&t=17055s&ab_channel=ApnaCollege',
      lessons: [
      ],
    },
    {
      id: 4,
      title: 'React for Beginners',
      description: 'Learn React from the ground up.',
      instructor: 'Emily White',
      isFeatured: true,
      category: 'Web Development',
      imageUrl: 'https://seanpotts.ca/1680313616595.png',
      videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh',
      lessons: [],
    },
    {
      id: 5,
      title: 'Node.js Development',
      description: 'Build server-side applications with Node.js.',
      instructor: 'Michael Brown',
      isFeatured: false,
      category: 'Web Development',
      imageUrl: 'https://d2ms8rpfqc4h24.cloudfront.net/When_to_Consider_Using_Node_js_0d84032172.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=yEHCfRWz-EI&ab_channel=Telusko',
      lessons: [],
    },
    {
      id: 6,
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to machine learning concepts.',
      instructor: 'Sarah Connor',
      isFeatured: true,
      category: 'Data Science',
      imageUrl: 'https://cdn.prod.website-files.com/65d8ee5f025f02594c614c17/65d8ee5f025f02594c615306_preview.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=gmvvaobm7eQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&ab_channel=codebasics',
      lessons: [],
    },

  ]);

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (courseId) => {
    const courseToEnroll = courses.find(course => course.id === courseId);
    if (courseToEnroll && !enrolledCourses.some(course => course.id === courseId)) {
      setEnrolledCourses([...enrolledCourses, { ...courseToEnroll, progress: 0 }]);
    }
  };

  return (
    <CourseContext.Provider value={{ courses, enrolledCourses, setCourses, enrollCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

