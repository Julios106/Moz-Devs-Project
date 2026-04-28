import './button.css'

type props={
    texto: string
}

function Button ({texto}:props){
    return (
        <>
            <button type='submit' className='btn'>{texto}</button>

        </>
    )
}

export default Button