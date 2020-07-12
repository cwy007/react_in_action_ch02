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
          this.props.content
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

const App = React.createElement(Post, {
  id: 1,
  content: 'said: This is a post!',
  user: 'mark'
});

ReactDOM.render(App, node);
