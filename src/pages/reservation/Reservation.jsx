import React, { useState } from "react"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import foto from '../../assets/blog/Mint.png'

// Redux Slice
const reservationSlice = createSlice({
  name: "reservation",
  initialState: { firstName: "", lastName: "", email: "", phone: "", date: "", time: "6:00 pm", guests: "2 Person" },
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      return { ...state, firstName: "", lastName: "", email: "", phone: "", date: "", time: "6:00 pm", guests: "2 Person" };
    }
  }
})

const { updateField, resetForm } = reservationSlice.actions;
const store = configureStore({ reducer: { reservation: reservationSlice.reducer } })
// const [phone, setPhone] = useState("+996");
const ReservationForm = () => {
  const [formData, setFormData] = useState({ 
    firstName: "", lastName: "", email: "", phone: "+996", date: "", time: "6:00 pm", guests: "2 Person"
  });

  const [error, setError] = useState("") // Ошибка

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    // Проверяем, заполнены ли все поля
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.date) {
      setError("Сначала заполните все поля!")
      return
    }

    setError(""); // Очищение ошибок, если всё заполнено

    // Подтверждение бронирования
    const confirmBooking = confirm("Вы уверены, что хотите забронировать?")
    if (confirmBooking) {
      alert("Вы успешно забронировали!")
    } else {
      alert("Бронирование отменено.")
    }
  }

  return (
    <div className="p-8 w-[1000px]">
      <div>
        <img src={foto} className="w-[250px] ml-[90px]" alt="Mint"/>
      </div>
      <h2 className="text-[55px] font-black text-center mt-[-110px]" style={{ fontFamily: "Rufina, serif" }}>Make a Reservation</h2>
      <p className="text-[#4D4D4D] mb-10 ml-[235px]">Get in touch with restaurant</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] bg-[#FFFFFF]"/>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] bg-[#FFFFFF]"/>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] bg-[#FFFFFF]"/>
        <input type="tel" name="phone" placeholder="+996XXXXXXXXX" value={formData.phone} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] bg-[#FFFFFF]"/>
        </div>
        {/* <input
              type="tel"
              value={phone}
              // value={formData.phone} 
              onChange={(e) => setPhone(e.target.value)}
              className="border border-b-black p-2 rounded-md w-full h-[50px] bg-[#FFFFFF]"
              placeholder="+996XXXXXXXXX"
            /> */}
        
        <div className="grid grid-cols-2 gap-4">
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] cursor-pointer bg-[#FFFFFF]"/>
          <select name="time" value={formData.time} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] cursor-pointer bg-[#FFFFFF]">
            <option>6:00 pm</option>
            <option>7:00 pm</option>
            <option>8:00 pm</option>
            <option>9:00 pm</option>
            <option>10:00 pm</option>
          </select>
        </div>

        <select name="guests" value={formData.guests} onChange={handleChange} className="border border-b-black p-2 rounded-md w-full h-[50px] cursor-pointer bg-[#FFFFFF]">
          <option>2 Person</option>
          <option>3 Person</option>
          <option>4 Person</option>
          <option>5 Person</option>
          <option>6 Person</option>
        </select>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>} {/* Вывод ошибки */}

        <button type="submit" className="bg-[#707a00] text-[17px] font-semibold cursor-pointer text-white w-[170px] h-[50px] py-2 mt-6 ml-[380px] hover:bg-[#394e01] transition duration-300">Book Now</button>
      </form>
    </div>
  )
}

const Reservation = () => (
  <Provider store={store}>
    <div className="bg-[#EBF0E4] flex items-center justify-center w-[1400px] m-auto ">
      <ReservationForm />
    </div>
  </Provider>
)

export default Reservation
