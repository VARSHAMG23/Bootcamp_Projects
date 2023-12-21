import pandas as pd

# Two dictionaries representing student data
student1 = {'sid': 1, 'sname': 'Varsha','course':'cs'}
student2 = {'sid': 2, 'sname': 'Skanda', 'course': 'cs'}
df1 = pd.DataFrame([student1])
df2 = pd.DataFrame([student2])
students = pd.concat([df1, df2])
print(students)

# import pandas as pd
# # Multiple students in two dictionaries
# st1 = [
#     {'sid': 1, 'sname': 'A', 'course': 'cs'},
#     {'sid': 2, 'sname': 'B', 'course': 'ec'},
#     {'sid': 3, 'sname': 'C', 'course': 'is'}
# ]

# st2 = [
#   {'sid': 1, 'sname': 'd', 'course': 'cs'},
#     {'sid': 2, 'sname': 'e', 'course': 'EEE'},
#     {'sid': 3, 'sname': 'f', 'course': 'Mech'}
# ]
# df1 = pd.DataFrame(st1)
# df2 = pd.DataFrame(st2)

# students = pd.concat([df1, df2])
# print(students)
# # group by
# grouped_students = students[students['course']=='cs']
# print(grouped_students)

# # isnull
# print(students.isnull().sum())
# # dropna
# # students.dropna()
# # duplicates
# print(students.duplicated().sum())

# s1=pd.DataFrame({'name':['bibin','shri','varsha','srujan'],'email':['asd@gmail.com','asd@g.com','fsadf@g.com','afsfdas@gmail.com']})
# print(s1)

# s2=pd.DataFrame({'name':['bibin','ziya','srujan','nikhil'],'email':['asd@gmail.com','d@g.com','afsfdas@gmail.com','adadadG.com']})
# print(s2)

# all=pd.concat([s1,s2]).drop_duplicates()
# print(all)

# inter=s1.merge(s2)
# input(inter)
# s1_not_in_s2=s1[s1.name.isin(s2.name)==False]
# print(s1_not_in_s2)

# in_s2_not_in_s1=s2[s2.name.isin(s1.name)==False]
# print(in_s2_not_in_s1)


