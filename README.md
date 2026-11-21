# JAIRRESTAURA CAMARÓN

Plataforma educativa gratuita para aprender y organizar un proyecto de camaronicultura de agua dulce, con enfoque de estudio en *Macrobrachium rosenbergii*.

**Lema:** Del aprendizaje a tu primera cosecha.

## Funciones incorporadas

- Escuela con 10 módulos y 30 lecciones formativas.
- Repaso de conocimientos por módulo.
- Seguimiento local del progreso.
- Registro de calidad del agua: temperatura, pH, oxígeno disuelto, alcalinidad, amonio, nitrito y salinidad.
- Historial de mediciones.
- Calculadoras independientes: volumen, área, densidad descriptiva, biomasa, ración matemática, supervivencia, mortalidad, conversión alimenticia y punto de equilibrio.
- Perfil básico de granja.
- Bitácora de alimentación, insumos, siembra, mortalidad, muestreo, cosecha, gastos y ventas.
- Exportación de respaldo en JSON.
- Biblioteca técnica con enlaces a FAO, WorldFish, AUNAP e ICA.
- Diseño adaptable a escritorio y celular.
- Aplicación instalable (PWA) y caché offline básico después de la primera carga.

## Acceso y privacidad

- No exige cuenta ni contraseña.
- No incluye pagos, suscripciones, API de pago ni llaves secretas.
- El progreso, las mediciones y la bitácora se guardan en el almacenamiento local del navegador.
- No hay sincronización entre dispositivos ni almacenamiento central en la nube.
- Descarga respaldos periódicos desde la aplicación. Borrar datos del navegador puede eliminar los registros locales.

## Desarrollo

Construida con React y Vite.

```bash
npm install
npm run dev
npm run build
```

Vercel puede desplegar automáticamente los commits de la rama principal si el proyecto está conectado al repositorio.

## Alcance técnico y responsabilidad

La plataforma es educativa y de organización. Las calculadoras realizan operaciones matemáticas con los valores introducidos; no prescriben densidades, tasas de alimentación, diseños, tratamientos, resultados productivos ni rentabilidad. La viabilidad depende de las condiciones del sitio, calidad y continuidad del agua, infraestructura, especie, procedencia legal de organismos, asistencia técnica, mercado y requisitos vigentes.

Antes de iniciar un cultivo en Colombia, consulta directamente a AUNAP, ICA y a la autoridad ambiental competente. Los requisitos pueden depender del tipo y escala de la actividad y de la ubicación.

## Fuentes técnicas de referencia

- FAO, *Farming freshwater prawns: a manual for the culture of the giant river prawn (Macrobrachium rosenbergii)*.
- WorldFish, *Better management practices for rearing freshwater prawn in a nursery pond* (2024).
- AUNAP, permiso de cultivo para especies acuáticas.
- ICA, Registro Pecuario de Establecimientos de Acuicultura (RPEA).
