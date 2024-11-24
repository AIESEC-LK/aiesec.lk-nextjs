import Link from "next/link";
import { Button, Card } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import Data from "@pages/partner-portal/Unilever/data.json";
import { FaCheck } from "react-icons/fa";

function OppCard({ OppCard }) {
  return (
    <div id="opportunities" className="mb-20 mt-10">
      <div className="flex justify-center">
        <div>
          <h4 className="text-4xl p-3 px-6 text-aiesec-dark-grey font-bold pb-6 flex justify-center text-center">
            Opportunities specially for AIESECers
          </h4>
          <hr className="w-1/2 mx-auto mt-1 mb-4" />
        </div>
      </div>
      {/* Card Details */}
      <div className="container-fluid px-10 lg:px-0 lg:container mx-auto justify-center flex flex-wrap gap-x-8 gap-y-8">
        {Data.map((opportunity) => (
          <Card
            key={opportunity.id}
            className="w-96 rounded-xl shadow-2xl shadow-aiesec-mid-grey text-center p-2 hover:shadow-md transition ease-in"
          >
            <div className="flex">
              <div>
                <h5 className="text-2xl text-left font-bold mt-0 mb-0">
                  {opportunity.title}
                </h5>

                <p className="text-left">{opportunity.mode}</p>
              </div>
              {opportunity.deadline && (
                <p className="text-left">
                  Application Deadline: <span>{opportunity.deadline}</span>
                </p>
              )}
            </div>
            <hr />
            <div className="text-left">
              <ul>
                {opportunity.jd.map((item, index) => (
                  <li key={index} className="flex justify-between mb-2 ">
                    &#9989;
                    <p className="ml-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-normal text-md pb-2 text-aiesec-dark-grey"></div>
            <div className="mt-1 text-center">
              {/* temporary fix - adding google form link here, change to proper method later */}
              <Link href={"https://forms.gle/yhAWjSHna1FUVgzMA"} target="_blank">
                <Button
                  className="px-2 mx-auto font-bold bg-transparent text-black border border-black hover:scale-105 transition ease-in hover:bg-black hover:text-white"
                  size="sm"
                  pill
                >
                  Apply now&ensp;{<HiArrowRight />}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OppCard;
