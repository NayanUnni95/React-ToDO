import './ToDoMain.css';

function ToDoMain() {
  return (
    <>
      <div className='container flex flex-align flex-content'>
        <div className='wrapper flex flex-align flex-content flex-wrap'>
          <div className='header flex flex-align flex-content flex-dir'>
            <h1>React ToDo List...</h1>
            <div className='input-div flex'>
              <input type='text' placeholder='Enter description' />
              <button>
                <i className='fa-solid fa-plus fa-xl'></i>
              </button>
            </div>
          </div>
          <div className='footer'>
            <div className='content flex flex-align'>
              <input type='checkbox' />
              <div className='content-data flex flex-align flex-content'>
                <h4>Second year semester exam</h4>
              </div>
              <button>
                <i className='fa-solid fa-trash fa-xl'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoMain;
