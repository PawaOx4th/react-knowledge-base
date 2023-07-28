import { ElementRef, useRef } from "react";
import "./App.css";

function App() {
  /**
   *
   * Use this keyword replace `HTMLInputElement`  with `ElementRef<"input">`.
   */
  const audioRef = useRef<ElementRef<"input">>(null);
  // const audioRef = useRef<HTMLInputElement>(null);
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aspernatur deserunt rerum voluptatem.
      <div>
        <input ref={audioRef} type='radio' name='' id='' />
      </div>
    </>
  );
}

export default App;
