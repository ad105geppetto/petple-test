<div align=center>
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=250&section=header&text=🌱PETPLE🌱&fontSize=45" />
  </br>
  <h3>📚 STACKS</h3>
  <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=for-the-badge&logo=Apollo GraphQL&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=NestJS&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/recoil-007AF4?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyMzY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjMwIDExIDI3LjUgNzgiPjxyZWN0IGZpbGw9IiMwMDdhZjQiIGhlaWdodD0iOTUiIHJ4PSIxMCIgd2lkdGg9IjkwIi8+PGNpcmNsZSBjeD0iNDMuNSIgY3k9IjE4LjUiIGZpbGw9IiNmZmYiIHI9IjcuNSIvPjxjaXJjbGUgY3g9IjQzLjUiIGN5PSI4MS41IiBmaWxsPSIjZmZmIiByPSI3LjUiLz48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyI+PHBhdGggZD0iTTQzLjk5OSAyNUM0Mi41IDM3IDU3LjUgMzQgNTcuNSA0Mi41YzAgNS01Ljg3OCA2LjM2NS0xMy41MDEgN0MzNy45OTkgNTAgMzAgNTAgMzAgNThzMTYgNS41IDEzLjk5OSAxN00zNC4xMzIgMzMuMzUzYzAgMTUuMjg5IDIzLjE1IDE4LjI4OSAyMy4xNSAzMi42MiIvPjwvZz48L3N2Zz4=">
  <img src="https://img.shields.io/badge/Emotion-C43BAD?style=for-the-badge&logo=">
</div>

## 목차

