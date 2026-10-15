# HMX User Manuals — Purchase Module

Dokumentasi lengkap dan SOP panduan pengguna untuk modul **Purchase (Procurement)** pada sistem ERP HashMicro (HMX). Diformat sebagai manual buku A4 interaktif dengan navigasi sidebar hierarkis, cover page resmi, layout print-to-PDF, dan 204 tangkapan layar berbingkai merah (#e53935).

---

## 📌 Ringkasan Modul

Manual mencakup seluruh proses pengadaan:

1. **Master Configuration**
   - Purchase Settings (toleransi 3-Way Matching, kebijakan kedaluwarsa, batas kredit, penomoran sequence)
   - Order Type (Standard, Subcontracting, Consignment, Service)
   - Order Template
   - Award Strategy Configuration
   - Alur Persetujuan Bertingkat, Sequence Penomoran, dan Template Email

2. **Master Data**
   - Direktori Vendor & Pemasok
   - Kategori Vendor & Verifikasi Dokumen Legalitas
   - Vendor Pricelist & Kesepakatan Harga Bertingkat
   - Pricelist Amendments (Amandemen Harga)
   - Tim Purchasing & Routing Alur Persetujuan
   - Produk, Satuan Ukur (UoM), dan Gudang Penerima

3. **Transaction Lifecycle**
   - Purchase Request (PR): pembuatan, submit, approval, konversi
   - Purchase Request Line & audit saldo siklus hidup
   - Direct Purchase Order (DPO)
   - Request for Quotation (RFQ): pengiriman email, matriks perbandingan penawaran, konversi ke PO
   - Purchase Order (PO): konfirmasi, penerimaan, penagihan, revisi siklus
   - Blanket Order (Perjanjian Jangka Panjang & Call-Off RFQ)
   - Purchase Tender (bidding, alokasi strategi pemenang, persetujuan dan PO)
   - Pre-Kualifikasi Vendor & Kepatuhan Legal
   - Receiving Notes (Goods Receipt): verifikasi lot/lokasi gudang dan rekonsiliasi kuantitas
   - Billing & Settlement: Vendor Bills, Down Payment (Uang Muka), dan Settlement Bills pelunasan
   - Integrasi Subcontracting & Manufacturing Order

4. **Reporting & Analytics**
   - Analisis Perbandingan RFQ
   - Matriks Pelacakan Dokumen Pengadaan
   - Progres Penerimaan Barang
   - Audit Penagihan & Pembayaran
   - Audit Tender & Keputusan Pemenang
   - Evaluasi Kinerja Vendor & Lead Time
   - Dashboard Eksekutif Purchase Intelligence

5. **Lampiran**
   - Glosarium Istilah Pengadaan
   - Panduan Troubleshooting Masalah Umum
   - Frequently Asked Questions (FAQ)

---

## 🚀 Menjalankan Dokumentasi dengan Docker

### Menjalankan Container

```bash
docker compose up -d --build
```

Aplikasi web akan aktif melayani dokumentasi pada port `3021`:
- URL: `http://localhost:3021/` atau `http://<IP-SERVER>:3021/`

### Menghentikan Container

```bash
docker compose down
```

---

## 👥 Kredit & Kontributor

Seluruh kode sumber manual HTML, penyusunan langkah operasional, pengambilan dan pembingkaian 204 tangkapan layar berbingkai merah, struktur repositori Git, dan proses deployment dikerjakan secara otomatis oleh **Hermes Agent**.
