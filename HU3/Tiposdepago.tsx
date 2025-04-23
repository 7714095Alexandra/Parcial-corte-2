import React, { useState } from 'react';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

interface Props {
  setMetodoPago: (metodo: string) => void;
}

const TiposDePago: React.FC<Props> = ({ setMetodoPago }) => {
  const [seleccionado, setSeleccionado] = useState('');

  const seleccionarMetodo = (metodo: string) => {
    setMetodoPago(metodo);
    setSeleccionado(metodo);
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <IonButton
            expand="block"
            color={seleccionado === 'Tarjeta' ? 'primary' : 'medium'}
            onClick={() => seleccionarMetodo('Tarjeta')}
          >
            Tarjeta
          </IonButton>
        </IonCol>
        <IonCol size="4">
          <IonButton
            expand="block"
            color={seleccionado === 'Efectivo' ? 'primary' : 'medium'}
            onClick={() => seleccionarMetodo('Efectivo')}
          >
            Efectivo
          </IonButton>
        </IonCol>
        <IonCol size="4">
          <IonButton
            expand="block"
            color={seleccionado === 'Transferencia' ? 'primary' : 'medium'}
            onClick={() => seleccionarMetodo('Transferencia')}
          >
            Transferencia
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TiposDePago;
