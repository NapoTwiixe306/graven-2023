import React, { useState, useRef, useEffect } from "react";
import { calculerScoreVehicule, calculerTauxEmprunt } from "../utils/calcul";
import {
  validateTypeVehicule,
  validateEnergie,
  validateKilometrage,
  validateAnnee,
  validatePassagers,
} from "../utils/validation";
import gsap from "gsap";
import Select from "./Select";
import options from "../utils/json/option.json";

const SimulateurEmprunt = () => {
  const [typeVehicule, setTypeVehicule] = useState("");
  const [energie, setEnergie] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [annee, setAnnee] = useState("");
  const [passagers, setPassagers] = useState(1);
  const [tauxEmprunt, setTauxEmprunt] = useState(null);

  const handleCalculate = () => {
    if (
      validateTypeVehicule(typeVehicule) &&
      validateEnergie(energie) &&
      validateKilometrage(kilometrage) &&
      validateAnnee(annee) &&
      validatePassagers(passagers)
    ) {
      const scoreVehicule = calculerScoreVehicule(
        typeVehicule,
        energie,
        kilometrage,
        annee,
      );
      const taux = calculerTauxEmprunt(scoreVehicule, passagers);
      setTauxEmprunt(taux.toFixed(2));
    } else {
      alert("Veuillez remplir tous les champs correctement.");
    }
  };
  const optionsTypeVehicule = options.typeVehicule;
  const optionsEnergie = options.energie;
  const optionsKilometrage = options.kilometrage;
  const optionsAnnee = options.annee;
  const optionsPassagers = options.passagers;
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      containerRef.current, 
      {
        opacity: 0, 
        y: "-50px", 
      },
      {
        opacity: 1,
        y: "500px",
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);
  
  return (
    <div className="main" ref={containerRef}>
      <div className="simulateur-emprunt">
      <h1>Simulateur d'emprunt pour l'achat d'une voiture</h1>
      <Select
        options={optionsTypeVehicule}
        onChange={(e) => setTypeVehicule(e.target.value)}
        placeholder="Sélectionnez le type de véhicule"
      />
      <Select
        options={optionsEnergie}
        onChange={(e) => setEnergie(e.target.value)}
        placeholder="Sélectionnez le type d'énergie"
      />
      <Select
        options={optionsKilometrage}
        onChange={(e) => setKilometrage(e.target.value)}
        placeholder="Sélectionnez le kilométrage"
      />
      <Select
        options={optionsAnnee}
        onChange={(e) => setAnnee(e.target.value)}
        placeholder="Sélectionnez l'année"
      />
      <Select
        options={optionsPassagers}
        onChange={(e) => setPassagers(parseInt(e.target.value))}
        placeholder="Sélectionnez le nombre de passagers"
      />
      <button className="button type1" onClick={handleCalculate}>
        <span className="btn-txt">Calculer le taux d'emprunt</span>
      </button>
      {tauxEmprunt && <p>Taux d'emprunt : {tauxEmprunt}%</p>}
    </div>
    </div>
  );
};

export default SimulateurEmprunt;
