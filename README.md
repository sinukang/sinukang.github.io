<p align="center">
  <h1 align="center">Sinwoo Kang's Portfolio ✨</h1>

</p>

# ⭐️ Intro ⭐️
> 안녕하세요! 새로운 것을 배우며 도전하는 개발자 강신우입니다.<br>
> Java와 SpringFramework를 배우며 웹 개발자로서 기반을 다지고, 4번의 팀 프로젝트를 진행하며 역량을 길렀습니다.<br>
> 저에 대한 더 자세한 내용은 <a href='https://sinukang.github.io'><img src= "https://img.shields.io/badge/Portfolio-8A2BE2" style="height:17px"></a> 이곳을 통해 확인 하실 수 있습니다.

# 📑 Project 📑

약 5개월간 진행한 프로젝트들 입니다.<br>
팀원으로 참여했을 때는 프로젝트의 **설계 및 구현**을 통해 프로젝트에 기여하였으며, <br>
팀장으로 참여했을 때는 설계 및 구현 이외에도 **팀원들의 학습 관리** 및 **프로젝트 일정관리** 등으로 기여하였습니다.

## 1. PT-Connect 

> - PT 플랫폼 프로젝트
> - 개발기간 : 2023.12.19 ~ 2024.01.17
> - 핵심 역할 : 팀장, 일정관리, 시스템 설계, 회원 및 트레이너 정보관리 기능 구현, Spring Interceptor 활용 사이트 보안 개발
>> - Back-end
>> - Language : Java
>> - Skill : SpringFramework, Mysql, 
>> 
>> - Front-end
>> - Skill : javascript
>>

# 💫 프로젝트 모달 기능 사용법 💫

포트폴리오 웹사이트에 프로젝트 모달 기능이 추가되었습니다. 아래는 해당 기능의 사용 방법입니다.

## 모달 기능 구현 방법

1. **프로젝트별 모달 HTML 파일 생성**
   - 각 프로젝트의 상세 정보를 담은 HTML 파일을 `projects/` 폴더에 생성합니다.
   - 파일명은 `[프로젝트ID].html` 형식으로 지정합니다. (예: `ptconnect.html`, `bbeam.html`)

2. **프로젝트 미리보기 이미지 준비**
   - 각 프로젝트의 미리보기 이미지를 `images/projects/` 폴더에 저장합니다.
   - 파일명은 `[프로젝트ID]-preview.jpg` 형식으로 지정합니다.
   - 본문에 사용할 이미지들도 같은 폴더에 저장합니다. (예: `[프로젝트ID]-main.jpg`, `[프로젝트ID]-screen1.jpg` 등)

3. **index.html 프로젝트 링크 설정**
   - 프로젝트 제목 부분을 `<a>` 태그로 감싸고 클래스와 속성을 추가합니다:
   ```html
   <h2><a href="#" class="project-link" data-project="프로젝트ID" data-summary="간단한 설명">프로젝트 제목</a></h2>
   ```
   - `data-project`: 프로젝트 ID (HTML 파일명과 동일)
   - `data-summary`: 마우스 오버 시 표시될 간단한 설명

4. **JavaScript 파일 연결**
   - `index.html` 파일 하단에 `project-modal.js` 파일이 연결되어 있는지 확인합니다.

## 모달 내용 작성 예시

PT-Connect 프로젝트를 예시로 모달 HTML 파일을 작성했습니다. 다른 프로젝트도 이 구조를 참고하여 작성할 수 있습니다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>프로젝트 상세 정보</title>
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/style.css">
  <style>
    /* 프로젝트 모달 스타일 */
  </style>
</head>
<body>
  <div class="project-detail">
    <div class="project-header">
      <h2>프로젝트 제목</h2>
      <p class="text-muted">프로젝트 기간</p>
    </div>
    
    <div class="project-image">
      <img src="../images/projects/프로젝트ID-main.jpg" alt="메인 이미지">
    </div>
    
    <div class="project-info">
      <h4>프로젝트 개요</h4>
      <p>프로젝트 설명...</p>
    </div>
    
    <!-- 기술 스택, 주요 기능, 담당 역할 등 내용 추가 -->
  </div>
</body>
</html>
```

## Deploy History 🌳

2021-12-28

- 지킬 셋팅 제거
- 커스텀 도메인 연결 제거
- 데모 사이트 및 이미지 경로 변경

2021-04-22

- 전체 레이아웃 수정
- header 사진 변경

2024-03-14

- 포트폴리오 생성

2024-07-08

- 프로젝트 모달 기능 추가
  - 프로젝트 제목 클릭 시 모달로 상세 정보 표시
  - 제목에 마우스 오버 시 미리보기 이미지와 간단한 설명 표시

<p align="center">
해당 포트폴리오는 <a href="https://congchu.github.io/web-porfolio/">베이스-포트폴리오</a>를 활용해 작성했습니다.
<br/>