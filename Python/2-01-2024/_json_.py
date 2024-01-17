"""
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.
Python has a built-in package called json, which can be used to work with JSON data.
import json module
JSON to  Python json.loads() returns
Python to JSON json.dumps() returns
indent,separators,sort_keys - used to read results
"JSON-transfer data as text that can be sent over a network.JSON represents objects as name/value pairs, just like a Python dictionary.
Serialization is the process of encoding data into JSON format (like converting a Python list to JSON)json.dumps().

Deserialization is the process of decoding JSON data back into native objects you can work with (like reading JSON data into a Python list).Json.loads()"

#################1.Why Json is Required and where it is used and how it is used?
JavaScript Object Notation (JSON) is a standardized format commonly used to transfer data as text that can be sent over a network.
JSON plays an important role in Python programming because it allows efficient data serialization and deserialization. It enables Python programs to effortlessly communicate with web services, exchange data, and store structured information.
> Serialization is the process of encoding data into JSON format (like converting a Python list to JSON)json.dumps().
> Deserialization is the process of decoding JSON data back into native objects you can work with (like reading JSON data into a Python list).Json.loads()"
> Structured Data Transmission-client & server
> Json String
> JSON Object
> JSON file
###############2.Converting dict to json and visa versa
Example:py dict to JSON:1.json.dump()

The dump() needs the json file name in which the output has to be stored as an argument.
an argument.	The dumps() does not require any such file name to be passed.
This method writes in the memory and then command for writing to disk is executed separately
faster

import json 
# Define student_details dictionary
student_details ={ 
    "name" : "sathiyajith", 
    "rollno" : 56, 
    "cgpa" : 8.6, 
    "phonenumber" : "9976770500"
} 
# Convert and write JSON object to file

with open("sample.json", "w") as outfile: 
    json.dump(student_details, outfile)

Example:py dict to JSON:2.json.dumps()
The dumps() is used when the objects are required to be in string format and is used for parsing, printing, etc, .
This method directly writes to the json file
Slower

import json  
      
# define Python dictionary
employee_details ={  
  "id": "04",  
  "name": "sunil",  
  "department": "HR"
}  
      
# Convert Python to JSON  
json_object = json.dumps(employee_details, indent = 4) 
 
# Print JSON object
print(json_object) 
 
Example: Json to Python dict:json.loads()

# Import JSON module
import json
 
# Define JSON string
jsonString = '{ "id": 121, "name": "Naveen", "course": "MERN Stack"}'
 
# Convert JSON String to Python
student_details = json.loads(jsonString)
 
# Print Dictionary
print(student_details)
 
# Print values using keys
print(student_details['name'])
print(student_details['course'])

Example: Json to Python dict:json.load()
 
# importing the module
import json
 
# Opening JSON file
with open('data.json') as json_file:
    data = json.load(json_file)
 
    # Print the type of data variable
    print("Type:", type(data))
 
    # Print the data of dictionary
    print("\nPeople1:", data['people1'])
    print("\nPeople2:", data['people2'])

################3.json object writing reading extract
Method 1: Writing JSON to a file in Python using json. dumps()
Method 2: Writing JSON to a file in Python using json.dump()
Reading JSON from a file using json. load()

---->Writing JSON to a file in Python Serializing JSON 

################4.query generation through json
---->

#################5.json data creation manually from txt file and reading data

To convert a text file (e.g., a file containing plain text or structured data) to JSON in Python, you can follow these general steps:

1.Read the content of the text file.
2.Parse or process the content to extract meaningful information.
3.Organize the extracted information into a Python dictionary or list.
4.Convert the dictionary or list to a JSON-formatted string.
5.Optionally, save the JSON string to a new file.
Here's a simple example assuming that each line in the text file represents a key-value pair separated by a delimiter (e.g., a colon):
"""

# import json module
import json  
      
# define Python dictionary
employee_details ={  
  "id": "04",  
  "name": "sunil",  
  "department": "HR"
}  
      
# Convert Python to JSON  
json_object = json.dumps(employee_details, indent = 4) 
 
# Print JSON object
print(json_object) 


import json 
    
# Define student_details dictionary
student_details ={ 
    "name" : "sathiyajith", 
    "rollno" : 56, 
    "cgpa" : 8.6, 
    "phonenumber" : "9976770500"
} 
    
# Convert and write JSON object to file
with open("sample.json", "w") as outfile: 
    json.dump(student_details, outfile)

     
import json

def text_to_json(file_path, record_delimiter='\n\n', field_delimiter=':'):
    # Read the content of the text file
    with open(file_path, 'r') as file:
        data = file.read()

    # Split the content into records based on the specified delimiter
    records = data.strip().split(record_delimiter)

    # Process each record and create a list of dictionaries
    data_list = []
    for record in records:
        record_dict = {}
        for line in record.split('\n'):
            key, value = map(str.strip, line.split(field_delimiter, 1))
            record_dict[key] = value
        data_list.append(record_dict)

    # Convert the list of dictionaries to a JSON-formatted string
    json_string = json.dumps(data_list, indent=2)

    return json_string

# Specify the path to your text file
text_file_path = 'text_file.txt'

# Convert the text file to JSON
result = text_to_json(text_file_path)

# Print or save the result as needed
print("Generated JSON:")
print(result)

# Optionally, save the JSON string to a new file
with open('output.json', 'w') as output_file:
    output_file.write(result)
