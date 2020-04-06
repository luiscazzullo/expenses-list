import React from 'react';
import { budgetReview } from '../../utils';
const BudgetController = ({ money, residual }) => {
    return ( 
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {money}
            </div>
            <div className={budgetReview(money, residual)}>
                Restante: $ {residual}
            </div>
        </>
     );
}
 
export default BudgetController;