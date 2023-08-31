import React from 'react'
import axios from 'axios'

export default function Card({ image, name, type, price, quantity, id, stateInfo, setInfo }) {

    const handleRemove = async (e) => {

        e.preventDefault()

        const info = {
            id: id
        }

        const response = await axios.post("http://localhost:5000/items/remove-item", info, { withCredentials: true })
        if(response.data.status === "ok"){
            const newInfo =  { totalItems: stateInfo.totalItems - 1, totalPrice: stateInfo.totalPrice - price, items: stateInfo.items.filter(item => item._id !== id) }
            setInfo(newInfo)
        }

    }

    return (

        <div className='flex d w-auto border-b border-gray-400 py-5 ml-20'>

            <div>
                <img src={ image } className='d w-32 h-auto border border-gray-400' alt="gay" />
            </div>
        
            <div className='ml-5 w-full'>
                <div className='flex justify-between'>
                    <h1 className='underline font-bold'>{ name }</h1>
                    <div className='flex items-center'>
                        <h1 className='font-bold mr-2'>QUANTITY:</h1>
                        <input type="number" className='w-12 h-9 outline-none border text-center border-gray-400' />
                    </div>
                </div>

                <div>
                    <p><span className="font-bold">Type:</span> { type }</p>
                    <p><span className="font-bold">price: { price }$</span></p>
                </div>

                <div className='flex justify-between mt-5'>
                    <p className='font-bold'>Subtotal: { price * quantity }$</p>
                    <button onClick={handleRemove}>
                        <p className='underline'>Remove</p>
                    </button>
                </div>

            </div>

        </div>

    )
}
