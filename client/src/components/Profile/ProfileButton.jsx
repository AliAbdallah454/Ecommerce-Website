export default function ProfileButton({ text, onClick }) {

    return (

        <button onClick={ onClick }>
            <div className='flex justify-center items-center w-44 h-12 text-xl font-bold bg-wihite text-black border-2 border-black hover:bg-black hover:text-white transition-all ease-in'>
                <p>{ text }</p>
            </div>
        </button>

    )
}
