# Pandas is a Python library used for working with data sets.
# It has functions for analyzing, cleaning, exploring, and manipulating data.
# Pandas is a Python library used for working with data sets.
# It has functions for analyzing, cleaning, exploring, and manipulating data.
# Pandas are also able to delete rows that are not relevant, or contains wrong values, like empty or NULL values.
#  This is called cleaning the data.
# C:\Users\Your Name>pip install pandas
# A Pandas DataFrame is a 2 dimensional data structure, like a 2 dimensional array, or a table with rows and columns.


import pandas as pd

########### DATAFRAMES #########

# mydataset = {
#   'cars': ["BMW", "Volvo", "Ford"],
#   'passings': [3, 7, 2]
# }
# myvar = pd.DataFrame(mydataset)
# print(myvar)

#load data into a DataFrame object:
# df = pd.DataFrame(mydataset,index=["one","two","three"])
# print(df)
# print(df.loc[1])

########## SERIES #########

# a = [1, 7, 2]
# myvar1 = pd.Series(a)
# print(myvar1)

# With the index argument, you can name your own labels.
# print(pd.Series(a,index=["one","two","three"]))

########### CSV #########
# df = pd.read_csv('data.csv')
# print(df.to_string()) #prints entire dataframe
# print(pd.options.display.max_rows) 

# print(df.head(999)) 
#The head() method returns the headers and a specified number of rows, starting from the top
# if the number of rows is not specified, the head() method will return the top 5 rows.

# The tail() method returns the headers and a specified number of rows, starting from the bottom.
# print(df.tail())

##########DATA CLEANING #################################
# Data cleaning means fixing bad data in your data set.

# Empty cells
# Data in wrong format
# Wrong data
# Duplicates

# df = pd.read_csv('data.csv')
# new_df = df.dropna() the dropna() method returns a new DataFrame, and will not change the original.
# print(new_df.to_string())

# If you want to change the original DataFrame, use the inplace = True argument:/
# the dropna(inplace = True) will NOT return a new DataFrame, but it will remove all rows containing NULL values from the original DataFrame.

# df = pd.read_csv('data.csv')
# df.dropna(inplace = True)
# print(df.to_string())

####### FILLNA #######

# df = pd.read_csv('data.csv')
# df.fillna(130, inplace = True)
# df["groups"].... for specified column
# print(df)


# x = df["Calories"].mean() #median #mode
# df["Calories"].fillna(x, inplace = True)

#  CLEANING WRONG FORMAT
# df.dropna(subset=['Date'], inplace = True)

# CLEANING WRONG DATA
# df.loc[7, 'Pulse'] = 110
# print(df.head(10))

# for x in df.index:
#   if df.loc[x, "Duration"] <80:
#     df.loc[x, "Duration"] = 60

# print(df.to_string())


########### TO Remove cell ############
# for x in df.index:
#   if df.loc[x, "Duration"] > 120:
#     df.drop(x, inplace = True)
# print(df.to_string())

############# DUPLICATES ###############
# print(df.duplicated()) #returns true or false
# print(df.drop_duplicates(inplace = True)) #to remove duplicates
# print(df.corr())

########## PLOT ########
# import matplotlib.pyplot as plt
# df = pd.read_csv('data.csv')
# df.plot(kind = 'hist', x = 'Duration', y = 'Maxpulse')
# df["Duration"].plot(kind = 'hist')
# df.plot()
# plt.show()