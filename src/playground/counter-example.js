let count = 0;
const handleAddOne = () => {
  count++;
  renderCounterApp();
};

const handleMinusOne = () => {
  count--;
  renderCounterApp();
};

const handleReset = () => {
  count = 0;
  renderCounterApp();
};




const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleMinusOne}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();