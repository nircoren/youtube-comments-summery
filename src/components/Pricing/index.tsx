'use client'
import { useState } from "react";
const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Choose Plan That's Right For You</h1>
        <p className="text-lg mt-2">Choose the plan that works best for you, feel free to contact us</p>
      </div>
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 mx-2 rounded ${billingCycle === 'monthly' ? 'bg-purple-600' : 'bg-gray-700'}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Bill Monthly
        </button>
        <button
          className={`px-6 py-2 mx-2 rounded ${billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-700'}`}
          onClick={() => setBillingCycle('yearly')}
        >
          Bill Yearly
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xs">
          <h2 className="text-xl font-semibold">Free</h2>
          <h3 className="text-4xl font-bold mt-4">$0</h3>
          <ul className="mt-6 space-y-2">
            <li>2 Users</li>
            <li>2 Files</li>
            <li>Public Share & Comments</li>
            <li>Chat Support</li>
            <li>New income apps</li>
          </ul>
          <button className="mt-6 bg-purple-600 py-2 px-4 rounded">Signup for free</button>
        </div>
        <div className="bg-purple-600 p-8 rounded-lg shadow-lg w-full max-w-xs relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-sm font-bold">
            POPULAR
          </div>
          <h2 className="text-xl font-semibold">Pro</h2>
          <h3 className="text-4xl font-bold mt-4">$8</h3>
          <ul className="mt-6 space-y-2">
            <li>4 Users</li>
            <li>All apps</li>
            <li>Unlimited editable exports</li>
            <li>Folders and collaboration</li>
            <li>All incoming apps</li>
          </ul>
          <button className="mt-6 bg-gray-900 py-2 px-4 rounded">Go to pro</button>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xs">
          <h2 className="text-xl font-semibold">Free</h2>
          <h3 className="text-4xl font-bold mt-4">$16</h3>
          <ul className="mt-6 space-y-2">
            <li>2 Users</li>
            <li>2 Files</li>
            <li>Public Share & Comments</li>
            <li>Chat Support</li>
            <li>New income apps</li>
          </ul>
          <button className="mt-6 bg-purple-600 py-2 px-4 rounded">Signup for free</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
