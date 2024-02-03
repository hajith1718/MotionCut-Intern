import './App1.css';
import React, { useState } from "react";

function App1() {

  const [value,setValue]=useState('');
  const [value2,setValue2]=useState('');
  const [result,setResult]=useState('');
  const options=[
    {label:"USD ($)",value:0},
    {label:"Riyal (SAR)",value:1},
    {label:"Euro (€)",value:2},
    {label:"INR (₹)",value:3},

  ]
  function DemoComponent(props){
    return(
        <div>
            {/*accessing information from props */}
            value2={props.curren};
         </div>
    );
}
  let cr=[
    0.012,
    0.045,
    0.011,
    1,
  ]
  function handleSelct(event){
    setValue(event.target.value)
    setValue2(event.target.value2)
    setResult(cr[event.target.value])
    console.log(value2);
    console.log(result);
  }
    const comics = [
        
  {
    id: 0,
    img: 'https://res.cloudinary.com/dc8kig0rh/image/upload/v1706941656/51WcNRPgeXL._SY445_SX342__giee9u.jpg',
    name: 'One Piece Vol 1',
    price: '349'

  },
  {
    id: 1,
    name: 'ROXXON PRESENTS: THOR #1',
    img: 'https://res.cloudinary.com/dc8kig0rh/image/upload/v1706943425/Screenshot_from_2024-02-03_12-25-41_shwkt8.png',
    price: '600'
  },
  {
    id: 2,
    name: 'Jujutsu Kaisen, Vol. 9  (English, Paperback, Akutami Gege)',
    img: 'https://res.cloudinary.com/dc8kig0rh/image/upload/v1706943862/Screenshot_from_2024-02-03_12-34-08_mur27y.png',
    price: '379'
  },
  {
    id: 3,
    name: 'Solo Leveling',
    img: 'https://res.cloudinary.com/dc8kig0rh/image/upload/v1706944501/Screenshot_from_2024-02-03_12-44-47_ylqxbg.png',
    price: '285'
  },
  {
    id: 4,
    name: 'Chainsawman',
    img: 'https://res.cloudinary.com/dc8kig0rh/image/upload/v1706944501/Screenshot_from_2024-02-03_12-44-35_uyyp6v.png',
    price: '529'
  },
  {
    id: 5,
    name: 'The Picture Of Dorian Gray',
    img: 'https://res.cloudinary.com/dc8kig0rh/image/upload/v1706944500/Screenshot_from_2024-02-03_12-44-07_c9rmoq.png',
    price: '195'
}
];
  return (

    <div className="App">
        <header>
        <h1>COMIC WORLD</h1>
        </header>

    <main>
        <h2 className='sc'><i>Select Currency👇</i></h2>
        <div className='cu1'>
        <select className="cur" onChange={handleSelct}>
            {options.map(option=>(
              <option value={option.value}  >{option.label}</option>
              
                ))}
</select></div>

        {/* <section id="user-preferences">
            <h2>User Preferences</h2>
            <label for="currency">Choose Currency:</label>
            <select id="currency" onchange="updatePreferences()">
                <option value="$">USD</option>
                <option value="€">EUR</option>
                <option value="£">GBP</option>
            </select>
            <label for="measurement">Choose Measurement Unit:</label>
            <select id="measurement" onchange="updatePreferences()">
                <option value="kg">Kilograms</option>
                <option value="lb">Pounds</option>
            </select>
        </section> */}
       
        <section id="pricing">
        {/* {cr.map((item, index) =>{
                            if (index==value) {
                                na1=cr.indexOf(item);
                            }})} */}
        {comics.map(comic => (
                    <div key={comic.id} className="plan" data-plan="basic">
                        <img src={comic.img} alt={comic.name} style={{ height: '200px' }} />
                        <h2>{comic.name} </h2>
                            <button className="price" >{comic.price*result}{value2}</button>
                    </div>
                ))}
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Comic World</p>
    </footer>
    </div>
    );
  }
  
  export default App1;
  