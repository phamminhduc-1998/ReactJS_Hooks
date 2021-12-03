import React, { useState, useEffect } from 'react'


const lessons = [
    {
        id: 1,
        name: 'React'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'Redux'
    },

]

const Real_time_chat = () => {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' : '#333'
                        }}
                        onClick={() => { setLessonId(lesson.id); console.log(lesson.id) }}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Real_time_chat;
