const estadoInicial = {
    filmes: [],
    

};

const chamaLogin = () => {
    window.location.href ='/login'
   }
export default function filmeDetalhe(state= estadoInicial, 
    {type, payload})

    
    {
        
        switch(type) {
            case 'ver/DETALHE' :
               
                return {
                    
                    filmes:payload,
                    chamaLogin
                    
                    
                    
                };

                
        

        default:
            return state;
        }          
    }