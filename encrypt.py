def encrypt(content):
    """
    加密内容
    :param content: 加密密的字符串
    :return: 加密之后的字符串
    """
    cnt = len(KEYS)
    res = ''
    for k in KEYS:
        res += chr(k)

    for i in range(len(content)):
        c = content[i]
        k = KEYS[i % cnt]
        res += chr(ord(c) ^ k)
    return res