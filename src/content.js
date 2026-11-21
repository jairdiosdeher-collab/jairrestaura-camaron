export const modules = [
{ id:"M01", title:"Biología y ciclo de vida", level:"Fundamentos", time:"45 min", objective:"Reconocer la especie y sus etapas.", lessons:[
["Identificación de la especie","Macrobrachium rosenbergii es un crustáceo decápodo de agua dulce en sus fases juveniles y adultas. No debe confundirse con camarones marinos ni con otras especies nativas. Antes de comprar organismos, confirma identificación taxonómica, origen y documentación."],
["Ciclo de vida","El ciclo incluye huevo, larvas planctónicas que requieren agua salobre en hatchery, metamorfosis a postlarva, juvenil y adulto. La fase larvaria no equivale al engorde en agua dulce: producir postlarvas requiere instalaciones y manejo especializado."],
["Morfología y comportamiento","Reconoce rostro, abdomen, telson, pereiópodos y quelípedos. Los machos pueden mostrar crecimiento desigual y jerarquías; refugios y sustratos pueden influir en interacción y aprovechamiento del espacio."]
]},
{ id:"M02", title:"Viabilidad y selección del sitio", level:"Planificación", time:"50 min", objective:"Decidir si el proyecto merece avanzar antes de invertir.", lessons:[
["Mercado antes de infraestructura","Entrevista compradores potenciales. Registra talla requerida, presentación, volumen semanal, precio de referencia, estacionalidad, condiciones de pago, transporte y requisitos sanitarios. Una conversación no es una venta asegurada."],
["Agua, suelo y clima","Analiza disponibilidad durante todo el año, calidad, contaminación agrícola, suelo, drenaje, inundación, temperatura estacional, energía y acceso. Envía muestras a laboratorio cuando corresponda."],
["Decisión por etapas","Construye un presupuesto con cotizaciones reales y reserva capital para contingencias. No compres postlarvas ni construyas antes de confirmar agua, permisos, asistencia técnica y salida comercial."]
]},
{ id:"M03", title:"Diseño de estanques y tanques", level:"Infraestructura", time:"60 min", objective:"Comprender componentes de un sistema y sus riesgos.", lessons:[
["Estanques en tierra","Evalúa topografía, textura y permeabilidad del suelo, profundidad útil, taludes, entrada, salida, drenaje total, protección contra inundaciones y posibilidad de cosecha. El diseño final requiere levantamiento y cálculo profesional."],
["Tanques y geomembrana","Considera resistencia del soporte, protección contra perforaciones, drenaje de fondo, rebose, aireación, filtración, acceso para limpieza y manejo seguro. La geomembrana no corrige una mala hidráulica."],
["Agua, bombeo y aireación","Dimensiona bombas y aireadores según caudal, altura, biomasa prevista, respaldo eléctrico y riesgo de falla. Prevé alarmas, energía de emergencia y procedimientos escritos."]
]},
{ id:"M04", title:"Calidad del agua", level:"Manejo técnico", time:"60 min", objective:"Crear una rutina de medición y respuesta documentada.", lessons:[
["Parámetros básicos","Registra temperatura, oxígeno disuelto, pH, alcalinidad, transparencia, salinidad cuando aplique, amonio total y nitrito. Anota hora, punto, profundidad, instrumento y calibración."],
["Variación diaria","El oxígeno y el pH pueden variar durante el día y la noche. Mide especialmente al amanecer y al final de la tarde, y aumenta vigilancia ante calor, nubosidad, floraciones, sobrealimentación o comportamiento anormal."],
["Manejo de desviaciones","No corrijas parámetros a ciegas. Confirma medición, revisa aireación, flujo, alimento y mortalidad; consulta al profesional responsable. Evita cambios bruscos de agua, pH, temperatura o salinidad."]
]},
{ id:"M05", title:"Postlarvas, transporte y siembra", level:"Producción", time:"55 min", objective:"Planificar recepción y aclimatación sin improvisar.", lessons:[
["Origen y trazabilidad","Compra únicamente a un proveedor cuya identidad, especie, origen, estado sanitario y documentación puedas verificar. Solicita factura, lote, fecha, cantidad, talla y condiciones de transporte."],
["Recepción y aclimatación","Prepara agua y sistema antes de recibir el lote. Compara temperatura y parámetros del agua de transporte y destino; sigue un protocolo específico del proveedor y del técnico. No existe un tiempo universal válido para todos los casos."],
["Densidad de siembra","La densidad depende del sistema, talla, refugios, aireación, recambio, manejo y experiencia. No uses una calculadora genérica ni cifras de otra granja como receta."]
]},
{ id:"M06", title:"Alimentación y nutrición", level:"Producción", time:"50 min", objective:"Registrar alimento y ajustar por observación y biomasa.", lessons:[
["Nutrición por etapa","Selecciona alimento formulado para la especie y etapa, verificando etiqueta, composición, tamaño de pellet, almacenamiento, lote y vencimiento. La dieta de larvas no es la misma del engorde."],
["Biomasa y ración","Estima biomasa con muestreos representativos y calcula ración solo a partir de una tasa definida por el fabricante o técnico. La app permite hacer la operación matemática, pero no prescribe el porcentaje."],
["Control del consumo","Usa bandejas o puntos de observación, registra sobrantes, ajusta gradualmente y evita alimento deteriorado. El exceso de materia orgánica deteriora el agua."]
]},
{ id:"M07", title:"Muestreo, crecimiento y supervivencia", level:"Producción", time:"55 min", objective:"Medir el desempeño real del lote.", lessons:[
["Muestreo representativo","Define frecuencia y método con el técnico. Registra número de animales, peso individual, talla, lugar, fecha y equipo. Evita sesgos por capturar solo los individuos más grandes."],
["Biomasa y crecimiento","Biomasa estimada = número estimado de animales vivos × peso promedio. Compara lotes y periodos; documenta cómo estimaste la población y el peso."],
["Mortalidad y supervivencia","Registra mortalidad diaria, disposición segura, posible causa y acciones. Supervivencia estimada = animales vivos / animales sembrados × 100. No atribuyas una causa sin evaluación."]
]},
{ id:"M08", title:"Bioseguridad y bienestar", level:"Sanidad", time:"50 min", objective:"Reducir riesgos sanitarios y ambientales.", lessons:[
["Prevención","Controla ingreso de personas, equipos, animales silvestres, agua y organismos. Limpia y desinfecta equipos con productos y procedimientos apropiados; evita compartir utensilios entre lotes sin tratamiento."],
["Observación y mortalidad","Observa apetito, nado, muda, lesiones, distribución y mortalidad. Aísla equipos y consulta a un profesional. No mediques ni apliques químicos por recomendaciones informales."],
["Residuos y escapes","Diseña filtros y barreras para evitar escapes, maneja lodos y mortalidades responsablemente y no liberes organismos al ambiente. Verifica obligaciones ambientales locales."]
]},
{ id:"M09", title:"Cosecha, poscosecha y calidad", level:"Comercialización", time:"45 min", objective:"Preparar una cosecha trazable y segura.", lessons:[
["Plan de cosecha","Confirma talla, volumen, comprador, fecha, hielo, agua, personal, equipos y transporte. Programa la cosecha con base en muestreos y pedidos confirmados."],
["Manejo del producto","Mantén higiene, cadena de frío y separación de producto no conforme. Cumple requisitos sanitarios aplicables y registra lote, hora, peso, destino y transporte."],
["Balance de producción","Compara cantidad sembrada, mortalidad, inventario estimado, cosecha y diferencias. Investiga desviaciones antes de cerrar el ciclo."]
]},
{ id:"M10", title:"Costos, formalización y emprendimiento", level:"Gestión", time:"60 min", objective:"Evaluar rentabilidad y obligaciones sin asumir resultados.", lessons:[
["Costos completos","Incluye adecuación, equipos, energía, agua, postlarvas, alimento, mano de obra, mantenimiento, análisis, empaque, transporte, mortalidad, financiación e imprevistos."],
["Punto de equilibrio","Punto de equilibrio en kg = costos fijos / (precio neto por kg − costo variable por kg). Si el margen de contribución es cero o negativo, no hay punto de equilibrio viable con esos supuestos."],
["Formalización en Colombia","Consulta AUNAP sobre permiso de cultivo y ICA sobre registro del establecimiento acuícola. Revisa con autoridad ambiental concesión de aguas y vertimientos según tu caso. Los trámites dependen de actividad, escala, ubicación y destino."]
]}
];
export const glossary = [
["Alevino/juvenil","Etapa posterior a postlarva; no usar como sinónimo exacto de larva."],
["Biomasa","Peso total estimado de los organismos vivos del lote."],
["Conversión alimenticia","Relación entre alimento suministrado y aumento de biomasa; debe calcularse con registros consistentes."],
["Densidad","Número de organismos por unidad de área o volumen; debe especificarse unidad y etapa."],
["Oxígeno disuelto","Oxígeno disponible en el agua, normalmente expresado en mg/L."],
["Postlarva (PL)","Etapa posterior a la metamorfosis larvaria."],
["Trazabilidad","Capacidad de reconstruir origen, lote, manejo, movimientos y destino."],
["Alcalinidad","Capacidad del agua para neutralizar ácidos; no equivale a pH."]
];
export const sources = [
{title:"FAO — Farming freshwater prawns: manual for Macrobrachium rosenbergii",org:"FAO, Documento técnico 428",url:"https://www.fao.org/4/y4100e/y4100e.htm",note:"Manual técnico integral sobre biología, selección de sitio, hatchery, postlarvas, engorde, alimentación y cosecha."},
{title:"WorldFish — Buenas prácticas en viveros de langostino de agua dulce",org:"A. Tandon, 2024",url:"https://hdl.handle.net/20.500.12348/5971",note:"Manual reciente sobre preparación, aclimatación, siembra, calidad de agua, alimentación, muestreo, sanidad y cosecha."},
{title:"AUNAP — Permiso de cultivo para especies acuáticas",org:"Autoridad Nacional de Acuicultura y Pesca",url:"https://aunap.gov.co/permiso-de-cultivo/",note:"Información oficial del trámite. Verifica requisitos, vigencia y costos directamente con AUNAP."},
{title:"ICA — Requisitos para el Registro Pecuario de Establecimientos de Acuicultura",org:"Instituto Colombiano Agropecuario",url:"https://www.ica.gov.co/areas/pecuaria/registro-de-predios-ante-el-ica/requisitos-para-el-r-p-e-a.aspx",note:"Requisitos oficiales del registro del establecimiento; consulta la versión vigente antes de tramitar."},
{title:"MinAmbiente — Uso y aprovechamiento del agua",org:"Ministerio de Ambiente y Desarrollo Sostenible",url:"https://minambiente.gov.co/index.php/gestion-integral-del-recurso-hidrico/administracion-del-recurso-hidrico/demanda/uso-y-aprovechamiento-del-agua",note:"Orientación general sobre derechos de uso del agua. Consulta la autoridad ambiental competente para el predio."}
];
