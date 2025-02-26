import React from 'react'
import CourseCard from './Courses/CourseCard'
import java from './assets/java.jpg'
import python from './assets/python.jpg'
import cplus from './assets/cplus.jpg'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigator = useNavigate();
    
    return (
        <div>
            <main className="px-48 text-black">
                <div className='flex'>
                    <div className="w-2/4">
                        <div className="text-5xl font-bold pl-4 mt-28 leading-72">
                            Unlock Your Potential with Personalized Learning Paths Tailored Just for You!
                            <div className="text-2xl font-normal pl-4 pr-28 my-10 leading-72 text-center">
                                The most affordable premium courses. <strong>Projects, Guides, and Certificates included.</strong>
                                <button onClick={() => navigator('/Courses')} className="rounded-lg mt-8 bg-green-500 text-white hover:bg-green-600 py-2 px-8">
                                    Explore all Courses
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-36">
                        <iframe
                            className="mx-auto"
                            width="700"
                            height="400"
                            src="https://www.youtube.com/embed/jaXuqScMt68?si=1t5JfoL_9mvOmko-"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

                <section className="pl-48 pr-36 mt-20 text-black">
                    <div id="title" className="flex flex-row justify-between">
                        <div id="t1" className="font-bold text-5xl">Explore Our Courses</div>
                        <div id="view_more" className="font-normal text-3xl px-6 py-2 border-2 border-black">View More</div>
                    </div>
                </section>

                <div id="cards" className="flex mt-20 justify-between gap-12">
                        <CourseCard
                            name={"java"}
                            image={java}
                            title="Java Basics Course - Core Java, OOP Concepts, Data Structures, Algorithms, Exception Handling, Java Streams, Multithreading"
                            description="Master the fundamentals of Java programming with hands-on projects and real-world examples to build a strong foundation."
                        />

                        <CourseCard
                            name={"python"}
                            image={python}
                            title="Python Basics Course - Core Python, Data Types, Functions, OOP Concepts, File Handling, Exception Handling, Libraries Overview"
                            description="Learn the fundamentals of Python programming with hands-on projects and real-world examples to build a solid foundation for further learning."
                        />
                    
                        <CourseCard
                            name={"cplus"}
                            image={cplus}
                            title="C++ Basics Course - Core C++, OOP Concepts, Pointers, Data Structures, Algorithms, Memory Management, Exception Handling"
                            description="Master the fundamentals of C++ programming with hands-on projects and practical examples to build a strong programming foundation."
                        />
                </div>
            </main>
        </div>
    )
}

export default Home
