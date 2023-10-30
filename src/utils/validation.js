const validateTypeVehicule = (typeVehicule) => {
  return typeVehicule !== "";
};

const validateEnergie = (energie) => {
  return energie !== "";
};

const validateKilometrage = (kilometrage) => {
  return kilometrage !== "";
};

const validateAnnee = (annee) => {
  return annee !== "";
};

const validatePassagers = (passagers) => {
  return passagers >= 1 && passagers <= 4;
};

export {
  validateTypeVehicule,
  validateEnergie,
  validateKilometrage,
  validateAnnee,
  validatePassagers,
};