1. [Intro](#intro)
2. [기능](#기능)
3. [Wireframe](#wireframe)
4. [구현](#구현)
5. [Test](#test)
   - Unit Test / Integration Test
6. [AWS Architecture](#aws-architecture)
7. [Commit Convention](#commit-convention)

</br>

## Intro
 - 반응형 웹앱이며, break point는 아래와 같습니다.
    - 폰 ~767px
    - 태블릿 768px~1023px
    - 모니터 1024px~
- UI가 비슷한 페이지는 코드 재사용성을 높이고자 했습니다.
 
- ~~배포 Link: [https:petple.store](https:petple.store)~~
  - **현재 AWS 비용 문제로 인해 배포를 중지하였습니다. 필요하시면 소프트웨어를 다운로드하신 후 확인해주시기 바랍니다.**

  ### 설치
  ```
  yarn install 또는 npm install
  ```
  ### 실행
  ```
  yarn dev 또는 npm run dev
  ```
  ### 테스트
  ```
  yarn test 또는 npm run test
  ```

## 기능
 - 자유게시판 생성/수정/읽기 기능
   - 이미지 등록이 가능합니다. 여러 이미지를 등록한 경우 carousel을 통해 보여줍니다.
 - 댓글 생성/수정/읽기/삭제 기능
 - 회원가입 기능
 - 로그인 기능
 - 비밀번호 수정 기능
 - 검색 기능
   - 검색 버튼없는 검색 기능입니다. debounce를 사용했습니다.
 - Modal 기능
 
## Wireframe
&rightarrow; 개발을 시작하기 이전에 데스크탑에서 필요한 웹 페이지의 레이아웃과 구성 요소가 무엇인지 대략적으로 알아보기위해 작성하게 되었습니다.
&rightarrow; 사용한 툴은 Figma(피그마) 입니다.
 
<img src="https://user-images.githubusercontent.com/92367032/223073101-a8506be6-1414-413e-b461-4185fd0a57a8.png" width=800 height=600/> 
 
## 구현

#### Landing Page
<img src="https://user-images.githubusercontent.com/92367032/222942680-62e614a4-01f8-4b4a-bb23-7826d2b9e2d7.gif" /> 

- 모바일 환경에서 접근할 때는 햄버거 메뉴를 제공합니다. 데스크탑이나 테블릿과는 다르게 화면이 제한적이기에 UI를 단순화한 햄버거 메뉴는 공간을 절약하는 데 도움이 됩니다.

#### 자유게시판 목록
<img src="https://user-images.githubusercontent.com/92367032/222942823-0e2cc6e7-f86d-4c5d-8d1f-89a0aedc7d88.gif"/> 

- 페이지 이동시 현재 페이지 위치를 알 수 있도록 색깔을 입혀 보여줍니다. 현재 페이지를 구분하여 사용자의 이해를 돕는 효과를 얻고자 했습니다.
- 모바일 환경에서 접근할 때는 페이지 이동 버튼의 갯수가 줄어듭니다. 화면이 제한적이기에 공간을 절약하는 데 도움이 됩니다.

#### 자유게시판 검색
<img src="https://user-images.githubusercontent.com/92367032/222942862-03883c93-c2b9-4154-9fb4-2ce803b09c0a.gif"/>

- 검색어 입력후 보여지는 목록에서는 검색어에 색깔을 입혀 보여줍니다. 검색 결과를 시각적으로 구분하여 사용자의 이해를 돕는 효과를 얻고자 했습니다.

#### 자유게시판 등록
<img src="https://user-images.githubusercontent.com/92367032/222942948-07ecece1-0986-410b-bceb-f83b7ad00a91.gif"/>

- 사용자가 필수 입력 정보를 입력하지 않았다면, 다시 입력하라는 모달창을 제공합니다. 사용자가 누락된 필드를 인지하고, 필요한 정보를 입력하도록 안내해주는 역할을 합니다.

#### 자유게시판 수정
<img src="https://user-images.githubusercontent.com/92367032/222942984-9267e5f9-c622-428f-9748-df7a8c3114d5.gif"/>

#### 자유게시판 댓글 등록
<img src="https://user-images.githubusercontent.com/92367032/222943008-89c5a4b0-6ed5-4347-81a1-d68af3e449f7.gif"/>

#### 자유게시판 댓글 수정
<img src="https://user-images.githubusercontent.com/92367032/222943032-f6a67860-ad0b-4fec-9b5a-4a1cd6212895.gif"/>

#### 자유게시판 댓글 삭제
<img src="https://user-images.githubusercontent.com/92367032/222943053-6daccf34-a12d-47ac-ad12-1862398cfd26.gif"/>

#### 회원가입
<img src="https://user-images.githubusercontent.com/92367032/222943086-6f8a87a4-2bbe-4caf-9282-5c1ada773038.gif"/>

- 사용자가 필수 입력 정보를 입력하지 않았다면, 다시 입력하라는 모달창을 제공합니다. 사용자가 누락된 필드를 인지하고, 필요한 정보를 입력하도록 안내해주는 역할을 합니다.
- 입력이 되지 않은 곳에 입력을 하라는 빨간색 글을 보여줍니다. 사용자가 누락된 필드를 인지하고, 필요한 정보를 입력하도록 안내해주는 역할을 합니다.
- 회원가입을 완료하면 로그인이 자동으로 진행됩니다. 사용자가 편리하게 이용할 수 있도록 만들었습니다.

#### 로그인
<img src="https://user-images.githubusercontent.com/92367032/222943112-e3d372c3-3985-439e-905f-89ce6b254773.gif"/>

- 사용자가 필수 입력 정보를 입력하지 않았다면, 다시 입력하라는 모달창을 제공합니다. 사용자가 누락된 필드를 인지하고, 필요한 정보를 입력하도록 안내해주는 역할을 합니다.
- 입력이 되지 않은 곳에 입력을 하라는 빨간색 글을 보여줍니다. 사용자가 누락된 필드를 인지하고, 필요한 정보를 입력하도록 안내해주는 역할을 합니다.

#### 로그아웃
<img src="https://user-images.githubusercontent.com/92367032/222943134-15ed6efc-7efb-4707-9456-35ead5687471.gif"/>

- 로그아웃을 할 때 로그아웃 여부를 묻는 모달창을 제공합니다. 사용자가 의도하지 않은 로그아웃을 방지하여, 불필요한 시간과 노력을 절약하는 데 도움이 됩니다.

#### 비밀번호 수정
<img src="https://user-images.githubusercontent.com/92367032/222943184-2d130586-0434-4499-ba4e-4a71ba63b3a6.gif"/>

## Test
#### 목록 페이지

<img src="https://user-images.githubusercontent.com/92367032/224640599-525adb5b-e982-4ddb-bd4b-1679edc6cc80.png" width=550 height="auto"/>

#### 등록 페이지

<img src="https://user-images.githubusercontent.com/92367032/224640694-573bb330-7b99-42b9-9a02-54c26fafad25.png" width=550 height="auto"/>

#### 수정 페이지

<img src="https://user-images.githubusercontent.com/92367032/224640711-7049812a-4314-42eb-a2a5-ea873c926658.png" width=550 height="auto"/>

#### 상세 페이지

<img src="https://user-images.githubusercontent.com/92367032/224640726-f880cf3a-7846-4c38-a7d0-89a43ce53d44.png" width=550 height="auto"/>

#### 마이페이지

<img src="https://user-images.githubusercontent.com/92367032/224640744-57a605d3-afbc-4526-8f88-c3b53dfbe9f1.png" width=550 height="auto"/>

#### 회원가입

<img src="https://user-images.githubusercontent.com/92367032/224640772-7d458e8f-fd73-485f-a673-8f8eb1294824.png" width=550 height="auto"/>

#### 로그인

<img src="https://user-images.githubusercontent.com/92367032/224640793-53f055f9-9cac-428e-9c30-7ff2da57a2fc.png" width=550 height="auto"/>

## AWS Architecture
&rightarrow; Front-End AWS 구성도 입니다.

<img src="https://user-images.githubusercontent.com/92367032/224634485-8c50a3be-8046-4cce-a80e-f795a84daf20.png" width=550 height="auto"/>

## Commit Convention

- init : 초기화
- feat : 새로운 기능 추가
- update: 기능 수정
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- design: 레이아웃 수정
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
