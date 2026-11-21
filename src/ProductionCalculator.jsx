import React,{useMemo,useState} from 'react';
import {Calculator,Info} from 'lucide-react';
import './production-calculator.css';

const money=n=>Number(n||0).toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});
const number=n=>Number(n||0).toLocaleString('es-CO',{maximumFractionDigits:2});
const initial={area:'',density:'',survival:'',weight:'',fcr:'',plCost:'',feedBagCost:'',otherCosts:'',salePrice:''};

export default function ProductionCalculator(){
 const [v,setV]=useState(initial);
 const set=(key,value)=>setV(old=>({...old,[key]:value}));
 const ready=Object.values(v).every(x=>x.trim()!=='')&&Object.values(v).every(x=>Number.isFinite(Number(x))&&Number(x)>=0)&&Number(v.area)>0&&Number(v.density)>0&&Number(v.weight)>0&&Number(v.fcr)>0&&Number(v.survival)<=100;
 const r=useMemo(()=>{
  if(!ready)return null;
  const area=Number(v.area),density=Number(v.density),survival=Number(v.survival)/100,weight=Number(v.weight),fcr=Number(v.fcr);
  const postlarvae=area*density,plCost=postlarvae*Number(v.plCost),harvested=postlarvae*survival,biomass=harvested*weight/1000;
  const feedKg=biomass*fcr,bags=Math.ceil(feedKg/40),feedCost=bags*Number(v.feedBagCost);
  const costs=plCost+feedCost+Number(v.otherCosts),revenue=biomass*Number(v.salePrice),profit=revenue-costs;
  return {postlarvae,biomass,feedKg,bags,plCost,feedCost,other:Number(v.otherCosts),costs,revenue,profit,costPerKg:biomass>0?costs/biomass:0,margin:revenue>0?profit/revenue*100:0};
 },[v,ready]);
 const fields=[
  ['area','Área del estanque','m²','1000'],['density','Densidad de siembra','PL/m²','12'],['survival','Supervivencia estimada','%','75'],['weight','Peso promedio de cosecha','g','35'],['fcr','Factor de conversión alimenticia (FCA)','relación','1.6'],['plCost','Costo por postlarva','COP','120'],['feedBagCost','Costo del bulto de alimento (40 kg)','COP','165000'],['otherCosts','Otros costos del ciclo','COP','1800000'],['salePrice','Precio de venta estimado por kg','COP','32000']
 ];
 return <section className="panel production-calc">
  <div className="calc-icon"><Calculator/></div><span className="eyebrow">HERRAMIENTA ADICIONAL · VERSIÓN INTEGRADA</span>
  <h3>Simulador de producción y escenario económico</h3>
  <p className="muted">Calcula un escenario matemático con tus propios datos. Los valores de ejemplo son orientativos y no constituyen recomendaciones técnicas, precios vigentes ni una promesa de rentabilidad.</p>
  <div className="form-grid production-fields">{fields.map(([key,label,unit,placeholder])=><label className="field" key={key}><span>{label}<small>{unit}</small></span><input type="number" min="0" step="any" value={v[key]} placeholder={placeholder} onChange={e=>set(key,e.target.value)}/></label>)}</div>
  {r?<><div className="production-results">
   <div className="result"><span>Postlarvas estimadas</span><b>{number(r.postlarvae)}</b></div>
   <div className="result"><span>Biomasa estimada</span><b>{number(r.biomass)} kg</b></div>
   <div className="result"><span>Alimento teórico</span><b>{number(r.feedKg)} kg · {r.bags} bultos</b></div>
   <div className="result"><span>Costo estimado por kg</span><b>{money(r.costPerKg)}</b></div>
   <div className="result"><span>Ingresos brutos estimados</span><b>{money(r.revenue)}</b></div>
   <div className="result"><span>Costos incluidos</span><b>{money(r.costs)}</b></div>
   <div className="result"><span>Resultado antes de costos no incluidos</span><b className={r.profit>=0?'production-positive':'production-negative'}>{money(r.profit)}</b></div>
   <div className="result"><span>Margen sobre ingresos</span><b>{number(r.margin)}%</b></div>
  </div><div className="production-breakdown"><b>Desglose considerado</b><span>Postlarvas: {money(r.plCost)} · Alimento: {money(r.feedCost)} · Otros: {money(r.other)}</span></div></>:<div className="production-empty"><Info size={17}/> Completa todos los campos con datos de tu escenario para ver el cálculo. El área, densidad, peso, FCA y demás variables deben ser definidos o validados por el equipo técnico y cotizaciones reales.</div>}
  <div className="notice"><Info/><p>Modelo simplificado adaptado de la versión adjunta: supervivencia aplicada a la siembra; biomasa = supervivientes × peso; alimento = biomasa × FCA; bultos de 40 kg redondeados hacia arriba. No incluye mano de obra detallada, energía, agua, análisis, transporte, hielo, empaque, impuestos, financiación, depreciación, mortalidad adicional ni variaciones de precio. No usar como presupuesto definitivo ni como recomendación de densidad o manejo.</p></div>
 </section>;
}
