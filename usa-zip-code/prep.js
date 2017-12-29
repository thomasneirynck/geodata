const zipsRaw = require('./zips_us_topo.json');
const fs = require('fs');

const newGeometries = zipsRaw.objects["zip_codes_for_the_usa"].geometries.map(geometry => {
  const newProps = {
    zip: geometry.properties.zip
  };
  geometry.properties = newProps;
  return geometry;
});

zipsRaw.objects["zip_codes_for_the_usa"].geometries = newGeometries;


zipsRaw.objects["data"] = zipsRaw.objects["zip_codes_for_the_usa"];
delete zipsRaw.objects["zip_codes_for_the_usa"];

const stringContent = JSON.stringify(zipsRaw);
fs.writeFileSync('usa_zips.json', stringContent);