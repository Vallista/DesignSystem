# Design System for VallistA

VallistA (마광휘)의 개인 개발 컴포넌트를 모아두는 저장소 입니다.

아토믹 디자인으로 공용 컴포넌트를 구현했으며, 레이아웃 컴포넌트를 Storybook으로 관리합니다.

## Set Up

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

## Issue

개발 과정 중 겪은 이슈 내용을 적습니다.

### Create React App 기반 Storybook 추가

초기에 create react app 으로 제작을 하면 Webpack 설정을 하지않아도 구축할 수 있는 장점이 있습니다.
하지만 스토리북은 CRA(이하, Create React App 앞으로 CRA로 서술합니다.) 프로젝트에 적용할 시 몇 가지 수정사항이 존재합니다.

#### Installation

먼저 설치를 진행합니다.

```bash
$ npx -p @storybook/cli sb init
```

npx -p 옵션을 사용해 현재 프로젝트에 dependency를 추가합니다.

```bash
$ yarn add --dev @storybook/preset-create-react-app
```

기본적으로 create-react-app 내장된 공통 집합의 모듈과 여러 설정을 사용하기 위해, preset-create-react-app 모듈을 추가합니다.

#### Environment Set

설치를 진행하고 다운로드 한 모듈과 프로젝트, 타입스크립트를 연동할 수 있도록 스토리북 설정파일을 만듭니다.

`.storybook/config.ts`

```ts
import { configure } from '@storybook/react'

configure(require.context('../src', true, /\.stories\.(js|tsx)$/), module)
```

어떤 폴더를 기준으로 storybook을 불러올 지 설정합니다.
해당 옵션을 설정하므로써, src 폴더 내의 '*.stories.tsx' 파일을 전부 불러와서 storybook에 추가해줄 것 입니다.

`.storybook/presets.ts`

```ts
module.exports = [
  {
    name: '@storybook/preset-create-react-app',
    options: {}
  }
]
```

presets.ts 파일에는 다양한 presets file을 사용할 때마다 import를 해주어 실제 storybook에서 사용할 수 있도록 해줍니다.
현재는 storybook/preset-create-react-app 밖에 없으므로 해당 모듈을 추가해줍니다.

#### Run

```bash
$ yarn start-storybook
```

실행하여 결과를 확인합니다.

### Custom Font 추가하기

`.storybook/preview-head.html`

```html
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'>
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css' rel='stylesheet' type='text/css'>
```

head를 커스텀하기 위해서, preview-head.html을 .storybook 안에 추가하여 스크립트를 설정합니다.