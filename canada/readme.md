1. Original source `canada-raw.geojson` retrieved from wikidata on 12-29-2017

```
https://maps.wikimedia.org/geoshape?getgeojson=1&arg1=0.0001&query=SELECT%20%0A%20%20%3Fid%0A%20%20%28SAMPLE%28%3Flabel_en%29%20as%20%3Flabel_en%29%0A%20%20%28SAMPLE%28%3Flabel_fr%29%20as%20%3Flabel_fr%29%0A%20%20%28SAMPLE%28%3Fiso_3166_2%29%20as%20%3Fiso_3166_2%29%0AWHERE%20%7B%0A%20%20%23%20You%20can%20put%20several%20space-separated%20entries%20inside%20the%20curly%20braces%0A%20%20%23%20E.g.%20type%20%20wd%3A%20%20and%20hit%20Ctrl%2BSpace%20to%20use%20autocomplete%0A%20%20VALUES%20%3Fentity%20%7B%20wd%3AQ16%20%7D%20%0A%0A%20%20%23%20P150%20%3D%20%22contains%20administrative%20territorial%20entity%22%0A%20%20%23%20but%20must%20not%20have%20a%20P582%20%28end%20date%29%20qualifier%0A%20%20%3Fentity%20p%3AP150%20%3Fstatement%20.%0A%20%20%3Fstatement%20ps%3AP150%20%3Fid%20.%0A%20%20FILTER%20NOT%20EXISTS%20%7B%20%3Fstatement%20pq%3AP582%20%3Fx%20%7D%0A%0A%20%20OPTIONAL%20%7B%20%3Fid%20rdfs%3Alabel%20%3Flabel_en%20.%20FILTER%28LANG%28%3Flabel_en%29%20%3D%20%22en%22%29%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fid%20rdfs%3Alabel%20%3Flabel_fr%20.%20FILTER%28LANG%28%3Flabel_fr%29%20%3D%20%22fr%22%29%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fid%20wdt%3AP300%20%3Fiso_3166_2%20%7D%0A%7D%0A%23%20remove%20possible%20duplicates%0AGROUP%20BY%20%3Fid%0A
```

2. Run `node prep.js`. This outputs `canada.json`





