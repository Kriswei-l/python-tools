import logging
import boto3
from botocore.exceptions import ClientError
import os
import sys
import threading
import re, time,datetime

class ProgressPercentage(object):

    def __init__(self, filename):
        self._filename = filename
        self._size = float(os.path.getsize(filename))
        self._seen_so_far = 0
        self._lock = threading.Lock()

    def __call__(self, bytes_amount):
        # To simplify, assume this is hooked up to a single filename
        with self._lock:
            self._seen_so_far += bytes_amount
            percentage = (self._seen_so_far / self._size) * 100
            sys.stdout.write(
                "\r%s  %s / %s  (%.2f%%)" % (
                    self._filename, self._seen_so_far, self._size,
                    percentage))
            sys.stdout.flush()

AWS_ACCESS_KEY_ID = 'XXXXX'
AWS_SECRET_ACCESS_KEY = 'XXXXX'
AWS_BUCKET_NAME = 'fishingupdate'

def upload_file(file_name, bucket, object_name=None):
    """Upload a file to an S3 bucket

    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then file_name is used
    :return: True if file was uploaded, else False
    """

    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = file_name

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name, bucket, object_name, Callback=ProgressPercentage(file_name))
    except ClientError as e:
        logging.error(e)
        return False
    return True

def compare_unix_time(file):
    """
    清除messages系统日志,节省根目录空间.
    """
    # 获取当前时间
    today = datetime.datetime.now()
    # 计算偏移量,前3天
    offset = datetime.timedelta(days=-3)
    # 获取想要的日期的时间,即前3天时间
    re_date = (today + offset)
    # 前3天时间转换为时间戳
    re_date_unix = time.mktime(re_date.timetuple())

    print("当前日期",today.strftime('%Y-%m-%d'))  # 当前日期
    print("前3天日期",re_date.strftime('%Y-%m-%d'))  # 前3天日期

    file_time = os.path.getmtime(file)  # 文件修改时间
    timeArray = time.localtime(file_time)  # 时间戳->结构化时间
    otherStyleTime = time.strftime("%Y-%m-%d %H:%M:%S", timeArray)  #格式化时间
    print("文件修改时间",otherStyleTime)

    if file_time <= re_date_unix:
        print("已经超过3天,需要删除")
        return True
        
    else:
        print("未超过3天,无需处理!")
        return False

def upload_file_to_bucket(file_name=None,bucket_name=None,key=None):
    if file_name is None:
        raise ValueError("Please enter a valid and complete file path")
    
    s3 = boto3.client('s3')
    with open(file_name, "rb") as f:
        s3.upload_fileobj(f, AWS_BUCKET_NAME, key)

def upload_file_to_s3(complete_file_path):
    for root, dirs, files in os.walk(complete_file_path, topdown=False):
        for name in files:
            # print(os.path.join(root, name))
            full_path_name = os.path.join(root, name)
            print(full_path_name[2:])
            upload_file_to_bucket(file_name=full_path_name,bucket_name=AWS_BUCKET_NAME,key=full_path_name[2:])
            print('上传文件 {} 成功！！！！！'.format(full_path_name))
            # write_to_mysql(full_path_name[1:])
            if os.path.exists(full_path_name):
                os.remove(full_path_name) 
            # logging.info("文件上传成功 %s",full_path_name)
            # logging.info('Started')


upload_file_to_s3('./file')

