const estadoInicial = {
    filmes: [],
    

};



export default function filmeDetalhe(state= estadoInicial, 
    {type, payload})

    
    {
        
        switch(type) {
            case 'ver/DETALHE' :
                console.log(payload)
                window.location.href = "/";
                return  {filmes:payload}
                
                    
                   

                   
                    
                    
                    
                

                
        

        default:
            return state;
        }          
    }