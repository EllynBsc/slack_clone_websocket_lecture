import consumer from "./consumer";

const initChatroomCable = () => {
  // catch the container of messages
  const messagesContainer = document.getElementById('messages');

  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;
    // data-chatroom-id="<%= @chatroom.id %>"

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        console.log(data); // called when data is broadcast in the cable
        // the data that is passed is my message partial, getting broadcast in the cable from server to client side.
        // i want to append the content of the message into my DOM
        messagesContainer.insertAdjacentHTML('beforeend', data)

      },
    });
  }
}

// modular approach of webpack ES6
// export { nameOfFunction }
export { initChatroomCable };
