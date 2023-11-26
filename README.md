# Configure ts-node to consume d.ts files

Situation:
- tsconfig.json has `strict: true` which implies `noImplicitAny: true`
- want to import and use a module `@garmin/fitsdk` which does not export types

Solution:
- write d.ts file with `declare module @garmin/fitsdk`
- put in a location 
- the location should be included in tsconfig.json 'include' array
- Important: Set `{ ts-node: { files: true }}` in tsconfig.json


