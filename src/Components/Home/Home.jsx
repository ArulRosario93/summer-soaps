import React from "react";
import "./styles.css";

const Home = () => {

    const images = [ "https://pbs.twimg.com/media/CcfxmU1W8AYwNO4.jpg:large", "https://i.redd.it/7k24xova0ya11.jpg", "https://pbs.twimg.com/media/CIQPIJ3WcAAZ62D.jpg", "https://i.pinimg.com/originals/e5/2c/1a/e52c1a5f43aa94440e91a33d7872faf9.png", "https://i.imgflip.com/201v56.jpg", "https://thepetbooklady.typepad.com/.a/6a00d8347a49a469e20240a4b532b7200c-500wi", "https://i.pinimg.com/originals/00/98/5d/00985d36791b6cad5ebba939ddb731b7.jpg", "https://www.shitpostbot.com/img/sourceimages/scared-dog-57c3a06953b9c.jpeg", "https://static.boredpanda.com/blog/wp-content/uploads/2020/08/atlas_scottish_fold_117431715_689791538415848_1900724273126065362_n-5f4613b747ffa__880.jpg", "https://dailytimes247.com/wp-content/uploads/2020/10/funny-cat-tongue19.jpg", "https://www.newshub.co.nz/home/lifestyle/2019/08/the-top-five-cat-memes-of-all-time-rated/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1565234972425/KNOWYOURMEME-sad-cat-crying-1120.jpg", "https://lh3.googleusercontent.com/proxy/_ZNaYPpFRC-l78j5es0BuEMUb41d8E7o218oLsm-4yw2SusIvJVPRiOAU9SUiYqEGatGgA8a8ShG4QtwYO642DO1eA8qVSTNV1zvpjg"];

    const ran = Math.floor(Math.random() * images.length);

    console.log(ran);

    const srcImg = images[ran];

    return(
        <>
        <div className="home">
            <div className="DOIT">
                <div className="leftt" style={{animationName: "cirIt"}}><label className="itshead">We Care For Your beauty</label></div>
                <img src={srcImg} className="imggg" alt="home"/>
            </div>
            <label className="gameson">ft. ones going to use these soaps</label>
        </div>
        </>
    )
}

export default Home;