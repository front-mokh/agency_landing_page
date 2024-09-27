import React from "react";
import Tagline from "@/components/utils/Tagline";
import Headline from "@/components/utils/Headline";
import FAQTable from "@/components/FAQTable";
import { FAQ } from "@/lib/definitions";

export default function ServiceFAQ({ faq }: { faq: FAQ[] }) {
  return (
    <div className="flex flex-col items-center">
      <Tagline animated>Nous sommes là pour vous</Tagline>
      <Headline animated>Trouvez les réponses à vos questions</Headline>
      <FAQTable faq={faq} />
    </div>
  );
}
