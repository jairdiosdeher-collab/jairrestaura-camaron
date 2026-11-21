# JAIRRESTAURA CAMARÓN

Escuela digital gratuita para estudiar y organizar un proyecto de camaronicultura de agua dulce, con enfoque en *Macrobrachium rosenbergii*.

**Lema:** Del aprendizaje a tu primera cosecha.

## Formación ampliada

- 10 módulos y 30 lecciones con objetivos, explicaciones organizadas por temas, actividad práctica, evidencia de aprendizaje, pregunta de reflexión y referencia técnica.
- Evaluación específica de tres preguntas por módulo, con corrección y retroalimentación.
- Proyecto integrador para reunir ocho evidencias: especie y proveedor, evaluación del sitio, diseño conceptual, plan de monitoreo, protocolo de siembra, manejo productivo, presupuesto y formalización/comercialización.
- Glosario y biblioteca de fuentes técnicas e institucionales.
- Seguimiento local de lecciones completadas.

## Módulos

1. Biología y ciclo de vida.
2. Viabilidad y selección del sitio.
3. Diseño de estanques y tanques.
4. Calidad del agua.
5. Postlarvas, transporte y siembra.
6. Alimentación y nutrición.
7. Muestreo, crecimiento y supervivencia.
8. Bioseguridad y bienestar.
9. Cosecha, poscosecha y calidad.
10. Costos, formalización y emprendimiento.

## Herramientas de gestión

- Registro de calidad del agua: temperatura, pH, oxígeno disuelto, alcalinidad, amonio, nitrito y salinidad.
- Historial de mediciones.
- Calculadoras matemáticas: volumen, área, densidad descriptiva, biomasa, ración a partir de tasa externa, supervivencia, mortalidad, conversión alimenticia y punto de equilibrio.
- Perfil de granja y bitácora de alimentación, insumos, siembra, mortalidad, muestreo, cosecha, gastos y ventas.
- Exportación de respaldo JSON.
- PWA instalable y caché offline básico después de la primera carga.

## Acceso y privacidad

- No exige cuenta ni contraseña.
- No incluye pagos, suscripciones ni llaves secretas.
- Progreso, mediciones y bitácora se guardan en el almacenamiento local del navegador.
- No existe sincronización entre dispositivos ni almacenamiento central en la nube.
- Descarga respaldos periódicos. Borrar datos del navegador puede eliminar registros locales.

## Desarrollo

Construida con React y Vite.

```bash
npm install
npm run dev
npm run build
```

Vercel puede desplegar automáticamente los commits de la rama principal si el proyecto está conectado al repositorio.

## Alcance, seguridad y responsabilidad

La plataforma es educativa y de organización. Las calculadoras realizan operaciones matemáticas con los valores introducidos; no prescriben densidades, tasas de alimentación, diseños, tratamientos, resultados productivos ni rentabilidad. Las actividades y listas de trabajo son educativas y no reemplazan inspecciones, diseños firmados, diagnósticos, permisos ni acompañamiento profesional.

Los parámetros, métodos y decisiones productivas dependen de la etapa, sistema, sitio, calidad del agua, procedencia de organismos y normativa aplicable. No se deben aplicar químicos, medicamentos, correctivos ni protocolos de aclimatación por intuición o por copiar cifras de otra granja.

Antes de iniciar un cultivo en Colombia, consulta directamente a AUNAP, ICA y a la autoridad ambiental competente. Verifica permisos de cultivo, registros, uso de agua, vertimientos, movilización, sanidad y comercialización según la actividad, escala y ubicación. Los requisitos y costos pueden cambiar.

## Fuentes técnicas de referencia

- FAO, *Farming freshwater prawns: a manual for the culture of the giant river prawn (Macrobrachium rosenbergii)*: https://www.fao.org/4/y4100e/y4100e.htm
- WorldFish, buenas prácticas para viveros de langostino de agua dulce (2024): consultar el enlace disponible en la biblioteca y verificar la ficha vigente.
- AUNAP, permiso de cultivo: https://aunap.gov.co/permiso-de-cultivo/
- ICA, Registro Pecuario de Establecimientos de Acuicultura: https://www.ica.gov.co/areas/pecuaria/registro-de-predios-ante-el-ica/requisitos-para-el-r-p-e-a.aspx

## Estado de validación

El contenido ampliado se ha incorporado al repositorio. La compilación de producción, descarga del certificado, experiencia móvil y despliegue final deben comprobarse en el entorno de Vercel antes de declarar la plataforma lista para lanzamiento. El certificado es una constancia educativa privada de finalización, no un título oficial, acreditación estatal ni licencia profesional.


## Curso interactivo complementario

- Disponible desde la navegación de la aplicación y en `/curso-completo/`.
- Incluye tres módulos de aprendizaje, comprobaciones, calculadora de escenarios y evaluación final.
- El curso se publica como recurso estático independiente; no reemplaza la escuela completa ni el curso práctico existente.
- El avance usa una clave local independiente del resto de la aplicación.
- La constancia generada es personal y educativa: no es título oficial, licencia profesional, acreditación estatal ni verificación externa.
- Las cifras del archivo de origen que dependían de condiciones de granja se sustituyeron o marcaron como variables que requieren validación local. No deben tomarse como dosis, rangos universales, garantías de supervivencia o promesas de rentabilidad.
