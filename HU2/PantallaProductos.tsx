// src/components/PantallaProductos.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

interface Props {
  productos: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
}

const PantallaProductos: React.FC<Props> = ({ productos, agregarAlCarrito }) => {
  return (
    <>
      {productos.map(producto => (
        <IonCard key={producto.id}>
          <IonCardHeader>
            <IonCardTitle>{producto.nombre} - ${producto.precio}</IonCardTitle>
            <IonButton expand="block" onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </IonButton>
          </IonCardHeader>
        </IonCard>
      ))}
    </>
  );
};

export default PantallaProductos;
  