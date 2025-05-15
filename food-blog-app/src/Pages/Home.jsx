import React from "react";
import foodRecipe from '../assets/foodRecipe.jpg'

function Home(){
    return(
        <>
            <section className="home">
                <div className="left">
                    <h1>Food Recipe</h1>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolores voluptate libero saepe, a illo repudiandae nobis nihil ipsam porro.</h5>
                    <button>Share your recipe</button>
                </div>
                <div className="right">
                    <img src={foodRecipe} width='320px' height='300px' alt="" />
                </div>
            </section>
            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L30,37.3C60,43,120,53,180,90.7C240,128,300,192,360,186.7C420,181,480,107,540,90.7C600,75,660,117,720,160C780,203,840,245,900,240C960,235,1020,181,1080,181.3C1140,181,1200,235,1260,266.7C1320,299,1380,309,1410,314.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default Home;