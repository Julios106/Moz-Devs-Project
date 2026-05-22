
import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

function LoginPage() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
           email: '', senha: ''
         });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // impede o reload da página
    setLoading(true);
    setError('');
    try {
      await api.login(formData);
      alert('login criado');
      navigate('/home'); // redireciona após sucesso
    }catch (err:any) {
      setError(err.message); // exibe erro ao utilizador
    }finally {
      setLoading(false); // sempre desactiva o loading
    }
  }

  function cadastro(){
    navigate('/cadastro')
  }

  return (
    <>
        <section className='conteiner'>
          
          {/* Bloco de erro — só aparece quando há erro */}
          {error && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{error}
          </div>
          )}

          <div className='titulo'>
            <h3>[nome do app]</h3>
          </div>
          <form onSubmit={handleSubmit} id='loginform'>
            

            <div className='inputs'>
                <label >email:</label>
                <input type="text" name='email' placeholder='seu email'  value={formData.email} onChange={handleChange}/>
            </div>


            <div className='inputs'>
                <label >password:</label>
                <input type="password" name='senha' placeholder='insira a senha' value={formData.senha} onChange={handleChange} />
            </div>

            <div className='link'>
              <a href="#">Esqueceu a password?</a>
              <p onClick={cadastro}  >Nao tem conta? <a href="#">Regitre-se aqui</a></p>
            </div>

            <button type='submit' className='btn' disabled={loading}>{loading ? 'A cadastrar...' : 'Cadastrar'}</button>
          </form>
        </section>

    </>
  )
}

export default LoginPage
