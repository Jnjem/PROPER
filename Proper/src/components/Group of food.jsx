import React from "react";

export default function FoodGroupFunctions() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-center mb-6 text-white">Functions of Each Group</h1>

      <div className="w-full max-w-4xl grid grid-cols-5 gap-x-4 gap-y-6">
        {/* Fruits */}
        <div className="flex flex-col items-center">
          <h2 className="text-green-600 text-md font-semibold mb-2">Fruits</h2>
          <p className="text-white text-center text-sm">
            Fruits are rich in vitamins, antioxidants, and fiber, supporting overall health and boosting the immune system.
          </p>
        </div>

        {/* Vegetables */}
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-green-600 text-md font-semibold mb-2">Vegetables</h2>
          <p className="text-white text-center text-sm">
            Vegetables provide essential vitamins, minerals, and fiber, helping maintain digestion and reduce disease risk.
          </p>
        </div>

        {/* Grains */}
        <div className="flex flex-col items-center">
          <h2 className="text-green-600 text-md font-semibold mb-2">Grains</h2>
          <p className="text-white text-center text-sm">
            Grains are a vital source of energy, providing carbohydrates, fiber, and essential nutrients like B vitamins.
          </p>
        </div>

        {/* Animal-Derived Products */}
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-green-600 text-md font-semibold mb-2 text-center">Animal-Derived Products</h2>
          <p className="text-white text-center text-sm">
            These products offer high-quality protein, vitamins like B12, and minerals such as iron and calcium, vital for body repair.
          </p>
        </div>

        {/* Legumes */}
        <div className="flex flex-col items-center">
          <h2 className="text-green-600 text-md font-semibold mb-2">Legumes</h2>
          <p className="text-white text-center text-sm">
            Legumes are rich in protein, fiber, and essential nutrients, supporting muscle growth and maintaining gut health.
          </p>
        </div>
      </div>
    </div>
  );
}




