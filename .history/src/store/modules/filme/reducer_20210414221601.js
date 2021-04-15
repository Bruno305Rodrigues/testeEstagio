const estadoInicial = {
    filmes: [],
    

};



export default function filmeDetalhe(state= estadoInicial, 
    {type, payload})

    
    {
        
        switch(type) {
            case 'ver/DETALHE' :
                console.log(payload)
                return  {filmes:payload}
                
                    
                   

                   
                    
                    
                    
                

                
        

        default:
            return state;
        }          
    }