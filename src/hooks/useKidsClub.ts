import { useState, ChangeEvent, FormEvent } from 'react';

// 1. Definimos la estructura exacta para la inscripción de un niño
export interface KidsClubFormData {
  nombreNino: string;
  edadNino: number;
  actividad: string;
  fecha: string;
  alergias: string; // Dato crucial en reglas de negocio reales
}

export const useKidsClub = () => {
  // 2. Inicializamos la "caja fuerte" de memoria
  const [formData, setFormData] = useState<KidsClubFormData>({
    nombreNino: '',
    edadNino: 4, // Edad mínima típica para Kids Club
    actividad: '',
    fecha: '',
    alergias: '',
  });

  // 3. La función fluida que actualiza el estado según lo que escribes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      // Si el campo es edad, lo convertimos a número; si no, lo dejamos como texto
      [name]: name === 'edadNino' ? Number(value) : value,
    }));
  };

  // 4. El guardián del envío
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Inscripción de Kids Club procesada en .ts:', formData);
    // Aquí validaremos después en el backend si el tutor es Premium/VIP
    alert(`¡Inscripción para ${formData.nombreNino} preparada con éxito! (Revisa la consola)`);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};