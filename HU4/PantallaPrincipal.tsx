import React, { useState } from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText
} from '@ionic/react';

import PantallaProductos from '../components/PantallaProductos';
import EncabezadoFactura from '../components/EncabezadoFactura';
import TiposDePago from '../components/Tiposdepago';

const productosMock = [
  { id: 1, nombre: 'Camisa', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 40 },
  { id: 3, nombre: 'Zapatos', precio: 60 }
];

// 👇 NUEVO tipo para el cliente
interface Cliente {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
}

const PantallaPrincipal: React.FC = () => {
  // 👇 cliente es ahora un objeto con más datos
  const [cliente, setCliente] = useState<Cliente>({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  });

  const [metodoPago, setMetodoPago] = useState('');
  const [carrito, setCarrito] = useState<typeof productosMock>([]);

  const agregarAlCarrito = (producto: { id: number; nombre: string; precio: number }) => {
    setCarrito([...carrito, producto]);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const generarFactura = () => {
    if (
      !cliente.nombre ||
      !cliente.correo ||
      !cliente.telefono ||
      !cliente.direccion ||
      !metodoPago ||
      carrito.length === 0
    ) {
      alert('Por favor complete todos los campos del cliente, seleccione un método de pago y agregue al menos un producto.');
      return;
    }

    alert(
      `Factura generada para ${cliente.nombre}.\n` +
      `Correo: ${cliente.correo}\nTeléfono: ${cliente.telefono}\nDirección: ${cliente.direccion}\n` +
      `Método de pago: ${metodoPago}\nTotal: $${total}`
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Generar Factura</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>

          {/* Factura */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Datos del Cliente</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <EncabezadoFactura setCliente={setCliente} />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Método de Pago */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Seleccionar Método de Pago</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <TiposDePago setMetodoPago={setMetodoPago} />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Productos */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Productos Disponibles</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <PantallaProductos productos={productosMock} agregarAlCarrito={agregarAlCarrito} />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Carrito */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Carrito de Compras</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {carrito.length === 0 ? (
                    <IonText color="medium">No hay productos en el carrito.</IonText>
                  ) : (
                    <IonList>
                      {carrito.map((item, index) => (
                        <IonItem key={index}>
                          <IonLabel>{item.nombre} - ${item.precio}</IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                  )}
                  <IonText className="ion-margin-top"><strong>Total: ${total}</strong></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Botón de Generar Factura */}
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton color="success" expand="block" onClick={generarFactura}>
                Generar Factura
              </IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PantallaPrincipal;