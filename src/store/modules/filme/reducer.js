const estadoInicial = {
    filme:{},
    

};



export default function filmeDetalhe(state= estadoInicial, 
    {type, payload})

    
    {
        
        switch(type) {
            case 'ver/DETALHE' :
              
            
            return {filme:payload}
                
            
                
                
         default:
            return state;
        }          
    }