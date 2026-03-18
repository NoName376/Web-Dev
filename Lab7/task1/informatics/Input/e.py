s = 109
v = int(input())
t = int(input())

res = v * t

res = res % s

if res < 0: 
    res += s

print(res)