import { Link } from "@nextui-org/react";
import Image from "next/image";

function PartnerListNew() {
  return (
    <div>
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          National Partners
        </h2>
        <hr className="mb-4" />
        <div className="md:flex justify-between">
        <div className="justify-center flex flex-wrap gap-x-12 gap-y-12 container mx-auto">
          <Link href="/partner-portal/Twinery" passhref="true" className="px-6">
            <div
              className="h-72 w-64 py-2 px-8 bg-white rounded-2xl transition duration-300 ease-in-out
              shadow-aiesec-mid-grey shadow-2xl hover:shadow-gray-200 hover:shadow-2xl hover:scale-105 text-aiesec-dark-grey hover:text-aiesec-blue"
            >
              <Image
                src="/assets/images/partners/national/Twinery/TwineryLogo.jpeg"
                width={500}
                height={500}
                alt="Twinery-Logo"
                className="pt-20"
              />
              <h2 className="text-2xl font-semibold text-center px-4 mb-8 mt-16">
              MAS Innovation
              </h2>
            </div>
          </Link>
        </div>
        <div className="justify-center flex flex-wrap gap-x-12 gap-y-12 container mx-auto">
          {/* partnercard */}
          <Link href="/partner-portal/Emerald" passhref="true" className="px-6 py-10">
            <div
              className="h-72 w-64  px-8 bg-white rounded-2xl transition duration-300 ease-in-out
              shadow-aiesec-mid-grey shadow-2xl hover:shadow-gray-200 hover:shadow-2xl hover:scale-105 text-aiesec-dark-grey hover:text-aiesec-blue"
            >
              <Image
                src="/assets/images/partners/national/Emerald/Emarald.png"
                width={400}
                height={400}
                alt="Twinery-Logo"
                className="pt-2"
              />
              <h2 className="text-2xl font-semibold text-center px-4 mb-10 mt-3">
                Emerald
              </h2>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerListNew;
