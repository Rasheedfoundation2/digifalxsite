"use client";   
import CounterCircle from "@/components/aboutpage/CounterCircle";
const Counter1 = () => {
    return (
      
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center mx-16 bg-black">
          <div >
            <CounterCircle endCount={5} text="Years Experience" duration={3000} character="+" />
          </div>
          <div>
            <CounterCircle endCount={24} text="Projects Completed" duration={3000} character="+" />
          </div>
          <div >
            <CounterCircle endCount={11} text="Happy Customer" duration={3000} character="+"/>
          </div>
          <div >
            <CounterCircle endCount={2} text="Networks" duration={3000} character="+"/>
          </div>
        </div>
     
    );
  };
  
  export default Counter1;