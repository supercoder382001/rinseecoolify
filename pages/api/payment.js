const { PythonShell } = require('python-shell');

export const config = {
    api: {
      externalResolver: true, // Allow external libraries to handle the response lifecycle
    },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { merchant_transaction_id, amount, merchant_user_id } = req.body;

    const options = {
      mode: 'text', // Output as plain text (JSON strings are printed by the script)
      pythonPath: 'python3',
      scriptPath: './scripts', // Path to your Python scripts
      args: [
        merchant_transaction_id,
        amount,
        merchant_user_id,
      ],
    };

    PythonShell.run('phonepetest.py', options, (err, results) => {
      if (err) {
        console.error('Error executing Python script:', err);
        return res.status(500).json({ error: 'Failed to execute Python script' });
      }

      try {
        const response = JSON.parse(results.join('')); // Parse the JSON response
        res.status(200).json(response);
      } catch (parseErr) {
        console.error('Error parsing Python script output:', parseErr);
        res.status(500).json({ error: 'Invalid response from Python script' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
