import React, { useState } from "react";

export default function ProteinCalculator() {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [proteinIntake, setProteinIntake] = useState(null);

  const calculateProtein = () => {
    if (!weight || !activityLevel) {
      alert("Please enter your weight and select an activity level.");
      return;
    }

    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) {
      alert("Please enter a valid weight.");
      return;
    }

    let multiplier = 1.4;
    switch (activityLevel) {
      case "sedentary":
        multiplier = 0.8;
        break;
      case "moderate":
        multiplier = 1.2;
        break;
      case "intense":
        multiplier = 1.8;
        break;
      default:
        multiplier = 1.4;
    }

    setProteinIntake((weightNum * multiplier).toFixed(2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Protein Intake Calculator</h1>

      <div className="mb-4 w-full max-w-md">
        <label htmlFor="weight" className="block text-green-700 font-medium mb-2">
          Enter your weight (kg):
        </label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g., 70"
          className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="mb-4 w-full max-w-md">
        <label className="block text-green-700 font-medium mb-2">
          Select your activity level:
        </label>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-400 ${
              activityLevel === "sedentary"
                ? "bg-green-600 text-white"
                : "bg-white border-green-300 text-green-700"
            }`}
            onClick={() => setActivityLevel("sedentary")}
          >
            Sedentary
          </button>
          <button
            className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-400 ${
              activityLevel === "moderate"
                ? "bg-green-600 text-white"
                : "bg-white border-green-300 text-green-700"
            }`}
            onClick={() => setActivityLevel("moderate")}
          >
            Moderate
          </button>
          <button
            className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-400 ${
              activityLevel === "intense"
                ? "bg-green-600 text-white"
                : "bg-white border-green-300 text-green-700"
            }`}
            onClick={() => setActivityLevel("intense")}
          >
            Intense
          </button>
        </div>
      </div>

      <button
        onClick={calculateProtein}
        className="bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
      >
        Calculate Protein Intake
      </button>

      {proteinIntake && (
        <div className="mt-6 w-full max-w-md text-center bg-white shadow-md rounded-lg p-4 border border-green-300">
          <h2 className="text-lg font-bold text-green-700">Your Protein Intake</h2>
          <p className="text-2xl font-semibold text-green-600">
            {proteinIntake} grams/day
          </p>
        </div>
      )}
    </div>
  );
}


