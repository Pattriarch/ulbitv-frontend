import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentDirs = sharedUiDirectory?.getDirectories();
const indexFilename = 'index.ts';

componentDirs?.forEach((directory) => {
	const folderName = directory.getPath();
	const isIndexFileExist = directory.getSourceFile(`${folderName}/${indexFilename}`);

	if (!isIndexFileExist) {
		const filesInFolder = directory.getSourceFiles([
			'**/*.tsx',
			'!**/*.stories.*',
			'!**/*.test.*'
		]);

		let content = '';

		filesInFolder?.forEach((component) => {
			const folderLen = folderName.length;
			const moduleName = component.getBaseNameWithoutExtension();
			const modulePath = `.${component.getFilePath().slice(folderLen, -4)}`;
			content += `export {${moduleName}} from "${modulePath}"\n`;
		});

		const file = directory.createSourceFile(
			`${folderName}/${indexFilename}`,
			content,
			{ overwrite: true }
		);

		void file.save().then(() => console.log(`${folderName} --> index.ts created!`));
	}
});

void project.save();
