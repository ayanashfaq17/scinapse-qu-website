/**
 * Links-page hiring card. Currently closed: button disabled, pulse indicator commented out.
 * When applications open, restore the pulse, enable the button, and point it at the form URL.
 */
import { ArrowRight, Briefcase } from "lucide-react";
import RippleButton from "../UI/RippleButton";

const HiringCard = () => {
  return (
    <div className="bg-brand-black text-brand-white rounded-xl p-6 shadow-lg hover:bg-brand-black/90 hover:shadow-xl transition-all duration-300 flex flex-col h-auto relative">
      {/* Blinking Green Light - Hiring Open
      <div className="absolute top-3 right-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg">
          <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div> */}

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-cyanBlue rounded-lg">
          <Briefcase className="w-6 h-6 text-brand-black" />
        </div>
        <h3 className="text-xl font-bold">2025 Executive Team Hiring</h3>
      </div>

      <p className="text-gray-300 mb-6 flex-grow">
        <strong>Applications are now closed.</strong> Thank you for your
        interest. Please check back later or follow our socials for future
        openings.
      </p>

      <RippleButton
        size="lg"
        variant="primary"
        disabled={true}
        aria-disabled="true"
        tabIndex={-1}
        className="mt-auto"
      >
        See you next year!
        {/* <ArrowRight className="w-4 h-4" /> */}
      </RippleButton>
    </div>
  );
};

export default HiringCard;
