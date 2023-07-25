const container = document.querySelector(`#root`);

const App = () => {
  return (
    <section>
      <Circle />
      <Circle />
      <Circle />
      <Square />
      <Square />
      <Square />
    </section>
    
  )
}

const Circle = () => {
  return (
    <section id="circle" className={RandomColor()}></section>
  )
}

const Square = () => {
  return (
    <section id="square" className={RandomColor()}></section>
  )
}

const RandomColor = () => {
  const colors = [`red`, `blue`, `green`, `yellow`, `pink`]

  return (colors[Math.floor(Math.random() * colors.length)])
}

const root = ReactDOM.createRoot(container);
root.render(<App />);