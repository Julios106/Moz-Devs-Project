import './perfilinfo.css'

type props ={
    txt : string,
    num : number
}

function Info({txt,num}: props){



    return (
        <>
            <div className='containerinfo'>
                <div className='descricaoinfo'>
                    <p>{txt}</p>
                </div>

                <div className='resinfo'>
                    <p style={{fontWeight:"200"}}>{num}</p>
                </div>
            </div>
        </>
    )
}

export default Info