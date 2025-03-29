import React, { useState } from 'react';
import NumberInput from './NumberInput';
import OperationButton from './OperationButton';
import ResultDisplay from './ResultDisplay';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [operation, setOperation] = useState<string>('');

  const handleCalculation = (op: string) => {
    setOperation(op);
    let calculatedResult: number;
    
    switch (op) {
      case 'add':
        calculatedResult = num1 + num2;
        break;
      case 'subtract':
        calculatedResult = num1 - num2;
        break;
      case 'multiply':
        calculatedResult = num1 * num2;
        break;
      default:
        calculatedResult = 0;
    }
    
    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <div className="inputs">
        <NumberInput 
          label="Number 1" 
          value={num1} 
          onChange={(value) => setNum1(value)} 
        />
        <NumberInput 
          label="Number 2" 
          value={num2} 
          onChange={(value) => setNum2(value)} 
        />
      </div>
      <div className="operations">
        <OperationButton 
          operation="add" 
          label="+" 
          onClick={() => handleCalculation('add')} 
        />
        <OperationButton 
          operation="subtract" 
          label="-" 
          onClick={() => handleCalculation('subtract')} 
        />
        <OperationButton 
          operation="multiply" 
          label="×" 
          onClick={() => handleCalculation('multiply')} 
        />
      </div>
      {result !== null && (
        <ResultDisplay result={result} operation={operation} />
      )}
    </div>
  );
};

export default Calculator;