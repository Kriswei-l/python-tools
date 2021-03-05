"""
没有完成
"""
class UuidUtils:
    Base64KeyChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    AsciiTo64 = [];


    Reg_Dash = "/-/g"
    Reg_Uuid = "/^[0-9a-fA-F-]{36}$/"
    Reg_NormalizedUuid = "/^[0-9a-fA-F]{32}$/"
    Reg_CompressedUuid = "/^[0-9a-zA-Z+/]{22,23}$/"

    def __init__(self):
        print("UuidUtils init")
        for var i = 0; i < 128; ++i) { AsciiTo64[i] = 0; }
        for i = 0; i < 64; ++i) { AsciiTo64[Base64KeyChars.charCodeAt(i)] = i; }
        Reg_CompressedUuid.test

    # 加了这个标记后，字符串就不可能会是 uuid 了。
    NonUuidMark: '.',

    # 压缩后的 uuid 可以减小保存时的尺寸，但不能做为文件名（因为无法区分大小写并且包含非法字符）。
    # 默认将 uuid 的后面 27 位压缩成 18 位，前 5 位保留下来，方便调试。
    # fc991dd7-0033-4b80-9d41-c8a86a702e59 -> fc9913XADNLgJ1ByKhqcC5Z
    # 如果启用 min 则将 uuid 的后面 30 位压缩成 20 位，前 2 位保留不变。
    # fc991dd7-0033-4b80-9d41-c8a86a702e59 -> fcmR3XADNLgJ1ByKhqcC5Z
    /*
     * def = param {Boolean} [min=False](def)
     */
    compressUuid: def (uuid, min):
        if Reg_Uuid.test(uuid):
            uuid = uuid.replace(Reg_Dash, '')

        else if not Reg_NormalizedUuid.test(uuid):
            return uuid

        var reserved = (min is True) ? 2 : 5
        return UuidUtils.compressHex(uuid, reserved)
    

    compressHex: def (hexString, reservedHeadLength):
        var length = hexString.length
        var i
        if typeof reservedHeadLength is not 'undefined':
            i = reservedHeadLength

        else {
            i = length % 3
        }
        var head = hexString.slice(0, i)
        var base64Chars = []
        while i < length:
            var hexVal1 = parseInt(hexString[i], 16)
            var hexVal2 = parseInt(hexString[i + 1], 16)
            var hexVal3 = parseInt(hexString[i + 2], 16)
            base64Chars.append(Base64KeyChars[(hexVal1 << 2) | (hexVal2 >> 2)])
            base64Chars.append(Base64KeyChars[((hexVal2 & 3) << 4) | hexVal3])
            i += 3

        return head + base64Chars.join('')
    

    decompressUuid: def (str):
        if str.length is 23:
            # decode base64
            var hexChars = []
            for var i = 5; i < 23; i += 2:
                var lhs = AsciiTo64[str.charCodeAt(i)]
                var rhs = AsciiTo64[str.charCodeAt(i + 1)]
                hexChars.append((lhs >> 2).toString(16))
                hexChars.append((((lhs & 3) << 2) | rhs >> 4).toString(16))
                hexChars.append((rhs & 0xF).toString(16))

            //
            str = str.slice(0, 5) + hexChars.join('')

        else if str.length is 22:
            # decode base64
            var hexChars = []
            for var i = 2; i < 22; i += 2:
                var lhs = AsciiTo64[str.charCodeAt(i)]
                var rhs = AsciiTo64[str.charCodeAt(i + 1)]
                hexChars.append((lhs >> 2).toString(16))
                hexChars.append((((lhs & 3) << 2) | rhs >> 4).toString(16))
                hexChars.append((rhs & 0xF).toString(16))

            //
            str = str.slice(0, 2) + hexChars.join('')

        return [str.slice(0, 8), str.slice(8, 12), str.slice(12, 16), str.slice(16, 20), str.slice(20)].join('-')
    

    isUuid: def (str):
        return Reg_CompressedUuid.test(str)or Reg_NormalizedUuid.test(str)or Reg_Uuid.test(str)


# # 传参数
# var arguments = process.argv.splice(2)
# # console.log("所有参数：", arguments, "first："+arguments[0]);
#     }
# # 导出使用
# # exports.decompressUuid = UuidUtils.decompressUuid

# # 测试
# var fun = UuidUtils.compressUuid
# # 0ffbc6e5-f3dc-448f-9c98-607e124207fe
# # if(arguments[0])
# var uuid = fun('0ffbc6e5-f3dc-448f-9c98-607e124207fe')
# print(uuid)
# //Var fun1 = UuidUtils.compressHex
# //let uuid = fun('48rWCEFEdLNZl2RKrKsGJB')
# # console.log(uuid);
