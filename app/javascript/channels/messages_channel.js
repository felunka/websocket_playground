import consumer from "./consumer"

consumer.subscriptions.create("MessagesChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    this.renderMessage(data.message);
  },

  renderMessage(messageText) {
    let card = document.createElement('div');
    $(card).addClass('card');
    let cardBody = document.createElement('div');
    $(cardBody).addClass('card-body');
    $(cardBody).text(messageText);
    $(card).append(cardBody);

    $('.message-log').append(card);
  }
});
