

const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const erro = document.getElementById('erro')
const consulta = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/');
        if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
        }
        const dados = await response.json();

        for(let i =0; i < dados.length; i++ ){
            if(dados[i].email === email.value && dados[i].password ===password.value){       
                location.href = "http://127.0.0.1:5500/app.html"

                alert('logado')
                
            } else{
                erro.innerHTML = 'Credenciais Invalidas'
            }
            break;
        }
   
        //console.log(dados);
    } catch (error) {
        console.error('Erro na consulta:', error.message);
    }
}




btn.addEventListener('click',  (e)=>{
    e.preventDefault()
   consulta();

}
)


btn2.addEventListener('click', ()=>{
    location.href = "http://127.0.0.1:5500/cadastro.html"
})