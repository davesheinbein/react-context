import React from 'react';
import { useBookContextPresenter } from '../context/BookContextPresenter';

const BookDetails = ({ book, key, theme }) => {
	const { removeBook } = useBookContextPresenter();
	const capitalize = (text) => {
		return text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
			letter.toUpperCase()
		);
	};
	const title = capitalize(book.title);
	const author = capitalize(book.author);

	return (
		<li
			style={{ background: theme.ui }}
			key={key}
			id={book.title}
			className='book-details tooltip-b'>
			<div
				className='book-details-item book-details-item-icon'
				onClick={() => removeBook(book.id)}>
				X
			</div>
			<h3 className='book-details-item title'>Title</h3>
			<div className='book-details-item title'>{title}</div>
			<h3 className='book-details-item author'>Author</h3>
			<div className='book-details-item author'>
				{author}
			</div>
			<span className='tooltiptext'>
				Click the X to remove a book. Using state and local
				storage.
			</span>
		</li>
	);
};

export default BookDetails;
