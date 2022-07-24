import React from "react";
import Button from "./components/buttons";
import Title from "./components/Title";
import OutputScreen from "./components/OutputScreen";
import { useState } from "react";
import Footer from "./components/footer";



function App() {

  const [row, setRowState] = useState({
    question: "",
    answer: ""
  });

  function handleClick(event) {
    const { value } = event.target;

    switch (value) {
      case '=': {
        if (row.question !== "") {
          var ans = '';
          try {
            ans = Function("return " + row.question)();
          }
          catch (err) {
            setRowState({ answer: "Math error" });
          }
          if (ans === undefined)
            setRowState({ answer: "Math Error" });

          else
            setRowState({ answer: ans, question: '' });
        }
        break;
      }
      case 'C': {
        setRowState({ question: '', answer: '' });
        break;
      }
      case "Del": {
        var str = row.question;
        str = str.substring(0, str.length - 1);
        setRowState({ question: str });
        break
      }
      default: {
        setRowState({ question: row.question += value });
        break;
      }
    }
  }



  return (
    <div>
    <div className="frame">
    <Title />
      <div className="mainCalc">
        <OutputScreen
          answer={row.answer}
          question={row.question} />
        <div className="button-row">
          <Button label={"C"} handleClick={handleClick} class="operator"/>
          <Button label={"Del"} handleClick={handleClick} class="operator"/>
          <Button label={"."} handleClick={handleClick} class="operator"/>
          <Button label={"/"} handleClick={handleClick} class="operator"/>
        </div>
        <div className="button-row">
          <Button label={"7"} handleClick={handleClick} />
          <Button label={"8"} handleClick={handleClick} />
          <Button label={"9"} handleClick={handleClick} />
          <Button label={"*"} handleClick={handleClick} class="operator"/>
        </div>
        <div className="button-row">
          <Button label={"4"} handleClick={handleClick} />
          <Button label={"5"} handleClick={handleClick} />
          <Button label={"6"} handleClick={handleClick} />
          <Button label={"-"} handleClick={handleClick} class="operator"/>
        </div>
        <div className="button-row">
          <Button label={"1"} handleClick={handleClick} />
          <Button label={"2"} handleClick={handleClick} />
          <Button label={"3"} handleClick={handleClick} />
          <Button label={"+"} handleClick={handleClick} class="operator"/>
        </div>
        <div className="button-row">
          <Button label={"0"} handleClick={handleClick} />
          <Button label={"="} handleClick={handleClick} class="operator"/>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default App;
