import './ToDoMain.css';
import { useState } from 'react';

function ToDoMain() {
  const [toDo, setToDo] = useState([]);
  const [data, setData] = useState('');
  const clearInput = () => {
    setData('');
  };
  return (
    <>
      <div className="container flex flex-align flex-content">
        <div className="wrapper flex flex-align flex-content flex-wrap">
          <div className="header flex flex-align flex-content flex-dir">
            <h1>React ToDo List...</h1>
            <div className="input-div flex">
              <input
                type="text"
                onChange={(e) => {
                  setData(e.target.value);
                }}
                placeholder="Enter description"
                value={data}
              />
              <button
                onClick={() => {
                  setToDo([
                    ...toDo,
                    {
                      des: data,
                      id: Date.now(),
                      check: false,
                    },
                  ]),
                    clearInput();
                }}
              >
                <i className="fa-solid fa-plus fa-xl"></i>
              </button>
            </div>
          </div>
          <div className="footer">
            {toDo.map((obj, index) => {
              return (
                <div key={index} className="content flex flex-align">
                  <input
                    onClick={(e) => {
                      setToDo(
                        toDo.filter((index) => {
                          if (obj.id === index.id) {
                            index.status = e.target.checked;
                          }
                          return index;
                        })
                      );
                    }}
                    type="checkbox"
                  />
                  <div className="content-data flex flex-align flex-content">
                    <h4>{obj.des}</h4>
                  </div>
                  <button
                    onClick={() => {
                      setToDo(
                        toDo.filter((index) => {
                          if (obj.id != index.id) {
                            return index;
                          }
                        })
                      );
                    }}
                  >
                    <i className="fa-solid fa-trash fa-xl"></i>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoMain;
