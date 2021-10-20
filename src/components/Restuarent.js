import React, {useState} from 'react'
import './style.css';
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';

const uniqueList = new Set(Menu.map((element)=>{
    return element.category;
})
);

 const Restuarent = () => {

    const [menu, setMenu] = useState(Menu);

    const filterItem = (category) =>{
        const updatedList = Menu.filter((element) =>{
            return element.category === category;
        });

        setMenu(updatedList);
    };

    return (
        <> 
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>BreakFast</button>
                    <button className="btn-group__item"  onClick={()=>filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item"  onClick={()=>filterItem("evening")}>Evening</button>
                    <button className="btn-group__item"  onClick={()=>filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item"  onClick={()=> setMenu(Menu)}>All</button>
                </div>
            </nav>
            <MenuCard menuData={menu}/>
        </>
    )
}

export default Restuarent;
