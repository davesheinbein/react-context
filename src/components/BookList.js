import React from 'react';
import { useThemeContextPresenter } from '../context/ThemeContextPresenter';

function BookList() {
	const { isDarkTheme, light, dark } =
		useThemeContextPresenter();
	const theme = isDarkTheme ? dark : light;
	return (
		<div
			className='book-list'
			style={{ background: theme.bg, color: theme.syntax }}>
			<ul>
				<li style={{ background: theme.ui }}>
					the way of the kings
				</li>
				<li style={{ background: theme.ui }}>
					the name of the wind
				</li>
				<li style={{ background: theme.ui }}>
					the final empire
				</li>
			</ul>
		</div>
	);
}

export default BookList;
