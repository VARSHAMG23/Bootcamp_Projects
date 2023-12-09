# 5. Nested list

# li= [1,6,3,4,6,3,2,2]
# print(li)
# list=[]
# list1=[]

# for x in li:
#     if li.count(x) <= 1:
#         list.append(x)
#     elif li.count(x)>1:
#         li.remove(x)
#         list1.append(x)
# print(li)
# print(list)
# print(list1)

# SOLUTION 2

def new_lis(li):
    list = []
    repeated_list = []
    nonrepeated_list = []
    for sublist in li:
       for item in sublist:
         list.append(item)

    for i in set(list): #set takes unique value
      if list.count(i) > 1:
        repeated_list.append(i)
      elif list.count(i) == 1:
        nonrepeated_list.append(i)

    return repeated_list, nonrepeated_list,list


li = [[1, 2, 3], [1, 2, 4],[4,3,5],[4,3,7,8]]
repeated, non_repeated,lis = new_lis(li)

print("repeated list:", repeated)
print("non-repeated list:", non_repeated)
print("item in sublist added to new list:",lis)