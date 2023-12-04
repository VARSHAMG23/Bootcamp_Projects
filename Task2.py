#1. regular print
print("Hello world")

# 2. multiple arguments
fruit = "Mango"
color = "orange"
print("This Fruit is",fruit +'.',  "This is ",color, "color") 

# 3.formatted string
print(f"{fruit} is {color} in color")

# 4. format() method
print("{} is {} in color".format(fruit, color))

#5. named arguments
print("{fruit} is {color} in color".format(fruit=fruit, color=color))

# 6. raw string
print(r"Good\nEvening")