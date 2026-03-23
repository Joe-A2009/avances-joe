import { useState, ChangeEvent, FormEvent } from 'react';

// Definimos la estructura de datos
export interface ReservaFormData {
  fecha: string;
  turno: string;
  personas: number;
  tipoServicio: string;
}

// Exportamos nuestra lógica como un "Custom Hook"
export const useReservaRestaurante = () => {
  const [formData, setFormData] = useState<ReservaFormData>({
    fecha: '',
    turno: '',
    personas: 1,
    tipoServicio: '',
  });

  // Lógica para manejar cambios en el formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'personas' ? Number(value) : value,
    }));
  };

  // Lógica para enviar a la base de datos (API en el futuro)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Lógica ejecutada en .ts! Datos listos:', formData);
    // Aquí haremos el fetch a tu backend de Next.js más adelante
  };

  // Retornamos solo lo que la interfaz necesita para funcionar
  return {
    formData,
    handleChange,
    handleSubmit
  };
};