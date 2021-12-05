import React, { useState, useMemo, useRef } from 'react'


// useMemo dùng để tránh bị thực hiện lại 1 đoạn logic không cần thiết 
const UseMemoHook = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name: name,
            price: parseInt(price)
        }]);
        setName('')
        setPrice('')

        nameRef.current.focus()
    }


    // khong dung useMemo thi se bi render total nhieu lan khong can thiet
    // const total = products.reduce((total, product) => {
    //     console.log('re-render')
    //     return total + product.price
    // }, 0)


    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log('re-render')
            return result + product.price
        }, 0)

        return result
    }, [products])

    // console.log(products)
    // console.log('re-render')

    return (
        <div>
            <h1>Use Memo Hook</h1>
            <input
                ref={nameRef}
                value={name}
                placeholder={'Ten san pham'}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder={'Gia san pham'}
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>ADD</button>
            <p>Total : {total} </p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemoHook;
