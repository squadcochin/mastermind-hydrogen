
import Checkbox from "../elements/checkbox.client";

export default function Price() {
    const price = [ "$5 – $10","$10 – $20","$20 – $30","$30 – $40"];
               
return(
        <div>
            {price.map(item => (  
          <p>  
            <Checkbox name={item} />   
          </p>  
        ))}  
            
        </div>
    );
}