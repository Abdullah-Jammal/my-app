'use client'
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Header from "./Header"


const Welcome = () => {

  gsap.registerPlugin()
  const scope = useRef()

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('h2', {
      duration : 1,
      opacity : 1,
      y : 0
    }).to('p', {
      duration : 1,
      y : 0,
      opacity : 1
    }).to('.first-container', {
      duration : 2.2,
      xPercent : '100',
      delay : 1.8,
      ease: "power2.in",
    }).from('.second-container h3', {
      y : 200,
      delay : .3,
      duration : 1,
      opacity : 0,
      stagger : 0.4
    }).to('.second-container h3', {
      delay : 1.6,
      duration : .6,
      y : -500,
      opacity : 0,
      stagger : .3,
      ease: "power4.in",
    }).to('.welcome-Page', {
      height : 0,
      duration : 1,
      delay : 1
    })
  }, scope)

  return (
    <div className="welcome-Page" ref={scope}>
      <div className="first-container">
        <h2>Welcome....</h2>
        <div className="box">
          <p>Our Websit Will Impress You So Will!</p>
        </div>
      </div>
      <div className="second-container">
        <h3>The Most Enjoyment Websit</h3>
        <h3>Have Fun With Our Animated Web</h3>
        <h3>Learning These Skills Need Time!</h3>
      </div>
    </div>
  )
}

export default Welcome
