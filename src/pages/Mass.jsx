import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBmi(bmiValue);
      classifyBMI(bmiValue);
    } else {
      setBmi(null);
      setCategory("Please enter valid weight and height.");
    }
  };

  const classifyBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold my-6">BMI Calculator</h1>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <form onSubmit={calculateBMI} className="space-y-4">
          {/* Weight Input */}
          <div>
            <label className="block font-medium mb-2">Weight (kg):</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your weight"
            />
          </div>
          {/* Height Input */}
          <div>
            <label className="block font-medium mb-2">Height (m):</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your height"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Calculate
          </button>
        </form>
        {/* Display Result */}
        {bmi && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg text-center">
            <p className="text-lg font-semibold">Your BMI:</p>
            <p className="text-2xl font-bold">{bmi}</p>
            <p
              className={`text-lg mt-2 font-medium ${
                category === "Underweight"
                  ? "text-blue-400"
                  : category === "Normal weight"
                  ? "text-green-400"
                  : category === "Overweight"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
