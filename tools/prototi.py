# coding=UTF-8

import os
import os.path
import re
import shutil

def selinux_config():
    """
    函数功能：主要是替换掉文件里的不正确的转换（目前是替换Array）
    关闭SELINUX
    修改文件内容
    :return:
    """
    file_selinux = './test/buildProto.d.ts'
    backup_file_selinux = file_selinux + '.bak'
    temp_file_selinux = file_selinux + '.temp'

    if not os.path.exists(backup_file_selinux):
        shutil.copy2(file_selinux, backup_file_selinux)
        with open(file_selinux, mode='r',encoding='utf-8') as fr, open(temp_file_selinux, mode='w',encoding='utf-8') as fw:
            for line in fr:
                re_sub_list = re.sub('\[.+(Array).+\].','Array',line)  # 这里用re.sub进行替换后放入 re_sub_list中
                fw.writelines(re_sub_list)  # 将列表中的每一行进行写入。writelines是将序列对象中的每一行进行写入。
        os.remove(file_selinux)
        os.rename(temp_file_selinux, file_selinux)
        os.remove(backup_file_selinux)

if __name__ == '__main__':
    selinux_config()