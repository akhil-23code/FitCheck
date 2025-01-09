import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2)));
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : '')}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : '')}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Calculate BMI
      </button>
      {bmi !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Your BMI: {bmi}</h3>
          <p>
            {bmi < 18.5 && 'Underweight'}
            {bmi >= 18.5 && bmi < 24.9 && 'Normal weight'}
            {bmi >= 25 && bmi < 29.9 && 'Overweight'}
            {bmi >= 30 && 'Obesity'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
