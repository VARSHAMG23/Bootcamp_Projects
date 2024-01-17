# Charater class
import re
txt="I got my driving license from licence server."
pattern=re.compile("licen[cs]e")
result=pattern.findall(txt)
print(result)

# charater set range- to match digit,alphabets
txt="I completed my BE in 2023  2001 2002June"
pattern=re.compile("[1-9]\d\d\d")
result=pattern.findall(txt)
print(result)

# Negate
pattern=re.compile("[^\s^A,E,I,O,U,a,e,i,o,u]")
result=pattern.findall(txt)
print(result)

# excluding all alpha numeric charaters and whitespace characters
txt="I completed my. ! 2023"
pattern=re.compile("[^\w\s]") 
result=pattern.findall(txt)
print(result)

# start index and end index
str = ' A computer science Engineering'
match = re.search(r'science', str) 
print('Start Index:', match.start()) 
print('End Index:', match.end())
print(match) #it returns object

"""
1. \ Backslash
The backslash (\) makes sure that the character is not treated in a special way. This can be considered a way of escaping metacharacters.
"""
str = 'Varsha.Varsha'
# without using (matches any)
match = re.search(r'.', str) 
print(match.start()) 
# using  
match = re.search(r'\.', str) 
print(match.start()) 

"""
2. [] Square Brackets
Square Brackets ([]) represent a character class consisting of a set of characters that we wish to match."""

str="Varsha is good girl"
pattern = "[^\sa-m]"
result = re.findall(pattern, str)
print(result)

"""3. ^ Caret
Caret (^) symbol matches the beginning of the string i.e. checks whether the string starts with the given character(s) or not. """

regex = r'^The'
strings = ['The Charlie', 'The lazy dog', 'yes I understood'] 
for string in strings: 
    if re.match(regex, string): 
        print(f'Matched: {string}') 
    else: 
        print(f'Not matched: {string}') 

"""4. $  Dollar
Dollar($) symbol matches the end of the string i.e checks whether the string ends with the given character(s) or not."""

regex = r'Charlie$'
strings = ['The Charlie'] 
for string in strings: 
    if re.search(regex, string): 
        print(f'found: {string}') 
    else: 
        print(f'Not found: {string}') 

# 1.findall()

import re 
string = """Hello my Number is 123456789 and 
            my friend's number is 987654321"""
regex='\d'
match = re.findall(regex, string) 
print(match)
regex = '\d+'  
match = re.findall(regex, string) 
print(match) 

"""
6. | Or
Or symbol works as the or operator meaning it checks whether the pattern before or after the or symbol is present in the string or not.
"""
"""
7. ? Question Mark
The question mark (?) is a quantifier in regular expressions that indicates that the preceding element should be matched zero or one time. It allows you to specify that the element is optional, meaning it may occur once or not at all.
"""
"""
8.*  Star
Star (*) symbol matches zero or more occurrences of the regex preceding the * symbol. 
"""
"""
9. +  Plus
Plus (+) symbol matches one or more occurrences of the regex preceding the + symbol.
"""
"""
10. {m, n}  Braces
Braces match any repetitions preceding regex from m to n both inclusive. 
"""
"""11.(<regex>) Group
Group symbol is used to group sub-patterns."""

# 2.re.compile() 
"""Regular expressions are compiled into pattern objects, which have methods for various operations such as searching for pattern matches or performing string substitutions. """
para = re.compile('[a-s]') 
print(para.findall("Srujan is boring person")) 

#  list word characters
p = re.compile('\w') 
print(p.findall("He said * in some_lang.")) 

# sequences of word characters
p = re.compile('\w+') 
print(p.findall("I went to him at 11 A.M., he \ said .**"))

# non-word characters in input strings
p = re.compile('\W') 
print(p.findall("he said *** in some_language.")) 

#  regular expression pattern ‘Var*’ to find and list all occurrences of ‘Var’ followed by zero or more ‘r’ characters in the input string “VarrVarrrr”.
p = re.compile('Var*') 
print(p.findall("VarrVarrrrarrrrVaar"))

# 3. re.split() 
str = "My name is Srujan and my luck numbers are 12 45 78"
word_list = re.split(r"\s+",str)
print(word_list)
word_list = re.split(r"\d+",str)
print(word_list)

target_string = "2001-05-23-23,23"
# Split only on the first occurrence
# maxsplit is 1
result = re.split(r"\D", target_string, maxsplit=1)
print(result)
result = re.split(r"\D", target_string, maxsplit=2)
print(result)
result = re.split(r"-|,", target_string)
print(result)
target_string = "PYnative   dot.com; is for, Python-developer"
# Pattern to split: [-;,.\s]\s*
result = re.split(r"[-;,.\s]\s*", target_string)
print(result)
# result = re.split(r"[\b\W\b]+", target_string)
# print(result)

# Sub()
# Syntax: re.sub(pattern, repl, string, count=0, flags=0)
print(re.sub('ted', 'hi', 'People born in May are kind hearted and sweethearTeD',  
             flags=re.IGNORECASE)) 
print(re.sub('ub', '~*', 'Subject has Uber booked already'))
print(re.sub('ub', '~*', 'Subject has Uber booked already', 
             count=1, flags=re.IGNORECASE)) #only frst occurance
print(re.sub(r'\sbad\s', ' good ', 'Srujan is bad boy',  
             flags=re.IGNORECASE))

# subn()
print(re.subn('ted', 'hi', 'People born in May are kind hearted and sweethearTeD',  
             flags=re.IGNORECASE)) 
print(re.subn('ub', '~*', 'Subject has Uber booked already'))
print(re.subn('ub', '~*', 'Subject has Uber booked already', 
             count=1, flags=re.IGNORECASE)) #only frst occurance

print(re.subn(r'\sbad\s', ' good ', 'Srujan is bad boy',  
             flags=re.IGNORECASE))