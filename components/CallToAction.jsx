import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">
          Limited in Stock
        </h2>
        <h3 className="my-4 text-2xl text-white">
          Get yourself the Smart Health Monitoring Wristwatch!
        </h3>
        <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
          Pre Order
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
