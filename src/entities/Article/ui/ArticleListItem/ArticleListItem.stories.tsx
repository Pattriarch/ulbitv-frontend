import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { type Article, ArticleView } from 'entities/Article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

const article = {
    id: '1',
    title: 'JavaScript News dddddddddddddddddddddddddddddddddddddddddddd',
    subtitle: 'Что добавили нового в ECMAScript 2023',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Pattriarch',
        avatar: 'https://media.wired.com/photos/644318b17b25a434b1f3bbd7/1:1/w_1350,h_1350,c_limit/security_hacker_names.jpg'
    },
    type: [
        'IT',
        'Computer Science',
        'Computer Science',
        'Computer Science',
        'Computer Science'
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'ECMAScript2023 (ES14)',
            paragraphs: [
                'Традиционно обновления ECMAScript публикуются в июне. Но уже сейчас можно посмотреть 14-ю редакцию ECMAScript от 2023, которая сейчас находится в статусе freezed, т.е. никакие изменения в нее вноситься уже не будут.',
                'В данной версии спецификации не такой большой список изменений, что абсолютно нормально когда мы переходим на годовой цикл релиза.',
                'Итак, спецификация 2023 года представила нам методы toSorted, toReversed, with, findLast и findLastIndex для Array.prototypeи TypedArray.prototype,\nа также метод toSpliced для Array.prototype.',
                'Кроме того добавлена поддержка #! комментарии в начале файлов для облегчения запуска исполняемых файлов ECMAScript.',
                'и разрешено использовать Symbols в качестве ключей в WeakMap.\n',
                'Подробнее обо всем можно почитать в официальном репозитории организации Ecma International TC39.\n'
            ]
        },
        {
            id: '2',
            type: 'TEXT',
            title: '.findlast() и .findLastIndex() для Array и TypedArray',
            paragraphs: [
                'Предназначены для поиска элементов в массиве.\n',
                'Работают так же, как .find() и .findIndex(), но итерируются в обратном порядке.'
            ]
        },
        {
            id: '3',
            type: 'CODE',
            code: 'const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];\n\narray.find(n => n.value % 2 === 1); // { value: 1 }\narray.findIndex(n => n.value % 2 === 1); // 0\n\n// ======== Before the proposal =========== \n// find\n[...array].reverse().find(n => n.value % 2 === 1); // { value: 3 }\n\n// findIndex\narray.length - 1 - [...array].reverse().findIndex(n => n.value % 2 === 1); // 2\narray.length - 1 - [...array].reverse().findIndex(n => n.value === 42); // should be -1, but 4\n\n// ======== In the proposal =========== \n// find\narray.findLast(n => n.value % 2 === 1); // { value: 3 }\n// findIndex\narray.findLastIndex(n => n.value % 2 === 1); // 2\narray.findLastIndex(n => n.value === 42); // -1'
        },
        {
            id: '4',
            type: 'TEXT',
            title: 'ECMAScript 2024',
            paragraphs: [
                'На официальном сайте уже опубликован драфт на 2024 год, но какие изменения в него войдут пока достоверно неизвестно.\n'
            ]
        },
        {
            id: '5',
            type: 'IMAGE',
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b26/f56/47a/b26f5647a7b761dac02a2832828fc1a9.png',
            title: 'ES, ECMAScript 2024'
        },
        {
            id: '6',
            type: 'TEXT',
            title: 'ECMAScript2023 (ES14)',
            paragraphs: [
                'Традиционно обновления ECMAScript публикуются в июне. Но уже сейчас можно посмотреть 14-ю редакцию ECMAScript от 2023, которая сейчас находится в статусе freezed, т.е. никакие изменения в нее вноситься уже не будут.',
                'и разрешено использовать Symbols в качестве ключей в WeakMap.\n',
                'Подробнее обо всем можно почитать в официальном репозитории организации Ecma International TC39.\n'
            ]
        },
        {
            id: '7',
            type: 'IMAGE',
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b26/f56/47a/b26f5647a7b761dac02a2832828fc1a9.png',
            title: 'ES, ECMAScript 2024'
        },
        {
            id: '8',
            type: 'CODE',
            code: 'const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];\n\narray.find(n => n.value % 2 === 1); // { value: 1 }\narray.findIndex(n => n.value % 2 === 1); // 0\n\n// ======== Before the proposal =========== \n// find\n[...array].reverse().find(n => n.value % 2 === 1); // { value: 3 }\n\n// findIndex\narray.length - 1 - [...array].reverse().findIndex(n => n.value % 2 === 1); // 2\narray.length - 1 - [...array].reverse().findIndex(n => n.value === 42); // should be -1, but 4\n\n// ======== In the proposal =========== \n// find\narray.findLast(n => n.value % 2 === 1); // { value: 3 }\n// findIndex\narray.findLastIndex(n => n.value % 2 === 1); // 2\narray.findLastIndex(n => n.value === 42); // -1'
        }
    ]
} as Article;

export const PrimaryBig: Story = {
    args: {
        view: ArticleView.BIG,
        article
    }
};

export const PrimaryBigDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        view: ArticleView.BIG,
        article
    }
};

export const PrimarySmall: Story = {
    args: {
        view: ArticleView.SMALL,
        article
    }
};

export const PrimarySmallDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        view: ArticleView.SMALL,
        article
    }
};
