import React from 'react';

interface KitchenViewProps {
  appliances: string[];
  cabinets: string[];
  countertops: string[];
  flooring: string;
  walls: string;
}

const KitchenView: React.FC<KitchenViewProps> = ({
  appliances,
  cabinets,
  countertops,
  flooring,
  walls,
}) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Kitchen View</h2>
      
      {/* Aplicaciones */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Appliances:</h3>
        <ul className="list-disc pl-5">
          {appliances.map((appliance, index) => (
            <li key={index} className="mb-1">{appliance}</li>
          ))}
        </ul>
      </section>

      {/* Gabinete */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Cabinets:</h3>
        <ul className="list-disc pl-5">
          {cabinets.map((cabinet, index) => (
            <li key={index} className="mb-1">{cabinet}</li>
          ))}
        </ul>
      </section>

      {/* Contornos */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Countertops:</h3>
        <ul className="list-disc pl-5">
          {countertops.map((countertop, index) => (
            <li key={index} className="mb-1">{countertop}</li>
          ))}
        </ul>
      </section>

      {/* Piso */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Flooring:</h3>
        <p className="mt-2">{flooring}</p>
      </section>

      {/* Paredes */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Walls:</h3>
        <p className="mt-2">{walls}</p>
      </section>
    </div>
  );
};

export default KitchenView;
