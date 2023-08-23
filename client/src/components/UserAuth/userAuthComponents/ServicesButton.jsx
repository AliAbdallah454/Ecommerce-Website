export default function ServicesButton({ image, text }) {

    return(

        <div className="pb-5">
            <button onClick={ () => alert('button pressed') } className="w-88 h-11 border-2 border-black hover:bg-black hover:text-white transition-all ease-in">
                <div className="flex justify-center items-center">
                    <img src={ image } className="w-5 h-5" alt="icon" />
                    <p className="pl-5 text-xl font-bold">{ text }</p>
                </div>
            </button>
        </div>

    )

}