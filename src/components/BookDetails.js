import React from 'react';
import { useBookContextPresenter } from '../context/BookContextPresenter';

const BookDetails = ({ book, key, theme }) => {
	console.log('🚀 ~ theme', theme);
	console.log('🚀 ~ key', key);
	console.log('🚀 ~ book', book);
	const { removeBook } = useBookContextPresenter();
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
			<div className='book-details-item title'>
				{book.title}
			</div>
			<div className='book-details-item author'>
				{book.author}
			</div>
			<span className='tooltiptext'>
				Please click! Utilizing UI, state, and useContext no
				API called
			</span>
		</li>
	);
};

export default BookDetails;
