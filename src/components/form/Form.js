import React, { useState } from 'react';
import shortid from 'shortid';
//Components
import ErrorMessage from '../errorMessage/ErrorMessage';
const Form = ({ saveCost, setCreateCost }) => {
    const [costname, setCostName] = useState('');
    const [cost, setCost] = useState(0);
    const [error, setError] = useState(false);
    const addSpend = ev => {
        ev.preventDefault();
        if(cost < 1 || isNaN(cost) || costname.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        const spend = {
            costname,
            cost,
            id: shortid.generate()
        }
        saveCost(spend);
        setCreateCost(true);
        setCostName('');
        setCost(0);
    }
    return ( 
        <form onSubmit={addSpend}>
            <h2>Añade tus gastos</h2>
            {error ? <ErrorMessage message="Revisa ambos campos" /> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={costname}
                    onChange={ev => setCostName(ev.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cost}
                    onChange={ev => setCost(parseInt(ev.target.value))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Añadir"
            />
        </form>
     );
}
 
export default Form;