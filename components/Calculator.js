class Calculator extends React.Component{
  constructor(props){
      super(props)  
      this.state={
        result:0
      }  
  }

  render(){
    return (
      <div id="Calculator">
        <div id="resultsContainer">{this.state.result}</div>
        <div id="calculatorBody">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>÷</button>
          <button data-number={7}>7</button>
          <button data-number={8}>8</button>
          <button data-number={9}>9</button>
          <button>×</button>
          <button data-number={4}>4</button>
          <button data-number={5}>5</button>
          <button data-number={6}>6</button>
          <button>-</button>
          <button data-number={1}>1</button>
          <button data-number={2}>2</button>
          <button data-number={3}>3</button>
          <button>+</button>
          <button data-number={0}>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    )

  }

}