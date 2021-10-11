/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import objectKeys from "all-object-keys";
import editJsonFile from "edit-json-file";
import snakeCase from "lodash/snakeCase";
import path from "path";

export const getValueForSetting = (keyPath, defaultValue) => {
  const variableName = keyPath
    .split(/\./g)
    .map(snakeCase)
    .join("_")
    .toUpperCase();
  return process.env[variableName] || defaultValue;
};

const createConfigFile = () => {
  try {
    const configFile = editJsonFile(
      path.join(__dirname, "../src/shared/environments/environments.json")
    );
    objectKeys(configFile.get()).forEach((keyPath) =>
      configFile.set(
        keyPath,
        getValueForSetting(keyPath, configFile.get(keyPath))
      )
    );

    configFile.save();
  } catch (error) {
    console.error("Unexpected error generating the config file", error);
    throw error;
  }
};

createConfigFile();
