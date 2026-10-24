/**
 * Newsletter UI only. Submit does not save the address. Wire a provider here if needed.
 */
import { useState } from "react";
import { Mail } from "lucide-react";
import RippleButton from "../UI/RippleButton";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Newsletter signup logic would go here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing to our newsletter!");
    }, 1000);
  };

  return (
    <div className="bg-brand-black text-brand-white rounded-xl p-6 shadow-lg hover:bg-brand-black/90 hover:shadow-xl transition-all duration-300 flex flex-col h-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-cyanBlue rounded-lg">
          <Mail className="w-6 h-6 text-brand-black" />
        </div>
        <h3 className="text-xl font-bold">SciNapse Newsletter</h3>
      </div>

      <p className="text-gray-300 mb-6 flex-grow">
        Stay in the loop with our periodic newsletter featuring events,
        opportunities, and insights from the SciNapse community.
      </p>

      <form onSubmit={handleNewsletterSubmit} className="mt-auto">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-brand-cyanBlue focus:outline-none transition-colors"
          />
        </div>
        <RippleButton
          type="submit"
          disabled={isSubmitting}
          size="lg"
          variant="primary"
          className="w-full"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </RippleButton>
      </form>
    </div>
  );
};

export default NewsletterCard;
