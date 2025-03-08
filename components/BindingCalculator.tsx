'use client';

import { useState } from 'react';

type BindingType = 'regular' | 'bias';

export default function BindingCalculator() {
  const [quiltLength, setQuiltLength] = useState<string>('');
  const [quiltWidth, setQuiltWidth] = useState<string>('');
  const [fabricWidth, setFabricWidth] = useState<string>('42'); // Default fabric width (WOF - Width of Fabric)
  const [bindingType, setBindingType] = useState<BindingType>('regular');
  const [bindingWidth, setBindingWidth] = useState<string>('2.5'); // Default binding width
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateBinding = () => {
    // Clear previous results and errors
    setError(null);
    setResult(null);

    // Validate inputs
    if (!quiltLength || !quiltWidth || !fabricWidth || !bindingWidth) {
      setError('Please fill in all fields');
      return;
    }

    const length = parseFloat(quiltLength);
    const width = parseFloat(quiltWidth);
    const fabric = parseFloat(fabricWidth);
    const binding = parseFloat(bindingWidth);

    if (isNaN(length) || isNaN(width) || isNaN(fabric) || isNaN(binding)) {
      setError('Please enter valid numbers');
      return;
    }

    if (length <= 0 || width <= 0 || fabric <= 0 || binding <= 0) {
      setError('Measurements must be greater than zero');
      return;
    }

    // Calculate perimeter of quilt
    const perimeter = 2 * (length + width);
    
    // Add extra for corners and joining
    const totalLength = perimeter + 10;
    
    // Calculate based on binding type
    let stripsNeeded;
    let totalFabricNeeded;
    let bindingNeeded;
    
    console.log('Binding Type:', bindingType);
    
    if (bindingType === 'regular') {
      // Regular binding calculation
      bindingNeeded = totalLength;
      stripsNeeded = Math.ceil(bindingNeeded / fabric);
      totalFabricNeeded = stripsNeeded * binding;
      console.log('Regular Binding Calculation:', { bindingNeeded, stripsNeeded, totalFabricNeeded });
    } else {
      // Bias binding calculation (multiply by 1.414 for bias cut)
      bindingNeeded = totalLength * 1.414;
      stripsNeeded = Math.ceil(bindingNeeded / fabric);
      totalFabricNeeded = stripsNeeded * binding;
      console.log('Bias Binding Calculation:', { bindingNeeded, stripsNeeded, totalFabricNeeded });
    }

    // Format the result
    const resultText = `
      Quilt Perimeter: ${perimeter.toFixed(2)} inches
      Total Binding Needed: ${bindingNeeded.toFixed(2)} inches
      Number of Strips Needed: ${stripsNeeded}
      Total Fabric Needed: ${totalFabricNeeded.toFixed(2)} inches (${(totalFabricNeeded / 36).toFixed(2)} yards)
    `;

    setResult(resultText);
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="bg-[#5D4037] px-6 py-4">
        <h2 className="text-xl font-bold text-white">Quilt Binding Calculator</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <button
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none transition-colors ${
                bindingType === 'regular'
                  ? 'bg-[#5D4037] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                setBindingType('regular');
                // Clear previous results when changing binding type
                setResult(null);
              }}
            >
              Regular Binding
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none transition-colors ${
                bindingType === 'bias'
                  ? 'bg-[#5D4037] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                setBindingType('bias');
                // Clear previous results when changing binding type
                setResult(null);
              }}
            >
              Bias Binding
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            {bindingType === 'regular'
              ? 'Regular binding strips are cut parallel to the selvage (along the width of fabric).'
              : 'Bias binding strips are cut at a 45° angle to the selvage, providing more flexibility for curved edges.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="quiltLength" className="block text-sm font-medium text-gray-700 mb-1">
              Quilt Length (inches)
            </label>
            <input
              type="number"
              id="quiltLength"
              value={quiltLength}
              onChange={(e) => setQuiltLength(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8D6E63] focus:border-[#8D6E63]"
              placeholder="Enter quilt length"
              min="0"
              step="0.25"
            />
          </div>
          
          <div>
            <label htmlFor="quiltWidth" className="block text-sm font-medium text-gray-700 mb-1">
              Quilt Width (inches)
            </label>
            <input
              type="number"
              id="quiltWidth"
              value={quiltWidth}
              onChange={(e) => setQuiltWidth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8D6E63] focus:border-[#8D6E63]"
              placeholder="Enter quilt width"
              min="0"
              step="0.25"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fabricWidth" className="block text-sm font-medium text-gray-700 mb-1">
              Fabric Width (inches)
            </label>
            <input
              type="number"
              id="fabricWidth"
              value={fabricWidth}
              onChange={(e) => setFabricWidth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8D6E63] focus:border-[#8D6E63]"
              placeholder="Width of fabric (WOF)"
              min="0"
              step="0.25"
            />
            <p className="mt-1 text-xs text-gray-500">Standard width of quilting fabric is 42-44 inches</p>
          </div>
          
          <div>
            <label htmlFor="bindingWidth" className="block text-sm font-medium text-gray-700 mb-1">
              Binding Strip Width (inches)
            </label>
            <input
              type="number"
              id="bindingWidth"
              value={bindingWidth}
              onChange={(e) => setBindingWidth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8D6E63] focus:border-[#8D6E63]"
              placeholder="Width to cut binding strips"
              min="0"
              step="0.25"
            />
            <p className="mt-1 text-xs text-gray-500">Standard binding width is 2.5 inches</p>
          </div>
        </div>

        <button
          onClick={calculateBinding}
          className="w-full bg-[#FF5722] text-white py-3 px-4 rounded-md hover:bg-[#E64A19] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5722]"
        >
          Calculate Binding
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-[#EFEBE9] rounded-md">
            <h3 className="text-lg font-medium text-[#5D4037] mb-2">Results</h3>
            <pre className="whitespace-pre-line text-sm text-gray-700">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
