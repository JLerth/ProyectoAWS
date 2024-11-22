import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface Cliente{
    id: string;
    nombre: string;
    identificacion: string;
    isActive: boolean;
}

interface ConnectedClients{
    [id: string]: {
        socket: Socket;
        cliente: Cliente;
    }
}

const clientes: Cliente[] = [
    { id: '1', nombre: 'Cliente1', identificacion: '1234567890', isActive: true },
    { id: '2', nombre: 'Cliente2', identificacion: '0987654321', isActive: false },
    { id: '3', nombre: 'Cliente3', identificacion: '1122334455', isActive: true },
]

@Injectable()
export class ClienteService {
    private connectedClients: ConnectedClients = {};

    registerClient(socket: Socket, clientId: string) {
        const cliente = clientes.find(c => c.id === clientId);
        if (!cliente) {
            throw new Error('No se encontro el cliente');
        }
        if (!cliente.isActive){
            throw new Error('El cliente no esta activo');
        }

        this.checkClientConnection(cliente)

        this.connectedClients[socket.id] = {
            socket: socket,
            cliente: cliente
        };
    }
    
    removeClient(clientsId : string) {
        delete this.connectedClients[clientsId];
    }

    getConnectedClients(): string[] {
        return Object.keys(this.connectedClients);
    }

    getClientFullName(socketId: string): string {
        return this.connectedClients[socketId].cliente.nombre;
    }

    checkClientConnection(cliente: Cliente){
        for (const clientsId of Object.keys(this.connectedClients)) {
            const connectedClient = this.connectedClients[clientsId];
            if (connectedClient.cliente.id === cliente.id) {
                connectedClient.socket.disconnect();
                break;
            }
        }
    }
}
