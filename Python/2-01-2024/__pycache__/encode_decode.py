# Encoding & decoding
import json
"""data=json.dumps(float('-inf'))
print(data)
data1=json.dumps(float('+inf'))
print(data1)
data2=json.dumps(float('nan'))
print(data2)

"""
"""
Custom Serialization:
user_data={"name":"Varsha", "Age":22, "city":"Hassan"}
encoder=json.JSONEncoder().encode(user_data)
print(encoder)
print(type(encoder))
decoder=json.JSONDecoder().decode(encoder)
print(decoder)
print(type(decoder))"""

# import data present in url to json file

# import requests
# import json
# url = "https://gbfs.citibikenyc.com/gbfs/2.3/gbfs.json"
# output_file_path = "citibike_data.json"
# # Fetch data from the URL
# response = requests.get(url)
# # Check if the request was successful (status code 200)
# if response.status_code == 200:
#     # Parse the JSON data
#     data = response.json()
#     # Write the JSON data to a file
#     with open(output_file_path, 'w') as f:
#         json.dump(data, f, indent=4)
#     print(f"Success {output_file_path}")
# else:
#     print(f"Failed {response.status_code}")


"""
2. Mehtod
import requests
response = requests.get("https://gbfs.citibikenyc.com/gbfs/2.3/gbfs.json")
print(response)
data=response.json()
# print(data)
with open("demo1.json", "w") as outputfile: 
    json.dump(data, outputfile,indent=1,sort_keys=True)
"""