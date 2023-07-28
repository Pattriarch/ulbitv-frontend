import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function startsWithSrc(value: string) {
	const layers = [
		'app',
		'shared',
		'entities',
		'features',
		'widgets',
		'pages',
	];
	return layers.some((layer) => value.startsWith(`src/${layer}`));
}

files.forEach((sourceFile) => {
	const importDeclarations = sourceFile.getImportDeclarations();
	importDeclarations.forEach((importDeclaration) => {
		const value = importDeclaration.getModuleSpecifierValue();

		if (startsWithSrc(value)) {
			const newValue = value.split('src/')[1];
			importDeclaration.setModuleSpecifier(`@/${newValue}`);
		}
	});
});

void project.save();
