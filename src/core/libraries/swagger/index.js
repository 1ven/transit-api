import yaml from "yaml-js";
import jsonRef from "json-refs";
import fs from "fs";
import path from "path";

const root = path.resolve(
  process.cwd(),
  "src/core/application/swagger/index.yaml"
);

export const load = async () => {
  const swaggerFile = yaml.load(fs.readFileSync(root));

  const { resolved } = await jsonRef.resolveRefs(swaggerFile, {
    filter: ["relative"],
    location: root,
    loaderOptions: {
      processContent: function(res, callback) {
        callback(null, yaml.load(res.text));
      }
    }
  });

  return resolved;
};
