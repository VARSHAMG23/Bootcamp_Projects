"""
% operator method
f string method
.format method
print

"""
# we can inject Multiple Strings using the modulo Operator
x = ' is Varsha'
print("My name %s and %s "%(x,'I completed my BE in 2023 June'))

# conversion types
num= 23
str = "num as integer = %d \n num as float = %f" %(num, num)
print (str)

# format method {placeholder}
print("Good morning {}".format('Team'))
# index based insertion
print('Good Morning {0}, {2},{1}'.format('Team Dlithe','Varsha','Mithun'))
# assigning keys
print('Good Morning {a},{b},{c}'.format(a='Team Dlithe',b='Varsha',c='Mithun'))
# locals-dynamic
name="varsha"
age=22
s="{name} is {age} years old".format(**locals())
print(s)

# F-strings -used to interpolate values
name = 'Varsha'
print(f"My name is {name}.")

first_name ="Varsha"
last_name = "Gowda"
print(f"My name is  { first_name +' '+ last_name}.")

# Arithmetic operations
a=2
b=3
print(f"Addition:{(a+b)}")

value=3.1444456
print(f"{value:.2f}")

# Alignment and Padding

text="Hello hi"
txt="{:<10}".format(text)
print(txt)

# Template
from string import Template
temp=Template("$name is $age year old")
r=temp.substitute(name="Varsha",age=22)
print(r)

# lambda
l=[1,2,3,4,5,6,5,9]
list1=list(map(lambda x:x**2,l))
print(list1)

l=[1,2,3,4,5,6,9,5]
list1=list(filter(lambda x:x%2!=0,l))
print(list1)

list=[22,33,44,55,36]
sorting=sorted(list)
print(sorting)
