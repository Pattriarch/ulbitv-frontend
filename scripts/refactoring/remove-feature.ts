import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example off/on

const toggleFeatureName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!removedFeatureName) {
	throw new Error('Укажите название feature flag');
}

if (!featureState) {
	throw new Error('Укажите состояние feature (on/off)');
}

if (featureState !== 'on' && featureState !== 'off') {
	throw new Error('Некорректное название состояния feature (on/off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
	let isToggleFeatures = false;
	node.forEachChild((child) => {
		if (
			child.isKind(SyntaxKind.Identifier) &&
			child.getText() === toggleFeatureName
		) {
			isToggleFeatures = true;
		}
	});

	return isToggleFeatures;
}

function isToggleComponent(node: Node) {
	const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

	return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
	const objectOptions = node.getFirstDescendantByKind(
		SyntaxKind.ObjectLiteralExpression,
	);

	if (!objectOptions) return;

	const nameFunctionProperty = objectOptions?.getProperty('name');
	const onFunctionProperty = objectOptions?.getProperty('on');
	const offFunctionProperty = objectOptions?.getProperty('off');

	const featureName = nameFunctionProperty
		?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
		?.getText()
		.slice(1, -1);
	const onFunction = onFunctionProperty?.getFirstDescendantByKind(
		SyntaxKind.ArrowFunction,
	);
	const offFunction = offFunctionProperty?.getFirstDescendantByKind(
		SyntaxKind.ArrowFunction,
	);

	if (featureName !== removedFeatureName) return;

	if (featureState === 'on') {
		node.replaceWithText(onFunction?.getBody().getText() ?? '');
	}

	if (featureState === 'off') {
		node.replaceWithText(offFunction?.getBody().getText() ?? '');
	}
};

const getAttributeNodeByName = (
	jsxAttributes: JsxAttribute[],
	name: string,
) => {
	return jsxAttributes.find(
		(node: JsxAttribute) => node.getNameNode().getText() === name,
	);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
	const value = attribute
		?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
		?.getExpression()
		?.getText();

	if (value?.startsWith('(')) {
		return value.slice(1, -1);
	}

	return value;
};

const replaceComponent = (node: Node) => {
	const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);
	const onAttribute = getAttributeNodeByName(attributes, 'on');
	const offAttribute = getAttributeNodeByName(attributes, 'off');

	const featureNameAttribute = getAttributeNodeByName(attributes, 'name');
	// находим featureName и удаляем "" в начале и конце найденного элемента
	const featureName = featureNameAttribute
		?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
		?.getText()
		?.slice(1, -1);

	if (featureName !== removedFeatureName) return;

	const onValue = getReplacedComponent(onAttribute);
	const offValue = getReplacedComponent(offAttribute);

	if (featureState === 'on' && onValue) {
		node.replaceWithText(onValue);
	}

	if (featureState === 'off' && offValue) {
		node.replaceWithText(offValue);
	}
};

files.forEach((sourceFile) => {
	sourceFile.forEachDescendant((node) => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			replaceToggleFunction(node);
		}

		if (
			node.isKind(SyntaxKind.JsxSelfClosingElement) &&
			isToggleComponent(node)
		) {
			replaceComponent(node);
		}
	});
});

void project.save();

// todo: fix it
export {};
