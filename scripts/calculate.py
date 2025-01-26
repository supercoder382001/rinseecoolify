import sys
import json

# Read arguments passed to the script
args = sys.argv[1:]  # sys.argv[0] is the script name

# Perform some calculation or operation
if args:
    result = sum(map(int, args))  # Example: Sum of all arguments
    response = {"status": "success", "result": result}
else:
    response = {"status": "error", "message": "No arguments provided"}

# Send the result back as JSON
print(json.dumps(response))
