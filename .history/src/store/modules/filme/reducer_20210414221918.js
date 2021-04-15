const estadoInicial = {
    filmes: [],
    

};



export default function filmeDetalhe(state= estadoInicial, 
    {type, payload})

    
    {
        
        switch(type) {
            case 'ver/DETALHE' :
                console.log(payload)
               
                return   window.location.href = "/";
                
                    
                   

                   
                    
                    
                    
                

                
        

        default:
            return state;
        }          
    }