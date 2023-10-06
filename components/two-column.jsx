import React from 'react';
import '@styles/globals.css';
import Image from 'next/image';
import l1 from './Icons/le1.png';
import l2 from './Icons/le2.png';
import l3 from './Icons/le3.png';
import l4 from './Icons/le4.png';
import l5 from './Icons/le5.png';
import l6 from './Icons/le6.png';
import l7 from './Icons/le7.png';
import l8 from './Icons/le8.png';
import l9 from './Icons/u.png';
import l10 from './Icons/u2.png';




const Home = () => {
  const column1Styles = {
    textAlign: 'right',
    fontFamily: 'Lato',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
  };
  const column2Styles = {
    textAlign: 'right',
    fontFamily: 'Lato',
    fontSize: '18px',
    fontStyle: 'normal',
    // fontWeight: 500,
    lineHeight: 'normal',
  };
  const column3Styles = {
    fontFamily: 'Lato',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
  };
  const column4Styles = {
    textAlign: 'left',
    fontFamily: 'Lato',
    fontSize: '18px',
    fontStyle: 'normal',
    lineHeight: 'normal',
  };
  

  return (
    <div>
      {/* Two Column Layout */}
      <div className="flex">
        <div className="w-1/2 bg-aiesec-blue text-white font-lato text-right ">
          <h1 style={column1Styles} className="mx-4 mt-4 mb-4 ml-4 mr-4">
            Who Are We
          </h1>
          <p className="mx-4 mt-4 ml-4">
            AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities. Founded in 1948 and currently present in 110+ countries and territories, AIESEC is a non-governmental, and not-for-profit organization entirely run by youth for youth.
          </p>
        </div>
        <div className="w-1/2 bg-white font-lato text-left mx-4">
          <h1
            style={column3Styles}
            className="mx-4 mt-4 mb-4 ml-4 mr-4 text-aiesec-blue"
          >
            About AIESEC in Sri Lanka
          </h1>
          <p className="mx-4 mt-4 ml-4">
            AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities. Founded in 1948 and currently present in 110+ countries and territories, AIESEC is a non-governmental, and not-for-profit organization entirely run by youth for youth. AIESEC Sri Lanka was established in 1995, as a member chapter of AIESEC International
          </p>
          <button className="bg-white text-blue py-2 px-4 rounded-md border-blue border-2 mx-4 mt-4 mb-4 ml-4 mr-4">
            Learn More
          </button>
        </div>
      </div>

      {/* Local Entities Division */}
      <div>
        <div className="w-full bg-white p-8 text-black font-bold font-lato text-center">
          <h2
            style={column3Styles}
            className="mx-4 mt-4 mb-4 ml-4 mr-4 text-aiesec-blue text-center"
          >
            Our Local Entities
          </h2>
          <div class="flex justify-center items-center">
            <div className="w-1/8 p-10">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l1} alt="AIESEC in Colombo Central logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in <br /> Colombo Central
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l2} alt="AIESEC in Colombo North logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in <br /> Colombo North
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l3} alt="AIESEC in Colombo South logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in <br /> Colombo South
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l4} alt="AIESEC in Kandy logo" style={{ width: '100px', height: '100px' }}  />
                </i>
              </div>
              AIESEC in<br /> Kandy
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l5} alt="AIESEC in Ruhuna logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in<br /> Ruhuna
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l6} alt="AIESEC in SLITT logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in<br /> SLIIT
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l7} alt="AIESEC in USJ logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in<br /> USJ
            </div>
            <div className="w-1/8 p-10 text-center">
              <div className="text-2xl mb-2">
                <i className="fas fa-icons">
                <Image src={l8} alt="AIESEC in NSBM logo" style={{ width: '100px', height: '100px' }} />
                </i>
              </div>
              AIESEC in<br /> NSBM
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Our Opportunities */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-8">
          <h2
            style={column3Styles}
            className="mx-4 mt-4 mb-4 ml-4 mr-4 text-aiesec-blue text-center"
          >
            Our Opportunities
          </h2>
          <br />
          <div className="flex justify-center">
            {/* Card 1 */}
            <div className="w-1/3 mx-2">
              <div className="bg-red-500 bg-opacity-90 bg-cover bg-no-repeat rounded-xl p-6 border-2">
                {/* Replace <path-to-image> with your image URL */}
                <div className="text-black text-center text-xl font-bold mb-4">
                  Card 1 Title
                </div>
                <div className="text-black text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy </p>
                  <button className="bg-white text-aiesec-blue py-2 px-4 rounded-md border-blue border-2 mx-4 mt-4 mb-4 ml-4 mr-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-1/3 mx-2 ">
              <div className="bg-yellow-500 bg-opacity-90 bg-cover bg-no-repeat rounded-xl p-6 border-2">
                {/* Replace <path-to-image> with your image URL */}
                <div className="text-black text-center text-xl font-bold mb-4">
                  Card 2 Title
                </div>
                <div className="text-black text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy </p>
                  <button className="bg-white text-blue py-2 px-4 rounded-36 border-blue border-2 mx-4 mt-4 mb-4 ml-4 mr-4 ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-1/3 mx-2">
              <div className="bg-blue-500 bg-opacity-90 bg-cover bg-no-repeat rounded-xl p-6 border-2">
                {/* Replace <path-to-image> with your image URL */}
                <div className="text-black text-center text-xl font-bold mb-4">
                  Card 3 Title
                </div>
                <div className="text-black text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy </p>
                  <button className="bg-white text-blue py-2 px-4 rounded-md border-blue border-2 border-radius mx-4 mt-4 mb-4 ml-4 mr-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Division - Icons */}
      <div className="bg-white py-8">
        <div className="container mx-auto">
          <h2
            style={column3Styles}
            className="mx-4 mt-4 mb-4 ml-4 mr-4 text-blue text-center"
          >
            National Partners
          </h2>
          <div className="flex justify-center">
            {/* Icon 1 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-1 text-4xl mb-2">
              <Image src={l9} alt="AIESEC in Colombo Central logo" style={{ width: '50px', height: '50px' }} />
              </i>
            </div>

            {/* Icon 2 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-2 text-4xl mb-2">
              <Image src={l10} alt="Uniliver logo" style={{ width: '50px', height: '50px' }} />
              </i>
              Icon 2
            </div>

            {/* Icon 3 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-3 text-4xl mb-2">
              <Image src={l10} alt="Uniliver logo" style={{ width: '50px', height: '50px' }} />
              </i>
              Icon 3
            </div>

            {/* Icon 4 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-4 text-4xl mb-2"></i>
              Icon 4
            </div>

            {/* Icon 5 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-5 text-4xl mb-2"></i>
              Icon 5
            </div>

            {/* Icon 6 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-6 text-4xl mb-2"></i>
              Icon 6
            </div>

            {/* Icon 7 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-7 text-4xl mb-2"></i>
              Icon 7
            </div>

            {/* Icon 8 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-8 text-4xl mb-2"></i>
              Icon 8
            </div>

            {/* Icon 9 */}
            <div className="w-1/9 text-center">
              <i className="fas fa-icon-9 text-4xl mb-2"></i>
              Icon 9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
