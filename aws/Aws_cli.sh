#!/bin/bash

function read_dir() {
	for folder in `ls $1`
	do
		if [ -d $1"/"$folder ]
		then
			read_dir $1"/"$folder
		else
			echo $1"/"$folder
			aws s3 cp $1"/"$folder s3://fishingupdate/$1"/"$folder
		fi
	done
}

read_dir $1

# 上传文件夹
# for folder in $dir/*; do 
	# echo $folder
	# aws s3 cp $folder s3://fishingupdate/client/$folder/ --recursive
# done
