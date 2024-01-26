import React from 'react';
import { NavLink } from 'react-router-dom';
import users from '../apartement.json'
import '../assets/sass/Cards.scss'
function Cart() {
    return (
        <div className="cart">
            
            {users.map(user => {
              
        return (
          <div className='cards' key={user.id}>
            <NavLink to={`/Appartement/${user.id}`} >
                <h4 className='titleCard'>{user.title}</h4>
                <img className='imgCard' src={user.cover} alt={`couverture de l'appartement ${user.title}`}/>
            </NavLink>
          </div>
        );
      })}
            
        </div>
    );
};

export default Cart;