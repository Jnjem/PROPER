import React from 'react';
import habitImg from '../assets/img/HABITS/habit.jpg';
import exerciseImg from '../assets/img/HABITS/exercise.jpg';
import eatingImg from '../assets/img/HABITS/eating.jpg';
import readingImg from '../assets/img/HABITS/reading.jpg';
import sleepImg from '../assets/img/HABITS/sleeping.jpg';

const Whathabit = () => {
  return (
    <div className="bg-white text-gray-900 px-6 py-16 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-8">What is a Habit?</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src={habitImg}
          alt="What is a habit"
          className="w-full md:w-1/2 aspect-video object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-1"
        />
        <p className="text-lg md:text-xl leading-relaxed text-justify">
          A <strong>habit</strong> is a behavior that is repeated regularly and tends to occur subconsciously. 
          Habits form the foundation of our daily routines and strongly influence our long-term outcomes. 
          They are created through repetition and become automatic over time—meaning you do them without 
          thinking much. This can be both positive (like brushing your teeth) or negative (like excessive screen time).
          <br /><br />
          Good habits can improve your health, productivity, and overall well-being. They are a powerful tool 
          in creating lasting change because once formed, they require less effort to maintain.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-8">Examples of Useful Habits</h3>

      <div className="flex flex-col gap-16">
        {/* Regular Exercise */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={exerciseImg}
            alt="Exercise"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-1"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-2">Regular Exercise</h4>
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              Strengthens the body, boosts mood, and improves cardiovascular and mental health.
            </p>
          </div>
        </div>

        {/* Healthy Eating */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={eatingImg}
            alt="Healthy Eating"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-1"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-2">Healthy Eating</h4>
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              Provides essential nutrients, stabilizes energy levels, and reduces the risk of chronic diseases.
            </p>
          </div>
        </div>

        {/* Daily Reading */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={readingImg}
            alt="Reading"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-1"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-2">Daily Reading</h4>
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              Improves knowledge, sharpens focus, and reduces stress by providing mental escape and stimulation.
            </p>
          </div>
        </div>

        {/* Good Sleep */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={sleepImg}
            alt="Good Sleep"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-1"
          />
          <div>
            <h4 className="text-2xl font-semibold mb-2">Quality Sleep Routine</h4>
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              Enhances brain function, emotional regulation, and supports physical health and recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whathabit;
