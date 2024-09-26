import { serviceTypes } from "@/data";
import React from "react";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-3 rounded-md text-light-secondary">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nom et prénom</label>
        <input
          id="name"
          name="name"
          required
          className="p-3 rounded-sm  outline-none border-[1px] border-border-color/10 bg-mid-tone text-dark-primary"
        />
      </div>

      

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Votre adresse e-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="p-3 rounded-sm outline-none border-[1px] border-border-color/10 bg-mid-tone text-dark-primary" 
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone">Votre numéro de téléphone</label>
        <input
          id="phone"
          name="phone"
          required
          className="p-3 rounded-sm outline-none border-[1px] border-border-color/10 bg-mid-tone text-dark-primary"
        />
      </div>

     
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Détails du projet</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="resize-none p-3 rounded-sm outline-none border-[1px] border-border-color/10 bg-mid-tone text-dark-primary"
        />
      </div>

      <button className="mt-6 bg-highlight text-white uppercase font-heading font-semibold p-3 rounded-sm">
        Demander un devis
      </button>
    </form>
  );
}
