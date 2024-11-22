import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ClienteService } from './cliente.service';
import { Server, Socket } from 'socket.io';
import { messageDto } from './dto/mensaje.dto';

@WebSocketGateway({cors: true})
export class ClienteGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer()
  wss: Server;

  constructor(private readonly clienteService: ClienteService) {}

  async handleConnection(clients: Socket, ...args: any[]) {
    const token = clients.handshake.headers.authentication as string;

    try {
      await this.clienteService.registerClient(clients, token);
    } catch (error) {
      clients.disconnect();
      return;
    }

    this.wss.emit('clients-updated', this.clienteService.getConnectedClients());
  }

  handleDisconnect(clients: Socket) {
    this.clienteService.removeClient(clients.id);
    this.wss.emit('clients-updated', this.clienteService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async registrarGasto(clients: Socket, payload: messageDto) {
    this.wss.emit('message-from-server', {
      fullName: this.clienteService.getClientFullName(clients.id),
      message: payload.message || 'No message',
    });
  }
}