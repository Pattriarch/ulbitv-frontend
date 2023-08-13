# Linting, Testing, Building Pipeline

## Описание:
Этот GitHub Actions пайплайн предназначен для автоматизации процессов линтинга, тестирования и сборки проекта. Он выполняется при push на ветку `main` или создании pull request в ветку `main`. Пайплайн включает в себя шаги для установки зависимостей, сборки, тестирования, генерации отчетов и развертывания на GitHub Pages.

---

## Триггеры:
- Push в ветку `main`.
- Создание pull request в ветку `main`.

---

## Разрешения:
- Доступ к содержимому: запись.
- Доступ к страницам: запись.
- ID-токен: запись.

---

## Jobs:

### Job: build-and-ui-testing
- Операционная система: ubuntu-latest
- Среда: github-pages

#### Steps:
1. Загрузка репозитория: `actions/checkout@v2`.
2. Установка Node.js версии, указанной в `matrix.node-version`: `actions/setup-node@v1`.
3. Установка модулей: `npm ci --force`.
4. Сборка проекта в production режиме: `npm run build:prod` (всегда).
5. Сборка Storybook: `npm run storybook:build` (всегда).
6. Тестирование скриншотами: `npm run test:ui:ci` (всегда).
7. Unit-тестирование: `npm run test:unit` (всегда).
8. Генерация HTML отчета: `npm run test:ui:report` (всегда).
9. Перемещение директории `.loki` в директорию `reports` (всегда).
10. Настройка Pages: `actions/configure-pages@v2` (всегда).
11. Загрузка артефакта: `actions/upload-pages-artifact@v1` (всегда).
12. Развертывание на GitHub Pages: `actions/deploy-pages@v1` (всегда).

---

### Job: checks
- Операционная система: ubuntu-latest

#### Steps:
1. Загрузка репозитория: `actions/checkout@v2`.
2. Установка Node.js версии, указанной в `matrix.node-version`: `actions/setup-node@v1`.
3. Установка модулей: `npm ci --force`.
4. Линтинг TypeScript: `npm run lint:ts` (всегда).
5. Линтинг CSS: `npm run lint:scss`.
6. Unit-тестирование: `npm run test:unit` (всегда).
