const ADD_TEXT = 'ADD_TEXT';
const ADD_RANDOM_STRING = 'ADD_RANDOM_STRING'
/* 
	{
		type: ADD_TEXT,
		text: 'some random text here'
	}
*/

export function addText(text){
	return {
		type: ADD_TEXT,
		text: text
	}
}
export function addRandomString(text){
	return {
		type: ADD_RANDOM_STRING,
		text: text
	}
}