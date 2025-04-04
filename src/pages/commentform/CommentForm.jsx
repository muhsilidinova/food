import React, { useState } from "react"

const CommentForm = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  })

  // Обработчик изменения инпутов
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData)
    alert("Comment submitted!")
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center mb-4">Leave a Reply</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Поле для комментария */}
        <div>
          <label className="block font-semibold">Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Поле для имени */}
        <div>
          <label className="block font-semibold">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Поле для email */}
        <div>
          <label className="block font-semibold">Email*</label>
          <input type="email"name="email"value={formData.email}onChange={handleChange}className="w-full p-2 border border-gray-300 rounded-md"required/>
        </div>

        {/* Поле для сайта */}
        <div>
          <label className="block font-semibold">Website</label>
          <input type="url"name="website"value={formData.website}onChange={handleChange}className="w-full p-2 border border-gray-300 rounded-md"/>
        </div>

        {/* Кнопка отправки */}
        <button type="submit"className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition">Post Comment</button>
      </form>
    </div>
  )
}

export default CommentForm

