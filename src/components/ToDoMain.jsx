import "./ToDoMain.css";

function ToDoMain() {
  return (
    <>
      <div className="container flex flex-align flex-content">
        <div className="wrapper flex flex-align flex-content flex-wrap">
          <div className="header flex flex-align flex-content flex-dir">
            <h1>React ToDo List...</h1>
            <div className="input-div">
              <input type="text" />
              <button>Submit</button>
            </div>
          </div>
          <div className="footer">
            <div className="content flex flex-align">
              <input type="checkbox" />
              <h4>Hello i am Nayan</h4>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoMain;
