import ItemCard from "../ItemCard/ItemCard"

import pants1 from '../../img/pants1.webp'
import pants2 from '../../img/pants2.webp'
import pants3 from '../../img/pants3.webp'

const Home = () => {

    return(

        <div className="mt-8">

            <div className="flex justify-center items-center flex-col">
                <h1 className="p-2 text-5xl font-semibold text-black">Get Back in the game</h1>
                <p className="p-2 text-xl">From the court to the classroom, your fall must-haves are here.</p>
            </div>

            <div className="flex justify-center">
                <ItemCard image={pants1} text="40$"/>
                <ItemCard image={pants2} text="40$"/>
                <ItemCard image={pants3} text="40$"/>
                <ItemCard image={pants1} text="40$"/>
            </div>
            <div className="flex justify-center">
                <ItemCard image="https://www.wilson.com/en-us/media/catalog/product/article_images/WM00013331WTA_/WM00013331WTA__743d720864af16c1a35d03602a304665.png?dpr=1&fit=bounds&orient=1&quality=95&optimize=high&format=pjpg&auto=webp&enable=upscale&width=231&height=283&canvas=231%2C283&bg-color=f5f5f5" text="40$"/>
                <ItemCard image={pants2} text="40$"/>
                <ItemCard image={pants3} text="40$"/>
                <ItemCard image={pants1} text="40$"/>
            </div>
            <div className="flex justify-center">
                <ItemCard image={pants1} text="40$"/>
                <ItemCard image={pants2} text="40$"/>
                <ItemCard image={pants3} text="40$"/>
                <ItemCard image={pants1} text="40$"/>
            </div>

        </div>

    )

}

export default Home