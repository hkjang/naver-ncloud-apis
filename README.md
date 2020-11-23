# naver-ncloud-apis


## 설치

### For [Node.js](https://nodejs.org/)

#### npm

설치는 npm 또는 yarn 을 이용해서 아래의 명령어로 설치할 수 있습니다.

```
npm install naver-ncloud-apis --save
```

## 시작하기

### ncloud-sdk 를 사용하기 위해서는 먼저 인증키를 생성해야 합니다.

- 인증키는 [포털](https://www.ncloud.com)의 마이페이지 > 계정관리 > [인증키 관리](https://www.ncloud.com/mypage/manage/authkey) 메뉴에서 "신규 API 인증키 생성"을 통해서 Access Key ID, Secret Key 를 생성합니다.
- 이미 생성된 인증키가 있을 경우 [포털](https://www.ncloud.com)의 마이페이지 > 계정관리 > [인증키 관리](https://www.ncloud.com/mypage/manage/authkey) 메뉴에서 확인할 수 있습니다.
- sub account 의 경우, [Console](https://console.ncloud.com)의 [Sub Account](https://console.ncloud.com/iam/dashboard) > Sub Accounts > 서브 계정 상세 메뉴에서 "API Key"탭에서 생성한 Access Key ID, Secret Key 를 사용할 수도 있습니다.

### 생성된 인증키 정보를 저장합니다.

- Mac/Linux 의 경우 ~/.ncloud/configure 에, Windows 의 경우 C:\Users\USERNAME\\.ncloud\configure 에 인증키 정보를 저장합니다.
- configure 파일은 [NCLOUD CLI](http://docs.ncloud.com/ko/tool/tool-3-1.html) 를 이용하여 생성할 수도 있습니다.
- configure example

```
ncloud_access_key_id = xxxxxxxxxxxxx
ncloud_secret_access_key = xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Usage example
- Node.js
```js

const ncloud = require('naver-ncloud-apis')

ncloud({
            method: 'GET',
            action: 'getZoneList',
            basePath: '/server/v2/',
        }).then(response => response.data)
          .catch(error => error.response.data);
```
