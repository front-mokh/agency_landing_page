import Bold from "@/components/Bold";
import ServiceLink from "@/components/ServiceLink";
import { Span } from "next/dist/trace";
import { Labrada } from "next/font/google";
import Link from "next/link";

export const navLinks = [
  { href: "/", label: "accueil" },
  { href: "/services", label: "nos produits" },
  { href: "/about", label: "à propos" },
  { href: "/contact", label: "contact" },
  // { href: "/faq", label: "faq" },
];

// export const motivations = [
//   {
//     iconPath: "/icons/trust.svg",
//     title: "Insperer la confiance de vos clients",
//     description:
//       "Votre site web démontre votre expertise et votre professionnalisme, rassurant ainsi vos clients potentiels. Ils seront donc plus confiants et plus enclins à choisir vos services, convaincus de la qualité de votre travail.",
//   },
//   {
//     iconPath: "/icons/growth.svg",
//     title: "CLARIFIER VOS SERVICES POUR VOS CLIENTS",
//     description:
//       "Votre site web vous permet de présenter clairement et de manière détaillée les services que vous proposez. Cela aide vos clients à mieux comprendre la valeur que vous pouvez leur apporter et les incite à faire appel à vos expertises.",
//   },
//   {
//     iconPath: "/icons/competition.svg",
//     title: "VOUS DÉMARQUER DE LA CONCURRENCE",
//     description:
//       "Votre site web est votre atout pour vous distinguer dans un marché saturé. Il met en avant ce qui vous rend unique et vos principaux points forts, vous permettant de gagner en visibilité et en crédibilité face à des entreprises moins présentes en ligne.",
//   },
//   {
//     iconPath: "/icons/trust.svg",
//     title: "Insperer la confiance de vos clients",
//     description:
//       "Votre site web démontre votre expertise et votre professionnalisme, rassurant ainsi vos clients potentiels. Ils seront donc plus confiants et plus enclins à choisir vos services, convaincus de la qualité de votre travail.",
//   },
// ];
// {
//   iconPath: "/icons/growth.svg",
//   title: "CLARIFIER VOS SERVICES POUR VOS CLIENTS",
//   description:
//     "Un site web bien conçu présente clairement vos services, met en valeur votre expertise et incite les clients à faire appel à vous expertises.",
// },
export const benefits = [
  {
    iconPath: "/icons/trust.svg",
    title: "Plus de clients",
    description: "Attirez et convertissez plus de prospects",
  },

  {
    iconPath: "/icons/competition.svg",
    title: "Plus de visibilité",
    description: "Améliorez votre classement dans les moteurs de recherche",
  },
  {
    iconPath: "/icons/growth.svg",
    title: "Plus de crédibilité",
    description:
      "Renforcez la confiance des clients avec un site web professionnel",
  },
  {
    iconPath: "/icons/growth.svg",
    title: "PLUS DE REVENUS",
    description:
      "Augmentez vos ventes avec un site optimisé pour la conversion",
  },
];

export const features = [
  {
    imagePath: "/icons/satisfaction.svg",
    title: "Expérience Client Exceptionnelle",
    description:
      "Un site web centré sur vos clients. Nous créons des parcours utilisateurs intuitifs et engageants qui transforment les visiteurs en clients fidèles. Chaque interaction renforce votre relation client.",
  },
  {
    imagePath: "/icons/seo.svg",
    title: "Visibilité Optimale sur Google",
    description:
      "Propulsez votre site en tête des résultats de recherche. Notre optimisation pointue assure que vos clients potentiels vous trouvent facilement, boostant votre visibilité et vos opportunités d'affaires.",
  },
  {
    imagePath: "/icons/performance.svg",
    title: "Performance Ultra-Rapide",
    description:
      "Un site web à la vitesse de l'éclair. Avec un score de performance de 100/100, vos pages se chargent instantanément, améliorant l'expérience utilisateur, réduisant le taux de rebond et renforçant votre position dans les classements.",
  },
  {
    imagePath: "/icons/responsive.svg",
    title: "Design Adaptatif Intelligent",
    description:
      "Une expérience fluide sur tous les appareils. Votre site s'ajuste parfaitement aux smartphones, tablettes et ordinateurs, assurant une présentation impeccable et une navigation intuitive pour chaque visiteur.",
  },
];

