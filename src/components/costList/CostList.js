import React from 'react';
import CostCard from '../costCard/CostCard';
const CostList = ({ costs }) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                costs.map(cost => (<CostCard key={cost.id} cost={cost} /> ))
            }
        </div>
     );
}
 
export default CostList;