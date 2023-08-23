export default function Button({ text, onClick }) {

    return(

        <div className="pt-2">
            <button onClick={ onClick } className="w-88 h-11 bg-wilsonRed text-center text-white border-2 border-wilsonRed hover:bg-white hover:text-wilsonRed transition-all ease-in">
                <p className="text-2xl font-bold">{ text }</p>
            </button>
        </div>

    )

}