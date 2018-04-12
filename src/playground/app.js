console.log("app.js is running");


const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

const formInput = e.target.elements.formInput.value;

  if(formInput) {
    app.options.push(formInput);
    e.target.elements.formInput.value = "";
    renderTemplate();
  }
};

const removeAll = () => {
  app.options = [];
  renderTemplate();
}

const appRoot = document.getElementById("app");

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      {
        [99,98,97]  
      }
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="formInput"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();

