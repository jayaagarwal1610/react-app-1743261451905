import React from 'react';

interface ResultDisplayProps {
  result: number;
  operation: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, operation }) => {
  const getOperationText = () => {
    switch (operation) {
      case 'add':
        return 'Sum';
      case 'subtract':
        return 'Difference';
      case 'multiply':
        return 'Product';
      default:
        return 'Result';
    }
  };

  return (
    <div className="result">
      <h2>{getOperationText()}: {result}</h2>
    </div>
  );
};

export default ResultDisplay;