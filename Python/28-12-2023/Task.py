
# def username():
#     user_name = input("Enter your username: ")
#     return user_name

# def password(pswd):
#     return len(pswd) >= 6

# def login():
#     user_name = username()
#     pswd = input("Enter Password: ")

#     if password(pswd):
#         print("Login success")
#     else:
#         print("Invalid password")

# login()


# user = {
#     'Srujan': '1234',
#     'Shi': '23456',
#     'Bibin': '3456',
#     'Nikhil':'2345',
#     'Ziya':'3456'
# }

# def login(name, password):

#     if name in user:
        
#         if user[name] == password:
#             print(f"Login success")
#             return True
#         else:
#             print("Invalid pswd")
#             return False
#     else:
#         print("User not found")
#         return False

# uname = input("Enter your name: ")
# pswd = input("Enter your password: ")

# login(uname, pswd)

# User credentials dictionary
# user_credentials = {
#     'user1': 'password1',
#     'user2': 'password2',
#     'user3': 'password3'
# }

# def is_valid_username(username):
#     """Check if the username exists in the dictionary."""
#     return username in user_credentials

# def is_valid_password(username, password):
#     """Check if the provided password matches the stored password for the username."""
#     return user_credentials.get(username) == password

# def login(username, password):
#     """Validate username and password."""
#     if is_valid_username(username):
#         if is_valid_password(username, password):
#             print(f"Login successful! Welcome, {username}.")
#             return True
#         else:
#             print("Incorrect password. Please try again.")
#             return False
#     else:
#         print("Username not found. Please check your username or register if you don't have an account.")
#         return False

# def reset_password(username, new_password):
#     """Reset the password for the given username and print updated user details."""
#     if is_valid_username(username):
#         old_password = user_credentials[username]
#         user_credentials[username] = new_password
#         print("Password reset successful.")
#         print(f"User details updated:\nUsername: {username}\nOld Password: {old_password}\nNew Password: {new_password}")
#     else:
#         print("Username not found. Cannot reset password.")

# # Example usage
# username_input = input("Enter your username: ")
# password_input = input("Enter your password: ")

# # Validate the login
# if login(username_input, password_input):
#     reset_option = input("Do you want to reset your password? (yes/no): ").lower()
#     if reset_option == 'yes':
#         new_password_input = input("Enter your new password: ")
#         reset_password(username_input, new_password_input)


############################ OOPS ###################################################
# class UserLogin:
#     def __init__(self):
#         # user with user name , inner dictionary of user detalis
#         self.user_details = {
#             'Admin': {'password': 'password1', 'admin': True},
#             'Varsha': {'password': '123456', 'admin': False},
#             'Skandana': {'password': '123456', 'admin': False}
#         }

#     def username(self, user_name):
        
#         return user_name in self.user_details

#     def pswd(self, user_name, password):
#         # retrieves dict associated with user_name in user_details dict
#         return self.user_details[user_name]['password'] == password

#     def admin(self, user_name):
#         return self.user_details[user_name]['admin']

#     def login(self, user_name, password):
        
#         if self.username(user_name):
#             if self.pswd(user_name, password):
#                 print(f"Login success, Good Morning {user_name}.")
#                 return True
#             else:
#                 print("Incorrect password")
#                 return False
#         else:
#             print("User not found")
#             return False

#     def reset_password(self, user_name, new_password):
        
#         if self.admin(user_name):
#             print("Admin cannot reset  password.")
#         elif self.username(user_name):
#             old_password = self.user_details[user_name]['password']
#             self.user_details[user_name]['password'] = new_password
#             print("Password reset success")
#             print(f" details updated:\nUsername: {user_name}\nOld Password: {old_password}\nNew Password: {new_password}")
#         else:
#             print("User")


# user_login = UserLogin()

# while True:
#     print("\nOption:")
#     print("1. Login")
#     print("2. Reset Password")
#     print("3. Exit")

#     choice = input("choose options: ")

#     if choice == '1':
#         uname = input("Enter your username: ")
#         user_password = input("Enter your password: ")
#         user_login.login(uname, user_password)
#     elif choice == '2':
#         uname = input("Enter your username: ")
#         new_password_input = input("Enter your new password: ")
#         user_login.reset_password(uname, new_password_input)
#     elif choice == '3':
#         print("Thank you ")
#         break
#     else:
#         print("Invalid choice")

############################### INHERITENCE ###################################

