
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  clickHandler = () => {
    this.setState({ liked: true })
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return <button onClick={this.clickHandler}>
        Like
    </button>

  }
}

const domContainer = document.querySelector('#like_button_container');
const reactElement = React.createElement(LikeButton);


ReactDOM.render(reactElement, domContainer);