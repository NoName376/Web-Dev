def _xor(a, d):
    return (a or d)

a,d = list(map(int, input().split()))

print(_xor(a, d))