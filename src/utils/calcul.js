const calculerScoreVehicule = (typeVehicule, energie, kilometrage, annee) => {
  let score = 0;

  // Calcul du score en fonction du type de véhicule
  if (typeVehicule === "Citadine") {
    score += 8;
  } else if (typeVehicule === "Cabriolet") {
    score += 6;
  } else if (typeVehicule === "Berline") {
    score += 5.5;
  } else if (typeVehicule === "SUV/4X4") {
    score += 4;
  }

  // Calcul du score en fonction de l'énergie
  if (energie === "Essence") {
    score += 5;
  } else if (energie === "Electrique") {
    score += 9;
  } else if (energie === "Gaz") {
    score += 6;
  } else if (energie === "Diesel") {
    score += 4;
  } else if (energie === "Hybride") {
    score += 7;
  }

  // Calcul du score en fonction du kilométrage
  if (kilometrage === "5-10K/km") {
    score += 9;
  } else if (kilometrage === "10-15K/km") {
    score += 7;
  } else if (kilometrage === "15-20K/km") {
    score += 5;
  } else if (kilometrage === "20-25K/km") {
    score += 3;
  } else if (kilometrage === "25-30K/km") {
    score += 1;
  }

  // Calcul du score en fonction de l'année
  if (annee === "1960-1970") {
    score += 1;
  } else if (annee === "1970-1980") {
    score += 2;
  } else if (annee === "1990-2000") {
    score += 4;
  } else if (annee === "2000-2010") {
    score += 5;
  } else if (annee === "Après 2010") {
    score += 7;
  }

  return score;
};

const calculerTauxEmprunt = (scoreVehicule, passagers) => {
  let taux = 0;
  if (scoreVehicule >= 0 && scoreVehicule <= 10) {
    taux = 3;
  } else if (scoreVehicule >= 11 && scoreVehicule <= 15) {
    taux = 2.74;
  } else if (scoreVehicule >= 16 && scoreVehicule <= 25) {
    taux = 2.52;
  } else if (scoreVehicule >= 26 && scoreVehicule <= 33) {
    taux = 2.1;
  } else if (scoreVehicule >= 34 && scoreVehicule <= 40) {
    taux = 1.85;
  }

  // Appliquer le taux en fonction du nombre de passagers
  taux +=
    passagers === 1
      ? 0.11
      : passagers === 2
      ? -0.17
      : passagers === 3
      ? -0.29
      : -0.53;

  return taux;
};

export { calculerScoreVehicule, calculerTauxEmprunt };
