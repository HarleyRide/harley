
import React, {useState, memo, useCallback} from 'react';
import './App.css';

function YearDiapasons(props) {
  const {year} = props;
  return (
    <div>
      {year >= 1903 && year <= 1930 && <div>old</div>}
      {year > 1930 && year <= 1950 && <div>modern</div>}
      {year > 1950 && <div>future</div>}
    </div>
  );
}

function App() {
  const [year, setYear] = useState(1903);
  const [month, setMonth] = useState(1);
  const [isInfoHidden, setIsInfoHidden] = useState(true);

  const onYearChange = useCallback(function (event) {
    const {value} = event.target;
    setYear(value);
  }, []);

  const onMonthChange = useCallback(function (event) {
    const {value} = event.target;
    setMonth(value);
  }, []);

  function onShow() {
    setIsInfoHidden(false);
  }
  function onHide() {
    setIsInfoHidden(true);
  }

  return (
    
    <div className="App">
     <header>
     <img src="../img/myImage.png" />

     </header>
      <section className='App-header'>
     
        <Year year={year} onYearChange={onYearChange}/>
        <Month month={month} onMonthChange={onMonthChange}></Month>
        <div>
          <button onClick={onShow}>Show</button>
          <button onClick={onHide}>Hide</button>
        </div>
        {!isInfoHidden && <YearDiapasons year={year}/>}
        
        
      </section>
    </div>
  );
}

const Year = memo(function (props) {
  const [message, setMessage] = useState('fuck');
  const {year, onYearChange} = props;

  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  console.log('year render');
  return (
    <div>
      <input type='text' value={message} onChange={onMessageChange}/>
      <input id='year' type='number' value={year} onChange={onYearChange}/>
    </div>
  );
});

const Month = memo(function(props) {
  const {month, onMonthChange} = props;
  console.log('month render');
  return (<div>
    <input id='year' type='number' value={month} onChange={onMonthChange}/>
  </div>);
});

export default App;
