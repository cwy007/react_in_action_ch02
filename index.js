const node = document.getElementById('root');

const root = React.createElement('div', {},
  React.createElement('div', {}, 'Hello, world!',
    React.createElement('a', {href: 'mailto:mark@ifelse.io'},
      React.createElement('h1', {}, 'React In Action'),
      React.createElement('em', {}, '...and now it really is!')
    )
  )
);

class Post extends React.Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'post'
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody'
          },
          this.props.content,
          this.props.children
        )
      )
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
    return React.createElement(
      'div',
      {
        className: 'comment'
      },
      React.createElement(
        'h2',
        {
          className: 'commentAuthor'
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'commentContent'
          },
          this.props.content
        )
      )
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
    this.setState(() => ({
      user: '',
      content: ''
    }));
  }

  render() {
    return React.createElement(
      'form',
      {
        className: 'createComment',
        onSubmit: this.handleSubmit
      },
      React.createElement('input', {
        type: 'text',
        placeHolder: 'Your name',
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement('input', {
        type: 'text',
        placeHolder: 'Thoughts?',
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      React.createElement('input', {
        type: 'submit',
        value: 'Post'
      })
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit:PropTypes.func.isRequired,
  content: PropTypes.string
};

const App = React.createElement(Post, {
    id: 1,
    content: 'said: This is a post!',
    user: 'mark'
  },
  React.createElement(Comment, {
    id: 2,
    user: 'bob',
    content: 'commented: wow! how cool!'
  }),
  React.createElement(CreateComment)
);

ReactDOM.render(App, node);
