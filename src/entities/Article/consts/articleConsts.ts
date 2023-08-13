// Поля для сортировки статей.
export enum ArticleSortField {
	VIEWS = 'views',
	TITLE = 'title',
	CREATED = 'created',
}

// Типы блоков, используемых в статьях.
export enum ArticleBlockType {
	TEXT = 'TEXT',
	CODE = 'CODE',
	IMAGE = 'IMAGE',
}

// Типы или категории статей.
export enum ArticleType {
	ALL = 'ALL',
	IT = 'IT',
	COMPUTER_SCIENCE = 'COMPUTER_SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

// Типы отображения статей.
export enum ArticleView {
	BIG = 'BIG',
	SMALL = 'SMALL',
}
