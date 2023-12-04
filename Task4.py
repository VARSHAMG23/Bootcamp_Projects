#4.Search Values using key and key uisng values

dict={"Hi":1,"hello":2,"Animal":3,"fruit":4}

for keys,values in dict.items():
    if keys=="Hi":
        print(values)
        break
    else:
      print("key not found")

for key,value in dict:
   if values==1:
      print(keys)
      break
   else:
      print("value not found")