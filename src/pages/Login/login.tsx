
import './login.css'

function LoginPage() {

  return (
    <>
        <section className='conteiner'>
          

          <div className='titulo'>
            <h3>[nome do app]</h3>
          </div>
          <form action="submit" id='loginform'>
            

            <div className='inputs'>
                <label >email:</label>
                <input type="text" name='email' placeholder='seu email' />
            </div>


            <div className='inputs'>
                <label >password:</label>
                <input type="password" placeholder='insira a senha'/>
            </div>

            <div className='link'>
              <a href="#">Esqueceu a password?</a>
              <p>Nao tem conta? <a href="#">Regitre-se aqui</a></p>
            </div>

            <button type='submit' className='btn'>Autentique-se</button>
          </form>
        </section>

    </>
  )
}

export default LoginPage
