<p align="center">
  <h1 align="center">Sinwoo Kang's Portfolio ✨</h1>

</p>

# ⭐️ Intro ⭐️
> 안녕하세요! 새로운 것을 배우며 도전하는 개발자 강신우입니다.<br>
> Java와 SpringFramework를 배우며 웹 개발자로서 기반을 다지고, 4번의 팀 프로젝트를 진행하며 역량을 길렀습니다.<br>
> 저에 대한 더 자세한 내용은 <a href='https://sinukang.github.io'><img src= "https://img.shields.io/badge/Portfolio-8A2BE2" style="height:17px"></a> 이곳을 통해 확인 하실 수 있습니다.

# 🛠️ Skills 섹션 관리 가이드 🛠️

포트폴리오의 Skills 섹션은 JavaScript 배열로 관리되어 쉽게 스킬을 추가, 수정, 삭제할 수 있습니다.

## Skills 추가/수정 방법

1. **index.html 파일에서 스킬 데이터 배열 찾기**
   - 파일 하단의 `<script>` 태그 내에서 `skillsData` 배열을 찾습니다.

2. **새로운 스킬 추가**
   ```javascript
   const skillsData = [
     // 기존 스킬들...
     { name: "새로운스킬", proficiency: 숙련도%, category: "카테고리", icon: "FontAwesome아이콘클래스" }
   ];
   ```

3. **스킬 객체 속성 설명**
   - `name`: 스킬 이름 (문자열)
   - `proficiency`: 숙련도 퍼센티지 (숫자, 0-100)
   - `category`: 카테고리 ("language", "frontend", "backend" 중 하나)
   - `icon`: FontAwesome 아이콘 클래스 (예: "fab fa-react", "fas fa-database")

## 숙련도별 자동 분류

스킬들은 숙련도에 따라 자동으로 3개 섹션에 분류됩니다:

- **업무에 활용할 수 있음**: 70% 이상
- **기본 기능을 사용할 수 있음**: 50% ~ 69%
- **보고 이해할 수 있음**: 49% 이하

## 카테고리별 색상

각 카테고리는 고유한 색상을 가집니다:

- **language** (언어): 파란색 계열 (`#667eea` → `#764ba2`)
- **frontend** (프론트엔드): 분홍색 계열 (`#f093fb` → `#f5576c`)
- **backend** (백엔드): 하늘색 계열 (`#4facfe` → `#00f2fe`)

## 아이콘 사용 가이드

FontAwesome 6.0 아이콘을 사용합니다. 주요 아이콘 예시:

### 언어 (Language)
- Java: `"fab fa-java"`
- Python: `"fab fa-python"`
- JavaScript: `"fab fa-js-square"`
- C++: `"fas fa-code"`

### 프론트엔드 (Frontend)
- HTML: `"fab fa-html5"`
- CSS: `"fab fa-css3-alt"`
- React: `"fab fa-react"`
- Vue.js: `"fab fa-vuejs"`
- Angular: `"fab fa-angular"`

### 백엔드 (Backend)
- Spring: `"fas fa-leaf"`
- Django: `"fas fa-server"`
- Node.js: `"fab fa-node-js"`
- AWS: `"fab fa-aws"`
- MySQL: `"fas fa-database"`
- Docker: `"fab fa-docker"`

## 스킬 추가 예시

```javascript
// 새로운 프론트엔드 스킬 추가
{ name: "Angular", proficiency: 55, category: "frontend", icon: "fab fa-angular" },

// 새로운 백엔드 스킬 추가
{ name: "Node.js", proficiency: 65, category: "backend", icon: "fab fa-node-js" },

// 새로운 언어 추가
{ name: "TypeScript", proficiency: 75, category: "language", icon: "fab fa-js-square" }
```

## 필터링 기능

- **전체**: 모든 스킬 표시
- **언어**: language 카테고리만 표시
- **프론트엔드**: frontend 카테고리만 표시
- **백엔드**: backend 카테고리만 표시

데스크톱에서는 필터링 시에도 3개 섹션 영역이 유지되고, 모바일에서는 빈 섹션이 숨겨집니다.



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