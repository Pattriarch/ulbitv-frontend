import { fireEvent } from '@testing-library/react';
import React from 'react';

import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

jest.mock('@/shared/lib/features');

describe('ArticleViewSelector', () => {
	(toggleFeatures as jest.Mock).mockImplementation(({ name, on }) => {
		if (name === 'isAppRedesigned') return on;
		return null;
	});
	(ToggleFeatures as jest.Mock).mockImplementation(({ name, on }) => {
		if (name === 'isAppRedesigned') return on;
		return null;
	});

	it('should handle view change to SMALL', () => {
		const mockOnViewClick = jest.fn();
		const { getByTestId } = componentRender(
			<ArticleViewSelector
				view={ArticleView.BIG}
				onViewClick={mockOnViewClick}
			/>,
		);

		// Находим кнопку для переключения вида и кликаем на неё
		const button = getByTestId('ArticleViewSelector.Button.SMALL');
		fireEvent.click(button);

		// Проверяем, что функция onViewClick была вызвана с правильным аргументом
		expect(mockOnViewClick).toHaveBeenCalledWith(ArticleView.SMALL);
	});

	it('should handle view change to BIG', () => {
		const mockOnViewClick = jest.fn();
		const { getByTestId } = componentRender(
			<ArticleViewSelector
				view={ArticleView.SMALL}
				onViewClick={mockOnViewClick}
			/>,
		);

		// Находим кнопку для переключения вида и кликаем на неё
		const button = getByTestId('ArticleViewSelector.Button.BIG');
		fireEvent.click(button);

		// Проверяем, что функция onViewClick была вызвана с правильным аргументом
		expect(mockOnViewClick).toHaveBeenCalledWith(ArticleView.BIG);
	});
});
