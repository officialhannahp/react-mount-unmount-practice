import './App.css';
import Component1 from './components/Component1';
import { useState } from 'react';
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';

const App = () => {

  /////////SINGLE OBJECT//////////
  // const [isVisible, setIsVisible] = useState(false);
  // const transition = useTransition(isVisible, {
  //   from: {x: -100, y: 800, opacity: 0},
  //   enter: {x: 0, y: 0, opacity: 1},
  //   leave: {x: 100, y: 800, opacity: 0},
  // })

  //   return (
  //     <div className="App">
  //       <button onClick={() => {
  //         setIsVisible(v => !v);

  //       }}>{isVisible ? "go way" : "bring back"}</button>
  //       <div className="container">
  //         {/* {isVisible ? <div className="item" /> : ''} */}
  //         {transition((style, item) => 
  //         item ? <animated.div  style={style} className="item" /> : ''
  //         )}
  //       </div>
  //     </div>
  //   );


  ///////////MULTIPLE OCJECTS/////////////
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: {x: -100, y: 800, opacity: 0, width: 10, height: 10},
    enter: item => async(next) => {
      await next({y: item.y, opacity: 1, delay: item.delay});
      await next({x: 0, width: 100, height: 100});
    },
    leave: {x: 100, y: 800, opacity: 0},
  });

    return (
      <div className="App">
        <button onClick={() => {
          setItems(v => v.length ? [] : [
            {y: -50, delay: 200}, {y: 0, delay: 400}, {y: 50, delay: 600},
          ] );
        }}>{items.length ? "go way" : "bring back"}</button>
        <div className="container">
          {/* {isVisible ? <div className="item" /> : ''} */}
          {transition((style, item) => 
          item ? <animated.div  style={style} className="item" /> : ''
          )}
        </div>
      </div>
    );
}

export default App;
