# Liveconnect Frontend Assignment
- 별도의 브랜치를 생성하여 작업(commit & push) 진행해주시면 됩니다.
- master 브랜치에 merge 할 필요는 없습니다.
- 브랜치 예시: dev

## 기능적 요구사항

- Dialog 형태의 공용 UI 컴포넌트를 개발합니다.
- UI 컴포넌트 개발 패턴에는 제약사항이 없습니다.
- vue.js, react.js 등 라이브러리 및 프레임워크 사용 없이, 반드시 순수 Javascript만을 사용해주세요.
- 이외에, 번들러(Webpack, Rollup 등), CSS Pre-Processor, Typescript 및 Babel 등과 같은 기술 스택은 자유롭게 사용하셔도 무방합니다.
- 개발된 Dialog UI 컴포넌트를 활용하여 다른 개발자들과의 협업을 가정합니다.
- 아래의 예시를 참고해주세요.
```
let someOptions = {...}
let dialog = new CommonDialog(someOptions)

dialog.open()
```

<br><br>

## UI 예시 및 요구사항
### 조회 뷰 예시
<img width="600" height="337" src="https://resource.liveconnect.co.kr/recruit/frontend/imgs/1_lc_fe_assgn_readable_dialog.png" class="gfm js-lazy-loaded qa-js-lazy-loaded" loading="lazy">

### 편집 뷰 예시
<img width="600" height="337" src="https://resource.liveconnect.co.kr/recruit/frontend/imgs/2_lc_fe_assgn_editable_dialog.png" alt="2_lc_fe_assgn_editable_dialog" class="gfm js-lazy-loaded qa-js-lazy-loaded" loading="lazy">

<br>

### 요구사항
- Dialog 컴포넌트 예시 이미지 외에 별도의 디자인 가이드는 없으며, 기본적으로 아래의 UI 요구사항을 만족하면 됩니다.
- 표시되는 컨텐츠는 자유롭게 구성할 수 있습니다.
- Label : 하나의 필드(Row)에 대한 타이틀(ID, Email, Mobile, Team 등)
- Text : 하나의 필드(Row) 내 Label에 대한 정보
<br>
<img width="700" height="485" src="https://resource.liveconnect.co.kr/recruit/frontend/imgs/3_lc_fe_assgn_ui_feature.png" alt="3_lc_fe_assgn_ui_feature" class="gfm js-lazy-loaded qa-js-lazy-loaded" loading="lazy">

<br><br>

## API 명세
- Dialog 컴포넌트에서 제공이 필요한 API는 아래와 같습니다.
<br>
<img width="700" height="334" src="https://resource.liveconnect.co.kr/recruit/frontend/imgs/4_lc_fe_assgn_api_feature.png" alt="4_lc_fe_assgn_api_feature" class="gfm js-lazy-loaded qa-js-lazy-loaded" loading="lazy">

<br><br>

## Binding 가능 Events
- 아래 목록의 이벤트를 바인딩하여 정의된 callback을 호출할 수 있어야 합니다.
- 바인딩된 이벤트에 따른 callback 함수 호출 규약은 사전과제 참여자분께서 자유롭게 정할 수 있습니다.
- 아래 예시를 참고해주세요.
```
let someOptions = {...}
let dialog = new CommonDialog(someOptions)

// open 이벤트 바인딩
dialog.on('onOpen', (param) => {
  // Do something...
  // ex) Request some API on opening dialog.
  // console.log(param)
})
// close 이벤트 바인딩
dialog.on('onClose', (param) => {
  // Do something...
  // ex) Request some API after closing dialog.
  // console.log(param)
})
// save 이벤트 바인딩
dialog.on('onSave', (param) => {
  // Do something...
  // ex) Request some API on saving current information from dialog.
  // console.log(param)
})

```
<br>
<img width="700" height="198" src="https://resource.liveconnect.co.kr/recruit/frontend/imgs/5_lc_fe_assgn_event_features.png" alt="5_lc_fe_assgn_event_features" class="gfm js-lazy-loaded qa-js-lazy-loaded" loading="lazy">

<br><br>


## 제출 유의 사항
- 제출해주신 사전과제 결과물 확인을 위한 가이드를 본 README 파일의 **가이드** 섹션에 반드시 작성해주세요.
- 명시된 요구사항 외의 기능적 추가사항을 구현하여도 무방합니다.
  - ex) 텍스트 입력 유효성 검사, 필수입력 항목 등

<br><br>


## 가이드
- 가이드 예시
```
1) npm run build
2) http-server 등 패키지를 사용한 src/index.html 접속
```
