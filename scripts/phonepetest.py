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

        if amount <= 0:
            raise ValueError("Invalid amount. Must be greater than zero.")

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

        # URLs for redirection and callback
        ui_redirect_url = "https://rinsee.in/"
        s2s_callback_url = "https://rinsee.in/api/result"

        # Create a payment request
        pay_page_request = PgPayRequest.pay_page_pay_request_builder(
            merchant_transaction_id=merchant_transaction_id,
            amount=amount,
            merchant_user_id=merchant_user_id,
            callback_url=s2s_callback_url,
            redirect_url=ui_redirect_url
        )

        # Send the payment request
        pay_page_response = phonepe_client.pay(pay_page_request)

        # Extract the payment page URL
        pay_page_url = pay_page_response.data.instrument_response.redirect_info.url

        # Send the result back as JSON
        response = {
            "status": "success",
            "transaction_id": merchant_transaction_id,
            "payment_url": pay_page_url
        }
        print(json.dumps(response))
    except Exception as e:
        # Return error message
        print(json.dumps({"status": "error", "message": str(e)}))

if __name__ == "__main__":
    main()
