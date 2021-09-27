import requests


def resget():
    URL = 'http://172.16.16.235:8088/2005'
    res = requests.get(URL, params={"version": "1.7.0.0", "channel": "10020491",
                                    "resversion": "1.7.0.0", "jsversion": "1.7.0.0", "httpType": "http"})
    # res.encoding = 'utf-8'
    if res.status_code == 200:
        d = res.json()
        print(d)
        file = open('http.txt', 'a+')
        file.write(res.text)
        file.close()


def respost():
    URL = 'http://172.16.16.235:8088/1001'
    res = requests.post(URL, params={"version": "1.7.0.0", "channel": "10020491",
                                     "resversion": "1.7.0.0", "jsversion": "1.7.0.0", "httpType": "http"})
    print(res)


def reqHttpApi():
    URL = 'http://172.16.16.153:8088/payOk'
    res = requests.get(URL, params={"userId": "60261035", "JF": "DQ_01"})
    print(res)


def reqAddItemApi():
    URL = 'http://172.16.16.153:19999/addItems/60261035'
    res = requests.get(URL, params={"items": "100004,-1000"})
    res.encoding = 'utf-8'
    print(res)


def reqRedApi():
    URL = "http://172.16.16.153:19999/addItems/60261035?items=100004,-1000"
    res = requests.get(URL)
    print(res)


if __name__ == '__main__':
    reqRedApi()