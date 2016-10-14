import React from 'react';

const CommentList = ({ comments }) => 
	(
	<div>
		{comments.map(comment => 
				<div key={comment.id}> 
					{comment.comment} 
				</div>)
		}
	</div>)
export default CommentList;