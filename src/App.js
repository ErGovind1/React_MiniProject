import logo from './logo.svg';
import './App.css';

let curDate = new Date(2022,9,1,7);
curDate = curDate.getHours();
let greeting ='';
const cssStyle = {

};
if(curDate>=1 && curDate<12){
  greeting = "Good Morining";
  cssStyle.color = 'green';
}
else if(curDate>=12 && curDate<19){
  greeting = "Good Afternoon";
  cssStyle.color = 'orange';
  
}
else{
  greeting = 'Good Night'
  cssStyle.color = 'Black';

}


function App() {
  return (
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span>
    </h1>
  );
}

export default App;
