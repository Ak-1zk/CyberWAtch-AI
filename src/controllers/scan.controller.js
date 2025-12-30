const urlAgent = require("../agents/urlAgent");
const emailAgent = require("../agents/emailAgent");
const qrAgent = require("../agents/qrCallAgent");
const riskEngine = require("../agents/riskEngine");

exports.scan = async (req, res) => {
  let totalScore = 0;
  let reasons = [];

  if (req.body.url) {
    const result = await urlAgent.analyzeURL(req.body.url);
    totalScore += result.score;
    reasons.push(...result.reasons);
  }

  if (req.body.text) {
    const result = await emailAgent.analyzeText(req.body.text);
    totalScore += result.score;
    reasons.push(...result.reasons);
  }

  const risk = riskEngine.calculateRisk(totalScore);

  res.json({
    risk,
    score: totalScore,
    reasons
  });
};
