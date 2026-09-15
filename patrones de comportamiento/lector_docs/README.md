# lector_docs — Notes

Short note about TypeScript Node types:

- Se añadió `"node"` en la opción `types` de `tsconfig.json` para que TypeScript reconozca los módulos con prefijo `node:`, por ejemplo `node:fs/promises`.
- También se instaló la dependencia de desarrollo `@types/node` (ya presente en `devDependencies`).

Para reconstruir el proyecto:

```bash
pnpm install
pnpm run build
```

Si quieres revertir el cambio, elimina `"node"` del arreglo `types` en [tsconfig.json](tsconfig.json).
