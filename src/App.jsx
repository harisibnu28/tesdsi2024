import { useState } from 'react';
import './App.css';
import brainIcon from './assets/iconoir_brain.svg';
import chatRemoveIcon from './assets/iconoir_chat-remove.svg';
import eyeEmptyIcon from './assets/iconoir_eye-empty.svg';
import flashIcon from './assets/iconoir_flash.svg';

function App() {
  return (
    <>
      <div className='container'>
        <div className={`grid place-items-center `}>
          <div className="sm:flex w-full sm:max-w-[736px] h-full sm:max-h-[512px] bg-white sm:rounded-[32px] overflow-hidden">
          <section className="text-center w-full sm:w-1/2 pt-[24px] sm:pt-[38px] pb-[40px] sm:pb-[55px] rounded-b-[32px] sm:rounded-r-[32px]" 
                style={{
                  background: 'linear-gradient(to top, #4776e6, #8e54e9)' 
                }}
          >
              <h3 className="text-sky-100 text-lg sm:text-2xl font-bold">
                Your Result
              </h3>
              <div className="w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] rounded-full overflow-hidden flex items-center justify-center mx-auto mt-[24px] sm:mt-[35px]" 
              style={{
                  background: 'linear-gradient(to bottom, #4776e6, #8e54e9)' 
                }}>
                <div>
                  <div className="text-[56px] leading-[72px] sm:text-[72px] font-extrabold">
                    76
                  </div>
                  <div className="text-slate-600 font-bold sm:text-lg opacity-50">
                   of / 100
                  </div>
                </div>
              </div>

              <h3 className="mt-[24px] sm:mt-[28px] text-[24px] sm:text-[32px] font-bold">
                Great
              </h3>
              <p className="mt-8px sm:mt-14px text-sky-100  font-medium sm:text-lg leading-[21px] sm:leading-23px max-w-260px mx-auto">
                Your scored higher than 65% of the people who have taken these tests.
              </p>
            </section>
            <section className="w-full pb-[30px] sm:pb-0 sm:w-1/2 px-[20px] sm:px-[30px] pt-[14px] sm:pt-[28px]">
              <h3 className="text-left text-black font-bold text-[18px] sm:text-[24px] mb-4">
                Summary
              </h3>
              <div>
                {summaryItems.map((item, index) => (
                  <div key={index} className={`px-6 py-4 ${item.color} rounded-[22px] mt-${index === 0 ? '34px' : '4'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                      <img src={item.icon} alt={item.label} className="w-6 h-6 mr-3" />
                        <p className="font-medium text-lg text-black">{item.label}</p>
                      </div>
                      <p className="text-lg font-bold text-black">
                        <span className="mr-2">{item.score}</span>
                        <span className="opacity-50">/ 100</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="justify-between mt-[41px] rounded-[22px] w-full">Continue</button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const summaryItems = [
  { label: 'Reaction', color: 'bg-red-100', score: 80, icon: flashIcon },
  { label: 'Memory', color: 'bg-orange-100', score: 92, icon: brainIcon },
  { label: 'Verbal', color: 'bg-green-100', score: 61, icon: chatRemoveIcon },
  { label: 'Visual', color: 'bg-blue-100', score: 73, icon: eyeEmptyIcon },
];

