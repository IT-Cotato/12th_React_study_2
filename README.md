# 12th_React_study_2
12기 리액트에 관한 모든 것 - 2 스터디 레포지토리입니다.

Inflearn에서 **'따라하며 배우는 리액트 A-Z'** 강의를 매주 듣고 노션 페이지에 관련 내용을 정리하여 업로드 합니다.

레포지토리에는 강의를 들으며 직접 실습한 결과물이 포함됩니다.

스터디 기간 종료 전에 강의 수강을 완료한 경우 실습 위주의 방식으로 전환할 계획입니다.

강의 링크 : https://inf.run/Lk7UB

## 🗓️ 스터디 일정
- 정기 모임 : 매주 일요일 오후 9시
- 진행 방식 : 비대면 디스코드
- 과제 제출 : 매주 일요일 오후 9시 이전


## ✏️ 주차별 커리큘럼
|주차|학습 내용|실행 날짜|
|:---:|:-------|:---:|
|1주차|섹션2. 리액트란<br>섹션3. 간단한 To-do 앱 만들며 리액트 익히기|9/21|
|2주차|섹션4. To-do 앱 최적화 하기|9/28|
|3주차|섹션5. Netflix 앱 만들기 시작|10/4|
|4주차|섹션6. Netflix 앱 완성하기|10/9|
|5주차|섹션7, 8. React TDD|10/12|
|6주차|섹션9(1/2). Next.js와 TypeScript|11/9|
|7주차|섹션9(2/2). Next.js와 TypeScript|11/16|
|8주차|섹션10,11. 리액트 version 18, 리덕스|11/23|
|9주차|섹션 12,13. 도커를 이용한 리액트 실행, React 19|12/21|

**시험기간으로 인해 10/19 10/26 11/2 11/30 12/07 12/14는 휴회**


## 🗒️ 스터디 진행 방식
- 해당 주차의 강의를 듣고 노션에 내용 정리
- 정기 모임 시 발표자 2인 선정 후 노션 정리한 내용 발표
- 강의를 듣고 실습하는 동안 생긴 문제점이나 어려운 부분 질의응답

## 🧑‍💻 GitHub 운영 방식

1. 초기 설정
   - 스터디 저장소를 로컬로 clone
     ```bash
     git clone [https://github.com/IT-Cotato/12th_React_study_2.git](https://github.com/IT-Cotato/12th_React_study_2.git)
     ```
   - 정리 내용 제출 전 본인 깃허브 핸들명으로 브랜치를 생성
     ```bash
     git checkout -b [본인 깃허브 핸들명]/week[n]
     ```
   - 본인의 기본 디렉토리 구조를 생성
     ```bash
     mkdir -p [본인 깃허브 핸들명]/week1
     ```

2. 학습 내용 업로드
   - 학습 내용을 `[본인 깃허브 핸들명]/week[n]` 안에 md 형식으로 작성 후 커밋

3. 커밋 및 PR 생성
   - 커밋
     ```bash
     git add .
     git commit -m "[Docs] 신지예 n주차 제출"
     git push origin [본인 깃허브 핸들명]/week[n]
     ```
   - GitHub에서 `develop` 브랜치로 PR을 생성
   - PR 제목은 `[n주차] 이름` 형식으로 작성

4. 다음 과제 세팅
   - PR이 merge된 후, 최신 `develop` 브랜치를 pull
     ```bash
     git checkout develop
     git pull origin develop
     git checkout -b [본인 깃허브 핸들명]/week[n+1]
     ```
   - 해당 주차의 폴더를 생성
     ```bash
     mkdir -p [본인 깃허브 핸들명]/week[n+1]
     ```
