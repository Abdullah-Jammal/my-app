'use client'
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { CSSRulePlugin } from 'gsap/all'; // Corrected import statement



const Header = () => {

const headerScope = useRef()



useGSAP(() => {
  
  const flagPole = CSSRulePlugin.getRule('.right::before');
  const flagPoleTwo = CSSRulePlugin.getRule('.right::after')


gsap.to('ul li', {
  opacity : 1,
  stagger : .2,
  ease : 'power4.out',
  y: 0,
  delay : 12.5,
  duration : 1
})
gsap.to('.logo', {
  opacity : 1,
  ease : 'power4.out',
  y: 0,
  delay : 12.7,
  duration : 1
})
gsap.from('.hello', {
  duration : .8,
  delay : 14,
  y : 200,
  opacity : 0
})
gsap.to('.right', {
  // clipPath : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
  delay : 14.5,
  duration : 1,
  stagger : 0.3,
  opacity : 1,
  y : 0
})
gsap.to(flagPole, {
  opacity : 1,
  delay : 15,
  stagger : 1,
  duration : 1,
  transform : 'translateY(0px)'
})
gsap.to(flagPoleTwo, {
  opacity : 1,
  delay : 15.3,
  stagger : 1,
  duration : 1,
  bottom : '158px'
})
}, headerScope)

return (
  <>
    <header ref={headerScope}>
      <div className="logo">
      Enjoyment
      </div>
      <nav>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Testimonials</li>
      </ul>
      </nav>
    </header>
    <div className="main-page">
      <div className="right">
        <h1>Punish Yourself Rather Than Others</h1>
        <p>Rather than wasting your time watching other people and gasaping them, you can foucsing on yourself and build it correctly.</p>
      </div>
      <div className="right">
        <h1>Haveing Fun in This Life is Essentioal</h1>
        <p>Rather than wasting your time watching other people and gasaping them, you can foucsing on yourself and build it correctly.</p>
      </div>
      <div className="right">
        <h1>Do not Forget, This Life is not Real</h1>
        <p>Rather than wasting your time watching other people and gasaping them, you can foucsing on yourself and build it correctly.</p>
      </div>
    </div>
  </>
)
}

export default Header
