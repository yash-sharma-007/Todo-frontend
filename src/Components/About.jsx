import React from 'react';
import '../Styles/About.css'

export const About = () => {
  return (
    <div className='maincontainer'>
        <div className="about-container">
        <h1 >Todo App</h1>
        <div className='startup'>
            <p>
                Welcome to our web application! Our platform is designed to help you manage your tasks efficiently. With our application, you can register or log in to your account and enjoy the following features:
            </p>
            <ul>
                <li>Create Tasks: Add new tasks to your list, providing a title and description for each task.</li>
                <li>Update Tasks: Easily update the title or description of your existing tasks as your work progresses.</li>
                <li>Delete Tasks: Remove completed or unnecessary tasks from your list.</li>
                <li>Stay Organized: Keep track of all your tasks in one place, ensuring nothing falls through the cracks.</li>
            </ul>
            <p>
                Our goal is to provide you with a user-friendly interface and a seamless experience to help you stay productive and organized. Sign up today and start managing your tasks efficiently!
            </p>
        </div>
        </div>
    </div>
  );
};


