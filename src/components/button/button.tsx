import './button.css'


type props={
    texto: string,
    onClick?:()=>void
}

function Button ({texto,onClick}:props){
    return (
        <>
            <button  type='submit' className='btn' onClick={onClick}>
                
                {texto}
                
                </button>

        </>
    )
}

export default Button