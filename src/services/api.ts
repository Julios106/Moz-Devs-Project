const API_URL = 'http://localhost:3000'
const getToken = localStorage.getItem("token")

export const api = {


    //userLogin
    async login(credenciais:object){
        const res = await fetch(`${API_URL}/user/login`,{
            method:"POST",
            headers:{
                'content-Type':'application/json'
                //'authorization':`Bearer ${token}`
            },
            body:JSON.stringify(credenciais)
        })

        const data = await res.json()

        if(!res.ok){
            throw new Error(data.message||"crefenciais invalidas") 
        }

        localStorage.setItem('token',data.token)
        return data;

    },



    async getEventoId(id:any){

        const res = await fetch(`${API_URL}/evento/${id}`,{

            method:'GET',
            headers:{
                'content-Type':'application/json',
                'Authorization':`Bearer ${getToken}`                 
            }
        });

        const data = await res.json();

        if(!res.ok){
            throw new Error(data.message||"falha na requisicao do evento") 
        }

        return data;        
    },

    async getEventos(){
        const res = await fetch(`${API_URL}/evento` ,{
            method:'GET',
            headers:{
                'content-Type':'application/json',
                'authorization':`Bearer ${getToken}`                
            }
        })

        const data = await res.json()

        if(!res.ok){
            throw new Error(data.message || "erro ao requerer eventos")
        }

        return data

    }
}

export default api