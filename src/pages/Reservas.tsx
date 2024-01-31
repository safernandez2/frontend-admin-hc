import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import * as reservasApi from '../services/reservasApi';

interface DataType {
  key: string;
  reservaid: number;
  habitacionid: number;
  nombreCliente: string;
  correoCliente: string;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
  numeroCliente: string;
}

const ReservasTable: React.FC = () => {
  
  const [data, setData] = useState<DataType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const obtenerDatosReservas = async () => {
    try {
      const reservas = await reservasApi.fetchReservas();
      const reservasFormateadas: DataType[] = reservas.map((reserva) => ({
        key: reserva.reservaid.toString(),
        reservaid:reserva.reservaid,
        habitacionid: reserva.habitacionid,
        nombreCliente: reserva.nombreCliente,
        correoCliente: reserva.correoCliente,
        fechaInicio: reserva.fechaInicio,
        fechaFin: reserva.fechaFin,
        estado: reserva.estado,
        numeroCliente: reserva.numeroCliente,
      }));

      setData(reservasFormateadas);
    } catch (error) {
      console.error('Error al obtener datos de habitaciones:', error);
    }
  };

  useEffect(() => {
    obtenerDatosReservas();
  }, []);

  const actualizarDatos = async () => {
    await obtenerDatosReservas();
  };

  const handleEditSuccess = () => {
    setModalVisible(false);
    actualizarDatos();
  };

  const columns: ColumnsType<DataType> = [
    {
        title: 'ReservaID',
        dataIndex: 'reservaid',
        key: 'reservaid',
    },
    {
      title: 'HabitacionID',
      dataIndex: 'habitacionid',
      key: 'habitacionid',
    },
    {
      title: 'Nombre del cliente',
      dataIndex: 'nombreCliente',
      key: 'nombreCliente',
    },
    {
      title: 'Numero del cliente',
      dataIndex: 'numeroCliente',
      key: 'numeroCliente',
    },
    {
      title: 'Correo del cliente',
      dataIndex: 'correoCliente',
      key: 'correoCliente',
    },
    {
      title: 'Fecha de Inicio',
      dataIndex: 'fechaInicio',
      key: 'fechaInicio',
    },
    {
      title: 'Fecha de Fin',
      dataIndex: 'fechaFin',
      key: 'fechaFin',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
    },
  ];

  return (
    <>
     
      <Table columns={columns} dataSource={data} />
      {modalVisible && (
        <Modal
          title="Editar Habitación"
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          
        </Modal>
      )}
    </>
  );
};

export default ReservasTable;
