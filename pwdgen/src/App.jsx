import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tilt } from 'react-tilt';

function App() {
  const [length, setLength] = useState(8); // sets the default length of password as 8
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pwd, setPwd] = useState(""); // this will also be passed as it is a dependency based on which password will be generated.

  const notify = () => {
    toast("Password copied successfully!!")
  }

  const pwGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+|/+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPwd(pass);
  }, [numAllowed, charAllowed, length, setPwd]);

  // function to copy the password
  const copyPwd = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(pwd);
  }, [pwd]);

  useEffect(() => {
    pwGenerator();
  }, [numAllowed, charAllowed, length, pwGenerator]);

  // ref hook
  const passwordRef = useRef(null);

  return (
    <>
      <Tilt>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-10 text-orange-600 bg-gray-800 font-bold md:max-w-lg lg:max-w-xl'>
          <h1 className='text-white text-center my-3 text-xl md:text-2xl'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={pwd}
              className='outline-none w-full py-1 px-3 text-sm md:text-base lg:text-lg'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button onClick={() => {
              copyPwd();
              notify();
            }}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-sm md:text-base lg:text-lg'>
              Copy
            </button>
          </div>
          <div className='flex flex-col md:flex-row md:items-center text-sm gap-x-2'>
            <div className='flex items-center gap-x-1 mb-2 md:mb-0'>
              <input
                type='range'
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1 mb-2 md:mb-0'>
              <input
                type='checkbox'
                defaultChecked={numAllowed}
                id='numberInput'
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor='numberInput'>Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
        </div>
      </Tilt>
      <ToastContainer />
    </>
  );
}

export default App;
