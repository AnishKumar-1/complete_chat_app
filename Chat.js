import React, { useEffect, useState } from 'react'


function Chat({socket}) {
  const [message, setmessage] = useState('');
  const [receivemessage, setreceivemessage] = useState([]);
  const sendmessage = async () => {
    if (message !== "") {
      await socket.emit('send_message', message);
      setreceivemessage(list => [...list, message]);
    }
    setmessage('');
  }
  useEffect(() => {
    socket.on('receive_message', (receive_data) => {
      setreceivemessage(list => [...list, receive_data]);
    })
  }, [socket])
  return (
    <div className='input-container'>
      <div className='header'>
        <p>Live chat</p>
        {message ? <p className='typing'>typing..</p> : ""}
      </div>
      <div className='sub-input-container'>
        {receivemessage.map((value, index) => {
          return <div className='text-container' key={index}><h1>{value}</h1></div>
        })}
      </div>
      <div className='input-button'>
        <input type="text" className='inp' placeholder='message...' value={message} onChange={(e) => setmessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendmessage()}
        />
        <button onClick={sendmessage}>send message</button>

      </div>

    </div>
  )
}

export default Chat
