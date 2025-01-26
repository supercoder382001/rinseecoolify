import json
from phonepe.sdk.pg.payments.v1.payment_client import PhonePePaymentClient
from phonepe.sdk.pg.env import Env

def main():
    try:
        # Fixed configuration values
        merchant_id = "M226CLAX56BUS"
        salt_key = "e4b612bb-6f2e-4c23-8f4c-7019cc233bda"
        salt_index = 1
        env = Env.PROD  # Change to Env.SANDBOX if needed

        # Initialize PhonePe client
        phonepe_client = PhonePePaymentClient(
            merchant_id=merchant_id,
            salt_key=salt_key,
            salt_index=salt_index,
            env=env
        )

        # Return success message
        response = {"status": "success", "message": "PhonePePaymentClient instance created successfully!"}
        print(json.dumps(response))
    except Exception as e:
        # Return error message
        print(json.dumps({"status": "error", "message": str(e)}))

if __name__ == "__main__":
    main()
