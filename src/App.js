import React, { useState, useEffect } from 'react';

//Components
import InputMoney from './components/inputMoney/InputMoney';
import Form from './components/form/Form';
import CostList from './components/costList/CostList';
import BudgetController from './components/budgetController/BudgetController';

function App() {
  //State
  const [money, setMoney] = useState(0);
  const [residual, setResidual] = useState(0);
  const [showinput, setShowInput] = useState(true)
  const [costs, setCosts] = useState([]);
  const [cost, saveCost] = useState({});
  const [createcost, setCreateCost] = useState(false);

  useEffect(() => {
    if(createcost) {
      setCosts([
        ...costs,
        cost
      ])
      const residualBudget = residual - cost.cost;
      setResidual(residualBudget);
      setCreateCost(false);
    }
  }, [cost])
 
  return (
    <div className="container">
      <header>
        <h1>Gastos semanales</h1>
      </header>
      <div className="contenido-principal contenido">
        {showinput ? 
          <InputMoney
          setMoney={setMoney}
          setResidual={setResidual}
          setShowInput={setShowInput}
          />
        :
        <div className="row">
        <div className="one-half column">
          <Form 
            saveCost={saveCost}
            setCreateCost={setCreateCost}
          />
        </div>
        <div className="one-half column">
          <CostList 
            costs={costs}
          />
          <BudgetController 
            money={money}
            residual={residual}
          />
        </div>
      </div>
        }
  
      </div>
    </div>
  );
}

export default App;
