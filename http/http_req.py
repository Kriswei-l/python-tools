import requests


def resget():
    URL = 'http://172.16.16.235:8088/2005'
    res = requests.get(URL, params={"version": "1.7.0.0", "channel": "10020491",
                                    "resversion": "1.7.0.0", "jsversion": "1.7.0.0", "httpType": "http"})
    # res.encoding = 'utf-8'
    if(res.status_code == 200):
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


if __name__ == '__main__':
    respost()
