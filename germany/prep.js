const germanyRaw = require('./germany-raw.json');
const fs = require('fs');

const newFeatures = germanyRaw.features.map(feature => {
  return {
    type: 'Feature',
    properties: {
      iso2: feature.properties.iso_3166_2,
      label_en: feature.properties.label_en,
      label_de: feature.properties.label_de
    },
    geometry: feature.geometry
  }
});

germanyRaw.features = newFeatures;
const stringContent = JSON.stringify(germanyRaw);
fs.writeFileSync('germany.json', stringContent);