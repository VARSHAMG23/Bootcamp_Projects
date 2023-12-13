# A directory or folder is a collection of files and sub directories
# If there are large number of files in Python, we can place related files in different 
# directories to make things more manageable.

# Python has the os module, which provides us with many useful methods to 
# work with directories (and files as well)

############ RENAME rename() ################
# -- Used to rename a file . It takes 2 arguments ie existing file name & new file name.

# import os
# os.rename('a.txt','b.txt')

############ REMOVE remove() #################
# Used to delete a file it takes one argument ie name of the file to be deleted.

# import os
# os.remove('demo.txt')

############ CREATE DIRECTORY mkdir() #################
# Used to create a directory.It takes one argument which is name of the directory.

# import os
# os.mkdir('BOOTCAMP')

############# CURRENT DIRECTORY getcwd() #################
# it gives current working directory.

# import os
# path=os.getcwd()
# print(path)

########### DELETE rmdir() ################

# used to delete a directory.It takes one argument which is name of the directory.
# note:In order to delete a directory, it should be empty. 
#In case directory is not empty first delete the files.

# import os
# os.rmdir('BOOTCAMP')

############ TO CHANGE DIRECTORY chdir() ###############
# used to change the current working directory.It takes one argument which is name of directory.

# import os
# os.getcwd()
# os.chdir('..')
# path=os.getcwd()
# print(path)