export const products = [
  {
    imagePath: "/icons/satisfaction.svg",
    title: "Commerce Plus",
    subtitle: "Plateforme e-commerce tout-en-un",
    description:
      "Optimisez vos ventes en ligne avec notre solution complète de gestion de boutique en ligne.",
    features: [
      "Gestion complète des produits et des ventes",
      "Gestion des clients et des livraisons",
      "Assistance 24h/24 et 7j/7",
    ],
  },
  {
    imagePath: "/icons/seo.svg",
    title: "DentaGest",
    subtitle: "Gestion de cabinet dentaire simplifiée",
    description:
      "Rationalisez vos opérations cliniques et améliorez l'expérience patient avec notre logiciel spécialisé.",
    features: [
      "Gestion complète des produits et des ventes",
      "Gestion des clients et des livraisons",
      "Assistance 24h/24 et 7j/7",
    ],
  },
];
export const services = [
  {
    iconPath: "/icons/code.svg",
    title: "Conception et développement Web",
    description: [
      "Nous concevons et développons votre site web pour mettre en valeur votre expertise et attirer plus de clients",
    ],
    longDescription:
      "Notre service de conception et développement web est conçu pour créer des sites internet sur mesure qui répondent aux besoins uniques de votre entreprise. Que vous soyez une petite entreprise, un professionnel indépendant ou une agence, nous vous aidons à bâtir une présence en ligne performante et efficace.",
    motivations: [
      "Renforcez votre crédibilité avec un site qui inspire confiance.",
      "Attirez de nouveaux clients grâce à un site optimisé.",
      "Démarquez-vous de la concurrence avec un design unique.",
      "Améliorez l’expérience utilisateur avec une navigation intuitive.",
      "Adaptez-vous aux évolutions du marché avec un site flexible.",
      "Maximisez votre retour sur investissement avec des résultats tangibles.",
    ],
    features: [
      {
        title: "Centré sur l'Expérience Utilisateur",
        description:
          "Votre site sera facile à utiliser, permettant des modifications rapides, comme changer un texte ou ajouter une page.",
      },
      {
        title: "Optimisé pour la Conversion",
        description:
          "Nous transformons vos visiteurs en clients fidèles en optimisant chaque détail pour maximiser votre rentabilité.",
      },
      {
        title: "Optimisé pour le Mobile",
        description:
          "Chaque page est adaptée pour une navigation fluide sur mobile, essentielle pour plus de la moitié des utilisateurs.",
      },
      {
        title: "Vitesse et Performance",
        description:
          "Votre site sera rapide et performant, assurant une expérience utilisateur agréable même lors des pics de trafic.",
      },
      {
        title: "Optimisé pour les Moteurs de Recherche",
        description:
          "Votre site sera facilement trouvable, augmentant sa visibilité sur les moteurs de recherche pour attirer plus de visiteurs.",
      },
      {
        title: "Design Moderne",
        description:
          "Votre site sera unique, reflétant parfaitement le style de votre marque avec des polices, des icônes et des couleurs adaptées.",
      },
    ],
  },
  {
    iconPath: "/icons/search.svg",
    title: "Optimisation du Référencement (SEO)",
    description: [
      "Optimisation SEO pour propulser votre site en tête des résultats Google et attirer plus de trafic qualifié.",
    ],
  },
  // {
  //   title: "Optimisation des Sites Web",
  //   description: [
  //     "Vos clients n'aiment pas votre site ? Nous ",

  //     <span key={1} className="font-medium text-dark-primary/90">
  //       améliorons la performance et l&apos;expérience utilisateur
  //     </span>,
  //     " pour les convaincre.",
  //     <br key={2} />,
  //     // <ServiceLink key={3} href="/services/optimisation-sites" />,
  //   ],
  // },
  {
    iconPath: "/icons/refresh.svg",
    title: ["Actualisation des", <br key={0} />, " Sites Web"],
    description: [
      "Nous assurons la mise à jour et l'évolution de votre site pour qu'il reste performant et adapté à vos besoins",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    iconPath: "/icons/conversation.svg",
    title: "Consultation Gratuite",
    description:
      "Nous discutons de votre projet et de vos objectifs lors d'un appel sans engagement.",
  },
  {
    number: "02",
    iconPath: "/icons/vector.svg",
    title: "Conception Sur Mesure",
    description:
      "Nous créons un design unique qui correspond à votre marque et vos besoins.",
  },
  {
    number: "03",
    iconPath: "/icons/code.svg",
    title: "Développement",
    description:
      "Nous construisons votre site avec les meilleures technologies pour des performances optimales.",
  },
  {
    number: "04",
    iconPath: "/icons/shuttle.svg",
    title: "Lancement",
    description:
      "Nous mettons votre site en ligne et nous assurons qu'il fonctionne parfaitement.",
  },
];

export const faq = [
  {
    question: "Combien coûte la création d'un site web ?",
    answer:
      "Le coût varie selon vos besoins spécifiques. Nos tarifs commencent à partir de [prix de base] pour un site vitrine simple. Contactez-nous pour un devis personnalisé gratuit !",
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "En général, un site web simple peut être réalisé en 2-4 semaines. Pour des projets plus complexes comme l'e-commerce, comptez 4-8 semaines. Nous établirons un calendrier précis lors de notre première consultation.",
  },
  {
    question: "Proposez-vous des services d'hébergement web ?",
    answer:
      "Oui, nous offrons des solutions d'hébergement fiables et abordables. Nos forfaits commencent à [prix] par mois et incluent la maintenance de base et les mises à jour de sécurité.",
  },
  {
    question: "Mon site sera-t-il optimisé pour mobile ?",
    answer:
      "Absolument ! Tous nos sites sont conçus avec une approche 'mobile-first' pour garantir une expérience optimale sur tous les appareils.",
  },
  {
    question: "Puis-je mettre à jour mon site moi-même après sa création ?",
    answer:
      "Bien sûr ! Nous utilisons des CMS conviviaux comme WordPress, ce qui vous permet de faire des mises à jour facilement. Nous proposons également une formation gratuite pour vous familiariser avec votre nouveau site.",
  },
  {
    question: "Proposez-vous des services de référencement (SEO) ?",
    answer:
      "Oui, nous intégrons les bonnes pratiques SEO dans tous nos sites. Pour un référencement plus poussé, nous proposons des forfaits SEO sur mesure pour améliorer votre visibilité en ligne.",
  },
  {
    question:
      "Que faire si j'ai besoin d'aide après le lancement de mon site ?",
    answer:
      "Nous sommes là pour vous ! Nous offrons un support technique gratuit pendant le premier mois suivant le lancement. Ensuite, nous proposons des forfaits de maintenance mensuelle adaptés à vos besoins.",
  },
];

export const serviceTypes = [
  { id: "landing-page", label: "Site Vitrine" },
  { id: "e-commerce", label: "Site E-commerce" },
  { id: "reservation", label: "Systeme de Réservation" },
  { id: "inventory", label: "Système de Gestion de Stock" },
  { id: "other", label: "Autre" },
];

export const ctaList = [
  { label: "Surpassez vos concurrents" },
  { label: "Attirez plus de clients" },
  { label: "Boostez votre croissance" },
];
export const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/faq", label: "Questions Fréquentes" },
  { href: "/#contact", label: "Contact" },
];

