import os
import boto3
from boto3.s3.transfer import S3Transfer
from botocore.exceptions import ClientError

import re, time,datetime

AWS_ACCESS_KEY_ID = 'xxxx'
AWS_SECRET_ACCESS_KEY = 'xxxx'
AWS_BUCKET_NAME = 'fishingupdate'
#[AWS_ACCESS_KEY_ID 和AWS_SECRET_ACCESS_KEY 获取地址](https://console.aws.amazon.com/iam/home?region=ap-east-1#/security_credentials)

# session = boto3.Session(
#    aws_access_key_id=AWS_ACCESS_KEY_ID,
#    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
#    region_name='ap-east-1' #这个必须加，不然会报错，此处根据自己的 s3 地区位置改变
# )

def upload_file_to_s3(complete_file_path):
    """
    Uploads a file to AWS S3. Usage:
    >>> upload_file_to_s3('/tmp/business_plan.pdf')
    """
    if complete_file_path is None:
        raise ValueError("Please enter a valid and complete file path")

    # session = boto3.Session(
    #     aws_access_key_id=AWS_ACCESS_KEY_ID,
    #     aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    #     region_name='ap-southeast-1'
    # )
    '''s3 = session.resource('s3')
    data = open(os.path.normpath(complete_file_path), 'rb')
    file_basename = os.path.basename(complete_file_path)
    s3.Bucket(AWS_BUCKET_NAME).put_object(Key=file_basename, Body=data)'''
    s3 = boto3.client("s3")
    files= os.listdir(complete_file_path)
    for file_ in files:
        s3.upload_file(Filename=os.path.join(complete_file_path,file_), Key=f"maid_html/{file_}", Bucket=AWS_BUCKET_NAME)

upload_file_to_s3('./aws/file/')

# upload_file_to_s3(r'D:\google\report.csv')