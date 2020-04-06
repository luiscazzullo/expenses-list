import React, { useState } from 'react';
//Component
import ErrorMessage from '../errorMessage/ErrorMessage';
const InputMoney = ({ setMoney, setResidual, setShowInput }) => {
    //State
    const [budget, setBudget] = useState(0);
    const [error, setError] = useState(false);
    const handleOnChange = ev => {
        setBudget(parseInt(ev.target.value));
    }
    const submitBudget = ev => {
        ev.preventDefault();
        if(budget < 1 || isNaN(budget)) {
            setError(true);
            return;
        }
        setError(false);
        setMoney(budget);
        setResidual(budget);
        setShowInput(false);
    }
    return ( 
        <>
            <h2>
                Coloca tu presupuesto
            </h2>
            { error ? <ErrorMessage message="Tu presupuesto no es válido" /> : null}
            <form onSubmit={submitBudget}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Introduce tu presupuesto"
                    onChange={handleOnChange}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Enviar"
                />
            </form>
        </>
     );
}
 
export default InputMoney;