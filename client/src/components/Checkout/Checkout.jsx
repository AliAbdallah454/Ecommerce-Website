import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Card from './Card'
import CheckoutButton from './CheckoutButton'

export default function Checkout() {

    let [info, setInfo] = useState({
        totalPrice: 0,
        totalItems: 0,
        items: []  
    })

    useEffect(() => {

        const check = async () => {
            
            try{
                const response = await axios.get("http://localhost:3001/items/get-items-in-shopping-cart", { withCredentials: true })
                
                let p = 0

                for(let i = 0; i < response.data.items.length; i++){
                    p += response.data.items[i].price
                }            

                const newInfo = {totalPrice: p, totalItems: response.data.items.length, items: response.data.items}
                setInfo(newInfo)
            }
            catch(err){
                console.log(err)
            }

        }

        check()

    }, [])

    console.log(info)

    return (

        <div className='flex'>

            <div className='w-8/12'>

                <div className='flex justify-between ml-20 mt-16 pb-5 border-b border-gray-400'>
                    <p className='text-2xl font-extrabold'>MY BAG ({ info.totalItems })</p>
                    <Link to="/">
                        <p className='underline'>Continue Shopping</p>
                    </Link>
                </div>

                {info.items.map(item => <Card stateInfo={info} setInfo={setInfo} key={item._id} id={item._id} image={item.imageUrl} name={item.name} price={item.price} type={item.type} quantity={1} />)}

            </div>

            <div className='w-4/12'>
                <div className='flex justify-center'>
                    <div className='mt-16 w-96 bg-gray-100 border border-gray-400'>
                        <div className='flex justify-center p-6 pt-8'>
                            <h1 className='text-xl font-bold'>ORDER SUMMARY</h1>
                        </div>
                        <div className='flex justify-between px-6 py-2'>
                            <p>Subtotal</p>
                            <p>{info.totalPrice}$</p>
                        </div>
                        <div className='flex justify-between px-6 py-2'>
                            <p>Estimated Shipping</p>
                            <p>Calculated at checkout</p>
                        </div>
                        <div className='flex justify-between px-6 py-2'>
                            <p>Estimated Tax</p>
                            <p>Calculated at checkout</p>
                        </div>
                        <div className=' flex justify-between px-6 py-2 border-t border-b border-gray-400'>
                            <p className='font-bold'>Total</p>
                            <p className='font-bold'>{info.totalPrice}$</p>
                        </div>
                        <div className="flex justify-center p-6">
                            <CheckoutButton />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}