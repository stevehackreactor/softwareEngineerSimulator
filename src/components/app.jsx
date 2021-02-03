class App extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      divPosition: {
        top: '400px',
        left: '800px'
      }
    }

  }

  componentDidMount() {
    // Do some thing here
  }

  render() {
    return (
      <div>
        <span>Hey There</span>
      </div>
    );
  }
}