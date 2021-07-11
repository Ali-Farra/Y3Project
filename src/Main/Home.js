import React from 'react';
import Nav from '../Multi/Nav';
import './Home.css'
import '../App.css';
import HeroS from './herofocus3D';
import i from '../Assist/mbg.jpg';
import Cards from './cards_t'
import img1 from '../Assist/hanan.jpg'
import img2 from '../Assist/ali.jpg'
import img3 from '../Assist/tasneem.jpg'

function Home(props) {

  const topicTitle1 = "Tech";
  const topicTitle2 = "Sports";
  const topicTitle3 = "Space";
  const topicTitle4 = "Education";
  const topicTitle5 = "Economy";

  return (
    <>
    <div className="app">
    
        <HeroS t="what if ?"></HeroS>
       
  <img className="back" src="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"/>

      
      <div className="homeScreen">
        <a href="/tech" style={{color:"white"}}>
      <div className="promo" style={{"--overlay-color": "rgb(0, 225, 250)"}} >
  <div className="image-wrapper"><img src="https://www.earto.eu/wp-content/uploads/header1-1800x687.jpg"/></div>
  <h2 className="title" data-cta="see the future →">Technology</h2>
</div></a>


<a href="/Sports" style={{color:"white"}}>
<div className="promo" style={{"--overlay-color": "rgb(111, 255, 0)"}}>
  <div className="image-wrapper"><img src="https://www.sportireland.ie/sites/default/files/styles/widescreen_television/public/2020-06/ball.jpg?h=f29555f0&itok=qmsaBtbp"/></div>
  <h2 className="title" data-cta="see the future →">Sports</h2>
</div></a>
</div>

<div className="homeScreen">
<a href="/Space" style={{color:"white"}}>
<div className="promo" style={{"--overlay-color": "#bf6cff"}}>
  <div className="image-wrapper"><img src="https://theartspartnership.net/wp-content/uploads/2020/05/Screen-Shot-2019-06-13-at-5.50.12-PM-800x490.png"/></div>
  <h2 className="title" data-cta="see the future →">Space</h2>
</div></a>
</div>


<div className="homeScreen">
<a href="/Eco" style={{color:"white"}}>
<div className="promo" style={{"--overlay-color": "#ffc800"}}>
  <div className="image-wrapper"><img src="https://images.unsplash.com/photo-1565374391015-af899382f2a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGVjb25vbXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></div>
  <h2 className="title" data-cta="see the future →">Economy</h2>
</div></a>


<a href="/edu" style={{color:"white"}}>
<div className="promo" style={{"--overlay-color": "#ff6a00"}}>
  <div className="image-wrapper"><img src="https://sherman.house.gov/sites/sherman.house.gov/files/featured_image/issues/edu.jpg"/></div>
  <h2 className="title" data-cta="the future educatio →">Education</h2>
</div></a>


      </div>
<div>
  <Cards p="OUR TEAM ✨ :" im1={img1} im2={img2} im3={img3} n1="Hanan" n2="Ali"n3="Tasneem"></Cards>
</div>


        {/* <section>
      
          <div className="box">
            <h2>blabla yoga blablabla</h2>
            <div className="container"> 
                <div class="img-box jarallax">
                  <img src={i}></img>
                </div>
                <div className="content">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                </div>

            </div> 
  </div>
        </section> */}

       
        {/* <Topics 
        topic1={topicTitle1} 
        topic2={topicTitle2} 
        topic3={topicTitle3} 
        topic4={topicTitle4} 
        topic5={topicTitle5} /> */}

    </div>
  </>
  );
}

export default Home;
