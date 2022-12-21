module.exports = {
	trailingComma: 'all',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	bracketSpacing: true,
	printWidth: 120,
	quoteProps: 'consistent',
	overrides: [
		{
			files: ['*.ts'],
			options: {
				parser: 'typescript',
			},
		},
		{
			files: ['*.html'],
			options: {
				parser: 'angular',
				printWidth: 140,
				bracketSameLine: false,
				singleAttributePerLine: true,
			},
		},
		{
			files: ['*.scss'],
			options: {
				parser: 'scss',
			},
		},
		{
			files: '*.js',
			options: {
				parser: 'flow',
			},
		},
	],
};
