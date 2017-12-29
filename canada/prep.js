const canadaRaw = require('./canada-raw.json');
const fs = require('fs');

const newFeatures = canadaRaw.features.map(feature => {
  return {
    type: 'Feature',
    properties: {
      iso2: feature.properties.iso_3166_2,
      label_en: feature.properties.label_en,
      label_fr: feature.properties.label_fr
    },
    geometry: feature.geometry
  }
});

canadaRaw.features = newFeatures;
const stringContent = JSON.stringify(canadaRaw);
fs.writeFileSync('canada.json', stringContent);