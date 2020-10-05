import React, { usestate } from "react";
// import React from "react";

const Home = () => {
  const [count, setCount] = usestate(0);

  return (
    <div>
      <p>Hello</p>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
};

export default Home;

// import React, { Component } from "react";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     //move hub intialization into constructor
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount = () => {
// console.log("home component did mount")
//   };

//   searchMessages = () => {
//     console.log("message");
//     let payload = {
//       userId: this.state.currentUser.userId,
//       targetUserId: this.state.targetUserId,
//       pageIndex: this.state.messagePageIndex,
//       pageSize: this.state.messagePageSize,
//       query: this.state.query,
//     };

//     MessageServices.searchMessagesByTargetId(
//       payload.userId,
//       payload.targetUserId,
//       payload.pageIndex,
//       payload.pageSize,
//       payload.query
//     )
//       .then(this.getMessagesSuccess)
//       .catch(this.getMessagesError);
//   };

//   getContactMessages = () => {
//     let payload = {
//       userId: this.state.currentUser.userId,
//       targetUserId: this.state.targetUserId,
//       pageIndex: this.state.messagePageIndex,
//       pageSize: this.state.messagePageSize,
//     };

//     MessageServices.getMessagesByTargetId(
//       payload.userId,
//       payload.targetUserId,
//       payload.pageIndex,
//       payload.pageSize
//     )
//       .then(this.getMessagesSuccess)
//       .catch(this.getMessagesError);
//   };

//   signalRConnection = () => {
//     const hubConnection = new HubConnectionBuilder()
//       .withUrl("http://localhost:50000/chat")
//       .configureLogging(LogLevel.Trace)
//       .build();

//     hubConnection
//       .start()
//       .then(() => console.log("Connection started!"))
//       .catch((err) =>
//         console.log("Error while establishing connection :(", err)
//       );

//     hubConnection.on("ReceiveMessage", (message, firstName) => {
//       const text = `${firstName}: ${message}`;
//       const messages = this.state.messages.concat([text]);
//       if (messages.length) {
//         this.setState({ messages });
//       }
//     });
//     return hubConnection;
//   };

//   getMessagesSuccess = (data) => {
//     this.setState((prevState) => {
//       let newState = { ...prevState };
//       newState.messages = data.item.pagedItems;
//       newState.hasContactMessages = true;
//       return newState;
//     });
//   };

//   getMessagesError = (data) => {
//     console.log("error", data);
//   };

//   sendMessageSuccess = () => {
//     this.getContactMessages();
//   };

//   genericError = (error) => {
//     console.log("error", error);
//   };

//   // sendGroupMessage = () => {
//   //   this.state.hubConnection
//   //     .invoke("Conversation", 123, 157)
//   //     .catch(err => console.error(err));

//   //   this.setState({ message: "" });
//   // };

//   sendGroupMessage = () => {
//     let messageObject = {
//       user1Id: 123,
//       user2Id: 123,
//       conversation: "a string",
//     };
//     this.state.hubConnection
//       .invoke("SendPrivateMessage", messageObject)
//       .catch((err) => console.error(err));

//     this.setState({ message: "" });
//   };

//   // sendGroupMessage = () => {
//   //   this.state.hubConnection
//   //     .invoke(
//   //       "SendPrivateMessage",
//   //       this.state.currentUser.userId,
//   //       this.state.targetUserId,
//   //       this.state.message
//   //     )
//   //     .catch(err => console.error(err));

//   //   this.setState({ message: "" });
//   // };

//   render() {
//     return (
//       <div>
//         <p>Hello</p>
//       </div>
//     );
//   }
// }

// export default Home;
