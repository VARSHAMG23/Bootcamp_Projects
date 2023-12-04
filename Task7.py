def find_length(nl,ml):
    x=0
    if len(nl)==1:
        n=int(len(ml)/2)
    elif len(nl)>int(len(ml)/2):
        n=2
        x=1
    else:
        n=int(len(ml)/len(nl))
    return n,x

ml=[1,3,5,7,9,11,13,15,17,19]
nl=[2,4,6,8,10,12,14,16,18,20,22,24,26]
n,x=find_length(nl,ml)
m=int(n)
for i in range(len(nl)):
    ml.insert(n-x,nl[i])
    if x==0:
        n+=(m+1)
    else:
        n+=m
print(ml)