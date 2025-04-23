import React, { useState, useEffect } from 'react';
import { IonItem, IonLabel, IonInput, IonList } from '@ionic/react';

interface Cliente {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
}

interface Props {
  setCliente: (cliente: Cliente) => void;
}

const EncabezadoFactura: React.FC<Props> = ({ setCliente }) => {
  const [cliente, setClienteState] = useState<Cliente>({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
  });

  useEffect(() => {
    setCliente(cliente);
  }, [cliente, setCliente]);

  const handleChange = (campo: keyof Cliente, valor: string) => {
    setClienteState((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  return (
    <IonList>
      <IonItem>
        <IonLabel position="floating">Nombre:</IonLabel>
        <IonInput
          value={cliente.nombre}
          onIonChange={(e) => handleChange('nombre', e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Correo Electrónico:</IonLabel>
        <IonInput
          type="email"
          value={cliente.correo}
          onIonChange={(e) => handleChange('correo', e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Teléfono:</IonLabel>
        <IonInput
          type="tel"
          value={cliente.telefono}
          onIonChange={(e) => handleChange('telefono', e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Dirección:</IonLabel>
        <IonInput
          value={cliente.direccion}
          onIonChange={(e) => handleChange('direccion', e.detail.value!)}
        />
      </IonItem>
    </IonList>
  );
};

export default EncabezadoFactura;
