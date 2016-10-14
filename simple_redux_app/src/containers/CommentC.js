import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
 
const mapStateToProps = (state) => {
  return {
    comments: state
  }
}
const CommentC = connect(
  mapStateToProps
)(CommentList)

export default CommentC;