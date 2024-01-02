
# import re
# class check_email:
#     def __init__(self, data):
#         self.data = data

#     def validate_email(self):
#         email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
#         email = self.data.get("mail_id")
#         if re.match(email_pattern, email):
#             return True
#         else:
#             return False

# name = input("Enter  Your name: ")
# mailid = input("Enter  Your email: ")

# details = {
#     "name": "Varsha ",
#     "mail_id": "varsha@gmail.com" ,
#     "password": "1234",
#     "dob": "23-05-2001",
#     "employee_id": "E123456"
# }


# user_validator = check_email(details)
# is_valid_email = user_validator.validate_email()
# if is_valid_email:
#     print("Email is valid.")
# else:
#     print("Email is not valid.")


import re
"""regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{3})+')
def check_email(email):
    if re.fullmatch(regex, email):
      print("Valid email")
    else:
      print("Invalid email")
email=input("Please enter a valid email address:\n")
check_email(email)"""



# Validate  password
"""
password_pattern = re.compile(r'^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
def check_pswd(password):
    if re.fullmatch(password_pattern, password):
      print("Valid Password:")
    else:
      print("Invalid ")
password=input("Please enter a valid password:\n")
check_pswd(password)"""


# Validate dob
"""dob_pattern = re.compile(r'^\d{4}-\d{2}-\d{2}$')
def check_dob(birth_date):
    if re.fullmatch(dob_pattern, birth_date):
      print("Valid dob:")
    else:
      print("Invalid ")
birth_date=input("Please enter a valid dob:\n")
check_dob(birth_date)"""

# LAMBDA
"""
dict = [
    {'name': 'Varsha', 'age': 22},
    {'name': 'Spoorthi', 'age': 26},
    {'name': 'Skanda', 'age': 25}
]
list = sorted(dict, key=lambda x:x['age'])
print(list)


dict = [
    {'name': 'Varsha', 'age': 22},
    {'name': 'Spoorthi', 'age': 26},
    {'name': 'Skanda', 'age': 25}
]
list = max(dict, key=lambda x:x['age'])
print(list)

l=[[1,2,3],[4,5,6],[7,8,9]]
max_elements =max(max(l,key=lambda x:max(x)))
print(max_elements)


l=['Crocodile','Tiger','cow']
max_char =(max(l,key=lambda x:len(x)))
print(max_char)

l=['Crocodile','Tiger','cow']
max_char =(min(l,key=lambda x:len(x)))
print(max_char)


l=['Crocodile','Tiger','cow']
max_char =sorted(l,key=lambda x:len(x))
print(max_char)"""

l=['Crocodile','Tiger','cow','Apple','Orange']
max_char =list(filter(lambda x:'a' in x,l))
print(max_char)

# Original list of dictionaries
original_list = [{'Apple': 'red', 'Banana': 'Yellow'}, {'carrot': 'orange', 'd': 4}]
# Interchanging key-value pairs using list comprehension
flipped_list = [{v: k for k, v in d.items()} for d in original_list]
print(flipped_list)