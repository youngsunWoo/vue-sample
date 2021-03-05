# demo Project

## Build and Run 

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

----
## Package Instruction
1. public
- favicon.ico : 
- index.html : 

2. src
- api/ : 비동기 API 호출
- assert/ : css, img등 정적자원 관리
- components/ : 컴포넌트 모음
  - common/ : 공통컴포넌트
  - view이름/ : 특정 view에서만 사용하는 컴포넌트들은 view파일명 폴더 하위에 배치한다.
- layout/ : 공통 레이아웃 설정 vue 
- router/ : 라우터 설정
- store/ : 상태관리 vuex
  - modules/ 
    - index.js에서 moduels 하위 파일명으로 namespace를 자동 등록한다. 
    - 신규로 상태를 관리할 항목이 있다면 이 폴더하위로 등록한다.  
  - getters.js
    - store의 state에 접근하기 용이하도록 gettes를 등록
- utils/ : api request, 인코딩 등.. 공동으로 사용할 util들을 관리한다.
- views/ : 라우터로 호출되는 페이지
- App.vue : 최상위 vue 파일
- main.js : vue 인스턴스를 새로 만들고 시작하는 부분으로, 전역으로 처리해야 할 일이 있으면 여기서 처리한다.

3. env.* 
- 환경변수 파일
- 변수명은 VUE_APP으로 시작하며 env.변수명 으로 호출한다

----
## Component Naming Rule
- components파일명은 PascalCase로 작성한다.
```
components/
|- MyComponent.vue
```

- 특정 view에서만 사용하는 컴포넌트들은 view파일명을 Prefix로 붙인다.
```
components/
|- users/
   |- UsersNameInput.vue
   |- UsersSubmitButton.vue
```


- 템플릿내부에 선언하는 component들은 kebab-case로 작성한다.
```
<template>
    <my-component> </my-component>
<template>
```


