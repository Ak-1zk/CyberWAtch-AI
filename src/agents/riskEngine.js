exports.calculateRisk = (totalScore) => {
  if (totalScore < 30) return "Safe";
  if (totalScore < 70) return "Warning";
  return "Dangerous";
};