export const footerServices = [
  { href: "/services/landing-page", label: "Site Vitrine" },
  { href: "/services/e-commerce", label: "Site E-commerce" },
  { href: "/services/managment", label: "Logiciel de Gestion" },
];

export const contactInfos = [
  { label: "agency@support.com", iconPath: "/icons/mail.svg" },
  { label: "Algerie, alger", iconPath: "/icons/location.svg" },
  { label: "Disponible toujours", iconPath: "/icons/24-7.svg" },
];

export const faqPageSections = [
  {
    title: "À propos de nous",
    subtitle: "dlklk ldwqdlqjwkldjqwlk djqwk",
    items: [
      {
        question: "Combien coûte la création d'un site web ?",
        answer:
          "Le coût varie selon vos besoins spécifiques. Nos tarifs commencent à partir de [prix de base] pour un site vitrine simple. Contactez-nous pour un devis personnalisé gratuit !",
      },
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer:
          "En général, un site web simple peut être réalisé en 2-4 semaines. Pour des projets plus complexes comme l'e-commerce, comptez 4-8 semaines. Nous établirons un calendrier précis lors de notre première consultation.",
      },
      {
        question: "Proposez-vous des services d'hébergement web ?",
        answer:
          "Oui, nous offrons des solutions d'hébergement fiables et abordables. Nos forfaits commencent à [prix] par mois et incluent la maintenance de base et les mises à jour de sécurité.",
      },
    ],
  },
  {
    title: "Notre processus de création des sites web",
    subtitle: "dlklk ldwqdlqjwkldjqwlk djqwk",
    items: [
      {
        question: "Combien coûte la création d'un site web ?",
        answer:
          "Le coût varie selon vos besoins spécifiques. Nos tarifs commencent à partir de [prix de base] pour un site vitrine simple. Contactez-nous pour un devis personnalisé gratuit !",
      },
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer:
          "En général, un site web simple peut être réalisé en 2-4 semaines. Pour des projets plus complexes comme l'e-commerce, comptez 4-8 semaines. Nous établirons un calendrier précis lors de notre première consultation.",
      },
      {
        question: "Proposez-vous des services d'hébergement web ?",
        answer:
          "Oui, nous offrons des solutions d'hébergement fiables et abordables. Nos forfaits commencent à [prix] par mois et incluent la maintenance de base et les mises à jour de sécurité.",
      },
    ],
  },
  {
    title: "Tarification et forfaits",
    subtitle: "dlklk ldwqdlqjwkldjqwlk djqwk",
    items: [
      {
        question: "Combien coûte la création d'un site web ?",
        answer:
          "Le coût varie selon vos besoins spécifiques. Nos tarifs commencent à partir de [prix de base] pour un site vitrine simple. Contactez-nous pour un devis personnalisé gratuit !",
      },
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer:
          "En général, un site web simple peut être réalisé en 2-4 semaines. Pour des projets plus complexes comme l'e-commerce, comptez 4-8 semaines. Nous établirons un calendrier précis lors de notre première consultation.",
      },
      {
        question: "Proposez-vous des services d'hébergement web ?",
        answer:
          "Oui, nous offrons des solutions d'hébergement fiables et abordables. Nos forfaits commencent à [prix] par mois et incluent la maintenance de base et les mises à jour de sécurité.",
      },
    ],
  },
  {
    title: "Support et maintenance post-lancement",
    subtitle: "dlklk ldwqdlqjwkldjqwlk djqwk",
    items: [
      {
        question: "Combien coûte la création d'un site web ?",
        answer:
          "Le coût varie selon vos besoins spécifiques. Nos tarifs commencent à partir de [prix de base] pour un site vitrine simple. Contactez-nous pour un devis personnalisé gratuit !",
      },
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer:
          "En général, un site web simple peut être réalisé en 2-4 semaines. Pour des projets plus complexes comme l'e-commerce, comptez 4-8 semaines. Nous établirons un calendrier précis lors de notre première consultation.",
      },
      {
        question: "Proposez-vous des services d'hébergement web ?",
        answer:
          "Oui, nous offrons des solutions d'hébergement fiables et abordables. Nos forfaits commencent à [prix] par mois et incluent la maintenance de base et les mises à jour de sécurité.",
      },
    ],
  },
];
