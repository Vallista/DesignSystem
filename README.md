# Design System for VallistA

VallistA (마광휘)의 개인 개발 컴포넌트를 모아두는 저장소 입니다.

아토믹 디자인으로 공용 컴포넌트를 구현했으며, 레이아웃 컴포넌트를 Storybook으로 관리합니다.

## Installation

```bash
# using yarn
$ yarn

# using npm
$ npm install
```

## Usage

```bash
# using yarn
$ yarn storybook

# using npm
$ npm run storybook
```

## Description

프로젝트는 크게 **src/components**와 **src/products** 폴더로 구분됩니다.

#### src/components

components는 상용에 쓰일 레이아웃 컴포넌트를 제작할 공용 요소를 담는 공간입니다.

아토믹 디자인으로 되어 있으며, 해당 컴포넌트가 대외로 쓰이지 않습니다.

#### src/products

src/components 파일로 구현한 상용에 쓰일 레이아웃 컴포넌트 꾸러미 입니다.

결과물을 리스팅하며, 해당 컴포넌트를 이용해서 VallistA(마광휘)의 프로젝트에 쓰입니다.
