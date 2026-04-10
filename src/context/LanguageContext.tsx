"use client";

import { createContext, useContext, useState } from "react";

export type Language = "en" | "pt";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
