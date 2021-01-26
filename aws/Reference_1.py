#!/usr/bin/python3

# 参考代码

import logging
import boto3
from boto3.s3.transfer import S3Transfer
from botocore.exceptions import ClientError

import re, time,datetime


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



def create_bucket(bucket_name,region=None):
  # Create bucket
    try:
        if region is None:
            s3_client = boto3.client('s3')
            s3_client.create_bucket(Bucket=bucket_name)
        else:
            s3_client = boto3.client('s3', region_name=region)
            location = {'LocationConstraint': region}
            s3_client.create_bucket(Bucket=bucket_name,
                                    CreateBucketConfiguration=location)
    except ClientError as e:
        logging.error(e)
        return False
    return True

# create_bucket('xx-backup-logs',"ap-southeast-1")

def upload_file_to_bucket(region=None,file_name=None,bucket_name=None,key=None):
    client = boto3.client('s3', region)
    transfer = S3Transfer(client)
    # Upload /tmp/myfile to s3://bucket/key
    transfer.upload_file(file_name, bucket_name, key )

    # Download s3://bucket/key to /tmp/myfile
    # transfer.download_file('bucket', 'key', '/tmp/myfile')



# upload_file_to_bucket(region="ap-southeast-1",file_name=full_path_name,bucket_name="xx-backup-logs",key=full_path_name[1:])

# 获取一个Bucket的权限列表

# Retrieve a bucket's ACL
def get_acl():
    s3 = boto3.client('s3')
    result = s3.get_bucket_acl(Bucket='xx-backup-logs')
    print(result)

# get_acl()




# import pymysql

# def write_to_mysql(val = "hahaha"):
#     # 创建连接
#     conn = pymysql.connect(host='127.0.0.1',user='root',password='123456',charset='utf8mb4')
#     # 创建游标
#     cursor = conn.cursor()
    
#     # 创建数据库的sql(如果数据库存在就不创建，防止异常)
#     sql = "CREATE DATABASE IF NOT EXISTS aws_logs" 
#     # 执行创建数据库的sql
#     cursor.execute(sql)


#     # 创建连接
#     conn = pymysql.connect(host='127.0.0.1',user='root',password='123456',charset='utf8mb4',db="aws_logs")
#     # 创建游标
#     cursor = conn.cursor()

#     # 创建表
#     sql_2 = '''CREATE TABLE IF NOT EXISTS `employee` (
#     `id` INT NOT NULL AUTO_INCREMENT,
#     `key_name`  VARCHAR(255) ,
#     PRIMARY KEY (`id`)
#     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
# '''
#     cursor.execute(sql_2)

#     sql3 = "INSERT INTO employee (key_name) VALUES (%s)"
#     val = val
#     cursor.execute(sql3, val)
#     conn.commit()

#     # 关闭游标
#     cursor.close()
#     # 关闭连接
#     conn.close()

# write_to_mysql()    





import os

# os._exit(0)



for root, dirs, files in os.walk("/backup_log/", topdown=False):
    for name in files:
        # 判断是否包含log
        if "log" in name:
            # print(os.path.join(root, name))
            full_path_name = os.path.join(root, name)
            #判断日期
            if compare_unix_time(full_path_name):
                print("11111111111")
                # print(full_path_name[1:])
                upload_file_to_bucket(region="ap-southeast-1",file_name=full_path_name,bucket_name="xx-backup-logs",key=full_path_name[1:])
                print('上传文件 {} 成功！！！！！'.format(full_path_name))
                # write_to_mysql(full_path_name[1:])
                if os.path.exists(full_path_name):
                    os.remove(full_path_name) 
                # logging.info("文件上传成功 %s",full_path_name)
                # logging.info('Started')

            else:
                print("2222222222222")

    # for name in dirs:
    #     print(os.path.join(root, name))
