import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { type Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

const article: Article = {
    id: '1',
    title: 'JavaScript News',
    subtitle: 'Что добавили нового в ECMAScript 2023',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT, ArticleType.COMPUTER_SCIENCE],
    user: {
        id: '1',
        username: 'Pattriarch'
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
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
            type: ArticleBlockType.TEXT,
            title: '.findlast() и .findLastIndex() для Array и TypedArray',
            paragraphs: [
                'Предназначены для поиска элементов в массиве.\n',
                'Работают так же, как .find() и .findIndex(), но итерируются в обратном порядке.'
            ]
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: 'const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];\n\narray.find(n => n.value % 2 === 1); // { value: 1 }\narray.findIndex(n => n.value % 2 === 1); // 0\n\n// ======== Before the proposal =========== \n// find\n[...array].reverse().find(n => n.value % 2 === 1); // { value: 3 }\n\n// findIndex\narray.length - 1 - [...array].reverse().findIndex(n => n.value % 2 === 1); // 2\narray.length - 1 - [...array].reverse().findIndex(n => n.value === 42); // should be -1, but 4\n\n// ======== In the proposal =========== \n// find\narray.findLast(n => n.value % 2 === 1); // { value: 3 }\n// findIndex\narray.findLastIndex(n => n.value % 2 === 1); // 2\narray.findLastIndex(n => n.value === 42); // -1'
        },
        {
            id: '4',
            type: ArticleBlockType.TEXT,
            title: 'ECMAScript 2024',
            paragraphs: [
                'На официальном сайте уже опубликован драфт на 2024 год, но какие изменения в него войдут пока достоверно неизвестно.\n'
            ]
        },
        {
            id: '5',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b26/f56/47a/b26f5647a7b761dac02a2832828fc1a9.png',
            title: 'ES, ECMAScript 2024'
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            title: 'ECMAScript2023 (ES14)',
            paragraphs: [
                'Традиционно обновления ECMAScript публикуются в июне. Но уже сейчас можно посмотреть 14-ю редакцию ECMAScript от 2023, которая сейчас находится в статусе freezed, т.е. никакие изменения в нее вноситься уже не будут.',
                'и разрешено использовать Symbols в качестве ключей в WeakMap.\n',
                'Подробнее обо всем можно почитать в официальном репозитории организации Ecma International TC39.\n'
            ]
        },
        {
            id: '7',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b26/f56/47a/b26f5647a7b761dac02a2832828fc1a9.png',
            title: 'ES, ECMAScript 2024'
        },
        {
            id: '8',
            type: ArticleBlockType.CODE,
            code: 'const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];\n\narray.find(n => n.value % 2 === 1); // { value: 1 }\narray.findIndex(n => n.value % 2 === 1); // 0\n\n// ======== Before the proposal =========== \n// find\n[...array].reverse().find(n => n.value % 2 === 1); // { value: 3 }\n\n// findIndex\narray.length - 1 - [...array].reverse().findIndex(n => n.value % 2 === 1); // 2\narray.length - 1 - [...array].reverse().findIndex(n => n.value === 42); // should be -1, but 4\n\n// ======== In the proposal =========== \n// find\narray.findLast(n => n.value % 2 === 1); // { value: 3 }\n// findIndex\narray.findLastIndex(n => n.value % 2 === 1); // 2\narray.findLastIndex(n => n.value === 42); // -1'
        }
    ]
};

export const Normal: Story = {
    decorators: [StoreDecorator({
        articleDetails: {
            data: article
        }
    })],
    args: {}
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        articleDetails: {
            isLoading: true
        }
    })],
    args: {}
};

export const Error: Story = {
    decorators: [StoreDecorator({
        articleDetails: {
            error: 'error'
        }
    })],
    args: {}
};
