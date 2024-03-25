import React from 'react';
import funder1Image from '../assets/Fatima.jpeg';
import funder2Image from '../assets/asmae picture.jpeg';
import logon from '../assets/logo.png'


export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <img src={logon} alt="Logo" className="h-40 w-auto absolute top-0 left-0 ml-4 mt-40" />
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Funders</h2>
        <div className="flex">
          <div className="w-1/2 p-4 border-4 border-orange-500 rounded-lg mr-4">
            <img src={funder1Image} alt="Funder 1" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-gray-700 text-xl">Hi, I'm Fatima El Kabir, studying computer science and business administration. 
            From Tafraout in Morocco, I noticed many struggle to find jobs due to illiteracy. That's why I created <span className="text-orange-500">KHIDMATY</span> during my last college year to help my community 
            find opportunities despite this challenge. 
            Let's make a difference together with <span className="text-orange-500">KHIDMATY</span>!
            </p>
          </div>
          <div className="w-1/2 p-4 border-4 border-orange-500 rounded-lg ml-4">
            <img src={funder2Image} alt="Funder 2" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-gray-700 text-xl">My name is Asmae Mouradi from Fes, Morocco. My major is computer science with a minor in mathematics, 
and I'm interested in the field of artificial intelligence. Currently in my last year of college, 
I want to use my knowledge to benefit the community and contribute to its development.
Let's make a difference together with <span className="text-orange-500">KHIDMATY</span>!
</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
        <p className="text-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <ul className="list-disc list-inside">
          
            <strong className="text-3xl font-semibold mb-4 text-orange-500">Mission:</strong>
            <ul className="list-disc list-inside ml-4 text-xl">
            <li>KhidmaConnect is dedicated to empowering illiterate individuals by providing them access to job opportunities in essential services.</li>
            </ul>
            <strong className="text-3xl font-semibold mb-4 text-orange-500">Goals:</strong>
            <ul className="list-disc list-inside ml-4 text-xl">
              <li>Accessibility: Make job opportunities easily accessible to individuals with limited digital literacy.</li>
              <li>Empowerment: Foster economic independence and promote social inclusion among marginalized communities.</li>
              <li>Impact: Create a positive impact on both individuals and communities, fostering economic stability and social cohesion.</li>
            </ul>
            <strong className="text-3xl font-semibold mb-4 text-orange-500">Values:</strong>
            <ul className="list-disc list-inside ml-4 text-xl">
              <li>Empathy: Approach our work with empathy and understanding.</li>
              <li>Inclusivity: Create an inclusive environment where everyone has equal access to opportunities and resources.</li>
              <li>Innovation: Leverage technology and innovation to address societal challenges and create positive change.</li>
              <li>Collaboration: Recognize the importance of collaboration and partnership in achieving our mission.</li>
            </ul>
        </ul>
      </div>
    </div>        
    </p>
      </div>
    </div>
  );
}
