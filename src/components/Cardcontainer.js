import Restaurantcard from './Restaurantcard.js';
import data from '../utils/config';


const Cardcontainer = () => {
      const{imgUrl,name}=data[0];
              return(
                
            
                    <div className='container mt-5 d-flex flex-wrap justify-content-between'>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>
                    <Restaurantcard imgUrl={imgUrl}/>



                    
                  
                

                    </div>

             
              )
}
export default Cardcontainer ;