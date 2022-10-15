module.exports = {
	root: true,
	plugins: ['log'],
	overrides: [
		{
			files: ['**/*.html'],
			extends: ['plugin:@angular-eslint/template/recommended'],
			rules: {
				'max-len': ['warn', { code: 140, tabWidth: 2 }],
			},
		},
		{
			files: ['*.component.ts'],
			extends: ['plugin:@angular-eslint/template/process-inline-templates'],
		},
		{
			files: ['**/*.ts'],
			parserOptions: {
				project: ['tsconfig.app.json'],
				createDefaultProgram: true,
			},
			extends: [
				'plugin:@angular-eslint/recommended',
				'airbnb-base',
				'airbnb-typescript/base',
				'plugin:prettier/recommended',
			],
			rules: {
				'max-len': [
					'warn',
					{
						code: 120,
						tabWidth: 2,
						ignoreUrls: true,
						ignoreStrings: true,
						ignoreTemplateLiterals: true,
					},
				],
				'@angular-eslint/no-input-rename': 'off',
				'@angular-eslint/no-output-rename': 'off',
				'@typescript-eslint/no-useless-constructor': 'off',
				'@typescript-eslint/lines-between-class-members': 'off',
				'@typescript-eslint/no-throw-literal': 'off',
				'@typescript-eslint/no-shadow': 'off',
				'@typescript-eslint/dot-notation': 'off',
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: getOrderConfig(),
					},
				],
				'import/extensions': [
					'error',
					'ignorePackages',
					{
						js: 'never',
						ts: 'never',
					},
				],
				'import/no-cycle': 'off',
				'import/no-extraneous-dependencies': 0,
				'import/prefer-default-export': 0,
				'class-methods-use-this': 0,
				'max-classes-per-file': 0,
				'default-case': 0,
				'no-plusplus': 'off',
				'no-underscore-dangle': 'off',
				'no-restricted-syntax': 'off',
				'no-param-reassign': 'off',
				'no-empty': 'off',
				'no-console': 'off',
				'no-shadow': 'off',
				'prefer-destructuring': 'off',
				'grouped-accessor-pairs': 'error',
				'camelcase': 'error',
			},
		},
	],
};

function getOrderConfig() {
	return {
		order: 'as-written',
		memberTypes: [
			// Signature
			'signature',

			// Fields
			'public-static-field',
			'protected-static-field',
			'private-static-field',

			'public-decorated-field',
			'protected-decorated-field',
			'private-decorated-field',

			'public-instance-field',
			'protected-instance-field',
			'private-instance-field',

			'public-abstract-field',
			'protected-abstract-field',
			'private-abstract-field',

			// Constructors
			'public-constructor',
			'protected-constructor',
			'private-constructor',

			// Getters and Setters

			'public-static-get',
			'public-static-set',

			'protected-static-get',
			'protected-static-set',

			'private-static-get',
			'private-static-set',

			'public-decorated-get',
			'public-decorated-set',

			'protected-decorated-get',
			'protected-decorated-set',

			'private-decorated-get',
			'private-decorated-set',

			'public-instance-get',
			'public-instance-set',

			'protected-instance-get',
			'protected-instance-set',

			'private-instance-get',
			'private-instance-set',

			'public-abstract-get',
			'public-abstract-set',

			'protected-abstract-get',
			'protected-abstract-set',

			'private-abstract-get',
			'private-abstract-set',

			// Methods
			'public-static-method',
			'protected-static-method',
			'private-static-method',

			'public-decorated-method',
			'protected-decorated-method',
			'private-decorated-method',

			'public-instance-method',
			'protected-instance-method',
			'private-instance-method',

			'public-abstract-method',
			'protected-abstract-method',
			'private-abstract-method',
		],
	};
}
