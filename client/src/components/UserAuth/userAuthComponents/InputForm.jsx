export default function InputForm({ text, type, onChange }) {

    return(
        
        <div className="pb-3">
            <p className="font-bold">{ text }</p>
            <input onChange={ onChange } className="w-88 h-11 font-sans px-3 outline-none border-1 border-black" type={ type } />
        </div>
    )

}