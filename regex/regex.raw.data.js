"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aswers_1 = require("../_ex/aswers");
const _book = 'Regex Exercises';
const _chapter = 2;
const _topics = [
    'Arrays'
];
exports.regex_1 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/matching_decimal_numbers',
        subChapter: 2,
        number: 1,
    },
    question: {
        index: '1',
        title: `Match all but the last element.`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: ['3.14529', '-255.34', '128', '1.9e10', '123,340.00'],
        patterns: [/^-?\d+(,\d+)*(\.\d+(e\d+)?)?$/, /\d+/],
    },
    data: {
        info: ['3.14529', '-255.34', '128', '1.9e10', '123,340.00', '720p']
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_2 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/matching_phone_numbers',
        subChapter: 2,
        number: 2,
    },
    question: {
        index: '2',
        title: `Match all the elements and capture the area code.`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: ['415', '650', '416', '202', '403', '416'],
        patterns: [/(\d{3})/],
    },
    data: {
        info: ['415-555-1234', '650-555-2345', '(416)555-3456', '202 555 4567', '4035555678', '1 416 555 9292']
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_3 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/matching_emails',
        subChapter: 2,
        number: 3,
    },
    question: {
        index: '3',
        title: `Capture only the 'name' (first part before @) of the email..`,
        description: 'To extract the beginning of each email, we can use a simple expression ^([\\w\\.]*)\n' +
            '* which will match emails starting with alphanumeric characters including the period.\n' +
            '* It will match up to the point in the text where it reaches an \'@\' or \'+\'.'
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: ['tom', 'tom.riddle', 'tom.riddle', 'tom', 'potter', 'harry', 'hermione'],
        patterns: [/^([\w.]*)/]
    },
    data: {
        info: ['tom@hogwarts.com', 'tom.riddle@hogwarts.com', 'tom.riddle+regexone@hogwarts.com', 'tom@hogwarts.eu.com', 'potter@hogwarts.com', 'harry@hogwarts.com', 'hermione+regexone@hogwarts.com']
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_4 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/matching_html',
        subChapter: 2,
        number: 4,
    },
    question: {
        index: '4',
        title: `Capture the html elements without the tags: Ex: <div> capture div.`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: ['a', 'a', 'div', 'div'],
        patterns: [/>([\w\s]*)</, /<(\w+)/]
    },
    data: {
        info: [
            `<a>this is a link</a>`,
            `<a href='https://regexone.com'>Link</a>`,
            `<div class='test_style'>Test</div>`,
            `<div>Hello<span>World</span>` // div
        ]
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_5 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/matching_filenames',
        subChapter: 2,
        number: 5,
    },
    question: {
        index: '4',
        title: `Extract filenames and extension types of only image files (not including temp). Img files: jpg, png and gif.`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: [['img0912', 'jpg'],
            ['updated_img0912', 'png'],
            ['favicon', 'gif']],
        patterns: [/(\w+).(jpg|gif|png)$/]
    },
    data: {
        info: [
            '.bash_profile',
            'workspace.doc',
            'img0912.jpg',
            'updated_img0912.png',
            'documentation.html',
            'favicon.gif',
            'img0912.jpg.tmp',
            'access.lock' // Skip
        ]
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_6 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/trimming_whitespace',
        subChapter: 2,
        number: 6,
    },
    question: {
        index: '6',
        title: `Capture both sentences and trim them.`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: ['The quick brown fox...', 'jumps over the lazy dog.'],
        patterns: [/^\s*(.*)\s*$/]
    },
    data: {
        info: [
            '              The quick brown fox...',
            '  jumps over the lazy dog' // 'jumps over the lazy dog.'
        ]
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_7 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/extracting_log_data',
        subChapter: 2,
        number: 7,
    },
    question: {
        index: '7',
        title: `Extract the filename, method name and line number > form: package.class.methodname(filename:linenumber).`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: [['makeView', 'ListView.java', '1727'], ['fillDown', 'ListView.java', '652'], ['fillFrom', 'ListView.java', '709']],
        patterns: [/(\w+)\(([\w.]+):(\d+)/]
    },
    data: {
        info: [
            'W/dalvikvm( 1553): threadid=1: uncaught exception',
            'E/( 1553): FATAL EXCEPTION: main',
            'E/( 1553): java.lang.StringIndexOutOfBoundsException',
            'E/( 1553):   at widget.List.makeView(ListView.java:1727)',
            'E/( 1553):   at widget.List.fillDown(ListView.java:652)',
            'E/( 1553):   at widget.List.fillFrom(ListView.java:709)' // todo: fillFrom   ListView.java   709
        ]
    },
    metadata: {
        topics: _topics
    },
};
exports.regex_8 = {
    source: {
        site: 'www.site.com',
        url: 'https://regexone.com/problem/extracting_url_data',
        subChapter: 2,
        number: 8,
    },
    question: {
        index: '8',
        title: `Extract the protocol, host and port of all resources.`
    },
    answer: {
        type: aswers_1.AnswersTypes.regex,
        correct: [['ftp', 'file_server.com', '21'],
            ['https', 'regexone.com', 'null'],
            ['file', 'localhost', '4040'],
            ['https', 's3cur3-server.com', '9999'],
            ['market', 'search', 'null']],
        patterns: [/(\w+):\/\/([\w.\-]+):?(\d+)?/, /(\w+):\/\/([\w\-.]+)(:(\d+))?/]
    },
    data: {
        info: [
            'ftp://file_server.com:21/top_secret/life_changing_plans.pdf',
            'https://regexone.com/lesson/introduction#section',
            'file://localhost:4040/zip_file',
            'https://s3cur3-server.com:9999/',
            'market://search/angry%20birds' // todo: market   search
        ]
    },
    metadata: {
        topics: _topics
    },
};
