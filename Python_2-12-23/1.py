# 1.Using regex SOLUTION 1: Remove All Specila Characters 
import re
def rmv_splchar(str):
    str1=re.sub('[^A-Za-z0-9]+'," ",str) #re.sub  substitute all characters in user_input that doesn't match the pattern '[^A-Za-z0-9 ]+' with empty string. 
    return str1
user_input=input("enter the string")
final_str=rmv_splchar(user_input)
print("String after removing spl characters:S",final_str)


#SOLUTION 2
# str=input("enter the string")
# print("String With Special Characters",str)
# spl_char=['!', '@','#','$','%','^','&','*','(',')','-','_','+','=','.']
# rmv_str=str
# for i in spl_char:
#     rmv_str=rmv_str.replace(i,"")
# print("String after removing Special Characters",rmv_str)