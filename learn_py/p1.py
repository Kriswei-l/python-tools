'''
Date: 2021-09-26 15:26:37
LastEditTime: 2021-09-26 16:16:14
FilePath: /python-tools/learn_py/p1.py
Description: 学习
'''

'''
print('''
# kkk
# nnn
# lll
''')
print(r'kkkk\nss')
a = input()
b = input()
c = int(a)*int(b)
print('a * b =', c)
print(ord('A'), ord('B'), chr(67), ord('中'), chr(20002), '\u4e2d\u6587')
print(b'ABC', "ABC".encode("ascii"), '中文'.encode("utf-8"),
      b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8'))
# 忽略了一部分错误字节
print(b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore'))
'''

str = "abcdefg"
print(len(str), len(b'\xe4\xb8\xad\xe6\x96\x87'),
      len("中文"), len("中文".encode("utf-8")))
