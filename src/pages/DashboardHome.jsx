import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-4">Selamat Datang di Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Total Siswa</h3>
          <p className="text-4xl font-bold text-[#33B77E]">120</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Pembayaran Masuk</h3>
          <p className="text-4xl font-bold text-[#33B77E]">Rp 8.200.000</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Transaksi</h3>
          <p className="text-4xl font-bold text-[#33B77E]">34</p>
        </div>

      </div>
    </DashboardLayout>
  );
}
