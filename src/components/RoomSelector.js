import React from 'react';

function RoomSelector({ rooms, setRooms }) {
  return (
    <div>
      <label>Rooms:</label>
      <input type="number" min="1" value={rooms} onChange={(e) => setRooms(e.target.value)} />
    </div>
  );
}

export default RoomSelector;
