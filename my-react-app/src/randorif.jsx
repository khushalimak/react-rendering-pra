import React from "react";

    const Itemstatus = ({Pizza,Burger})=>{
        if(Pizza){
            return<li>item is {Burger}</li>
        }
        return<li>item is empty</li>
    }

    const Randoritem1 = () => {
        return (
          <>
          <div>
            <ul>
            <Itemstatus Burger=   "Bread flour is the best flour for homemade pizza doughk . " Pizza={false}  />
            <Itemstatus Burger="Cooked beef burgers can be safely refrigerated for three to four days." Pizza={true}  />
            <Itemstatus Burger="Bread flour is the best flour for homemade pizza dough. " Pizza={false}  />
            <Itemstatus Burger="Cooked beef burgers can be safely refrigerated for three to four days." Pizza={true}  />
            </ul>
            </div>
          </>
        );
       };
       export default Randoritem1;
       