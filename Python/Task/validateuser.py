class UserDetails:
    def __init__(self, fname, lname, email, age):
        self.fname = fname
        self.lname = lname
        self.email = email
        self.age = age

    def is_age_greater_than_55(self):
        if self.age > 55:
            return True
        else:
            return False

    def is_valid_email(self):
        if "@" in self.email:
            return True
        else:
            return False

    def display_user_details(self):
        if self.is_valid_email():
            print("Email is valid.")
        else:
            print("Email is not valid.")

        full_name = f"{self.fname} {self.lname}"
        print(f"Full Name: {full_name}")

        if self.is_age_greater_than_55():
            print("Age is greater than 55.")
        else:
            print("Age is not greater than 55.")



user1 = UserDetails("Varsha", "M", "vvexample.com", 60)
user1.display_user_details()




# POLYMORPHISM
# Operator overloading

# class myclass:
#     def __init__(self,number_1,number_2):
#         self.number_1 = number_1
#         self.number_2 = number_2
#     def add(self):
#         print("Addition of the two variables ",self.number_1+self.number_2)

# result_1 = myclass(5,7)
# result_2 = myclass(10,60)
# result_1 + result_2


# Function overloading

# def add(x,y):
#     print(x+y)
# def add(x,y,z):
#     print(x+y+z)

# add(5,6)

# list Comprehension

# list inbuilt functions
# append()	Adds an element at the end of the list
# clear()	Removes all the elements from the list
# copy()	Returns a copy of the list
# count()	Returns the number of elements with the specified value
# extend()	Add the elements of a list (or any iterable), to the end of the current list
# index()	Returns the index of the first element with the specified value
# insert()	Adds an element at the specified position
# pop() 	Removes the element at the specified position
# remove()	Removes the first item with the specified value
# reverse()	Reverses the order of the list
# sort()	Sorts the list

# list Comprehension methods

# List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.

'''Example: Based on a list of fruits, you want a new list, containing only the fruits with the letter "a" in the name.
 Without list comprehension you will have to write a for statement with a conditional test inside fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)
print(newlist)

With list comprehension you can do all that with only one line of code:

Example
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist)

Syntax: newList = [ expression(element) for element in oldList if condition ] 

Parameter:

expression: Represents the operation you want to execute on every item within the iterable.
element: The term “variable” refers to each value taken from the iterable.
iterable: specify the sequence of elements you want to iterate through.(e.g., a list, tuple, or string).
condition: (Optional) A filter helps decide whether or not an element should be added to the new list.

Example:numbers = [1, 2, 3, 4, 5]
squared = [x ** 2 for x in numbers]
print(squared)


# Matrix using List Comprehension

In this example, we are assigning integers 0 to 2 to 3 rows of the matrix and printing it using List Comprehension.
matrix = [[j for j in range(3)] for i in range(3)]  
print(matrix)

# Nested List Comprehensions
Nested List Comprehensions are nothing but a list comprehension within another list comprehension which is quite similar to nested for loops.


# using lambda to print table of 10
numbers = list(map(lambda i: i*10, [i for i in range(1, 6)]))
print(numbers)

Conditionals in List Comprehension
'''
