import axios from 'axios'
import React from 'react'

export default function CheckoutButton() {

    const handleClick = async () => {

        const response = await axios.get("http://localhost:5000/items/checkout", { withCredentials: true })
        console.log(response.data)  

        window.location.href = response.data.url;

    }

    return (
        <div className="pt-2">
            <button onClick={handleClick} className="w-80 d h-14 bg-black text-center text-white border-2 border-black hover:bg-white hover:text-black transition-all ease-in">
                <p className="text-2xl font-bold">CHECKOUT</p>
            </button>
        </div>
    )
}
