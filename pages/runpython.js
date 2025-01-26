"use client";
import { useState } from 'react';

export default function RunPython() {
  const [result, setResult] = useState(null);

  const runPythonScript = async () => {
    const response = await fetch('/api/pythons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ args: [10, 20, 30] }), // Example arguments
    });

    const data = await response.json();
    if (response.ok) {
      setResult(data.results.join('\n'));
    } else {
      console.error(data.error);
    }
  };

  return (
    <div>
      <button onClick={runPythonScript}>Run Python Script</button>
      {result && <div>Python Script Result: {result}</div>}
    </div>
  );
}
