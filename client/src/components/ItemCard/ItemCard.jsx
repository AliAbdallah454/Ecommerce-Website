export default function ItemCard({ image, text }) {

    return(

        <button onClick={ () => alert('Card Clicked') }>
            <div className="flex flex-col p-5">
                <div className="w-60 h-80 border-b-4 border-black">
                    <img src={ image } alt="foot" className="p-2 w-60 d h-80" />
                </div>
                <div className="py-2 flex justify-center items-center w-60">
                    <h1 className="text-3xl font-bold">{ text }</h1>
                </div>
            </div>
        </button>

    )

}