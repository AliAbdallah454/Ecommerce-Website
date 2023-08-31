import React, { useEffect, useState } from 'react'

import ItemCard from '../ItemCard/ItemCard'
import axios from 'axios'

export default function Women() {

    let [items, setItems] = useState([])

    useEffect(() => {

        const getItems = async () => {

            const response = await axios.get("http://localhost:5000/items/get-womens-items", { withCredentials: true })
            setItems(response.data)

        }

        getItems()

    }, [])

    return (
        <div>
            
            {items.map(item => <ItemCard key={item._id} name={item.name} image={item.imageUrl} price={`${item.price}$`} itemId={item._id}/>)}

        </div>
    )
}
