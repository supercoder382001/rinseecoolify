const { PythonShell } = require('python-shell');

export const config = {
  api: {
    externalResolver: true, // Allow external libraries to handle the response lifecycle
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { args } = req.body;
    // Validate input arguments
    if (!args || !Array.isArray(args)) {
      return res.status(400).json({ error: 'Invalid or missing arguments' });
    }

    // Configure options for PythonShell
    const options = {
      pythonPath: 'python3', // Path to your Python interpreter
      scriptPath: './scripts', // Path to your Python scripts
      args: args, // Pass arguments directly as an array
    };

    // Run the Python script
    PythonShell.run('calculate.py', options, (err, results) => {
      if (err) {
        console.error('Error running Python script:', err);
        return res.status(500).json({ error: 'Failed to execute Python script' });
      }

      try {
        // Parse the JSON response from the Python script
        const output = JSON.parse(results[0]); // results[0] contains the first line of output
        res.status(200).json(output);
      } catch (parseError) {
        console.error('Error parsing Python output:', parseError);
        res.status(500).json({ error: 'Invalid response from Python script' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
