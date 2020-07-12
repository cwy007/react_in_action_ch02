const node = document.getElementById('root');

const root = React.createElement('div', {},
  React.createElement('div', {}, 'Hello, world!',
    React.createElement('a', {href: 'mailto:mark@ifelse.io'},
      React.createElement('h1', {}, 'React In Action'),
      React.createElement('em', {}, '...and now it really is!')
    )
  )
);

ReactDOM.render(root, node);
