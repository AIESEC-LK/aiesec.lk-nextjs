import {Link} from "@nextui-org/react";
import Image from "next/image";

const PartnerCard = ({id, name, logo}) => {
  return (
    <Link href={`partner-portal/Unilever`} as="a" passhref="true">
      {/* <Link href={`partner-portal/partner/${id}`} as="a" passhref="true"></Link> */}
  
      <div
        className="w-64 py-2 px-8 bg-white rounded-2xl transition duration-300 ease-in-out
              shadow-aiesec-mid-grey shadow-2xl hover:shadow-gray-200 hover:shadow-2xl hover:scale-105 text-aiesec-dark-grey hover:text-aiesec-blue">
        <Image
          src={logo}
          width={500}
          height={500}
          alt={`${name}-logo`}
        />
        <h2 className="text-2xl font-semibold text-center px-4 mb-8 mt-2">{name}</h2>
      </div>
    </Link>
  )
}

export default PartnerCard;