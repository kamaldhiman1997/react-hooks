import "./App.css";
import UseImperitiveHandler from "./hooks/UseImperativeHandler/parent";
import CallBackContainer from "./hooks/useCallBack/callBackContainer";
import ContextContainer from "./hooks/useContext/contextContainer";
import MemoContainer from "./hooks/useMemo/container";
import UseReducer from "./hooks/useReducer";

function App() {
  return (
    <div className="App">
      {/* <UseReducer /> */}
      {/* <UseImperitiveHandler /> */}
      {/* <ContextContainer /> */}
      {/* <MemoContainer /> */}
      <CallBackContainer />
    </div>
  );
}

export default App;
