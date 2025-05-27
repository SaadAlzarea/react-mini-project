import React, { useState } from "react";
import underweight from "../assets/underweight.png";
import normal from "../assets/normal.png";
import overweight from "../assets/overweight.png";
import obese from "../assets/obese.png";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid values for weight and height");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(
      1
    );
    const calculateWeight = (
      22 *
      (heightInMeters * heightInMeters)
    ).toFixed(1);

    setBmi(calculatedBmi);
    setIdealWeight(calculateWeight);

    let bodyStatus = "";
    let bodyImage = "";

    if (calculatedBmi < 18.5) {
      bodyStatus = "Underweight";
      bodyImage = {underweight};
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      bodyStatus = "Normal weight";
      bodyImage = { normal };
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      bodyStatus = "Overweight";
      bodyImage = {overweight};
    } else {
      bodyStatus = "Obese";
      bodyImage = {obese};
    }

    setStatus(bodyStatus);
    setImage(bodyImage);    
  };

  return (
    <div className="h-screen flex items-center w-full">
      <div className="lg:min-w-200 mx-auto p-6 rounded-lg border shadow-md">
        <p className="text-2xl font-bold text-center mb-6 text-gray-800">
          BMI Calculator
        </p>

        <div className="mb-4">
          <label className="block text-black mb-2 font-medium">
            Weight (kg):
          </label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md "
          />
        </div>

        <div className="mb-6">
          <label className="block text-black font-medium mb-2">
            Height (cm):
          </label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 mb-6"
        >
          Calculate
        </button>

        {bmi && (
          <div className="results p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Results:
            </h3>
            <p className="mb-2">
              BMI: <strong className="text-blue-600">{bmi}</strong>
            </p>
            <p className="mb-2">
              Ideal weight:{" "}
              <strong className="text-blue-600">{idealWeight} kg</strong>
            </p>
            <p className="mb-4">
              Status:{" "}
              <strong
                className={
                  status === "Underweight"
                    ? "text-yellow-500"
                    : status === "Normal weight"
                    ? "text-green-500"
                    : status === "Overweight"
                    ? "text-orange-500"
                    : "text-red-500"
                }
              >
                {status}
              </strong>
            </p>

            {image && (
              <div className=" flex flex-col items-center">
                <img src={image} className="max-w-xs shadow-sm" />
                <p className="mt-2 text-sm text-gray-500">
                  Body shape according to BMI
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
