#3.To Capitalize the first letter of String and then store it inside dictionary
# str="hi team , good evening \'Happy Weekend\'"
# print(str.title()) #including space
# dict={}
# for i in range(len(str)):
#     dict[i]=str[i]
# print(dict)

#SOLUTION 2

str="hi team , good evening \'Happy Weekend\'"
print(str.title()) #including space
dict={}
for i in range(len(str)):
    dict[i]=str[i]
print(dict)

def cap(str):
    print("original stirng",str)
def main():
    
    print(len(str))
#   print(str.title())

str1=str.split(" ") #removing spaces
sample={}
for i in range(len(str1)):
    sample[i]=str1[i]
print(sample)

if __name__ == "_main_":
    main()