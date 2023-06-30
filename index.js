import react from 'react';
import  ReactDOM  from 'react-dom';
import Card from "./Cards";
import "./index.css";
import "./Sdata";
import Sdata from './Sdata';

//console.log(Sdata[0].sname);

function ncard(val){
  console.log(val);

  return(
    <Card
 imgsrc={val.imgsrc}
 
title={val.title} 
sname ={val.sname}
link ={val.link}
//this 0,1... are index of arry created in sdata
/>
);
}
ReactDOM.render(
<>
<h1 className='heading_style'>List of top  Netflix series in 2020</h1>
{Sdata.map(ncard)};

</>,
document.getElementById("root")
);
// insted of using many card we can use map method