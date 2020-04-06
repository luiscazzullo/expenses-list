import React from 'react';
const CostCard = ({ cost }) => {
    return ( 
        <li className="gastos">
            <p>
                {cost.costname}
                <span className="gasto">$ {cost.cost}</span>
            </p>
        </li>
     );
}
 
export default CostCard;