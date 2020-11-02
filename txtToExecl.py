import xlwt
import os


def get_path(file_path):
    xls_list = []
    
    # 读取txt文件内容
    
    xls_name = (file_path.split('/')[-1]).split('.')[0]
    xls_path = './result/'+xls_name+'.xls'


    wb = xlwt.Workbook(encoding='utf-8')
    ws = wb.add_sheet('Sheet1')

    row_excel = 0 #行
    with open(file_path, "r", encoding='utf-8') as f:
        while True:
            data = f.readline()
            if not data:
                break
                pass
            data = data.strip('\n')
            data = data.split(':', 1)
            col_excel = 0;
            len_line = len(data)
            for j in range(len_line):
                ws.write(row_excel, col_excel, data[j])
                col_excel += 1

            row_excel+=1
            pass
    wb.save(xls_path)

    # pandas库非常适合阅读CSV文件
    # data = pd.read_csv(file_path)
    # df = pd.DataFrame(data)
    # df.head()
    # 若要保存到excel文件，请添加以下内容：
    # writer = pd.ExcelWriter('output.xlsx')
    # df.to_excel(writer, 'Sheet1')

    # 读取文件列表
    # path_list = []
    # file_list = os.listdir(file_path)
    # # file_list.sort(key=lambda x: int(x[:2]))  # 对读取的文件进行排序
    # for filename in file_list:
    #     complete_path = os.path.join(file_path, filename)
    #     path_list.append(complete_path)
    # for path in path_list:
    #     f = open(path, 'r')
    #     tr = pd.read_table(f)
    #     xls_name = (path.split('\\')[-1]).split('.')[0]
    #     xls_path = './result/'+xls_name+'.xls'
    #     tr.to_excel(xls_path, header=None)
    #     xls_list.append(xls_path)
    return xls_list


if __name__ == '__main__':
    p = './txt/txt_execl.txt'
    print(get_path(p))