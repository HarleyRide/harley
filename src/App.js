
import React, {useState, memo, useCallback} from 'react';
import './App.css';
import Evolution from './components/Evolution';
import Twincam from './components/Twincam';
import Shovelhead from './components/Shovelhead';

function YearDiapasons(props) {
  const {year} = props;
  return (
    <div>
      {year >= 1903 && year <= 1905 && <div>F-Head</div>}
      {year > 1914 && year <= 1929 && <div>F-head</div>}
      {year > 1930 && year <= 1948 && <div>Flathead</div>}
      {year > 1936 && year <= 1947 && <div>Knucklehead</div>}
      {year > 1948 && year <= 1965 && <div>Panhead</div>}
      {year > 1966 && year <= 1984 && <div><Shovelhead /></div>}
      {year >= 1985 && year <= 1999 && <div><Evolution/></div>}
      {year > 1999 && year <= 2017 && <div><Twincam/></div>}
      {year > 2017 && year <= 2022 && <div>Milwaukee-Eight</div>}

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
      <input id='year' type='number' value={year} onChange={onYearChange}/>
    </div>
  );
});

const Month = memo(function(props) {
  const {month, onMonthChange} = props;
  console.log('month render');
  return (<div>
    {/* <input id='year' type='number' value={month} onChange={onMonthChange}/> */}
  </div>);
});

export default App;
