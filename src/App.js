
import React, { useState, memo, useCallback } from 'react';
import './App.css';
import MotoCard from './components/MotoCard/index'

function YearDiapasons(props) {
  const { year } = props;
  return (
    <div>
      {year >= 1903 && year <= 1929 && <div><MotoCard headerText='F-head engine' imgSrc='https://silodrome.com/wp-content/uploads/2016/10/Harley-Davidson-Big-Twins-%E2%80%93-The-F-head-5a-HD-hires.jpg' /></div>}
      {year > 1930 && year <= 1948 && <div><MotoCard headerText='Flathead engine' imgSrc='https://cdn1.mecum.com/auctions/lv0117/lv0117-263046/images/lv0117-263046_3@2x.jpg?1480448682000' /></div>}
      {year > 1936 && year <= 1947 && <div><MotoCard headerText='Knucklehead engine' imgSrc='https://cdn1.mecum.com/auctions/ca0818/ca0818-330934/images/monahan-1938-hd-el-1531834407345@2x.jpg?1535042433000' content={<div>двигатель – двухцилиндровый,
        двухтактный. Объем – 350 см3;
        сухой вес – 170 кг;
        объем топливного бака – 15 л;
        максимальная грузоподъемность – 165 кг;
        мощность двигателя – 35 лошадиных сил;
        тип системы охлаждения – воздушный;
        трансмиссия – четырехступенчатая;
        скорость – 150 км/час;
        расход- 7 л на 100 км;
        ход поршня – 98 мм;
        кол-во цилиндров – 2;
        сжатие – 7,3;
        тип коле – съемные;
        коробка передач – двухходовая, четырехступенчатая. </div>} />
      </div>}
      {year > 1948 && year <= 1965 && <div><MotoCard headerText='Panhead engine' imgSrc='https://www.yesterdays.nl/site/wp-content/uploads/2017/04/Harley-Davidson-1949-49EL-Panhead-1.jpg' content={<div>Название Panhead произошло от формы крышки голов цилиндров, «pan» переводится как чашка, таз или кастрюля. Если вы посмотрите на двигатель, то легко поймете почему он так назван. Производился с 1948 по 1965 и был заменен Shovel`ом. Pan пришел на замену Knucklehead и изменения касались верхней половины двигателя: дизайн голов цилиндров, самих цилиндров, новая поршневая, улучшенное смазывание (маслонасос стал более производительным, магистрали спрятали внутрь) и меньший расход топлива. «Нижний конец», т.е. картер и коленвал, остались без серьезных изменений, разве что переделали распредвал. Крупным нововведением было появление гидрокомпенсаторов клапанных зазоров. Также двигатель был более холодным при работе и полегчал на 8lbs или 3.6 кг. Раму вытянули, чтобы вместить более высокий двигатель, она получила название «wishbone» из-за согнутых нижних труб. 1948 — единственный год, когда крышки голов цилиндров были хроминованными, далее пошли крышки из нержавейки. Первые Pan имели примерно ту же мощность что и Knuckle — около 50 л/с @ 4800 об/мин при объеме 74″.</div>} /></div>}
      {year > 1966 && year <= 1984 && <div><MotoCard headerText="Shovelhead engine" imgSrc="https://i.pinimg.com/originals/aa/13/39/aa133988b3a292182ee3f47166200387.jpg" content={<div>В 70-х Harley-Davidson переживала кризис, как и многие компании в США… И если бы не общая обстановка, может быть, история моторов Shovelhead была бы повеселее. Но уж какая была. Главное — Харлей выстоял!

… К 1966 году в связи с утяжелением мотоциклов, оборудованных электростартером и задней подвеской, назрела необходимость в более мощном моторе. Таким стал Shovelhead 74 — V-twin с 45-градусным развалом цилиндров объемом 1208 куб.см, выпускавшийся до 1983 года. Он был на 10% более мощным, чем Panhead, на смену которому пришел. Появление Shovelhead первые годы повысило продажи мотоциклов H-D на 26% — до 36 310 штук в год.</div>} /></div>}
      {year >= 1985 && year <= 1999 && <div><MotoCard headerText='Evolution engines' imgSrc='https://www.moto-pro.net/wp-content/uploads/2020/11/Harley-Davidson-Heritage-Softail-Springer-EVO-1999.jpg' content={<div>
        Характеристики:
        <ul>
          <ol>угол развала цилиндров 45°</ol>
          <ol>объем — 81.8″ или 1340сс</ol>
          <ol>степень сжатия — 8.5:1 (у Shovel FL: 7.25:1, FLH: 8:1)</ol>
          <ol>мощность — 70 л/с @ 5000 об/мин</ol>
          <ol>крутящий момент — 99 н/м @ 2350 об/мин</ol>
          <ol>2 клапана на цилиндр, OHV</ol>
          <ol>переработанная форма камеры сгорания и каналов впуска-выпуска</ol>
          <ol>новое зажигание</ol>
          <ol>переделанная система смазки</ol>
        </ul>
      </div>} />
      </div>}
      {year > 1999 && year <= 2017 && <div><MotoCard headerText='TwinCam' imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1STv7oYV2duS414wKbxUyUCrdQf0zxShp3PoLm9g2CQbXlSJ8azmFOLIirSWgzqvfeM&usqp=CAU" content={<div>
        Я вам не скажу за всю Одессу весь Милуоки, но помимо теории заговора производителей, которым надо вытаскивать как можно больше денег из кармана потребителя, были и более объективные причины: конкуренция с японскими и европейскими производителями, выпускавшими на тот момент уже более объемные и мощные двигатели; необходимость соответствовать ужесточившимся экологическим требованиям и нормам по шумности и т.п. Кроме того, сами владельцы Харли часто переделывали свои Эво в погоне за большей мощностью, т.е. потребность в ней очевидно была. Да и моторы Evo не были такими идеальными, как хотелось бы: у них были проблемы со смазкой, подтеканием масла и другие.

        Однако я не буду затевать вечный спор «олдскулеров»-любителей самостоятельно перебирать двигатели в своем гараже (за что особенно любили Evo — за простоту сборки-разборки) и «ненастоящих» мотоциклистов, предпочитающих только ездить, а «саночки чинить» отдавать в сервис. Каждому свое! Поэтому вернусь к истории.

        Уже в 1992-м году назрела необходимость в увеличении мощности мотора: в Harley-Davidson видели, что делают в этой области тюнинговые компании и отдельные пользователи. Начались работы над новым двигателем c кодом Р-22, который впоследствие стал «Твин Камом». Это был новый двигатель, выполненный в старых традициях: 45-градусный верхнеклапанный V-twin с воздушным охлаждением.

      </div>} /></div>}
      {year > 2017 && year <= 2022 && <div><MotoCard headerText='Milwaukee-Eight' imgSrc='https://www.moto-pro.net/wp-content/uploads/2020/11/Harley-Davidson-Fat-Boy-Anniversary-115-M8-2018.jpg' /></div>}

    </div>
  );
}

function App() {
  const [year, setYear] = useState(1903);
  const [isInfoHidden, setIsInfoHidden] = useState(true);

  const onYearChange = useCallback(function (event) {
    const { value } = event.target;
    setYear(value);
  }, []);

  function onShow() {
    setIsInfoHidden(false);
  }
  function onHide() {
    setIsInfoHidden(true);
  }

  return (

    <div className="App">
      <header className='header-logo-background'>
        <img className='header-logo' src="https://www.bikerwiki.ru/images/thumb/f/f1/Harley-davidson-logo-21.jpg/700px-Harley-davidson-logo-21.jpg" alt='harley-logo' />

      </header>
      <section className='App-header'>

        <Year year={year} onYearChange={onYearChange} />
        <div>
          <button onClick={onShow}>Show</button>
          <button onClick={onHide}>Hide</button>
        </div>
        {!isInfoHidden && <YearDiapasons year={year} />}


      </section>
      <section className='footer'>
        {/* <div><a>Контакты</a></div> */}
        <div><a href='https://www.harley-davidson.com/eu/en/index.html'>Официальная страничка Харли</a></div>
       
      </section>
    </div>
  );
}

const Year = memo(function (props) {
  const { year, onYearChange } = props;
  console.log('year render');
  return (
    <>  <span>
      Введите год выпуска мотоцикла для получения характеристик двигателя и модели
    </span>
      <input id='year' type='number' title='Введите год выпуска мотоцикла' value={year} onChange={onYearChange} />
    </>
  );
});

export default App;
