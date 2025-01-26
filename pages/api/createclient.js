const { PythonShell } = require('python-shell');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const options = {
      mode: 'text',
      pythonPath: 'python3',
      scriptPath: './scripts', // Path to your Python script
    };

    PythonShell.run('phonepeclient.py', options, (err, results) => {
      if (err) {
        console.error('Error initializing PhonePe client:', err);
        return res.status(500).json({ error: 'Failed to initialize PhonePe client' });
      }

      try {
        const parsedResults = JSON.parse(results[0]); // Parse the JSON response from the Python script
        res.status(200).json(parsedResults);
      } catch (parseError) {
        console.error('Error parsing Python script response:', parseError);
        res.status(500).json({ error: 'Invalid response from Python script' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
