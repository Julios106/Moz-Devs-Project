import './area.css'
import ImgConvidado from './assets/img/Ellipse 1.png'
import ImgPatrocinador from './assets/img/vodacom.png'


type props ={
        nome: string,
        image: string,

}



function Area ({nome,image}:props){

    function imagem(img : string){

    if(img === "1"){
        return ImgConvidado
    }else if(img === "2"){
        return ImgPatrocinador
    } else{
        return 'NO IMG'
    }
    }

    return(
        <>
            <div className='conteinerArea'>
                <div  className='foto'>
                     <img  src={imagem(image)} />

                </div>

                <p className='txt'>
                    {nome}
                </p>
            </div>
        </>
    )
}

export default Area