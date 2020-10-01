class App extends React.Component {
  state = {
    name: '',
    cuisines: '',
    city: '',
    rating: '',
    link: '',
    foods: []
  }
render = () => {
  return(
    <div className="container">
    <h1>Hello guys</h1>
    </div>
  )
}
}
ReactDOM.render(<App></App>, document.querySelector('main'))
