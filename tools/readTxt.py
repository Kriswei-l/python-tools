import os
import sys  
import os.path  

'''
二、第二部分为: python读写各类txt,csv,html,xls文件的方式
'''

# 保存为txt文件
def output_txt(result):
    print('数据类型为：',type(result)) # <class 'dict'>
    with open('result.txt','a',encoding='utf-8') as f:
        f.write(json.dumps(result,ensure_ascii=False)+'\n')  # 将字典或列表转为josn格式的字符串

    # 读取txt文件
    with open("result.txt", "r", "utf-8") as f:
        # 为a+模式时，因为为追加模式，指针已经移到文尾，读出来的是一个空字符串。
        ftext = f.read()  # 一次性读全部成一个字符串
        ftextlist = f.readlines()  # 一次性读全部，但每一行作为一个子句存入一个列表
        fline = f.readline()       # 或者只读取1行
        print(ftextlist,fline)
        f.close()  # 关闭文件
## 总结：以后读写文件都使用with open语句，不要再像以前那样用f = open()这种语句了!


# 保存为html文件
def output_html(memberList):
    print(type(memberList))  # <class 'list'>
    fout = open('result.html', 'w', encoding='utf-8')
    fout.write('<html>')
    fout.write('<meta charset=utf-8')
    fout.write('<body>')
    fout.write('<table>')

    # Python 默认编码格式是： Ascii
    for data in memberList:              # result=list,data={}
        fout.write('<tr>')
        fout.write('<hr>')
        fout.write('<td>%s</td>' % data['UserName'])
        fout.write('<td>%s</td>' % data['Sex'])
        fout.write('<hr>')
        fout.write('</tr>')
        fout.write('</table>')
        fout.write('</body>')
        fout.write('</html>')
    fout.close()

# 保存为csv文件
def output_csv(datalist):
    print(type(datalist))  # <class 'list'>
    import csv
    # 准备好存储数据的csv文件
    csv_file = open("result.csv", 'w', newline='', encoding='utf-8-sig')  # 解决中文乱码问题
    writer = csv.writer(csv_file)
    writer.writerow(['列标题一', '列标题二', '列标题三'])
    for data in datalist:
        writer.writerow([data['UserName'], data['Sex'],data['Age']])
    csv_file.close()

    #用reder读取csv文件
    with open('result.csv','r') as csvFile:
        reader = csv.reader(csvFile)
        for line in reader:
                  print(line)

# 保存为xls文件
def output_xls(datalist):
    print(type(datalist))  # <class 'list'>
    import xlwt
    # #创建工作簿
    workbook = xlwt.Workbook(encoding='utf-8')
    # 创建sheet
    sheet = workbook.add_sheet(u'sheet1',cell_overwrite_ok=True)
    head = ['名字', '性别', '年龄']  # 定义表头
    # worksheet.write()函数写入第一行列名，参数分别表示行、列、数据、数据格式。
    for h in range(len(head)):
        sheet.write(0, h, head[h])  # 生成第0行标题

    #　填入数据（第1行0列开始填数）
    row = 1
    for product in datalist:        # 列表里面存了字典
        sheet.write(row , 0, product['UserName'])
        sheet.write(row , 1, product['Sex'])
        sheet.write(row , 2, product['Age'])
        row += 1
    workbook.save('result.xls')

    # 读取excel数据
    import xlrd
    data = xlrd.open_workbook('result.xls') # 打开xls文件
    table = data.sheets()[0] # 打开第一张表
    nrows = table.nrows      # 获取表的行数
    for i in range(nrows):   # 循环逐行打印
        if i == 0: # 跳过第一行
            continue
        print(table.row_values(i))


# 示例调用
if __name__ == '__main__':

    #  memberList是一个列表，里面嵌入字典
    output_html(memberList)
    output_csv(memberList)
    output_xls(memberList)

    for result in memberList:
        #print('筛选后的最终数据为：',result)
        output_txt(result)           # 生成器对象一遍历出来就是字典。