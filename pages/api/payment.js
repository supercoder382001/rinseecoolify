const { PythonShell } = require('python-shell');
const { promisify } = require('util');

// Promisify the PythonShell.run method
const runPythonScript = promisify(PythonShell.run);

export const config = {
  api: {
    externalResolver: true, // Allow external libraries to handle the response lifecycle
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

  // Set the Referrer-Policy header
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin'); // Adjust the policy as needed

  // Handle preflight request (OPTIONS method)
  if (req.method === 'OPTIONS') {
    res.status(200).json({message:"Options not allowed"});
    return;
  }

  if (req.method === 'POST') {
    const { merchant_transaction_id, amount, merchant_user_id } = req.body;

    const options = {
      mode: 'text', // Output as plain text
      pythonPath: 'python3',
      scriptPath: './scripts', // Path to your Python scripts
      args: [
        merchant_transaction_id,
        amount,
        merchant_user_id,
      ],
    };

    try {
      const results = await runPythonScript('phonepetest.py', options); // Run Python script asynchronously
      const response = JSON.parse(results.join('')); // Parse the JSON response
      res.status(200).json(response);
    } catch (err) {
      console.error('Error:', err.message || err);
      const errorMessage = err.message.includes('Python script')
        ? 'Failed to execute Python script'
        : 'Invalid response from Python script';
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
