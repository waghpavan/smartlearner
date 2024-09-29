import React,{useState} from 'react'
import FullViewCard from './FullViewCard'
import CourseCard from '../Courses/CourseCard'
import card1 from '../assets/card1.jpg'
function MyCourses() {
    
  return (

    <div className='flex'>
        <FullViewCard title='Java Basics Course - Core Java, OOP Concepts, Data Structures, Algorithms, Exception Handling, Java Streams, Multithreading' description='Explore the world of C++ programming with our C++ Basics Developer Package—an essential course for anyone looking to establish a strong foundation in one of the most powerful and widely-used programming languages. Designed for beginners and intermediates alike, this course will guide you through the core concepts of C++ with practical, hands-on experience.' content="Core C++ Concepts: Get introduced to the syntax, data types, variables, and operators that form the backbone of C++.
Object-Oriented Programming (OOP): Learn and master key OOP principles such as Classes, Objects, Inheritance, Polymorphism, and Encapsulation, which are fundamental in creating modular, efficient, and reusable code.
Pointers and Memory Management: Delve deep into how pointers work in C++, dynamic memory allocation, and effective memory management to optimize program performance.
Data Structures & Algorithms: Understand and implement essential data structures like arrays, linked lists, stacks, and queues. Apply algorithms for sorting, searching, and other real-world use cases.
Exception Handling: Learn how to anticipate, detect, and handle runtime errors efficiently with C++'s robust exception handling mechanisms.
File I/O Operations: Gain proficiency in working with file streams to read and write data to files—an essential skill for almost every project.
Multithreading Basics: Get introduced to concepts of concurrency and multithreading to create efficient, parallel programs that can handle multiple tasks simultaneously."/>
        <div className='bg-gray-100 w-[33%] h-screen overflow-y-scroll'>   
        <CourseCard image={card1} title='Java Basics Course - Core Java, OOP Concepts, Data Structures, Algorithms, Exception Handling, Java Streams, Multithreading' description='Master the fundamentals of Java programming with hands-on projects and real-world examples to build a strong foundation.'/>
        
        <CourseCard image={card1} title='Frontend Development' description='HTML, CSS, JS, React'/>

        <CourseCard image={card1} title='Frontend Development' description='HTML, CSS, JS, React'/>
        </div>
        
    </div>
  )
}

export default MyCourses
