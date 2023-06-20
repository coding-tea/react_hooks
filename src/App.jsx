import { useEffect, useState } from 'react';
import './app.css';

function App() {

  const [text, setText] = useState();
  const [textarea, setTextarea] = useState();
  const [select, setSelect] = useState();
  const [radio, setRadio] = useState();
  const [checkbox, setCheckbox] = useState([]);

  const onsub = () => {
    return false
  }

  const chechbox = (e) => {
    if(e.target.checked)
    {
      setCheckbox([...checkbox, e.target.value]);
    }else{
      setCheckbox(checkbox.filter(item => item !== e.target.value));
    }
  }

  return (
    <div className='appp'>
      <form onSubmit={onsub()}>
        test :
        <input type="text" value={text} onChange={e => setText(e.target.value) } /> <br />
        textarea :
        <textarea value={textarea} onChange={e => setTextarea(e.target.value)} id="" cols="30" rows="10"></textarea> <br />
        select :
        <select onChange={e => setSelect(e.target.value)}>
          <option value="option1">option1</option>
          <option value="option2">option3</option>
          <option value="option3">option3</option>
        </select>
        <br />
        Radio :
        rad 1 <input type="radio" name="radio" value="rad1" onChange={e => setRadio(e.target.value)} />
        rad 2 <input type="radio" name="radio" value="rad2" onChange={e => setRadio(e.target.value)} />
        <br />
        checkbox : 
        <input type="checkbox" onClick={(e) => chechbox(e)} name='checkbox' value='check1'  />
        <input type="checkbox" onChange={(e) => chechbox(e)} name='checkbox' value='check2' />
        <input type="checkbox" onChange={(e) => chechbox(e)} name='checkbox' value='check3' />
        <input type="checkbox" onChange={(e) => chechbox(e)} name='checkbox' value='check4' />
      </form>

      <div>
        text : { (text)?text:'' } <br />
        textarea : { (textarea)?textarea:'' } <br />
        select : { (select)?select:'' } <br />
        radio : { (radio)?radio:'' } <br />
        checkbox : { (checkbox)?
        checkbox.map(item => <div> { item } </div>)
        :'' } <br />
      </div>
    </div>
  );
}

export default App;