"""
Inheritence happens: Super calss
Why Super calss:web-login class(super class) if success that maps to specific web page
Organisation
1 store -10 products
(2 personns- 1.to issue product , 2.Admin)
Superclass login-SubClass--> Admin(diff role), Employee(diff role)

"""

# class Product:
#     products = 4 

#     def __init__(self):
#         pass

#     def billing(self):
#         if Product.products > 0:
#             Product.products -= 1
#             return True
#         else:
#             print("No more products available.")
#             return False


# class BillingCounter(Product):
#     def __init__(self):
#         super().__init__()

#     def bill_product(self):
#         if self.billing():
#             print(f"Product billed. Remaining products: {Product.products}")


# billing_counter1 = BillingCounter()
# billing_counter1.bill_product()
# billing_counter2 = BillingCounter()
# billing_counter2.bill_product()
# billing_counter3 = BillingCounter()
# billing_counter3.bill_product()
# billing_counter4 = BillingCounter()
# billing_counter4.bill_product()
# billing_counter4 = BillingCounter()
# billing_counter4.bill_product()

# print(Product.products)

# class store:
#     products=4
#     def _init_(self):
#         pass
#     def billing(self,number):
#         if store.products>0 and number<=store.products:
#             store.products=store.products-number
#         else:
#             print(f"products is {self.products}")
    
    

# class counter_one(store):
#     def _init_(self,number):
#         self.number=number
#         super()._init_()
#         self.billing(self.number)

    
# class counter_two(store):
#     def _init_(self,number):
#         self.number=number
#         super()._init_()
#         self.billing(self.number)

        

# class counter_three(store):
#     def _init_(self,number):
#         self.number=number
#         super()._init_()
#         self.billing(self.number)

        

# class counter_four(store):
#     def _init_(self,number):
#         self.number=number
#         super()._init_()
#         self.billing(self.number)


# counter4=counter_four(5)
# counter3=counter_three(1)


# print(store.products)


# my_str = "Hi Varsha, how are you?"
# list1 = [char for char in my_str if char.isalpha() and char.isupper()]
# list2 = [char for char in my_str if char.isalpha() and char.islower()]
# print("Uppercase Letters:", list1)
# print("Lowercase Letters:", list2)


# my_str = "Hi varsha"
# list1 = [char.upper() for char in my_str]
# list2 = [char.lower() for char in my_str]
# print( list1)
# print(list2)

# # Tuple list

# name = ['ram', 'tej']
# age = ['55', '66']
# tuple_list = [(a, b) for a, b in zip(name, age)]
# # tuple_list=list(zip(name, age))
# print(tuple_list)


# name=['bibin',"nikil"]
# age=[23,22]
# new_tuple=[(name[i],age[i]) for i in range(len(name))]
# print(new_tuple)


# # Flattening
# list1= [[1, 2, 3], [12, 0]]
# new_list = [element for sublist in list1 for element in sublist]
# print(new_list)

# list1= [[1, 2, 3], [12, 0]]
# new_list = [j for i in list1 for j in i]
# print(new_list)


# # Transpose Matrix
# import numpy
# matrix = [[1, 2, 3], [4, 5, 6]]
# print(numpy.transpose(matrix))

# matrix = [[1, 2, 3], [3, 4, 5], [7, 8, 8]]
# transposed_matrix = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
# print(transposed_matrix)


# 1.Generate a list of all prime numbers less than 100 using a list comprehension.
"""def prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True
prime_numbers = [num for num in range(2, 100) if prime(num)]
print(prime_numbers)"""

# 2. Create a list of all possible combinations of two letters from the alphabet (e.g., 'AB', 'AC', 'AD', ..., 'YZ').
"""import string
letters = string.ascii_uppercase  
combination = [x1 + x2 for x1 in letters for x2 in letters]
print(combination)"""

# 3.Given a list of names, produce a list of tuples containing the first and last letters of each name (e.g., [('Alice', 'e'), ('Bob', 'b'), ...]).


# 4.Write a list comprehension that extracts all words starting with 's' from a given sentence.
"""txt = "Sun Shine Bright "
word= [x for x in txt.split() if x.upper().startswith('S')]
print(word)
"""
#5. Create a list comprehension that generates all Pythagorean triples (a, bG

# Bubble Sort 

# import time

