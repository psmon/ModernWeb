
# Front

# Angular 셋팅


## Node JS/NPM 준비 (Windows or Lilux)

    NPM은 플랫폼 상관없음으로, 각각 자신의 OS에서 사용할수 있는 방법사용합니다.

    Native : https://nodejs.org/ko/

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
    
## Simple 듀토리얼

CoreAPI WeatherForecastController 에 대응하는 샘플입니다.

components/service/models 등을 네임스페이스로 구분합니다.

특히 components는 여러가지 템플릿이 조합됨으로 컴포넌트별 디렉토리구분합니다.
    
    # UI Component 생성
    ng generate component ./components/weatherforecast

    # UI가 사용할 서비스 추가
    ng generate service ./services/weatherforecast

    # 모델
    ng g class ./models/Weather --type=model

과제 : http://localhost:5000/api/weatherforecast/  API에 대응하는 UI 컴포넌트를 작성해보세요~
    

## API 서버 실행

    로컬개발시, 프론트개발자는 API(백엔드)를 띄워 프론트 연동개발이 가능합니다.
    HotReload(코드수정시 브라우저반영)를 지원합니다.

    set ASPNETCORE_ENVIRONMENT=Development    
    dotnet run --project ./Admin/Admin.csproj --no-launch-profile

    api : http://localhost:5000/api/weatherforecast/

    link : https://docs.microsoft.com/ko-kr/dotnet/core/tools/dotnet-run
    

