import sys
import json
import uuid
from phonepe.sdk.pg.payments.v1.models.request.pg_pay_request import PgPayRequest
from phonepe.sdk.pg.payments.v1.payment_client import PhonePePaymentClient
from phonepe.sdk.pg.env import Env

def main():
    try:
        # Read arguments passed to the script
        args = sys.argv[1:]  # Exclude the script name
        if len(args) < 3:
            raise ValueError("Missing required arguments: merchant_transaction_id, amount, merchant_user_id")

        # Assign arguments to variables
        merchant_transaction_id = args[0]  # First argument
        amount = int(args[1])              # Second argument
        merchant_user_id = args[2]         # Third argument

        # Argument validation
        if amount <= 0:
            raise ValueError("Invalid amount. Must be greater than zero.")
        if not merchant_transaction_id or not merchant_user_id:
            raise ValueError("Merchant transaction ID and user ID cannot be empty.")

        # Fixed configuration values for PhonePe client
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

        # Constants for UPI Intent request
        os_where_the_link_will_be_used = "ANDROID"
        target_app_android_phonepe = "com.phonepe.app"  # Change if needed

        # Create UPI intent payment request
        upi_intent_request = PgPayRequest.upi_intent_pay_request_builder(
            merchant_transaction_id=merchant_transaction_id,
            amount=amount,
            target_app=target_app_android_phonepe,
            merchant_user_id=merchant_user_id,
            callback_url="https://rinsee.in/api/result",  # Your callback URL
            device_os=os_where_the_link_will_be_used
        )

        # Send the UPI intent payment request
        upi_intent_response = phonepe_client.pay(upi_intent_request)

        # Extract the UPI intent URL from the response
        if upi_intent_response.data and upi_intent_response.data.instrument_response:
            upi_intent_url = upi_intent_response.data.instrument_response.intent_url
        else:
            raise ValueError("No valid response data found for UPI intent.")

        # Return success response in JSON format
        response = {
            "status": "success",
            "transaction_id": merchant_transaction_id,
            "upi_intent_url": upi_intent_url
        }
        print(json.dumps(response))

    except Exception as e:
        # Return error message
        print(json.dumps({"status": "error", "message": str(e)}))

if __name__ == "__main__":
    main()
