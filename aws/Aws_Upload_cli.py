import os
import sys

def upload_file_to_s3(complete_file_path):
    for root, dirs, files in os.walk(complete_file_path, topdown=False):
        for name in files:
            # print(os.path.join(root, name))
            full_path_name = os.path.join(root, name)
            print(full_path_name[2:])
            # os.system("echo "+full_path_name)
            os.system("aws s3 cp "+full_path_name+" s3://fishingupdate/client/"+full_path_name[2:]+"")
            # print('上传文件 {} 成功！！！！！'.format(full_path_name))
            # if os.path.exists(full_path_name):
            #     os.remove(full_path_name) 


upload_file_to_s3('./file')