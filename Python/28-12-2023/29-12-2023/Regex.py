import re
# match()
"""format = re.compile(r'\d+')
str="1234Hello Hi 567"
result = re.match(format, str)
print (result.group())"""
# search()
# format = re.compile(r'\b hi \b')
# str="1234Hello Hi hi 567 hi"


# findall()
"""format = re.compile(r' \bhi\b')
str="1234Hello Hi hi 567 hi"
result = re.findall(format, str)
print (result)"""

# sub
format = re.compile(r' \bhi\b')
str="1234Hello Hi hi 567 hi"
result = re.sub(format,'Hello', str)
print (result)