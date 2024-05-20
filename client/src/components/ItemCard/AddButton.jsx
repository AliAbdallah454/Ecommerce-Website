import React from 'react'

export default function AddButton({ onClick }) {
    return (

        <div className="pt-2">
            <button onClick={ onClick } className="d w-36 h-11 bg-black text-center text-white border-2 border-black hover:bg-white hover:text-black transition-all ease-in">
                <p className="text-2xl font-bold">Add to Cart</p>
            </button>
        </div>

    )
}