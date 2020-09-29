
# Front

# Angular 셋팅

## WSL 준비

    윈도우 환경이라면 리눅스개발환경을 위해 WSL2를 준비합니다.
    
    WSL2 : http://wiki.webnori.com/pages/viewpage.action?pageId=43516098

## Node JS 준비

    Ubuntu 18.04 기준
   
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

    sudo apt-get install -y nodejs

    sudo apt-get install build-essential

## Angular CLI 최초설치

    sudo npm install -g @angular/cli@10.1.1
    # ng new frontend                       // 이 템플릿으로 시작 되었습니다.(또 수행할필요없음)
    
    npm install                             // 의존모듈 Update
    ng serve -o                             // 개발레벨에서,클라이언트를 구동할수 있으며 디버깅으로 활용및, PROXY를 활용하여 운영에 바로 사용해도 무방합니다.
    ng build --prod                         // 프로덕트 빌드된 버전을 사용할수있으며, 미들웨어 Static에 포함되어 작동될수 있습니다.


# 프론트 도커빌드

    docker build -f Dockerfile --force-rm -t webnori-admin-front:dev .

    docker run --publish 4201:4200 --name webnori-admin-front:dev
    
