import React, { useState } from 'react'
import PostItem from '../components/PostItem'


import thumbanail1 from '../images/blog43.jpeg'
import thumbanail2 from '../images/blog50.jpeg'

const Dummy_Post = [
    {
        id: '1',
        thumbnail: thumbanail1,
        category: 'education',
        title: 'This is education Africa',
        desc: 'Lorem lorem tv',
        authorID: 1
    },
    {
        id: '2',
        thumbnail: thumbanail2,
        category: 'Brainstorm',
        title: 'This is education Africa',
        desc: 'Lorem lorem tv',
        authorID: 2
    }
]

const Posts = () => {
    const [posts, setPosts] = useState(Dummy_Post)

  return (
    <div className="posts">
        <div className="posts__container">
            {posts.map(({ id, thumbnail, category, title, desc, authorID }) => 
            <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title}
              description={desc} authorID={authorID}
             />
            )}
        </div>
    </div>
  )
}

export default Posts