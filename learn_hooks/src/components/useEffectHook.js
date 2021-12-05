// side effects

/**
 * 1: useEffect(callbacks)
 * - Gọi callback mỗi khi component re-render
 * - Gọi callback sau khi component thêm element vào DOM
 * 2: useEffect(callbacks, [])
 * - Chỉ gọi callback 1 lần sau khi component mounted
 * 3: useEffect(callbacks, [dependency])
 * - callback sẽ được gọi lại mỗi khi dependency thay đổi
 * ------------------------------------------------------
 * note 
 * Callback luôn được gọi khi component mounted
 * Cleanup function luôn được gọi lại trước khi component unmounted
 * Cleanup function luôn được gọi lại trước khi callback được gọi (trừ lần mounted)
 */

import { useState, useEffect } from "react";
const UseEffectHook = () => {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const tabs = ['posts', 'comments', 'albums'];
    const [type, setType] = useState('posts');
    const [show, setShow] = useState(false);
    const [countDown, setCountDown] = useState(180);
    const [width, setWidth] = useState(window.innerWidth);
    const [avata, setAvata] = useState();


    console.log('re-render')

    useEffect(() => {
        // console.log("Mounted");
        // document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 200) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth)
        }


        window.addEventListener('resize', handleWidth)
        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000);
        return () => clearInterval(timeId);
    }, [])


    useEffect(() => {
        return () => {avata && URL.revokeObjectURL(avata.prev)}
    }, [avata])


    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        console.log(file)
        console.log(URL.createObjectURL(file))
        file.prev = URL.createObjectURL(file)
        setAvata(file)

        // reset value cua input de them 2 anh cung ten
        e.target.value = null
    }

    return (
        <div>
            <h1>width:{width} countDown:{countDown}</h1>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            {/* <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            /> */}

            <input
                type="file"
                // multiple cho phép chọn nhiều ảnh
                onChange={handlePreviewAvatar}
            />
            {avata && (
                <img src={avata.prev} alt="" width="80%" />
            )}

            <ul>

                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}

            </ul>

            {show && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                        size: 30
                    }}
                >
                    Go to Top
                </button>
            )}


        </div>
    )
}

export default UseEffectHook;