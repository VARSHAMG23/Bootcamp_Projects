
import numpy as np #alias 

# arr = np.array([1, 2, 3, 4, 5]) #using list
# arr1 = np.array((1, 2, 3, 4, 5)) #using tuple 
# arr2= np.array(["Monkey", "Donkey",1,3.4])
# print(arr)
# print(arr1)
# print(arr2)
# print(type(arr1))
# print(np.__version__)

###########DIMENSIONS IN ARRAY###########

#An array that has 0-D arrays as its elements is called a 1-D array
#An array that has 1-D arrays as its elements is called a 2-D array
#An array that has 2-D arrays as its elements is called a 3-D array

# a= np.array(42) #0-D
# print(a) 
# b = np.array([1, 2, 3, 4, 5])  #1-D
# print(b)

# c = np.array([[1, 2, 3], [4, 5, 6]]) #2-D
# print(c)

# d = np.array([[["jhon",1,2], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]]) #3-D
# print(d.ndim) #to check dimension

# e = np.array([1, 2, 3, 4], ndmin=5)
# print(e)

############ ARRAY INDEXING ##############
# print(b[0])
# print(b[1]+b[3])

#Access 2-D Arrays
# print(c[0,2])
# print(c[1,-1])

#Access the element on the 2nd row, 5th column:
# arr = np.array([[1,2,3,4,5], [6,7,8,9,10]])
# print('5th element on 2nd row: ', arr[1, 4])

#Access 3-D Arrays
# arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
# print(arr[0, 1, 2])

############## SLICING ARRAYS #################
# We pass slice instead of index like this: [start:end].
# We can also define the step, like this: [start:end:step].
# If we don't pass start its considered 0
# If we don't pass end its considered length of array in that dimension
# If we don't pass step its considered 1

# arr = np.array([1, 2, 3, 4, 5, 6, 7])
# print(arr[1:5])
# print(arr[4:])
# print(arr[:5])
# print(arr[:])
# print(arr[-3:-1])
# print(arr[1:5:2])
# print(arr[::2]) #Return every other element from the entire array:
# print(arr[::3])

# Slicing 2-D arrays
# arr = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
# print(arr[1, 1:4])
# print(arr[0:2, 4]) #from both return index 2
# print(arr[0:2, 1:4])

############## DATA TYPES #################
# i - integer
# b - boolean
# u - unsigned integer
# f - float
# c - complex float
# m - timedelta
# M - datetime
# O - object
# S - string
# U - unicode string
# V - fixed chunk of memory for other type ( void )

#1. to check data type

# arr=np.array([1, 2, 3, 4, 5])
# arr = np.array(['apple', 'banana', 'cherry'])
# print(arr.dtype)

# Create an array with data type string:
# arr = np.array([1, 2, 3, 4], dtype='S')
# print(arr)
# print(arr.dtype)

# arr = np.array(['a', '2', '3'], dtype='i') value error

#astype()
# arr = np.array([1.1, 2.1, 3.1])
# newarr = arr.astype('i')
# arr = np.array(["man","ho"])ValueError: invalid literal for int() with base 10: 'man'
# newarr = arr.astype('i')
# arr = np.array([4, 6, 9])
# # newarr = arr.astype('f')
# newarr = arr.astype('bool')
# print(newarr)

############# COPY VS VIEW #############
#COPY
# arr = np.array([1, 2, 3, 4, 5])
# x = arr.copy()
# arr[0] = 42
# x[0]=6

# VIEW
# x=arr.view()
# arr[0] = 42
# x[0]=6
# print(arr)
# print(x)
# print(x.base)

######### SHAPE #########

# arr = np.array([[1, 2, 3], [5, 6, 7],[6,8,9]])
# print(arr.shape)

########### RESHAPE ############

# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
# newarr = arr.reshape(3, 4)
# print(newarr)

# outer 2 ,then 3 then 2 ele
# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
# # newarr = arr.reshape(2, 3, 2)
# newarr = arr.reshape(2, 2, -1)
# print(newarr)

############ Falttening ############

# a=np.array([[1, 2, 3],[2,3,4]])
# print(a.reshape(-1)) #CONVERTING INTO 1-D

########### ITERATING ############

# arr = np.array([1, 2, 3])
# arr = np.array([[1, 2, 3], [4, 5, 6]])
# arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
# for x in arr:
#   print(x)
# for x in arr:
#   for y in x:
#     for z in y:
#       print(z)
# for x in np.nditer(arr): #nditer(arr)
#   print(x)

# change datatype while iterating
# arr = np.array([1, 2, 3])
# for x in np.nditer(arr, flags=['buffered'], op_dtypes=['S']):
#   print(x)

# Iterate through every scalar element of the 2D array skipping 1 element:
# arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
# for x in np.nditer(arr[:, ::2]):
#   print(x)

# Enumerate on following 1D arrays elements:

# arr = np.array([1, 2, 3])
# for idx, x in np.ndenumerate(arr):
#   print(idx, x)

############## JOIN TWO ARRAYS ############

# arr1 = np.array([1, 2, 3])
# arr2 = np.array([4, 5, 6])
# arr = np.concatenate((arr1, arr2))
# print(arr)

# 2-D arrays

# arr1 = np.array([[1, 2], [3, 4]])
# arr2 = np.array([[5, 6], [7, 8]])
# arr = np.concatenate((arr1, arr2), axis=1)
# arr = np.array_split(arr1,2)
# print(arr[0])
# print(arr[1])
# print(arr)

# arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]])
# print(arr.ndim)

############ SEARCH ##########

# arr = np.array([1, 2, 3, 4, 5, 0])
# x = np.where(arr == 4)
# print(x)

# x = np.where(arr%2 == 0) #or use searchsorted
# print(x)

# x = np.searchsorted(arr, 5, side='right')
# x=np.searchsorted(arr,0)


############## SORT ###########

# arr = np.array(['banana', 'cherry', 'apple'])
# print(np.sort(arr))

############## FILTER ###########

# arr = np.array([41, 42, 43, 44])
# x = [True, False, True, False]
# newarr = arr[x]
# print(newarr)

