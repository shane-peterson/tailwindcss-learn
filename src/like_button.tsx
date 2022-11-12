const e = React.createElement;

class LikeButton extends React.Component<{ commentID: number }> {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return `You liked comment number ${this.props.commentID}`;
    }
    return <button onClick={() => this.setState({ liked: true })}>like</button>;
  }
}

document
  .querySelectorAll<HTMLDivElement>('.like_button_container')
  .forEach((domContainer) => {
    if (domContainer.dataset.commentid) {
      const commentID = parseInt(domContainer.dataset.commentid, 10);
      const root = ReactDOM.createRoot(domContainer);
      root.render(<LikeButton commentID={commentID} />);
    }
  });

export {};
