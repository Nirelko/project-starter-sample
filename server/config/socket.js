import socketio from 'socket.io';
import socketioJwt from 'socketio-jwt';
import _ from 'lodash';

// inject:socket-imports
import todoSocket from '../api/todo/todo.socket';

export default server => {
  const socketServer = socketio(server, {
    serveClient: false,
    path: '/ws'
  });

  socketServer.on('connection', socketioJwt.authorize({
    secret: process.env.SESSION_SECRET,
    timeout: 15000
  }));

  const getSockets = (filter = () => true) => _.values(socketServer.sockets.connected)
    .filter(socket => socket.decoded_token)
    .filter(({decoded_token: {_id}}) => filter(_id));

  // inject:socket-usage
  todoSocket(getSockets);
};