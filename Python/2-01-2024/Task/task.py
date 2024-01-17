# Python  to json object
import json
print(json.dumps({"name": "Varsha", "age": 22}))
print(json.dumps(["Python", "Java",23]))
print(json.dumps(("Bob", "Alice")))
print(json.dumps("Welcome Good Morning"))
print(json.dumps(22))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))

"""Dictionary"""
import json  
# define Python dictionary
user_details ={  
  
  "first_name": "Varsha",  
  "last_name": "MG",
  "is_student": True,
}  
# Convert Python to JSON  
json_object = json.dumps(user_details,indent=4,separators=(".","="),sort_keys=True) 

# Print JSON object
print(type(json_object))
print(json_object) 

# Convert and write JSON object to file
with open("demo.json", "w") as outputfile: 
    json.dump(user_details, outputfile,indent=1,sort_keys=True)

"""LIST"""
import json  
# define Python List
user_details =["Varsha",22]
# Convert Python to JSON  
json_object = json.dumps(user_details, indent = 4) 
# Print JSON object
print(json_object) 
print(type(json_object))

"""Tuple"""
import json  
# define Python Tuple
user_details =("Varsha",22)
# Convert Python to JSON  
json_object = json.dumps(user_details, indent = 4) 
# Print JSON object
print(json_object) 
print(type(json_object))

"""String"""
import json  
# define  String
user_details ="Good Morning Varsha"
# Convert Python to JSON  
json_object = json.dumps(user_details, indent = 4) 
# Print JSON object
print(json_object) 
print(type(json_object))

"""Integer"""
import json  
# define  Number
user_details =22
# Convert Python to JSON  
json_object = json.dumps(user_details, indent = 4) 
# Print JSON object
print(json_object) 
print(type(json_object))

"""Float"""
import json  
# define  Float
user_details =22.44
# Convert Python to JSON  
json_object = json.dumps(user_details, indent = 4) 
# Print JSON object
print(json_object) 
print(type(json_object))


################################################
"""obj=["apple", "banana", "cherry"]
print(type(obj))
encoded_json=json.dumps(obj)
print(type(encoded_json))
deccoded_json=json.loads(encoded_json)
print(type(deccoded_json))"""

###############################################
"""obj='{"name":"Varsha","age":22}'
print(type(obj))

deccoded_json=json.loads(obj) #json to py
print(type(deccoded_json))
print((deccoded_json["age"]))"""

################################################ Read Write Update
"""import json

user= {
    "name": "Varsha",
    "age": 22,
    "Place": "Hassan (D)",
    "State": "Karnataka"
}

with open('task.json', 'w') as json_file:
    json.dump(user, json_file, indent=4)
print("File created")


with open('task.json', 'r') as json_file:
    data_to_read = json.load(json_file)

updated_data={'City': 'Belur'}
with open('task.json',"r+") as json_file:
    data_read = json.load(json_file)
    data_read.update(updated_data)
    json_file.seek(0)
    json.dump(data_read, json_file, indent=4)

print(data_to_read)
print(data_read)
print(data_to_read["name"])
print(data_to_read["age"])
print( type(data_to_read))

"""

