# Working of the dummy endpoints acting as banks

![Adding 100](./bank-webhook-images/5.png)
- **Select Bank and Amount:** Choose the bank from which you want to add money and specify the amount you wish to add.
- **Initiate Transaction:** Click on the "Add Money" button to initiate the transaction. This will redirect you to the bank's authorization page.

![HDFC Bank](./bank-webhook-images/6.png)
- **Dummy bank's authorisation page:** I am not actually using bank's authorisation this is just a screenshot of where the user gets redirected when he clicks on add mooney if selected bank is "HDFC Bank".

![Did not get added 100 to wallet on user_app](./bank-webhook-images/7.png)
- **Money did not get added on user-side yet:** Rs. 100 did not get added to wallet because the request hasn't been fetched by the bank server.

![Prisma](./bank-webhook-images/8.png)
- And as the bank didn't fetch the request and didn't authorize the request the database still shows status as processing Rs. 100. But as we store the amount in database as 100 * value to avoid any inconsistencies in data because in integer the values will get rounded off. Hence, one user might loss some money while other gets extra money.

![Authorising the request](./bank-webhook-images/10.png)
### Using Postman
- **Authorize Request:** On the bank's authorization page, provide the required information, including user_identifier, token, and amount, to authorize the request.
- **Transaction Confirmation:** After authorizing the request, you will receive a "captured" message, indicating that the transaction has been successfully processed.

![Success 100](./bank-webhook-images/11.png)
- As the transaction confiramtion happens the database updates the status as "Success".

![Money added to the wallet](./bank-webhook-images/12.png)
- **Check Wallet Balance:** You can now check your wallet balance to confirm that the money has been added successfully.
- **View Transaction History:** The transaction will also be recorded in your transaction history, allowing you to track your financial activities.