# def bubble_sort(arr):
#     n = len(arr)
#     for i in range(n):
#         for j in range(0, n-i-1):
#             if arr[j] > arr[j+1]:
#                 arr[j], arr[j+1] = arr[j+1], arr[j]

# # user_list=list(map(int, input("enter numbers:\n").split()))
# user_input = input("Enter Numbers  ")
# input_list = [int(x) for x in user_input.split()]
# bubble_sort(input_list)
# sorted_list = input_list
# print("list after sorting", sorted_list)
# start_time = time.time()
# end_time = time.time()
# execution_time=end_time - start_time
# print(f"Execution time: {execution_time:.6f} seconds")

"""The re module offers a set of functions that allows us to search a string for a match:

Function-Description
findall-Returns a list containing all matches
search-Returns a Match object if there is a match anywhere in the string
split-Returns a list where the string has been split at each match
sub-Replaces one or many matches with a string


Metacharacters
Metacharacters are characters with a special meaning:

[]	A set of characters	"[a-m]"	
\	Signals a special sequence (can also be used to escape special characters)	"\d"	
.	Any character (except newline character)	"he..o"	
^	Starts with	"^hello"	
$	Ends with	"planet$"	
*	Zero or more occurrences	"he.*o"	
+	One or more occurrences	"he.+o"	
?	Zero or one occurrences	"he.?o"	
{}	Exactly the specified number of occurrences	"he.{2}o"	
|	Either or	"falls|stays"	
()	Capture and group	 	 


Sets
A set is a set of characters inside a pair of square brackets [] with a special meaning:

[arn]	Returns a match where one of the specified characters (a, r, or n) is present	
[a-n]	Returns a match for any lower case character, alphabetically between a and n	
[^arn]	Returns a match for any character EXCEPT a, r, and n	
[0123]	Returns a match where any of the specified digits (0, 1, 2, or 3) are present	
[0-9]	Returns a match for any digit between 0 and 9	
[0-5][0-9]	Returns a match for any two-digit numbers from 00 and 59	
[a-zA-Z]	Returns a match for any character alphabetically between a and z, lower case OR upper case	
[+]	In sets, +, *, ., |, (), $,{} has no special meaning, so [+] means: return a match for any + character in the string	

"""
# findall()
"""import re
str = "Hello All"
x = re.findall(r'^Hello', str)
print(x)"""
"""import re
num="Hello 123"
x = re.findall(r'\d', num)
print(x)
if x:
    print("yes found!")
else:
    print("No match")"""

# search()
"""import re
str="Happy New Year"
x=re.search(r'Year',str)
print(x)
if x:
    print("yes found!")
else:
    print("No match")"""

# split()
# import re
# str = "My name is Varsha my lucky numbers are 12 45 78"
# # split on white-space 
# list = re.split(r"\s+", str)
# print(list)

#match()
# txt="My name is Varsha my lucky numbers are 6 7"
# x=re.findall("name",txt)
# print(x)



# class UserDatabase:
#     def __init__(self):
#         self.users = { 'Varsha': '123456',
#    'Spoorthi': '123456',
#     'Skandana': '123456'}

#     def add_user(self, username, password):
#         if username not in self.users:
#             self.users[username] = password
#             print(f"User '{username}'Added,Success.")
#         else:
#             print(f"Error: Username '{username}' already exists.")

#     def get_password(self, username):
#         return self.users.get(username)


# class Login:
#     def __init__(self, user_db):
#         self.user_db = user_db

#     def validate(self, username, password):
#         stored_password = self.user_db.get_password(username)
#         if stored_password is not None and stored_password == password:
#             print("Login successful.")
#         else:
#             print("Error: Invalid ")


# class Signup:
#     def __init__(self, user_db):
#         self.user_db = user_db

#     def add_user(self, username, password):
#         self.user_db.add_user(username, password)

# def main():
#     print("1. Login")
#     print("2. Signup")
#     print("3. Exit")
#     return input("Choose option): ")



# user_db = UserDatabase()
# login_system = Login(user_db)
# signup_system = Signup(user_db)

# while True:
#     choice = main()

#     if choice == "1":
#         username = input("Enter your username: ")
#         password = input("Enter your password: ")
#         login_system.validate(username, password)

#     elif choice == "2":
#         username = input("Enter a new username: ")
#         password = input("Enter a new password: ")
#         signup_system.add_user(username, password)

#     elif choice == "3":
#         print("Exiting the program.")
#         break

#     else:
#         print("Invalid choice")






