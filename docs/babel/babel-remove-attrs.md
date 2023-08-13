# Самописный babel-plugin для удаления JSX-элементов с запрещенными атрибутами.

---

## Описание Babel-плагина

Данный Babel-плагин представляет собой пользовательскую расширенную функцию, предназначенную для обработки кода на языке JavaScript с использованием Babel. Этот плагин выполняет обход абстрактного синтаксического дерева (AST) кода, особенно кода, содержащего JSX элементы, и осуществляет удаление элементов JSX с заданными запрещенными атрибутами.

```typescript
import { type PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];
    
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;
    
                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
```

### Описание кода плагина

- `import { type PluginItem } from '@babel/core';`: Импорт необходимых типов и модулей из Babel.

- `export default function (): PluginItem { ... }`: Экспорт функции, представляющей плагин.

- `visitor`: Объект, определяющий, какие типы узлов AST будут обрабатываться.

    - `Program(path, state) { ... }`: Обработчик для узла `Program`, корневого узла программы.

        - `const forbidden = state.opts.props || [];`: Получение запрещенных атрибутов из опций плагина или использование пустого массива, если опции не переданы.

        - `path.traverse({ ... })`: Обход AST для поиска нужных узлов.

            - `JSXIdentifier(current) { ... }`: Обработчик для узлов `JSXIdentifier`, представляющих идентификаторы JSX.

                - `const nodeName = current.node.name;`: Получение имени текущего идентификатора.

                - `if (forbidden.includes(nodeName)) { ... }`: Проверка, содержится ли имя идентификатора среди запрещенных.

                    - `current.parentPath.remove();`: Удаление родительского узла текущего идентификатора (элемента JSX) из AST.

### Пример вызова плагина

```javascript
babelPlugin(['data-testid', 'test-atr']);
```

В данном примере вызывается функция `babelPlugin`, передавая массив запрещенных атрибутов. Этот плагин может быть полезен для автоматического удаления элементов JSX с определенными атрибутами из исходного кода.

---
