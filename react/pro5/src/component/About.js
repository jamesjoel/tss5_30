import React, { useState, useEffect } from 'react'
import axios from 'axios';

const About = () => {
  let [name, setName] = useState("");
  let [image, setImage] = useState();
  let [imgArr, setImgArr] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4200/api/signup/upload").then(result=>{
      setImgArr(result.data);
    })
  }, [])

  let form = new FormData();
  let Add = ()=>{
    form.append("name", name);

    axios.post("http://localhost:4200/api/signup/upload", form).then(result=>{
      let info = result.data.imgInfo;
      
      setImgArr([...imgArr, info]);
      console.log(imgArr);
    })

  }

  let Image = (e)=>{
    console.log(e.target.files);
    form.append("photo", e.target.files[0]);
  }
  return (
    <>
    <br />
    <br />
      Name <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br />
      <br />
      Image <input type="file" value={image} onChange={Image}/>
      <br />
      <br />
      <button onClick={Add}>Add</button>
      <br />
      <br />
      {
       imgArr ? imgArr.map(obj=>(<img key={obj} src={obj.image} height='150' width='150' />)) : ""
      }
    </>
  )
}

export default About