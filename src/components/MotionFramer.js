import { motion } from "motion/react";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function MotionFramer() {
  var [loading,setLoader] = useState(true)
  setTimeout(()=>{
    setLoader(false)
  },2000)
  return (
    <>
      <br />

      <div className="container">
        <motion.h1>Motion Framer</motion.h1>
      <motion.p>this is a random paragraph</motion.p>
      </div>
      <motion.div className="row"
        style={{ height: 300, margin: 30 }}
      >
        <div className="col-lg-4">
         {loading ? <Skeleton height={200} width={300} /> : <img src="assets/img/clients/clients-1.webp" alt="My Image"/>}
        </div>
        <div className="col-lg-8">
          <h2 className="mt-4">This is a random heading</h2>
          <p>this is a random paragraph , built for demo purposes your real content shall go here</p>
        </div>
      </motion.div>
       <motion.div className="row"
        style={{ height: 300, margin: 30 }}
      >
           <div className="col-lg-8">
          <h2 className="mt-4">This is a random heading</h2>
          <p>this is a random paragraph , built for demo purposes your real content shall go here</p>
        </div>
        <div className="col-lg-4">
          <img src="assets/img/clients/clients-1.webp"/>
        </div>
     
      </motion.div>
     
    </>
  );
}
export default MotionFramer;
