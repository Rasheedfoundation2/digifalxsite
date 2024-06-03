"use client";   
import CounterCircle from "@/components/aboutpage/CounterCircle";
const Counter1 = () => {
    return (
      
        <div className="flex justify-center bg-black gap-10 items-center flex-wrap	">
          <div >
            <CounterCircle endCount={10} text="Years Experience" duration={3000} character="+" />
          </div>
          <div>
            <CounterCircle endCount={22} text="Projects Completed" duration={3000} character="k" />
          </div>
          <div >
            <CounterCircle endCount={18} text="Customer Happy" duration={3000} character="k"/>
          </div>
          <div >
            <CounterCircle endCount={180} text="Winning Awards" duration={3000} character="+"/>
          </div>
        </div>
     
    );
  };
  
  export default Counter1;