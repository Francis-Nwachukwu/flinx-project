import { FlinxLogo } from "assets/images";
import { Link } from "react-router-dom";

const FlinxRealtyLogo = ({ className }) => {
  return (
    <Link href={"/"} className={` ${className}`}>
      <div className={`w-fit h-full ${className}`}>
        <img src={FlinxLogo} alt="logo" className="w-full h-full" />
      </div>
    </Link>
  );
};

export default FlinxRealtyLogo;
