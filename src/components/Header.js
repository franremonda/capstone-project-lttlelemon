import React from "react";


const Header = () => {
    return (
        <header className='banner'>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <link to="/booking"><button aria-label='On Click'>Reserve Table</button></link>
                </div>
                <div>
                    
                </div>
            </section>
        </header>
    );
};

export default Header;