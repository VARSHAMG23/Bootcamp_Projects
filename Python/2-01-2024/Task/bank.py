
import re
import json

class Bank:
    # Bank has 3 attributes 
    def __init__(self, account_number, balance, user_name):
        self.account_number = account_number
        self.balance = balance
        self.user_name = user_name
    # deposit method takes amount parameter
    def deposit(self, amount):
        self.amount = amount
        if amount > 0:
            self.balance += amount
            return f"Amount Credited, and your balance is: {self.balance}"
        else:
            return "Invalid Amount"
     # withdraw method takes amount parameter
    def withdraw(self, amount):
        self.amount = amount
        if amount <= self.balance:
            self.balance -= amount
            return f"Remaining Balance: {self.balance}, Amount Debited: {self.amount}, Total Balance: {self.balance}"
        else:
            return "Insufficient Balance"

# Account class is inheriting from the Bank class
class Account(Bank):
    #  it takes the same parameters as the Bank class
    def __init__(self, account_number, balance=0, user_name=None):
        super().__init__(account_number, balance, user_name)
# It checks if the account number starts with three uppercase letters followed by ten digits.
account_number_pattern = re.compile(r'^[A-Z]{3}\d{10}$')
name_pattern = re.compile(r'^[A-Z][a-z]+$')
# create_account function creates a dictionary representing account details 
def create_account(account_number, name=None, current_balance=0):
    # it returns a dictionary with the user name, account number, and initial balance.
    if account_number_pattern.match(account_number) and name_pattern.match(name):
        account_details = {
            "user_name": name,
            "account_number": account_number,
            "balance": current_balance
        }
        return account_details
    else:
        return "Account Not Found, Invalid Details"


# acc_details function takes an account_details dictionary, writes it to a JSON file named "bank.json"
def acc_details(account_details):
    if account_details:
        with open("bank.json", "w") as outputfile: 
            json.dump(account_details, outputfile, indent=1)
        
        with open('bank.json', 'r') as json_file:
            data_read = json.load(json_file)
        
        if data_read == account_details:
            return "Verification Success"
        else:
            return "Account Not Found, Invalid Details"

# Update account details after withdrawal
# This function takes two parameters - account_details remaining_balance . It updates the balance key in the account_details dictionary with the provided remaining_balance and returns the updated dictionary.
def update_account_details(account_details, remaining_balance):
    account_details["balance"] = remaining_balance
    return account_details
# This line creates an initial account using the create_account function, providing an account number and user name.
account_details = create_account("ABC1234506789", "Sima")
print("Account Information:", account_details)

# An instance of the Account class (savings_account) is created using the initial account details.
savings_account = Account(account_details["account_number"], account_details["balance"], account_details["user_name"])
print("\nBank Operations")
# Bank operations
print(savings_account.deposit(500))
withdrawal_result = savings_account.withdraw(200)
print(withdrawal_result)



# Update account details after withdrawal
if "Remaining Balance" in withdrawal_result:
    remaining_balance = int(withdrawal_result.split(":")[1].strip().split(",")[0])
    # withdrawal_result.split(":"): Splits the string at the colon (":").
# [1]: Selects the second part of the split (after the colon), which contains the remaining balance information.
# .strip(): Removes any leading or trailing whitespaces.
# .split(",")[0]: Splits the string at the comma (",") and selects the first part. This part contains the numerical value of the remaining balance.
# int(...): Converts the extracted numerical value to an integer and assigns it to the variable remaining_balance.
    updated_account_details = update_account_details(account_details, remaining_balance)

# Print updated account details
print("\nUpdated Account Details:")
print(updated_account_details)

# Save updated account details to JSON file
result = acc_details(updated_account_details)
print(result)


