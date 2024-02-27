import React from 'react'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom'


const PostItem = ({ postID, thumbnail, category, title, description, authorID }) => {
  return (
    <div className="post">
        <div className="post__image">
            <img src={thumbnail} alt={title} className="post__img" />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`} className="post__title">
                <h2 className="post__sub">{ title }</h2>
            </Link>
            <p className="post__desc">{ description }</p>
            <div className="post__footer">
                <PostAuthor />
                <Link  to={`/posts/categories/${category}`} className="post__link">
                    { category }
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PostItem