import React, { useState } from "react";
import styled from "styled-components";
import MockApi from "./Api/MockApi.js";


const ItemFrame = styled.div`
    border: solid 1px gray;
    padding: 10px;
    margin: 15px 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px grey;
    font-family: Arial;
`;

const Input = styled.input`
    border: solid 1px black;
    padding: 5px;
    border-radius: 3px;
`;

const Title = styled(Input)`
    text-transform: uppercase;
`;

const Save = styled.button`
   width: 100px;
   margin: 10px;
   background: green;
   color: white;
   font-size: 16px;
   padding: 10px;
   border-radius: 5px;
`;

let items = [
    {id: 1, name: 'item 1',description: 'random 1'},
    {id: 2, name: 'item 2', description: 'random 2'}
];

const Items = ({ items }) => {
  const [data, setData] = useState(items);

  function update(value, fieldName, data) {
    setData({ ...data, [fieldName]: value });
  }

  async function onSave() {
    // make REST call
    await MockApi().then(data=>{
        if(data[0].id==items.id){
            setData(data[0]);
            console.log("TRUE")
        };
    })
    


    // fetch("http://localhost:3000/database")
    // .then(response => response.json())
    // .then((responsedata)=>{
    //     if(responsedata[0].id==items.id){
    //         setData(responsedata[0]);
    //     };
    // });
  

  }

  return (
  <React.Fragment>
    <ItemFrame>
      <h3>
        <Title onChange={(evt) => update(evt.target.value, 'name', data)} value={data.name} />
      </h3>
      <div>
        <Input onChange={(evt) => update(evt.target.value, 'description', data)} value={data.description} />
      </div>
      <div><
        Save onClick={onSave}>Request Api Call</Save>
      </div>
      
    </ItemFrame>
  </React.Fragment>)
}

const Main = () => {
  const data = items.map(items => <Items items={items} />)
  return (
  <React.Fragment>
    {data}
  </React.Fragment>
  )
}

export default Main;