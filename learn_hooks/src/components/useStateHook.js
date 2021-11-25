import React, { useState } from 'react'

// const UseStateHook = () => {
//     // Đếm số
//     const [number, setNumber] = useState(0);
//     const [count, setCount] = useState(0);

//     const handleBefore = () => {
//         setCount(count - number);
//     }

//     const handleAfter = () => {
//         setCount(count + number);
//     }
//     return (
//         <div>
//             <input value = {number} onChange={e => setNumber(parseInt(e.target.value))} />
//             <h1>{count}</h1>

//             <div>
//                 <button onClick={handleBefore}>Trừ</button>
//                 <button onClick={handleAfter}>Cộng</button>
//             </div>
//         </div>
//     )
// }

// export default UseStateHook;


//useState

// component sẽ được render lại sau khi setState
// giá trị khởi tạo chỉ sử dụng cho lần đầu
// nếu sử dụng function làm giá trị khởi tạo ban đầu thì 
// nó chỉ lấy return giá trị của function đó làm state
// setState là thay thế state bằng giá trị mới


// const UseStateHook = () => {

//     // Random and show 
//     const gifts = [
//         'CPU I9',
//         'Ram 64GB',
//         'RGB keyboard'
//     ]

//     const [state, setState] = useState()


//     const randomGifts = () => {
//         setState(gifts[Math.floor(Math.random() * gifts.length)])
//     }
//     return (
//         <div>
//             <p>{state || 'Chưa có phần thưởng'}</p>
//             <button onClick={randomGifts}>Lấy thưởng</button>
//         </div>
//     )

// }

// export default UseStateHook;


// const UseStateHook = () => {

//     // get data for input
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')


//     const handleSubmit = () => {
//         console.log({
//             name, email
//         })
//     }

//     return (
//         <div>
//             <input
//                 //value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <input
//                 //value={email}
//                 onChange={e => setEmail(e.target.value)}
//             />
//             <button onClick={handleSubmit}>Change</button>
//             <p>{name}</p>
//             <p>{email}</p>
//         </div>
//     )

// }

// export default UseStateHook;


// const UseStateHook = () => {

//     const courses = [
//         { id: 1, name: 'HTML, CSS' },
//         { id: 2, name: 'Javascript' },
//         { id: 3, name: 'ReactJS' }
//     ]

//     const [checked, setChecked] = useState(3)

//     const handleSubmit = () => {
//         console.log({ id: checked })
//     }

//     return (
//         <div>
//             {courses.map(course => (
//                 <div key={course.id}>
//                     <input
//                         type="radio"
//                         onChange={() => setChecked(course.id)}
//                         checked={checked === course.id}
//                     />
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={handleSubmit}>Change</button>
//         </div>
//     )
// }

// export default UseStateHook;



const UseStateHook = () => {
    const courses = [
        { id: 1, name: 'HTML, CSS' },
        { id: 2, name: 'Javascript' },
        { id: 3, name: 'ReactJS' }
    ]

    const [checked, setChecked] = useState([])

    console.log(checked)

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })

        // setChecked(prev => [...prev, id])
    }

    const handleSubmit = () => {
        console.log({ id: checked })
    }

    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Change</button>
        </div>
    )

}

export default UseStateHook;