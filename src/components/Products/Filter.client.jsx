
import Checkbox from "../elements/checkbox.client";

export default function Filter() {
    const age = [ "24 – 36 months","3 years","4 years","5 years","6 years"];
               
return(
        <div>
            {age.map(item => (  
          <p>  
            <Checkbox name={item} />   
          </p>  
        ))}  
            
        </div>
    );
}