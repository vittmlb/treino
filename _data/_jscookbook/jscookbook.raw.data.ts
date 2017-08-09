import { AnswersTypes } from "../../_ex/answers";

const _book = 'Javascript CookBook';
const _chapter = 2;
const _topics = [
    'Arrays'
];

export const js_2_3_1: any = {
    source: {
        book: _book,
        chapter: _chapter,
        subChapter: 3,
        number: 1,
    },
    question: {
        index: '2.3.1',
        title: `Remover o elemento 'seal' do array.`
    },
    answer: {
        type: AnswersTypes.array,
        correct: ['dog', 'cat', 'walrus', 'lion', 'cat'],
    },
    data: {
        info: ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat']
    },
    metadata: {
        topics: _topics
    },
};

export const js_2_3_2: any = {
    source: {
        book: _book,
        chapter: _chapter,
        subChapter: 3,
        number: 2,
    },
    question: {
        index: '2.3.2',
        title: `Substituir o último elemento 'cat' do array por 'slavost'.`
    },
    answer: {
        type: AnswersTypes.array,
        correct: ['cat', 'dog', 'slavost', 'codorna'],
    },
    data: {
        info: ['cat', 'dog', 'cat', 'codorna']
    },
    metadata: {
        topics: _topics
    },
};

export const js_2_3_3: any = {
    source: {
        book: _book,
        chapter: _chapter,
        subChapter: 3,
        number: 3,
    },
    question: {
        index: '2.3.3',
        title: `Substituir o último elemento por 'muslim'.`
    },
    answer: {
        type: AnswersTypes.array,
        correct: ['cat', 'walrus', 'lion', 'muslim']
    },
    data: {
        info: ['cat', 'walrus', 'lion', 'cat']
    },
    metadata: {
        topics: _topics
    },
};

export const js_2_3_4: any = {
    source: {
        book: _book,
        chapter: _chapter,
        subChapter: 3,
        number: 4,
    },
    question: {
        index: '2.3.4',
        title: `Substituir o 2o elemento por 'zebra' e 'muslim'`
    },
    answer: {
        type: AnswersTypes.array,
        correct: ['cat', 'zebra', 'muslim', 'cat', 'codorna']
    },
    data: {
        info: ['cat', 'dog', 'cat', 'codorna']
    },
    metadata: {
        topics: _topics
    },
};