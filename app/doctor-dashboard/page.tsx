
"use client"

export default function DoctorDashboard() {
  const name = typeof window !== "undefined" ? localStorage.getItem("doctorName") : "Doctor"

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700">Welcome {name} 👋</h1>
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <p className="text-lg">Aaj ki Appointments: <b>0</b></p>
        <p className="mt-2 text-gray-500">Ye Dummy Dashboard hai.</p>
      </div>
    </div>
  )
}
