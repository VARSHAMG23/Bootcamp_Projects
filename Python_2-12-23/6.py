#6. Reverse Words
def rev_words(str):
    
    _words = str.split()# Split the input string into words

    words_rev = _words[::-1] # Reverse the order of words

    str1 = ' '.join(words_rev) # Join the reversed words back into a string

    return str1


str = "Done with task"
ans = rev_words(str)

print("String Before Reversing:", str)
print("String after reversing:",ans)
