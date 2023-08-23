export default function Error({ text }) {

    return(

        <div className="px-3 w-88 h-9 flex items-center outline-none bg-red-200">
            <p className="text-sm">{ text }</p>
        </div>

    )

}