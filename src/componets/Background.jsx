import { useEffect, useState } from "react";

const Background = () => {
  const [stars, setstars] = useState([]);
  const [meteors , setmeteor] = useState([])

  useEffect(() => {
    generatestar()
    generateMeteors()

   
  },[])

  const generatestar = () => {
    const numberOfStars =
      Math.floor(window.innerHeight * window.innerWidth) / 10000;

    const newstars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newstars.push({
        id: i,
        size: Math.random() * 5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 * 0.5,
        animationDuration : Math.random() * 4 + 1,
      });
    }

    setstars(newstars);
  };

//   meteros genetors

  const generateMeteors = () => {
    const numberOfMeteors = 3

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 20,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration : Math.random() * 3 + 3,
      });
    }

    setmeteor(newMeteors);
  };


  return(
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {
            stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px" ,
                    left: star.x + "%" ,
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }} />
            ))
        }

         {
            meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 2 + "px" ,
                    left: meteor.x + "%" ,
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }} />
            ))
        }
    </div>
  ) 
};

export default Background;
