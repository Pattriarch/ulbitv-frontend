<img alt="Icon" src="https://yt3.googleusercontent.com/ytc/AOPolaSOZbx1TYtVgBZ47qLteCe4FCsTZUIunaKLB_lS8A=s900-c-k-c0x00ffffff-no-rj" style='width:300px;height:300px;' align="left" hspace="1" vspace="1">

# Pattriarch - Новостной Портал (Продвинутый React)

Пет-проект представляет собой новостной портал, разработанный на основе архитектуры [Feature Sliced Design](https://feature-sliced.design/). Приложение позволяет пользователям авторизовываться, просматривать статьи других авторов, управлять своими публикациями и при необходимости редактировать их. Благодаря применению архитектуры Feature Sliced Design, проект легко масштабируется и развивается, обеспечивая чистоту и порядок в структуре кода.

- ![](https://img.shields.io/github/checks-status/pattriarch/ulbitv-frontend/main)
- [![GithubPages][GithubPages]][GithubPages-url]

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера

- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)

- `npm run lint:prettier` - Применение Prettier ко всем файлам проекта (ts, tsx, json)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:update` - Обновление скриншотов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов с loki
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:e2e` - Запуск end-to-end тестов с помощью Cypress

- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

- `npm run prepare` - Запускает прекоммит хуки
- `npm run postinstall` - Запускает скрипт очистки кэша из node_modules после установки зависимостей.

- `npm run scripts:generate-dependency-graph` - Скрипт для генерации SVG-файла всех зависимостей проекта
- `npm run scripts:generate-slice` - Скрипт для генерации FSD слайсов (см. подробнее)
- `npm run scripts:update-imports` - Скрипт для обновления импортов в проекте (см. подробнее)
- `npm run scripts:update-src-imports` - Скрипт для обновления импортов в проекте (см. подробнее)
- `npm run scripts:create-public-api` - Скрипт для создания PUBLIC API в shared-слое (см. подробнее)
- `npm run scripts:create-readme` - Скрипт для генерации README (см. подробнее)
- `npm run scripts:remove-feature` - Удаление определенной фичи со всего проекта (см. подробнее)

---

## Основные технологии:

### Архитектура проекта:

- Feature Sliced Design - методология разработки проекта.

[![FSD][FSD]][FSD-url]

### Инструменты сборки и разработки:

- **Webpack** и **Vite** - инструменты для сборки и разработки проекта.

[![Webpack][Webpack]][Webpack-url]
[![Vite][Vite]][Vite-url]

### Библиотеки и фреймворки:

- React - библиотека для разработки пользовательских интерфейсов.
- React Router - библиотека для маршрутизации страниц в React.
- Redux, Redux Toolkit - инструменты для управления состоянием приложения.
- React-virutoso - библиотека виртуализации списков для React.
- @headlessui/react - набор утилит для создания интерактивных элементов пользовательского интерфейса.
- @use-gesture/react - библиотека для управления жестами в React приложениях.

[![React][React]][React-url]
[![ReactRouter][ReactRouter]][ReactRouter-url]
[![Redux][Redux]][Redux-url]
[![ToolKit][ToolKit]][ToolKit-url]

### Языки и препроцессоры:

- TypeScript - язык программирования, расширяющий JavaScript статической типизацией.
- SCSS - препроцессор для CSS.

[![TypeScript][TypeScript]][TypeScript-url]
[![Scss][Scss]][Scss-url]

### Локализация:

- i18next - библиотека для локализации приложения.

[![i18next][i18next]][i18next-url]

### Тестирование и документация:

- Jest и Cypress - инструменты для тестирования кода.
- React Testing Library - библиотека для тестирования React компонентов.
- Storybook - инструмент для документирования UI-компонентов.
- Loki — инструмент для визуального тестирования компонентов в Storybook.

[![RTL][RTL]][RTL-url]
[![Jest][Jest]][Jest-url]

### Code Style и качество кода:

- ESLint, Prettier и Stylelint - инструменты для поддержания качества кода.
- ts-morph - API для анализа и изменения кода на TypeScript.
- dependency-cruiser - инструмент для анализа кольцевых зависимостей в проекте (вне контекста Webpack).
- circular-dependency-plugin - плагин для обнаружения циклических зависимостей в проекте (в контекста Webpack).

[![Prettier][Prettier]][Prettier-url]
[![ESLint][ESLint]][ESLint-url]
[![StyleLint][StyleLint]][StyleLint-url]

### Другие инструменты:

- JSON Server - инструмент для создания моковых RESTful API.
- Concurrently - утилита для одновременного выполнения npm-скриптов.
- Husky и lint-staged - инструменты для автоматического применения линтеров перед коммитом.
- browserslist - инструмент для определения поддерживаемых версий браузеров.

## Удаление всех feature-flag

Чтобы удалить все feature-flag's, связанные с дизайном и оставить в проекте только один из дизайнов (старый/новый)
необходимо выполнить одну из команд:

- `npm run scripts:remove-feature isAppRedesigned on` - оставить только новый дизайн
- `npm run scripts:remove-feature isAppRedesigned off` - оставить только старый дизайн

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-ulbi-tv-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением AppImageTriggerMainLayout.stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { Theme } from "@/shared/const/theme";

export default {
	title: "shared/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
	children: "Text",
	theme: ButtonTheme.CLEAR,
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

Хелпер принимает в себя объект с опциями:

{ name: название feature flag; on: функция, отрабатывающая после включения фичи; off: функция, отрабатывающая после
выключения фичи }

Для автоматического удаления фичи следует использовать remove-feature.ts (из папки scripts), принимающий в себя 2
аргумента:

1. Название удаляемого feature flag
2. Состояние (on/off)

---

## Граф зависимостей

![Граф зависимостей](dependency-graph.svg)

## Деплой

- [Деплой и Конфигурация nginx](/docs/deploy.md)

## CI/CD

- [Пайплайны](/docs/github-actions.md)

## Прекоммит хуки

- [Прекоммит хуки](/docs/precommit.md)

## Самописные babel-плагины

- [Удаление атрибутов](/docs/babel/babel-remove-attrs.md)

## Storybook 

- [Декораторы, плагины и использование](/docs/storybook.md)

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/ArticleRating)
- [articleRecommendationsList](/src/features/ArticleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/AvatarDropdown)
- [editableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/OpenNotificationListButton)
- [profileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[GithubPages]: https://img.shields.io/badge/githubpages-20232A?style=for-the-badge&logo=githubpages&logoColor=61DAFB

[GithubPages-url]: https://pattriarch.github.io/ulbitv-frontend/

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[React-url]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/Vite-35495E.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNDA0IiB2aWV3Qm94PSIwIDAgNDEwIDQwNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0zOTkuNjQxIDU5LjUyNDZMMjE1LjY0MyAzODguNTQ1QzIxMS44NDQgMzk1LjMzOCAyMDIuMDg0IDM5NS4zNzggMTk4LjIyOCAzODguNjE4TDEwLjU4MTcgNTkuNTU2M0M2LjM4MDg3IDUyLjE4OTYgMTIuNjgwMiA0My4yNjY1IDIxLjAyODEgNDQuNzU4NkwyMDUuMjIzIDc3LjY4MjRDMjA2LjM5OCA3Ny44OTI0IDIwNy42MDEgNzcuODkwNCAyMDguNzc2IDc3LjY3NjNMMzg5LjExOSA0NC44MDU4QzM5Ny40MzkgNDMuMjg5NCA0MDMuNzY4IDUyLjE0MzQgMzk5LjY0MSA1OS41MjQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjkyLjk2NSAxLjU3NDRMMTU2LjgwMSAyOC4yNTUyQzE1NC41NjMgMjguNjkzNyAxNTIuOTA2IDMwLjU5MDMgMTUyLjc3MSAzMi44NjY0TDE0NC4zOTUgMTc0LjMzQzE0NC4xOTggMTc3LjY2MiAxNDcuMjU4IDE4MC4yNDggMTUwLjUxIDE3OS40OThMMTg4LjQyIDE3MC43NDlDMTkxLjk2NyAxNjkuOTMxIDE5NS4xNzIgMTczLjA1NSAxOTQuNDQzIDE3Ni42MjJMMTgzLjE4IDIzMS43NzVDMTgyLjQyMiAyMzUuNDg3IDE4NS45MDcgMjM4LjY2MSAxODkuNTMyIDIzNy41NkwyMTIuOTQ3IDIzMC40NDZDMjE2LjU3NyAyMjkuMzQ0IDIyMC4wNjUgMjMyLjUyNyAyMTkuMjk3IDIzNi4yNDJMMjAxLjM5OCAzMjIuODc1QzIwMC4yNzggMzI4LjI5NCAyMDcuNDg2IDMzMS4yNDkgMjEwLjQ5MiAzMjYuNjAzTDIxMi41IDMyMy41TDMyMy40NTQgMTAyLjA3MkMzMjUuMzEyIDk4LjM2NDUgMzIyLjEwOCA5NC4xMzcgMzE4LjAzNiA5NC45MjI4TDI3OS4wMTQgMTAyLjQ1NEMyNzUuMzQ3IDEwMy4xNjEgMjcyLjIyNyA5OS43NDYgMjczLjI2MiA5Ni4xNTgzTDI5OC43MzEgNy44NjY4OUMyOTkuNzY3IDQuMjczMTQgMjk2LjYzNiAwLjg1NTE4MSAyOTIuOTY1IDEuNTc0NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjYuMDAwMTciIHkxPSIzMi45OTk5IiB4Mj0iMjM1IiB5Mj0iMzQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0MUQxRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkQzNEZFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjE5NC42NTEiIHkxPSI4LjgxODE4IiB4Mj0iMjM2LjA3NiIgeTI9IjI5Mi45ODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRUE4MyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDgzMzMzMyIgc3RvcC1jb2xvcj0iI0ZGREQzNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkE4MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K&logoColor=4FC08D

[Vite-url]: https://vitejs.dev/

[Webpack]: https://img.shields.io/badge/Webpack-FFF?style=for-the-badge&logo=webpack&logoColor=blue

[Webpack-url]: https://webpack.js.org/

[Scss]: https://img.shields.io/badge/SCSS-4A4A55?style=for-the-badge&logo=sass&logoColor

[Scss-url]: https://sass-scss.ru/guide/

[Prettier]: https://img.shields.io/badge/Prettier-1b2b33?style=for-the-badge&logo=prettier&logoColor

[Prettier-url]: http://prettier.io

[ESLint]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor

[ESLint-url]: https://eslint.org

[StyleLint]: https://img.shields.io/badge/stylelint-263238?style=for-the-badge&logo=stylelint&logoColor

[StyleLint-url]: https://stylelint.io

[RTL]: https://img.shields.io/badge/react_testing_library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white

[RTL-url]: https://testing-library.com/docs/react-testing-library/intro/

[Redux]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white

[Redux-url]: https://redux.js.org/

[ToolKit]: https://img.shields.io/badge/ToolKit-764ABC?style=for-the-badge&logo=redux&logoColor=white

[ToolKit-url]: https://redux-toolkit.js.org/

[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white

[Jest-url]: https://jestjs.io/ru/

[i18next]: https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white

[i18next-url]: https://www.i18next.com/

[ReactRouter]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white

[ReactRouter-url]: https://reactrouter.com/

[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white

[TypeScript-url]: https://www.typescriptlang.org/

[FSD]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&color=F2F2F2&labelColor=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dKxCQAgDETR0w2cws0cys2cwhEUBbsggikCuVekDHwSQFlYo7Q+8KnmtHdFWMdk2cl5wSsbxGSZw8dm8pX9ZHUTMBUgGU2F718AAAAASUVORK5CYII=

[FSD-url]: https://feature-sliced.design/
