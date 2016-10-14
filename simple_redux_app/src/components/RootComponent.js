import React from 'react'
import AddCommentComponent from '../containers/AddCommentComponent'
// import CommentList from './CommentList'
import CommentC from '../containers/CommentC'

const RootComponent = React.createClass({
	render() {
		return (
			<div>
				<AddCommentComponent/>
				<CommentC />
			</div>
			)
	}
});

export default RootComponent;