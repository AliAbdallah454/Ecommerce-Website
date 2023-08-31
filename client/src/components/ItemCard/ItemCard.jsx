import { useNavigate } from "react-router-dom"
import axios from "axios"

import AddButton from "./AddButton"

export default function ItemCard({ image, price, name, itemId }) {

    const navigate = useNavigate()

    const handleClick = async () => {

        const info = {
            itemId: itemId
        }

        console.log('inFunc')
        console.log(info.itemId)

        const response = await axios.post("http://localhost:5000/items/add-item", info, { withCredentials: true })

        if(response.data.status === 'failed'){
            alert("You are not logged in")
            navigate('/login')
        }

    }

    return(

        <div className="flex flex-col p-5">
            <div className="w-56 d h-72">
                <img src={ image } alt="foot" className="p-2 w-56 d h-72" />
            </div>
            <h1 className="font-bold">{ name }</h1>
            <div className="py-2 flex justify-between items-center w-56">
                <h1 className="text-xl font-bold">{ price }</h1>
                <AddButton onClick={handleClick}/>
            </div>
        </div>

    )

}