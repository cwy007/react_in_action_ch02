const data = {
  post: {
    id: 123,
    content: 'What we hope ever to do with ease, we must first learn to do with diligence. -- Samuel Johnson',
    user: 'Mark Thomas',
  },
  comments: [
    {
      id: 0,
      user: 'David',
      content: 'such. win.',
    },
    {
      id: 1,
      user: 'Haley',
      content: 'Love it.',
    },
    {
      id: 2,
      user: 'Peter',
      content: 'Who was Samuel Johnson?',
    },
    {
      id: 3,
      user: 'Mitchell',
      content: '@peter get off Letters and do your homework',
    },
    {
      id: 4,
      user: 'Peter',
      content: '@mitchell ok :P',
    },
  ],
};

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h2 className="postAuthor" id={this.props.id}>
          {this.props.user} {' '}
          <span className="postBody">
            {this.props.content}
            {this.props.children}
          </span>
        </h2>
      </div>
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.user} {' '}
          <span className="commentContent">
            {this.props.content}
          </span>
        </h2>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    };

    // 由于使用类创建的组件无法自动绑定组件的方法，因此需要在构造函数中将它们绑定到this上
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    const val =event.target.value;
    this.setState(() => ({
      user: val
    }));
  }

  handleTextChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      content: val
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState(() => ({
      user: '',
      content: ''
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="createComment">
        <input
          value={this.state.user}
          onChange={this.handleUserChange}
          placeHolder="Your name"
          type="text"
        />
        <input
          value={this.state.content}
          onChange={this.handleTextChange}
          placeHolder="Thoughts?"
          type="text"
        />

        <button type="submit">Post</button>
      </form>
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit:PropTypes.func.isRequired,
  content: PropTypes.string
};

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments;

    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    })
  }

  render() {
    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          content={this.props.post.content}
          user={this.props.post.user}
        />

        {this.state.comments.map(function(comment) {
          return (
            <Comment
              key={comment.id}
              content={comment.content}
              user={comment.user}
            />
          );
        })}

        <CreateComment onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

const App = <CommentBox comments={data.comments} post={data.post} />
const node = document.getElementById('root');

ReactDOM.render(App, node);
