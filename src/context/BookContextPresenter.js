import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
} from 'react';
import { v1 as uuid } from 'uuid';
import { bookContextModelReducer } from '../model/BookContextModelReducer';

const BookContext = createContext();

export function BookContextPresenter({ children }) {
	const [books, dispatch] = useReducer(
		bookContextModelReducer,
		[],
		() => {
			const localData = localStorage.getItem('books');
			return localData ? JSON.parse(localData) : [];
		}
	);

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);

	// const [books, setBooks] = useState([
	// 	{
	// 		title: 'name of the wind',
	// 		author: 'patrick rothfuss',
	// 		id: 1,
	// 	},
	// 	{
	// 		title: 'the way of the kings',
	// 		author: 'brandon sanderson',
	// 		id: 2,
	// 	},
	// 	{
	// 		title: 'the final empire',
	// 		author: 'brandon sanderson',
	// 		id: 3,
	// 	},
	// 	{
	// 		title: 'the hero of ages',
	// 		author: 'brandon sanderson',
	// 		id: 4,
	// 	},
	// ]);
	// const addBook = (title, author) => {
	// 	setBooks([...books, { title, author, id: uuid() }]);
	// };
	// const removeBook = (id) => {
	// 	setBooks(books.filter((books) => books.id !== id));
	// };

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{children}
		</BookContext.Provider>
	);
}

export function useBookContextPresenter() {
	const context = useContext(BookContext);

	if (!context) {
		throw new Error(
			'useBookContextPresenter mus be used within a useBookContextPresenter'
		);
	}

	return context;
}
