/**
 * HMX Purchase Manual - Complete Dual-Language Localization Engine
 * English (EN) & Bahasa Indonesia (ID)
 * Covers: TOC, Headings, Overviews, Prerequisites, Steps, Tables, Captions, UI
 */
(function() {
  'use strict';

  // 0. Parse and store initial language immediately
  try {
    const initParams = new URLSearchParams(window.location.search || '');
    const initLang = initParams.get('lang');
    if (initLang === 'id' || initLang === 'en') {
      localStorage.setItem('hmx_manual_lang', initLang);
    }
  } catch(e) {}

  // 1. Dictionaries for TOC & Section Titles (both bare and numbered)
  
  // Vendor Portal Bidirectional Dictionary
  const I18N_VENDOR_MAP = {
    'Tentang Vendor Portal & Prasyarat': 'About Vendor Portal & Prerequisites',
    'V.1 Tentang HMX Vendor Portal & Prasyarat Sistem': 'V.1 About HMX Vendor Portal & System Prerequisites',
    'Pendaftaran Vendor Baru (6 Langkah)': 'New Vendor Registration (6 Steps)',
    'V.2 Pendaftaran Vendor Baru (6 Langkah Kepatuhan Legal & Bank)': 'V.2 New Vendor Registration (6 Legal & Bank Compliance Steps)',
    'Masuk & Autentikasi (Login)': 'Sign In & Authentication (Login)',
    'V.3 Masuk & Autentikasi Vendor Portal (Login & Keamanan)': 'V.3 Sign In & Authentication (Login & Security)',
    'Dasbor & Ruang Kerja Vendor': 'Vendor Workspace & Dashboard',
    'V.4 Dasbor & Ruang Kerja Vendor (Vendor Workspace)': 'V.4 Vendor Workspace & Dashboard',
    'Partisipasi Tender (Tender Purchase)': 'Tender Participation (Purchase Tender & E-Auction)',
    'V.5 Partisipasi Tender Pembelian (Purchase Tender & E-Auction)': 'V.5 Tender Participation (Purchase Tender & E-Auction)',
    'Permintaan Penawaran Harga (RFQ)': 'Request for Quotation (RFQ)',
    'V.6 Permintaan Penawaran Harga (Request for Quotation / RFQ)': 'V.6 Request for Quotation (RFQ)',
    'Pesanan Pembelian (PO) & Cetak PDF': 'Purchase Orders (PO) & PDF Download',
    'V.7 Pesanan Pembelian (Purchase Order) & Unduh Dokumen': 'V.7 Purchase Orders (PO) & Document Download',
    'Alur Integrasi (Vendor ↔ Company)': 'End-to-End Integration Flow (Vendor ↔ Company)',
    'V.8 Analisis Alur Integrasi End-to-End (Vendor ↔ Company)': 'V.8 End-to-End Integration Flow Analysis (Vendor ↔ Company)',
    'Penanganan Kendala (Troubleshooting)': 'Troubleshooting Guide',
    'V.9 Panduan Penanganan Kendala (Troubleshooting) Vendor Portal': 'V.9 Vendor Portal Troubleshooting Guide'
  };

  const I18N_TOC = {
    
    'Cover': 'Sampul Depan',
    'Copyright': 'Hak Cipta',
    'Basic Configuration': 'Konfigurasi Dasar',
    'User Flow': 'Alur Kerja Pengguna (User Flow)',
    'Purchase': 'Modul Pembelian (Purchase Overview)',
    'Master Configuration': 'Konfigurasi Master',
    '1 Master Configuration': '1 Konfigurasi Master',
    'Purchase Settings': 'Pengaturan Pembelian',
    '1.1 Purchase Settings': '1.1 Pengaturan Pembelian',
    'Order Type': 'Tipe Pesanan',
    '1.2 Order Type': '1.2 Tipe Pesanan',
    'Order Template': 'Template Pesanan',
    '1.3 Order Template': '1.3 Template Pesanan',
    'Award Strategy Config': 'Konfigurasi Strategi Pemenang',
    '1.4 Award Strategy Config': '1.4 Konfigurasi Strategi Pemenang',
    'Approval, Sequence & Mail Templates': 'Persetujuan, Penomoran & Template Email',
    '1.5 Approval, Sequence & Mail Templates': '1.5 Persetujuan, Penomoran & Template Email',
    'Master Data': 'Data Master',
    '2 Master Data': '2 Data Master',
    'Vendors': 'Direktori Vendor & Pemasok',
    '2.1 Vendors': '2.1 Direktori Vendor & Pemasok',
    'Vendor Category & Legal Document': 'Kategori Vendor & Dokumen Legal',
    '2.2 Vendor Category & Legal Document': '2.2 Kategori Vendor & Dokumen Legal',
    'Vendor Pricelist': 'Daftar Harga Vendor',
    '2.3 Vendor Pricelist': '2.3 Daftar Harga Vendor',
    'Pricelist Amendments': 'Amandemen Daftar Harga',
    '2.4 Pricelist Amendments': '2.4 Amandemen Daftar Harga',
    'Purchase Teams': 'Tim Pembelian',
    '2.5 Purchase Teams': '2.5 Tim Pembelian',
    'Products & Destination Warehouse': 'Produk & Gudang Tujuan',
    '2.6 Products & Destination Warehouse': '2.6 Produk & Gudang Tujuan',
    'Transaction': 'Transaksi Pembelian',
    '3 Transaction': '3 Transaksi Pembelian',
    'Purchase Request': 'Permintaan Pembelian (PR)',
    '3.1 Purchase Request': '3.1 Permintaan Pembelian (PR)',
    'Create Purchase Request': 'Buat Permintaan Pembelian',
    '3.1.1 Create Purchase Request': '3.1.1 Buat Permintaan Pembelian',
    'Submit & Approve Request': 'Ajukan & Setujui Permintaan',
    '3.1.2 Submit & Approve Request': '3.1.2 Ajukan & Setujui Permintaan',
    'Convert to RFQ or Blanket Order': 'Konversi ke RFQ atau Blanket Order',
    '3.1.3 Convert to RFQ or Blanket Order': '3.1.3 Konversi ke RFQ atau Blanket Order',
    'Purchase Request Line': 'Baris Permintaan Pembelian',
    '3.2 Purchase Request Line': '3.2 Baris Permintaan Pembelian',
    'Direct Purchase': 'Pembelian Langsung (Direct Purchase)',
    '3.3 Direct Purchase': '3.3 Pembelian Langsung (Direct Purchase)',
    'Request for Quotation': 'Permintaan Penawaran Harga (RFQ)',
    '3.4 Request for Quotation': '3.4 Permintaan Penawaran Harga (RFQ)',
    'Send RFQ': 'Kirim RFQ ke Vendor',
    '3.4.1 Send RFQ': '3.4.1 Kirim RFQ ke Vendor',
    'Compare RFQ': 'Bandingkan Penawaran RFQ',
    '3.4.2 Compare RFQ': '3.4.2 Bandingkan Penawaran RFQ',
    'Convert RFQ to Purchase Order': 'Konversi RFQ ke Pesanan Pembelian (PO)',
    '3.4.3 Convert RFQ to Purchase Order': '3.4.3 Konversi RFQ ke Pesanan Pembelian (PO)',
    'Purchase Order': 'Pesanan Pembelian (PO)',
    '3.5 Purchase Order': '3.5 Pesanan Pembelian (PO)',
    'Confirm Purchase Order': 'Konfirmasi Pesanan Pembelian',
    '3.5.1 Confirm Purchase Order': '3.5.1 Konfirmasi Pesanan Pembelian',
    'Create Goods Receipt (Receiving Note)': 'Buat Penerimaan Barang (Goods Receipt)',
    'Create Receiving Note': 'Buat Penerimaan Barang (Goods Receipt)',
    '3.5.2 Create Goods Receipt (Receiving Note)': '3.5.2 Buat Penerimaan Barang (Goods Receipt)',
    'Create Vendor Bill': 'Buat Tagihan Vendor (Vendor Bill)',
    '3.5.3 Create Vendor Bill': '3.5.3 Buat Tagihan Vendor (Vendor Bill)',
    'Revise Close or Cancel': 'Revisi, Tutup atau Batalkan PO',
    'Revise, Close or Cancel': 'Revisi, Tutup atau Batalkan PO',
    '3.5.4 Revise Close or Cancel': '3.5.4 Revisi, Tutup atau Batalkan PO',
    'Blanket Order': 'Perjanjian Pengadaan (Blanket Order)',
    '3.6 Blanket Order': '3.6 Perjanjian Pengadaan (Blanket Order)',
    'Create Blanket Agreement': 'Buat Perjanjian Blanket',
    '3.6.1 Create Blanket Agreement': '3.6.1 Buat Perjanjian Blanket',
    'Release RFQ from Blanket Order': 'Rilis RFQ dari Blanket Order',
    '3.6.2 Release RFQ from Blanket Order': '3.6.2 Rilis RFQ dari Blanket Order',
    'Purchase Tender': 'Tender Pembelian',
    '3.7 Purchase Tender': '3.7 Tender Pembelian',
    'Submit Bid': 'Masukkan Penawaran Tender',
    '3.7.1 Submit Bid': '3.7.1 Masukkan Penawaran Tender',
    'Apply Award Strategy': 'Terapkan Strategi Pemenang',
    '3.7.2 Apply Award Strategy': '3.7.2 Terapkan Strategi Pemenang',
    'Approve Award Decision': 'Setujui Keputusan Pemenang',
    '3.7.3 Approve Award Decision': '3.7.3 Setujui Keputusan Pemenang',
    'Pre-Qualification & Document Reviews': 'Pra-Kualifikasi & Review Dokumen',
    '3.8 Pre-Qualification & Document Reviews': '3.8 Pra-Kualifikasi & Review Dokumen',
    'Receiving Notes': 'Penerimaan Barang (Receiving Notes)',
    '3.9 Receiving Notes': '3.9 Penerimaan Barang (Receiving Notes)',
    'Create RN from PO': 'Buat Penerimaan Barang dari PO',
    '3.9.1 Create RN from PO': '3.9.1 Buat Penerimaan Barang dari PO',
    'Validate Receiving': 'Validasi Penerimaan Barang',
    '3.9.2 Validate Receiving': '3.9.2 Validasi Penerimaan Barang',
    'Review Remaining Quantity': 'Tinjau Sisa Kuantitas',
    '3.9.3 Review Remaining Quantity': '3.9.3 Tinjau Sisa Kuantitas',
    'Billing & Settlement': 'Penagihan & Pelunasan Faktur',
    '3.10 Billing & Settlement': '3.10 Penagihan & Pelunasan Faktur',
    'Full Payment Invoice': 'Faktur Pembayaran Penuh & Uang Muka (DP)',
    '3.10.2 Full Payment Invoice': '3.10.2 Faktur Pembayaran Penuh & Uang Muka (DP)',
    'Settlement Bill': 'Tagihan Pelunasan (Settlement Bill)',
    '3.10.3 Settlement Bill': '3.10.3 Tagihan Pelunasan (Settlement Bill)',
    'Manufacturing/Subcontracting Integration': 'Integrasi Manufaktur & Subkontrak',
    '3.11 Manufacturing/Subcontracting Integration': '3.11 Integrasi Manufaktur & Subkontrak',
    'Reporting': 'Laporan & Analitik Pembelian',
    '4 Reporting': '4 Laporan & Analitik Pembelian',
    'RFQ Comparison': 'Perbandingan Penawaran RFQ',
    '4.1 RFQ Comparison': '4.1 Perbandingan Penawaran RFQ',
    'Compare Vendor Offers': 'Bandingkan Penawaran Vendor',
    '4.1.1 Compare Vendor Offers': '4.1.1 Bandingkan Penawaran Vendor',
    'Purchase Document Tracking': 'Pelacakan Dokumen Pembelian',
    '4.2 Purchase Document Tracking': '4.2 Pelacakan Dokumen Pembelian',
    'Receiving Progress': 'Progres Penerimaan Barang',
    '4.3 Receiving Progress': '4.3 Progres Penerimaan Barang',
    'Billing Review': 'Tinjauan Penagihan & Pembayaran',
    '4.4 Billing Review': '4.4 Tinjauan Penagihan & Pembayaran',
    'Tender Audit & Award Review': 'Audit Tender & Penentuan Pemenang',
    '4.5 Tender Audit & Award Review': '4.5 Audit Tender & Penentuan Pemenang',
    'Vendor Performance': 'Kinerja Vendor',
    '4.6 Vendor Performance': '4.6 Kinerja Vendor',
    'Review Vendor Lead Time': 'Tinjau Waktu Tunggu (Lead Time) Vendor',
    '4.6.1 Review Vendor Lead Time': '4.6.1 Tinjau Waktu Tunggu (Lead Time) Vendor',
    'Purchase Intelligence': 'Dasbor Purchase Intelligence',
    '4.7 Purchase Intelligence': '4.7 Dasbor Purchase Intelligence',
    'Glossary': 'Glosarium Istilah',
    'A Glossary': 'A Glosarium Istilah',
    'Troubleshooting': 'Penanganan Masalah',
    'B Troubleshooting': 'B Panduan Penanganan Masalah',
    'FAQ': 'Pertanyaan yang Sering Diajukan (FAQ)',
    'C FAQ': 'C Pertanyaan yang Sering Diajukan (FAQ)'
  };

  const I18N_HEADINGS = {
    'Overview': 'Gambaran Umum',
    'Prerequisites': 'Prasyarat',
    'Step-by-Step Instructions': 'Panduan Langkah Demi Langkah',
    'Status and Result Guide': 'Panduan Status dan Kontrol Hasil',
    'Field Reference': 'Referensi Kolom & Bidang Form',
    'Common Scenarios': 'Skenario Kerja Umum',
    'Troubleshooting': 'Penanganan Masalah & Kendala'
  };

  const I18N_TABLE_HEADERS = {
    'Status / Result': 'Status / Hasil',
    'What it means': 'Arti Status',
    'Trigger': 'Pemicu / Kejadian',
    'What to do': 'Tindakan Pengguna',
    'Field': 'Nama Kolom / Bidang',
    'Required': 'Wajib Diisi',
    'Description': 'Deskripsi / Fungsi',
    'Example or note': 'Contoh / Catatan Penggunaan',
    'Scenario': 'Skenario',
    'When to Use': 'Kapan Digunakan',
    'Key Steps': 'Langkah Kunci',
    'Expected Result': 'Hasil yang Diharapkan',
    'Issue': 'Kendala / Masalah',
    'Possible Cause': 'Kemungkinan Penyebab',
    'How to fix it': 'Cara Penanganan & Solusi',
    'Probable Cause': 'Kemungkinan Penyebab',
    'Resolution': 'Solusi Perbaikan'
  };

  const I18N_TERMS = {
    'Draft': 'Draft (Konsep)',
    'Confirmed': 'Dikonfirmasi',
    'Approved': 'Disetujui',
    'Done': 'Selesai',
    'Cancelled': 'Dibatalkan',
    'Rejected': 'Ditolak',
    'In Progress': 'Sedang Diproses',
    'Sent': 'Terkirim',
    'Yes': 'Ya',
    'No': 'Tidak',
    'Reference': 'Referensi',
    'Date': 'Tanggal',
    'Selection': 'Pilihan (Selection)',
    'Integer': 'Angka Bulat (Integer)',
    'Float / Decimal': 'Desimal (Float)',
    'Char / Text': 'Teks (Char/Text)',
    'Boolean': 'Pilihan Ya/Tidak (Boolean)'
  };

  const I18N_OVERVIEWS = {
    'sec-ch5-1-1': 'Gunakan Pengaturan Pembelian untuk menentukan aturan dasar kode vendor, kontrol batas kredit, revisi PO, masa berlaku dokumen, penerimaan barang, dan validasi tagihan. Halaman ini berfungsi sebagai titik pemeriksaan pertama sebelum transaksi Pembelian dijalankan.',
    'sec-ch5-1-2': 'Gunakan Tipe Pesanan untuk mengarahkan pengguna ke alur pembelian yang tepat. Fitur ini dapat membatasi perusahaan dan kategori produk mana saja yang diizinkan menggunakan tipe tertentu.',
    'sec-ch5-1-3': 'Gunakan Template Pesanan untuk pembelian berulang. Template ini dapat mengisi otomatis vendor, tipe pesanan, dan baris produk sehingga staf pembelian memulai dari struktur yang sudah siap daripada formulir kosong.',
    'sec-ch5-1-4': 'Gunakan Konfigurasi Strategi Pemenang saat pemenang tender memerlukan pembagian kuota yang jelas antar pemasok yang diperingkat. Pengaturan ini membantu tim menentukan porsi kuantitas yang dialokasikan ke masing-masing vendor pemenang.',
    'sec-ch5-1-5': 'Bagian ini menjelaskan tata kelola sistem di balik persetujuan Pembelian, penomoran dokumen, email RFQ, otomasi terjadwal, dan persetujuan Blanket Order. Administrator menyiapkan aturan ini sebelum pengguna membuat Permintaan Pembelian, RFQ, Pembelian Langsung, Blanket Order, Daftar Harga Vendor, atau Target KPI.',
    'sec-ch5-2-1': 'Gunakan Direktori Vendor untuk menyimpan data pemasok yang siap digunakan dalam pengadaan: identitas, kelayakan pembelian, kategori, dokumen legalitas, status blacklist, riwayat persetujuan, dan batas kredit. Pastikan data vendor aktif dan dalam status disetujui.',
    'sec-ch5-2-2': 'Gunakan Kategori Vendor untuk mengelompokkan pemasok berdasarkan cakupan bisnis. Kategori ini dapat digunakan kembali pada formulir vendor, aturan dokumen legal, dan rute tim pembelian. Gunakan Dokumen Legal untuk menentukan berkas wajib vendor dan apakah dokumen yang belum lengkap dapat memblokir transaksi.',
    'sec-ch5-2-3': 'Gunakan Daftar Harga Vendor untuk menyiapkan harga khusus pemasok: vendor, perusahaan, cabang, mata uang, periode berlaku, item produk, UoM, rincian item vendor, harga satuan, lead time, penegakan MOQ, dan tingkatan kuantitas. Formulir dapat diedit saat status Draft dan aktif setelah disetujui.',
    'sec-ch5-2-4': 'Gunakan Amandemen Daftar Harga saat Daftar Harga Vendor yang aktif memerlukan perubahan terkontrol. Pengguna tidak membuat data amandemen langsung dari daftar, melainkan melakukan perubahan pada item atau tingkatan harga di daftar harga aktif, kemudian mengajukannya melalui wizard Request Amendment.',
    'sec-ch5-2-5': 'Gunakan Tim Pembelian untuk mengelompokkan staf pengadaan, menetapkan ketua dan anggota tim, mengatur aturan alur dokumen, dan memantau beban kerja pembelian. Tim Pembelian digunakan oleh Permintaan Pembelian, PO, Tender, laporan, target KPI, dan hak akses dokumen pribadi.',
    'sec-ch5-2-6': 'Produk dan Gudang Tujuan adalah data master yang saling melengkapi dalam pengadaan. Data produk menginformasikan item yang diminta atau dibeli serta riwayat pembelian. Gudang Tujuan memberi tahu sistem ke mana barang inventaris harus diterima, terutama pada alur PR dan Tender yang terhubung ke Inventaris.',
    'sec-ch5-3-1-1': 'Buat Permintaan Pembelian (Purchase Request / PR) saat departemen internal membutuhkan barang atau jasa sebelum proses pengadaan dan pencarian vendor dimulai.',
    'sec-ch5-3-1-2': 'Ajukan Permintaan Pembelian untuk mendapatkan persetujuan manajerial agar tim pembelian hanya memproses permintaan kebutuhan yang telah tervalidasi.',
    'sec-ch5-3-1-3': 'Konversi baris Permintaan Pembelian yang telah disetujui menjadi dokumen pengadaan (RFQ atau Blanket Order) berdasarkan strategi pembelian.',
    'sec-ch5-3-2': 'Baris Permintaan Pembelian (PR Line) memantau perpindahan kuantitas mulai dari permintaan, pembuatan RFQ, PO, penerimaan barang, hingga dokumen ditutup.',
    'sec-ch5-3-3': 'Gunakan Pembelian Langsung (Direct Purchase) ketika kebijakan operasional mengizinkan pembelian mendesak atau bernilai kecil tanpa melalui siklus penuh PR/RFQ.',
    'sec-ch5-3-4-1': 'Kirim Permintaan Penawaran Harga (RFQ) ke pemasok agar harga, tanggal pengiriman, dan syarat komersial dapat dinegosiasikan sebelum konfirmasi pesanan.',
    'sec-ch5-3-4-2': 'Bandingkan alternatif penawaran dari beberapa pemasok secara berdampingan sebelum memilih vendor yang paling sesuai.',
    'sec-ch5-3-4-3': 'Konversi RFQ yang terpilih menjadi Pesanan Pembelian (Purchase Order / PO) setelah vendor, harga, dan kuantitas disepakati bersama.',
    'sec-ch5-3-5-1': 'Konfirmasi Pesanan Pembelian (PO) setelah pemasok, syarat komersial, dan baris produk telah final dan disepakati.',
    'sec-ch5-3-5-2': 'Buat Penerimaan Barang (Goods Receipt / Receiving Note) dari PO yang telah dikonfirmasi saat barang fisik membutuhkan validasi penerimaan di gudang.',
    'sec-ch5-3-5-3': 'Buat tagihan vendor dari PO setelah kebijakan penagihan mengizinkan pembuatan faktur utang (Vendor Bill).',
    'sec-ch5-3-5-4': 'Kendalikan siklus hidup PO setelah konfirmasi ketika terjadi perubahan data komersial atau jika pesanan harus direvisi, ditutup, atau dibatalkan.',
    'sec-ch5-3-6-1': 'Buat Perjanjian Blanket (Blanket Order) untuk pengadaan berulang dengan syarat vendor dan periode validitas yang telah disepakati sebelumnya.',
    'sec-ch5-3-6-2': 'Rilis RFQ atau PO dari Blanket Order saat pembelian riil dibutuhkan terhadap saldo perjanjian kerja sama aktif.',
    'sec-ch5-3-7-1': 'Gunakan pengajuan penawaran tender untuk mengumpulkan proposal penawaran harga dari para pemasok pada pengadaan formal.',
    'sec-ch5-3-7-2': 'Terapkan strategi penentuan pemenang tender yang telah dikonfigurasi untuk mengalokasikan kuota kuantitas tender ke vendor-vendor peringkat teratas.',
    'sec-ch5-3-7-3': 'Setujui keputusan penentuan pemenang tender sebelum membuat atau mengonfirmasi dokumen pesanan pembelian turunan.',
    'sec-ch5-3-8': 'Gunakan Pra-Kualifikasi Vendor dan Review Dokumen untuk memvalidasi kelayakan berkas legalitas pemasok sebelum keputusan pemenang tender disahkan.',
    'sec-ch5-3-9-1': 'Buat Penerimaan Barang (Goods Receipt / RN) dari PO agar bagian gudang dapat memproses fisik barang masuk yang dipesan.',
    'sec-ch5-3-9-2': 'Validasi penerimaan barang setelah staf gudang memastikan kuantitas fisik yang dikirim oleh pemasok sesuai pesanan.',
    'sec-ch5-3-9-3': 'Tinjau sisa kuantitas penerimaan untuk mengetahui apakah baris pesanan PO sudah diterima secara lengkap atau masih ada sisa terbuka.',
    'sec-ch5-3-10-1': 'Buat tagihan vendor (Vendor Bill) dari PO yang memenuhi syarat agar proses pencatatan utang usaha dan pembayaran dapat dimulai di bagian keuangan.',
    'sec-ch5-3-10-2': 'Gunakan faktur pembayaran penuh atau faktur uang muka (Down Payment) ketika kebijakan pembelian mensyaratkan uang muka sebelum penyerahan barang.',
    'sec-ch5-3-10-3': 'Buat tagihan pelunasan (Settlement Bill) setelah uang muka atau alur pembayaran di muka selesai dan perlu direkonsiliasi dengan total nilai pesanan.',
    'sec-ch5-3-11': 'Ketika integrasi Manufaktur Pembelian terpasang, Pesanan Manufaktur (MO) dan Perencanaan Kebutuhan Material (MRP) dapat membuat PR atau RFQ subkontrak secara otomatis.',
    'sec-ch5-4-1-1': 'Gunakan Perbandingan RFQ sebagai titik evaluasi bagi staf dan manajer pembelian sebelum pesanan dikonfirmasi.',
    'sec-ch5-4-2': 'Gunakan tombol navigasi (smart button) dan tautan dokumen untuk melacak keterkaitan dokumen turunan dari PR, Blanket Order, Tender, RFQ, hingga PO.',
    'sec-ch5-4-3': 'Progres Penerimaan Barang membantu pengguna memantau seberapa banyak barang yang telah diterima dan apakah pengiriman tepat waktu.',
    'sec-ch5-4-4': 'Tinjauan Penagihan memeriksa pembuatan tagihan, pembayaran uang muka, pelunasan, dan saldo terutang pada dokumen pembelian.',
    'sec-ch5-4-5': 'Audit Tender dan Review Pemenang membantu manajer memvalidasi peninjauan berkas, alokasi kuota, PO yang dihasilkan, dan status persetujuan keputusan.',
    'sec-ch5-4-6-1': 'Tinjau waktu tunggu (lead time) vendor dari riwayat penerimaan dan pembelian guna mendukung evaluasi kinerja pemasok.'
  };

  const I18N_UI = {
    'Search topics...': 'Cari topik panduan...',
    'User Guide': 'Panduan Pengguna',
    'Technical Guide': 'Panduan Teknis',
    'Purchase Module - User Manual': 'Modul Pembelian - Panduan Pengguna',
    'User Manual': 'Panduan Pengguna',
    'Purchase Module': 'Modul Pembelian',
    'Document ID': 'ID Dokumen',
    'Version': 'Versi',
    'Effective Date': 'Tanggal Berlaku',
    'Classification': 'Klasifikasi Dokumen',
    'Target Audience': 'Target Pengguna',
    'Key Stakeholders': 'Pemangku Kepentingan Utama',
    'Copyright': 'Hak Cipta',
    'CONFIDENTIAL & PROPRIETARY — HASHMICRO ERP (HMX) DOCUMENTATION': 'RAHASIA & HAK CIPTA — DOKUMENTASI HASHMICRO ERP (HMX)',
    'Purchase User Flow Diagram': 'Diagram Alur Pengguna Modul Pembelian'
  };

  // 2. Comprehensive corpus of translated text (Prerequisites, Steps, Tables)
  const I18N_CORPUS = {
  "You can open the Purchase configuration menus.": "Anda dapat membuka menu konfigurasi Purchase.",
  "Confirm the company policy for approvals, numbering, receiving, billing, and integrations before changing the settings.": "Pastikan kebijakan perusahaan terkait approval, penomoran, penerimaan, penagihan, dan integrasi sebelum mengubah pengaturan.",
  "After changing a setting, test it with a sample Purchase document before rolling it out to users.": "Setelah mengubah pengaturan, uji dengan contoh dokumen Purchase sebelum menerapkannya ke pengguna.",
  "You can open Purchase > Vendor > Vendors.": "Anda dapat membuka Purchase > Vendor > Vendors.",
  "Vendor numbering, default credit limit, approval workflow, company scope, vendor categories, and legal-document rules are already configured.": "Penomoran vendor, default credit limit, alur kerja approval, cakupan perusahaan, kategori vendor, dan aturan dokumen hukum sudah dikonfigurasi.",
  "Prepare the required legal documents before submitting or confirming the vendor.": "Siapkan dokumen hukum yang diperlukan sebelum mengajukan atau mengonfirmasi vendor.",
  "You can open the Purchase vendor configuration menus.": "Anda dapat membuka menu konfigurasi vendor Purchase.",
  "Confirm the company scope and supplier grouping rule before creating categories.": "Pastikan cakupan perusahaan dan aturan pengelompokan pemasok sebelum membuat kategori.",
  "Confirm which legal documents are required, optional, or blocking before vendor onboarding starts.": "Pastikan dokumen hukum mana yang wajib, opsional, atau memblokir sebelum onboarding vendor dimulai.",
  "The vendor is confirmed and active.": "Vendor telah dikonfirmasi dan aktif.",
  "Product variants and UoM lines are already available before you add pricelist items.": "Varian produk dan baris UoM sudah tersedia sebelum Anda menambahkan item pricelist.",
  "Review currency, company, branch, and approval workflow before submitting the pricelist.": "Tinjau mata uang, perusahaan, cabang, dan alur kerja approval sebelum mengajukan pricelist.",
  "An active Vendor Pricelist already exists.": "Vendor Pricelist aktif sudah ada.",
  "A user has changed tracked item or tier values, so the pricelist is marked as updated.": "Pengguna telah mengubah item yang dilacak atau nilai tier, sehingga pricelist ditandai sebagai diperbarui.",
  "There is no other submitted amendment still waiting for the same pricelist.": "Tidak ada pengajuan amendemen lain yang masih menunggu untuk pricelist yang sama.",
  "Users are in the Purchase / Team group and have the right company or branch scope.": "Pengguna berada dalam grup Purchase / Team dan memiliki cakupan perusahaan atau cabang yang tepat.",
  "The team lead and members are confirmed before setup.": "Ketua tim dan anggota telah dikonfirmasi sebelum penyiapan.",
  "Confirm the routing basis first: Product Category, Order Type, or Vendor Category.": "Pastikan dasar perutean terlebih dahulu: Product Category, Order Type, atau Vendor Category.",
  "Products, variants, product categories, and UoM records are ready before users create purchase lines.": "Produk, varian, kategori produk, dan data UoM sudah siap sebelum pengguna membuat baris pembelian.",
  "Warehouses are configured with the correct company and branch scope before users select them on Purchase Requests or Tenders.": "Gudang dikonfigurasi dengan cakupan perusahaan dan cabang yang benar sebelum pengguna memilihnya pada Purchase Request atau Tender.",
  "Inventory integration is installed when Destination Warehouse is required in the flow.": "Integrasi Inventory dipasang saat Destination Warehouse diperlukan dalam alur.",
  "Vendor, product, purchase team, company, currency, and destination warehouse data are available when required.": "Data vendor, produk, tim pembelian, perusahaan, mata uang, dan destination warehouse tersedia saat diperlukan.",
  "The user has access to create, confirm, approve, send, revise, close, or cancel the related Purchase document.": "Pengguna memiliki akses untuk membuat, mengonfirmasi, menyetujui, mengirim, merevisi, menutup, atau membatalkan dokumen Purchase terkait.",
  "Approval, RFQ, blanket, receiving, and billing settings are configured before the workflow is used.": "Pengaturan approval, RFQ, blanket, penerimaan, dan penagihan sudah dikonfigurasi sebelum alur kerja digunakan.",
  "The user has access to maintain Purchase master data.": "Pengguna memiliki akses untuk mengelola data master Purchase.",
  "Required vendor, product, document, pricelist, and company standards are agreed before setup.": "Standar vendor, produk, dokumen, pricelist, dan perusahaan yang diperlukan telah disepakati sebelum penyiapan.",
  "Duplicate records are reviewed before saving new master data.": "Catatan duplikat ditinjau sebelum menyimpan data master baru.",
  "Open Purchase > Settings & Rules > Purchase Settings before users start creating live purchase documents.": "Buka Purchase > Settings & Rules > Purchase Settings sebelum pengguna mulai membuat dokumen pembelian riil.",
  "Review the vendor sequence mode, then decide whether Vendor Code should be generated by the system or entered manually by users.": "Tinjau mode urutan vendor, lalu tentukan apakah Vendor Code harus dibuat oleh sistem atau dimasukkan secara manual oleh pengguna.",
  "Set the credit-limit rule so buyers either receive a warning or are blocked when a vendor exceeds the approved limit.": "Atur aturan credit-limit agar pembeli menerima peringatan atau diblokir saat vendor melampaui batas yang disetujui.",
  "Turn Purchase Order revision on only when the company allows controlled changes after a PO has been issued.": "Aktifkan revisi Purchase Order hanya jika perusahaan mengizinkan perubahan terkontrol setelah PO diterbitkan.",
  "Configure Draft PO Numbering and Revised Document – Sequence Numbering when the company requires its own draft numbering or a separate sequence for revised documents.": "Konfigurasikan Draft PO Numbering dan Revised Document – Sequence Numbering jika perusahaan memerlukan penomoran draft tersendiri atau urutan terpisah untuk dokumen yang direvisi.",
  "Set the document expiry periods on the Orders tab: Purchase Request Expiry Period Days, RFQ Expiry Period Days, and Purchase Tender Expiry Period Days. Documents that pass the configured number of days can expire automatically, so set the period based on the team’s follow-up policy.": "Atur periode kedaluwarsa dokumen pada tab Orders: Purchase Request Expiry Period Days, RFQ Expiry Period Days, dan Purchase Tender Expiry Period Days. Dokumen yang melewati jumlah hari yang dikonfigurasi dapat kedaluwarsa secara otomatis, jadi atur periode tersebut berdasarkan kebijakan tindak lanjut tim.",
  "Choose how receiving should be validated so Purchase Orders and Receiving Notes follow the company’s operational rules.": "Pilih cara penerimaan divalidasi agar Purchase Order dan Receiving Note mengikuti aturan operasional perusahaan.",
  "Purchase Settings are stored per company. Switch the active company in the top-left menu before editing, because values saved for one company do not apply to another.": "Purchase Settings disimpan per perusahaan. Beralihlah ke perusahaan aktif di menu kiri atas sebelum mengedit, karena nilai yang disimpan untuk satu perusahaan tidak berlaku untuk perusahaan lain.",
  "On the Bill tab, set the three-way matching behaviour: 3-Way Matching Mode, Unit Price Tolerance, and Quantity Tolerance control how far a bill may deviate from the purchase order and the receipt before it is blocked.": "Pada tab Bill, atur perilaku three-way matching: 3-Way Matching Mode, Unit Price Tolerance, dan Quantity Tolerance mengontrol seberapa jauh tagihan boleh menyimpang dari purchase order dan tanda terima sebelum diblokir.",
  "Open Purchase > Settings & Rules > Order Config > Order Type, then create or edit the type that users will choose on PR, RFQ, or PO documents.": "Buka Purchase > Settings & Rules > Order Config > Order Type, lalu buat atau edit jenis yang akan dipilih pengguna pada dokumen PR, RFQ, atau PO.",
  "Enter a clear Order Type name that buyers can recognize quickly when preparing PR, RFQ, or PO documents.": "Masukkan nama Order Type yang jelas dan mudah dikenali pembeli saat menyiapkan dokumen PR, RFQ, atau PO.",
  "Select the companies that are allowed to use this Order Type.": "Pilih perusahaan yang diizinkan menggunakan Order Type ini.",
  "If this Order Type is only for certain items, add the allowed Product Categories. This helps prevent buyers from using the type for unrelated goods or services.": "Jika Order Type ini hanya untuk item tertentu, tambahkan Product Categories yang diizinkan. Ini membantu mencegah pembeli menggunakan jenis tersebut untuk barang atau jasa yang tidak terkait.",
  "Keep Active enabled, save the record, then open a sample purchase document to confirm the Order Type appears where users need it.": "Biarkan Active tetap aktif, simpan data, lalu buka contoh dokumen pembelian untuk memastikan Order Type muncul di tempat yang dibutuhkan pengguna.",
  "Open Purchase > Settings & Rules > Order Config > Order Templates, then create a template for purchases that repeat often.": "Buka Purchase > Settings & Rules > Order Config > Order Templates, lalu buat templat untuk pembelian yang sering berulang.",
  "Select a vendor when the template belongs to one supplier, then choose the Order Type that matches the buying flow.": "Pilih vendor jika templat ditujukan untuk satu pemasok, lalu pilih Order Type yang sesuai dengan alur pembelian.",
  "Click Add a Line to add reusable items. Fill Product, Quantity, UoM, and Unit Price so buyers can see exactly what will be copied into a PR, RFQ, or PO.": "Klik Add a Line untuk menambahkan item yang dapat digunakan kembali. Isi Product, Quantity, UoM, dan Unit Price agar pembeli dapat melihat dengan jelas apa yang akan disalin ke dalam PR, RFQ, atau PO.",
  "Review each line before using the template. Buyers can keep the default values or adjust them when the purchase document is created.": "Tinjau setiap baris sebelum menggunakan templat. Pembeli dapat mempertahankan nilai default atau menyesuaikannya saat dokumen pembelian dibuat.",
  "Save the template, then apply it the next time the team creates a matching Purchase Request, RFQ, or PO.": "Simpan templat, lalu terapkan saat tim membuat Purchase Request, RFQ, atau PO yang sesuai di lain waktu.",
  "Open Purchase > Settings & Rules > Award Strategy Config to review the award rule used by tender decisions.": "Buka Purchase > Settings & Rules > Award Strategy Config untuk meninjau aturan award yang digunakan dalam keputusan tender.",
  "Create a new strategy or open the active one used by the tender award process.": "Buat strategi baru atau buka strategi aktif yang digunakan oleh proses award tender.",
  "Set the split rank ratio to tell the award process how much quantity should go to each ranked vendor.": "Atur rasio split rank untuk menentukan pembagian kuantitas ke setiap vendor berdasarkan peringkat dalam proses award.",
  "Review the capacity fill limit so one vendor does not receive more quantity than the business allows.": "Tinjau batasan capacity fill limit agar satu vendor tidak menerima kuantitas melebihi kapasitas yang diizinkan bisnis.",
  "Save the strategy, then use it as a reference during tender award review before the decision is approved.": "Simpan strategi, lalu gunakan sebagai referensi selama peninjauan tender award sebelum keputusan disetujui.",
  "Review the Purchase approval governance reference and confirm which Purchase documents are controlled by approval workflows. Use this as the starting point before documenting or testing any specific approval path.": "Tinjau referensi tata kelola persetujuan Purchase dan pastikan dokumen Purchase mana saja yang dikendalikan oleh alur kerja persetujuan. Gunakan ini sebagai titik awal sebelum mendokumentasikan atau menguji jalur persetujuan tertentu.",
  "Open a Purchase document that requires approval, then verify that the expected approval action and status are available. In the verified UI, operational approval can be checked from documents such as Purchase Request, Vendor, Vendor Pricelist, KPI Target, or related Purchase records that show Submit for Approval, Waiting for Approval, Approve, Reject, or Approval History.": "Buka dokumen Purchase yang memerlukan persetujuan, lalu verifikasi ketersediaan tindakan dan status persetujuan yang diharapkan. Pada UI yang terverifikasi, persetujuan operasional dapat diperiksa dari dokumen seperti Purchase Request, Vendor, Vendor Pricelist, KPI Target, atau rekaman Purchase terkait yang menampilkan Submit for Approval, Waiting for Approval, Approve, Reject, atau Approval History.",
  "After submission, confirm that the document status changes to Waiting for Approval and that approver actions are available only to authorized users. This confirms that the approval rule is not only present in configuration, but also affects the document workflow at runtime.": "Setelah pengajuan, pastikan status dokumen berubah menjadi Waiting for Approval dan tindakan persetujuan hanya tersedia bagi pengguna yang berwenang. Ini memastikan bahwa aturan persetujuan tidak hanya ada dalam konfigurasi, tetapi juga memengaruhi alur kerja dokumen saat runtime.",
  "Review Order Type sequence behavior from the Order Type configuration. The visible Sequence tab supports the document numbering previews exposed in the UI. Direct Purchase sequence exists in source and is used by backend sequence logic, but the verified Order Type UI does not expose a separate Direct Purchase Sequence field or preview, so users should not be instructed to configure it manually from this screen.": "Tinjau perilaku penomoran (sequence) Order Type dari konfigurasi Order Type. Tab Sequence yang terlihat mendukung pratinjau penomoran dokumen yang ditampilkan pada UI. Sequence Direct Purchase tersedia pada kode sumber dan digunakan oleh logika sequence backend, tetapi UI Order Type yang terverifikasi tidak menampilkan bidang atau pratinjau Direct Purchase Sequence tersendiri, sehingga pengguna tidak perlu diinstruksikan untuk mengonfigurasinya secara manual dari layar ini.",
  "Review RFQ communication from the RFQ record. Use the communication history, attachments, and available send actions to verify that vendor communication follows the configured RFQ mail template and that the user can trace messages sent from the document.": "Tinjau komunikasi RFQ dari data RFQ. Gunakan riwayat komunikasi, lampiran, dan tindakan pengiriman yang tersedia untuk memverifikasi bahwa komunikasi vendor mengikuti templat email RFQ yang telah dikonfigurasi dan pengguna dapat melacak pesan yang dikirim dari dokumen tersebut.",
  "Review scheduled automation through the records affected by the automation. Source and Master Demo runtime show Blanket Order automatic status transition and expired pricelist checks as enabled, while some other automation, such as Vendor Performance Scoring and Peppol Purchase Order Status refresh, may be disabled in the verified runtime. Operational users should validate the outcome on related records instead of changing backend schedules from the Purchase document screen.": "Tinjau otomatisasi terjadwal melalui data yang terpengaruh oleh otomatisasi tersebut. Runtime Source dan Master Demo menunjukkan transisi status otomatis Blanket Order dan pemeriksaan pricelist kedaluwarsa dalam kondisi aktif, sementara beberapa otomatisasi lain, seperti Vendor Performance Scoring dan pembaruan Peppol Purchase Order Status, mungkin dinonaktifkan pada runtime yang diverifikasi. Pengguna operasional harus memvalidasi hasilnya pada rekaman terkait alih-alih mengubah jadwal backend dari layar dokumen Purchase.",
  "Verify Blanket Order approval separately when Blanket Order is used. Source configuration includes Blanket Order approval workflow and approval rule, and Master Demo runtime verification shows the Purchase Blanket Order workflow and Approval Blanket Order rule as active. Users should still follow the visible document actions in the Blanket Order screen and should not change approval state directly from backend configuration.": "Verifikasi persetujuan Blanket Order secara terpisah saat Blanket Order digunakan. Konfigurasi sumber mencakup alur kerja persetujuan dan aturan persetujuan Blanket Order, dan verifikasi runtime Master Demo menunjukkan alur kerja Purchase Blanket Order serta aturan Approval Blanket Order dalam status aktif. Pengguna harus tetap mengikuti tindakan dokumen yang terlihat di layar Blanket Order dan tidak boleh mengubah status persetujuan secara langsung dari konfigurasi backend.",
  "Review the Approval History after an approval action is completed or rejected. Approval History is the traceability layer that confirms who acted, when the action happened, and whether the record is ready for the next Purchase process.": "Tinjau Approval History setelah tindakan persetujuan selesai atau ditolak. Approval History adalah lapisan penelusuran yang mengonfirmasi siapa yang mengambil tindakan, kapan tindakan dilakukan, dan apakah data siap untuk proses Purchase berikutnya.",
  "Open Purchase > Vendor > Vendors, then create a new vendor or open an existing vendor.": "Buka Purchase > Vendor > Vendors, lalu buat vendor baru atau buka vendor yang sudah ada.",
  "Complete the supplier identity and contact information, then make sure the Vendor partner type is active. If vendor sequence is manual, fill Vendor Code; if sequence is automatic, the code is generated by the system.": "Lengkapi identitas pemasok dan informasi kontak, lalu pastikan tipe mitra Vendor aktif. Jika penomoran vendor manual, isi Vendor Code; jika penomoran otomatis, kode akan dibuat oleh sistem.",
  "On the Purchase tab, assign Vendor Categories, check Purchase Limit, Purchase Limit Used, and Purchase Limit Available, then complete any Legal Documents shown by the system.": "Pada tab Purchase, tentukan Vendor Categories, periksa Purchase Limit, Purchase Limit Used, dan Purchase Limit Available, lalu lengkapi Legal Documents apa pun yang ditampilkan oleh sistem.",
  "Click Submit for Approval after you review the vendor identity, purchase category, credit limit, and required supporting information.": "Klik Submit for Approval setelah meninjau identitas vendor, kategori pembelian, batas kredit, dan informasi pendukung yang diperlukan.",
  "Use Change Data only for confirmed vendors when the update needs approval or controlled tracking. Use Blacklist or Unblacklist when vendor eligibility changes.": "Gunakan Change Data hanya untuk vendor yang telah dikonfirmasi ketika pembaruan memerlukan persetujuan atau pelacakan terkontrol. Gunakan Blacklist atau Unblacklist saat status kelayakan vendor berubah.",
  "Open Purchase > Configuration > Vendor > Vendor Category to create or update a supplier group.": "Buka Purchase > Configuration > Vendor > Vendor Category untuk membuat atau memperbarui grup pemasok.",
  "Fill Category Name, optional Companies, and Description so users understand when the category should be selected. Use the Vendors tab as a review list for vendors already assigned to this category.": "Isi Category Name, Companies (opsional), dan Description agar pengguna memahami kapan kategori tersebut harus dipilih. Gunakan tab Vendors sebagai daftar tinjauan untuk vendor yang telah ditetapkan ke kategori ini.",
  "Open Purchase > Configuration > Vendor > Legal Document to define vendor documents that are required, additional, or optional.": "Buka Purchase > Configuration > Vendor > Legal Document untuk menentukan dokumen vendor yang bersifat wajib, tambahan, atau opsional.",
  "Select Document Usage, Document Type, Blocking, applicability, and any reference attachments. Applicability fields appear when the document is additional and only applies to selected vendors or categories.": "Pilih Document Usage, Document Type, Blocking, keterterapan (applicability), dan lampiran referensi apa pun. Bidang applicability muncul ketika dokumen bersifat tambahan dan hanya berlaku untuk vendor atau kategori tertentu.",
  "Save the legal document, then open an applicable vendor to confirm the document line or warning appears correctly.": "Simpan dokumen legal tersebut, lalu buka vendor terkait untuk memastikan baris dokumen atau peringatan muncul dengan benar.",
  "Open Purchase > Pricelist > Vendor Pricelist, then create a new pricelist or open an existing one.": "Buka Purchase > Pricelist > Vendor Pricelist, lalu buat pricelist baru atau buka yang sudah ada.",
  "Fill Pricelist Name, Vendor, Currency, Company, Branch, Effective Date, and Expiry Date when the price has a validity period. Vendor Code follows the selected vendor.": "Isi Pricelist Name, Vendor, Currency, Company, Branch, Effective Date, dan Expiry Date jika harga memiliki masa berlaku. Vendor Code mengikuti vendor yang dipilih.",
  "In Pricelist Items, add Product, Variant, UoM, Lead Time, supplier item details, and MOQ enforcement when the vendor has minimum-order rules.": "Pada Pricelist Items, tambahkan Product, Variant, UoM, Lead Time, detail item pemasok, dan penerapan MOQ jika vendor memiliki aturan pesanan minimum.",
  "Enable Enforce Minimum Order Quantity (MOQ) when orders below the MOQ must be blocked. Add Quantity Tiers when the price or bonus changes by ordered quantity. A tier can include Min Qty, Max Qty, Discount, Discount From Tier, Tier Price, Free Product, Free Qty, and Free UoM.": "Aktifkan Enforce Minimum Order Quantity (MOQ) jika pesanan di bawah MOQ harus diblokir. Tambahkan Quantity Tiers jika harga atau bonus berubah berdasarkan kuantitas yang dipesan. Suatu tier dapat mencakup Min Qty, Max Qty, Discount, Discount From Tier, Tier Price, Free Product, Free Qty, dan Free UoM.",
  "Save the pricelist, then move it through approval until the status becomes Active. Use Archive or Unarchive when the pricelist should be hidden or made available again.": "Simpan pricelist, lalu proses melalui alur persetujuan hingga statusnya berubah menjadi Active. Gunakan Archive atau Unarchive saat pricelist perlu disembunyikan atau ditampilkan kembali.",
  "Open the active Vendor Pricelist that needs a price, lead time, product, UoM, supplier item, or tier update.": "Buka Vendor Pricelist aktif yang memerlukan pembaruan harga, lead time, produk, UoM, item pemasok, atau tier.",
  "Edit the tracked pricelist item or tier field. The system keeps the proposed value separately and marks the item or tier as updated.": "Ubah item pricelist atau bidang tier yang dilacak. Sistem menyimpan nilai yang diajukan secara terpisah dan menandai item atau tier sebagai telah diperbarui.",
  "Click Request Amendment, review the old and proposed values in the wizard, enter a reason when needed, then submit the request.": "Klik Request Amendment, tinjau nilai lama dan nilai yang diajukan pada wizard, masukkan alasan jika diperlukan, lalu kirim permintaan.",
  "Open Purchase > Pricelist > Pricelist Amendments or the Amendment Histories smart button to review history.": "Buka Purchase > Pricelist > Pricelist Amendments atau smart button Amendment Histories untuk meninjau riwayat.",
  "After approval, the new values are applied to the pricelist. If rejected, the proposed values are cleared and the active pricelist stays unchanged.": "Setelah disetujui, nilai baru akan diterapkan ke pricelist. Jika ditolak, nilai yang diajukan akan dihapus dan pricelist aktif tetap tidak berubah.",
  "Open Purchase > Team Management > Purchase Teams, then create or edit the team.": "Buka Purchase > Team Management > Purchase Teams, lalu buat atau edit tim.",
  "Fill Team Name, Company, Branch, Parameter, and Team Lead so the system knows which documents the team should handle. The team lead is automatically included as a member when selected.": "Isi Team Name, Company, Branch, Parameter, dan Team Lead agar sistem mengetahui dokumen mana yang harus ditangani oleh tim. Team lead otomatis ditambahkan sebagai anggota saat dipilih.",
  "Select routing values based on the chosen Parameter: Product Categories, Order Types, or Vendor Categories.": "Pilih nilai perutean berdasarkan Parameter yang dipilih: Product Categories, Order Types, atau Vendor Categories.",
  "Add team members. Member assignments are synchronized automatically, and primary buyers should have the right categories assigned.": "Tambahkan anggota tim. Penugasan anggota disinkronkan secara otomatis, dan buyer utama harus memiliki kategori yang sesuai.",
  "Review the dashboard tiles and related tabs to see Direct Purchase, RFQ, and Purchase Orders linked to the team.": "Tinjau tile dasbor dan tab terkait untuk melihat Direct Purchase, RFQ, dan Purchase Order yang terhubung ke tim.",
  "Test the routing with a sample PR or PO before relying on it for live work. The system can route unassigned records to an active team when the routing values match.": "Uji perutean dengan sampel PR atau PO sebelum menggunakannya untuk operasional langsung. Sistem dapat merutekan data yang belum ditetapkan ke tim yang aktif jika nilai perutean cocok.",
  "Open Purchase > Products > Products to review or maintain products used by procurement.": "Buka Purchase > Products > Products untuk meninjau atau memelihara produk yang digunakan oleh pengadaan.",
  "Confirm product, variant, category, UoM, and purchase details before selecting the item on PR, RFQ, PO, or Tender lines.": "Konfirmasikan produk, varian, kategori, UoM, dan detail pembelian sebelum memilih item pada baris PR, RFQ, PO, atau Tender.",
  "On inventory-integrated Purchase Request Lines, set or review Destination Warehouse so the receiving team knows where the goods should arrive. The receiving location follows the selected warehouse and the downstream receiving setup when the receiving document shows a Location field.": "Pada baris Purchase Request yang terintegrasi dengan inventaris, atur atau tinjau Destination Warehouse agar tim penerima mengetahui lokasi penerimaan barang. Lokasi penerimaan mengikuti gudang yang dipilih dan pengaturan penerimaan downstream saat dokumen penerimaan menampilkan kolom Location.",
  "When a Purchase Request line already has a Destination Warehouse and the header is still empty, the system can synchronize the value to the header for downstream use.": "Ketika baris Purchase Request sudah memiliki Destination Warehouse dan header masih kosong, sistem dapat menyinkronkan nilai tersebut ke header untuk penggunaan downstream.",
  "On Tender, fill Destination Warehouse on the header. If one tender uses multiple receiving warehouses, fill Destination Warehouse on each tender line as well.": "Pada Tender, isi Destination Warehouse pada header. Jika satu tender menggunakan beberapa gudang penerima, isi juga Destination Warehouse pada setiap baris tender.",
  "Verify downstream RFQ, PO, and receiving records use the intended warehouse before confirmation or receiving.": "Verifikasi bahwa dokumen downstream RFQ, PO, dan penerimaan menggunakan gudang yang sesuai sebelum melakukan konfirmasi atau penerimaan.",
  "Open Purchase > Purchase > Purchase Request. Open Purchase Request and click Create.": "Buka Purchase > Purchase > Purchase Request. Buka Purchase Request dan klik Create.",
  "Fill requester, company, request date, required date, and department context.": "Isi requester, company, request date, required date, dan konteks departemen.",
  "Click Add a Line, then fill Product, Quantity, UoM, Destination Warehouse, Required Date, and Notes. These fields explain what is requested, where it is needed, and why the buyer should process it.": "Klik Add a Line, lalu isi Product, Quantity, UoM, Destination Warehouse, Required Date, dan Notes. Kolom-kolom ini menjelaskan apa yang diminta, di mana barang dibutuhkan, dan alasan buyer harus memprosesnya.",
  "Save the document and review line completeness before submission.": "Simpan dokumen dan tinjau kelengkapan baris sebelum pengajuan.",
  "Open a draft Purchase Request.": "Buka draf Purchase Request.",
  "Open the request lines and check Product, Quantity, UoM, Destination, Required Date, and Business Reason on each line before submission.": "Buka baris permintaan dan periksa Product, Quantity, UoM, Destination, Required Date, dan Business Reason pada setiap baris sebelum pengajuan.",
  "Click Submit or Confirm according to available action.": "Klik Submit atau Confirm sesuai tindakan yang tersedia.",
  "Approver reviews the request and approves or returns it for correction.": "Approver meninjau permintaan dan menyetujui atau mengembalikannya untuk perbaikan.",
  "After approval, monitor remaining quantity and generated document links.": "Setelah disetujui, pantau kuantitas yang tersisa dan tautan dokumen yang dihasilkan.",
  "Open Purchase > Purchase > Request for Quotation. Open an approved Purchase Request.": "Buka Purchase > Purchase > Request for Quotation. Buka Purchase Request yang telah disetujui.",
  "Select eligible request lines with open quantity, then review Product, Remaining Quantity, UoM, Destination Warehouse, Vendor/RFQ option, and conversion target.": "Pilih baris permintaan yang memenuhi syarat dengan kuantitas terbuka, lalu tinjau Product, Remaining Quantity, UoM, Destination Warehouse, opsi Vendor/RFQ, dan target konversi.",
  "Choose RFQ for one-time supplier quotation or Blanket Order for repeated planned procurement.": "Pilih RFQ untuk penawaran pemasok sekali jalan atau Blanket Order untuk pengadaan terencana yang berulang.",
  "Run the conversion action and confirm the generated document.": "Jalankan tindakan konversi dan konfirmasi dokumen yang dihasilkan.",
  "Open the smart button to continue buyer processing.": "Buka smart button untuk melanjutkan pemrosesan oleh buyer.",
  "Open Purchase > Purchase > Purchase Request. Open a Purchase Request and review the request lines before conversion.": "Buka Purchase > Purchase > Purchase Request. Buka Purchase Request dan tinjau baris permintaan sebelum konversi.",
  "Review each PR line: Product, Quantity, UoM, Requested Date, Source Requirement, and Approved Quantity show what the requester needs and what can still be converted downstream.": "Tinjau setiap baris PR: Product, Quantity, UoM, Requested Date, Source Requirement, dan Approved Quantity menampilkan kebutuhan pemohon dan apa yang masih dapat dikonversi ke tahap downstream.",
  "Compare RFQ Qty, PO Qty, Received Qty, and Remaining Qty to see what has already moved downstream.": "Bandingkan RFQ Qty, PO Qty, Received Qty, dan Remaining Qty untuk melihat apa saja yang telah diproses ke tahap downstream.",
  "Adjust only fields still editable in the current state and avoid changing closed or fully converted lines.": "Ubah hanya kolom yang masih dapat diedit pada status saat ini dan hindari mengubah baris yang telah ditutup atau dikonversi sepenuhnya.",
  "Use remaining quantity to decide whether another RFQ, PO, or close action is still needed.": "Gunakan kuantitas yang tersisa untuk menentukan apakah pembuatan RFQ, PO lain, atau tindakan penutupan masih diperlukan.",
  "Open Purchase > Direct Purchase and create a new direct purchase document.": "Buka Purchase > Direct Purchase dan buat dokumen direct purchase baru.",
  "Select vendor, order type, currency, payment term, and destination warehouse.": "Pilih vendor, order type, currency, payment term, dan destination warehouse.",
  "Click Add a Line for each item being purchased directly. On every line, fill Product, UoM, Quantity, Unit Price, Tax, Discount, Destination Warehouse, and Planned Date because these fields drive the total, stock receipt, and vendor bill basis.": "Klik Add a Line untuk setiap item yang dibeli secara langsung. Pada setiap baris, isi Product, UoM, Quantity, Unit Price, Tax, Discount, Destination Warehouse, dan Planned Date karena kolom-kolom ini memengaruhi total, penerimaan stok, dan dasar vendor bill.",
  "Review subtotal, tax, total, bill behavior, and approval requirements before confirming.": "Tinjau subtotal, tax, total, mekanisme tagihan, dan persyaratan persetujuan sebelum melakukan konfirmasi.",
  "Confirm the direct purchase, then continue to receiving or vendor bill actions when required.": "Konfirmasi direct purchase, lalu lanjutkan ke tindakan penerimaan barang atau vendor bill saat diperlukan.",
  "Open Purchase > Purchase > Request for Quotation. Open RFQ draft generated from PR, Blanket Order, Tender, or direct buyer entry.": "Buka Purchase > Purchase > Request for Quotation. Buka draf RFQ yang dibuat dari PR, Blanket Order, Tender, atau input langsung oleh buyer.",
  "Check vendor, purchase team, currency, and expected date, then review each RFQ line for Product, Quantity, UoM, Unit Price, Tax, Discount, and Planned Date.": "Periksa vendor, purchase team, currency, dan expected date, lalu tinjau setiap baris RFQ untuk Product, Quantity, UoM, Unit Price, Tax, Discount, dan Planned Date.",
  "Click Send Email or Send RFQ according to available action.": "Klik Send Email atau Send RFQ sesuai tindakan yang tersedia.",
  "Review the email template and send it to the supplier.": "Tinjau template email dan kirimkan ke pemasok.",
  "Track quotation status and supplier response before conversion.": "Pantau status penawaran dan respons pemasok sebelum konversi.",
  "Check ordered, received, and remaining quantity per line.": "Periksa kuantitas dipesan, diterima, dan tersisa per baris.",
  "Open Receiving Progress report for lead-time and completion review.": "Buka laporan Receiving Progress untuk meninjau lead time dan penyelesaian.",
  "Follow up supplier if remaining quantity is overdue.": "Tindak lanjuti pemasok jika kuantitas tersisa telah jatuh tempo.",
  "Close order only after open receiving and billing conditions are cleared.": "Tutup pesanan hanya setelah kondisi penerimaan dan penagihan terbuka telah diselesaikan.",
  "Open Purchase > Purchase > Purchase Order. Open eligible Purchase Order.": "Buka Purchase > Purchase > Purchase Order. Buka Purchase Order yang memenuhi syarat.",
  "Click Create Bill.": "Klik Create Bill.",
  "Review vendor, bill date, product lines, tax, account, and total.": "Tinjau vendor, tanggal tagihan, baris produk, pajak, akun, dan total.",
  "Save or validate the bill based on finance policy.": "Simpan atau validasi tagihan berdasarkan kebijakan keuangan.",
  "Open Bills smart button from PO to confirm linkage.": "Buka smart button Bills dari PO untuk memastikan keterkaitan.",
  "Open Purchase > Purchase > Purchase Order. Open PO that allows full payment invoice.": "Buka Purchase > Purchase > Purchase Order. Buka PO yang mengizinkan invoice pembayaran penuh.",
  "Click Full Payment Invoice action.": "Klik aksi Full Payment Invoice.",
  "Check bill amount, vendor, payment terms, tax, linked PO reference, and bill lines. Bill lines should match the ordered or received quantity according to the billing policy.": "Periksa jumlah tagihan, vendor, syarat pembayaran, pajak, referensi PO tertaut, dan baris tagihan. Baris tagihan harus sesuai kuantitas dipesan atau diterima sesuai kebijakan penagihan.",
  "Validate bill according to finance approval.": "Validasi tagihan sesuai persetujuan keuangan.",
  "Return to PO and verify invoice count and amount due.": "Kembali ke PO dan verifikasi jumlah invoice serta jumlah terutang.",
  "Open Purchase > Purchase > Purchase Order. Open PO with eligible down payment or settlement condition.": "Buka Purchase > Purchase > Purchase Order. Buka PO dengan syarat uang muka atau pelunasan yang sesuai.",
  "Click Create Settlement Bill.": "Klik Create Settlement Bill.",
  "Review settlement amount against previous invoice or payment.": "Tinjau jumlah pelunasan terhadap invoice atau pembayaran sebelumnya.",
  "Save and validate settlement bill based on finance policy.": "Simpan dan validasi tagihan pelunasan berdasarkan kebijakan keuangan.",
  "Use Billing Review to confirm remaining payable amount.": "Gunakan Billing Review untuk memastikan sisa jumlah utang.",
  "Open the Manufacturing Order or material planning record that needs purchasing support.": "Buka Manufacturing Order atau catatan perencanaan material yang memerlukan dukungan pembelian.",
  "Use Submit Purchase Request when material shortage must enter the PR approval flow.": "Gunakan Submit Purchase Request jika kekurangan material harus masuk alur persetujuan PR.",
  "For subcontracting, use Send to Subcontractor or Create RFQ from the vendor wizard.": "Untuk subkontrak, gunakan Send to Subcontractor atau Create RFQ dari wizard vendor.",
  "Review generated RFQ, Delivery Order, and Receiving Note smart buttons to trace the subcontracting chain.": "Tinjau smart button RFQ, Delivery Order, dan Receiving Note yang dihasilkan untuk melacak alur subkontrak.",
  "Validate the receiving step when subcontracted goods are returned and confirm the manufacturing procurement cycle is complete.": "Validasi tahap penerimaan saat barang subkontrak dikembalikan dan pastikan siklus pengadaan manufaktur telah selesai.",
  "Open RFQ Comparison from Reporting or RFQ action.": "Buka RFQ Comparison dari Reporting atau aksi RFQ.",
  "Select comparable RFQs for the same product demand.": "Pilih RFQ yang dapat dibandingkan untuk permintaan produk yang sama.",
  "Review vendor price, lead time, expected date, and payment terms.": "Tinjau harga vendor, lead time, tanggal perkiraan, dan syarat pembayaran.",
  "Use highlight indicators to identify best commercial option.": "Gunakan indikator penyorot untuk mengidentifikasi opsi komersial terbaik.",
  "Open selected RFQ to continue PO conversion.": "Buka RFQ yang dipilih untuk melanjutkan konversi PO.",
  "Open the source PR, Blanket Order, Tender, RFQ, or PO that needs traceability review.": "Buka PR, Blanket Order, Tender, RFQ, atau PO sumber yang memerlukan peninjauan keterlacakan.",
  "Use smart buttons such as Orders, Blanket Orders, Quotations, and Purchase Orders to inspect generated documents.": "Gunakan smart button seperti Orders, Blanket Orders, Quotations, dan Purchase Orders untuk memeriksa dokumen yang dihasilkan.",
  "Compare quantities, vendors, order dates, and references between the source document and generated records.": "Bandingkan kuantitas, vendor, tanggal pesanan, dan referensi antara dokumen sumber dan catatan yang dihasilkan.",
  "Open each linked document and check whether it is draft, confirmed, received, billed, closed, or cancelled.": "Buka setiap dokumen tertaut dan periksa apakah berstatus draft, confirmed, received, billed, closed, atau cancelled.",
  "Record any missing or inconsistent downstream document before closing the review.": "Catat dokumen turunan yang hilang atau tidak konsisten sebelum menutup peninjauan.",
  "Open Purchase > Purchase > Purchase Order. Open the Purchase Order or Receiving Note being reviewed.": "Buka Purchase > Purchase > Purchase Order. Buka Purchase Order atau Receiving Note yang sedang ditinjau.",
  "User disables the option or archives the setup.": "Pengguna menonaktifkan opsi atau mengarsipkan pengaturan.",
  "Enable it again only when the business process needs it.": "Aktifkan kembali hanya saat proses bisnis membutuhkannya.",
  "Vendor Sequence Mode": "Mode Penomoran Vendor",
  "Yes": "Ya",
  "Controls automatic or manual vendor code handling.": "Mengontrol penanganan kode vendor secara otomatis atau manual.",
  "Data type: Selection.": "Tipe data: Selection.",
  "Default Purchase Credit Limit": "Batas Kredit Pembelian Standar",
  "No": "Tidak",
  "Credit ceiling applied when no individual vendor limit is set.": "Batas kredit yang diterapkan saat batas vendor individual tidak ditentukan.",
  "Data type: Number.": "Tipe data: Number.",
  "Warning Block Limit / Warning Block Threshold Percentage": "Batas Warning Block / Persentase Ambang Warning Block",
  "Value at which the user is warned before the soft block level.": "Nilai di mana pengguna diberi peringatan sebelum tingkat soft block.",
  "Data type: Number / Percentage.": "Tipe data: Number / Percentage.",
  "Soft Block Limit / Soft Block Threshold Percentage": "Batas Soft Block / Persentase Ambang Soft Block",
  "Value at which purchasing continues but raises a blocking warning.": "Nilai di mana pembelian tetap berlanjut tetapi memunculkan peringatan pemblokiran.",
  "Hard Block Limit / Hard Block Threshold Percentage": "Batas Hard Block / Persentase Ambang Hard Block",
  "Value at which purchasing for the vendor is stopped completely.": "Nilai di mana pembelian untuk vendor dihentikan sepenuhnya.",
  "Threshold ordering": "Urutan nilai ambang batas",
  "Warning must stay lower than Soft Block, and Soft Block lower than Hard Block, otherwise the intermediate level never triggers.": "Warning harus lebih rendah dari Soft Block, dan Soft Block lebih rendah dari Hard Block, jika tidak tingkat perantara tidak akan pernah terpicu.",
  "Data type: Rule.": "Tipe data: Rule.",
  "Allow Order Revision": "Izinkan Revisi Pesanan",
  "Enables revised Purchase Orders and revision numbering.": "Mengaktifkan PO revisi dan penomoran revisi.",
  "Data type: Boolean.": "Tipe data: Boolean.",
  "Purchase Receiving Behavior": "Perilaku Penerimaan Pembelian",
  "Controls automatic or manual Receiving Note generation.": "Mengontrol pembuatan RN secara otomatis atau manual.",
  "Validate Bill Behavior": "Perilaku Validasi Tagihan",
  "Controls bill validation behavior in Purchase flow.": "Mengontrol perilaku validasi tagihan dalam alur Purchase.",
  "Validate Receiving Behavior": "Perilaku Validasi Penerimaan",
  "Controls how strictly receipts are validated against purchase orders.": "Mengontrol seberapa ketat validasi penerimaan terhadap PO.",
  "Purchase Request Expiry Period Days": "Periode Kedaluwarsa PR (Hari)",
  "Days after which an open purchase request expires automatically.": "Jumlah hari hingga PR berstatus terbuka kedaluwarsa secara otomatis.",
  "Data type: Integer.": "Tipe data: Integer.",
  "RFQ Expiry Period Days": "Periode Kedaluwarsa RFQ (Hari)",
  "Days after which an unanswered RFQ expires automatically.": "Jumlah hari hingga RFQ yang tidak dijawab kedaluwarsa secara otomatis.",
  "Purchase Tender Expiry Period Days": "Periode Kedaluwarsa Purchase Tender (Hari)",
  "Reusable records": "Data yang dapat digunakan kembali",
  "Maintains vendors, legal documents, pricelists, teams, products, and warehouses.": "Mengelola vendor, dokumen legal, daftar harga, tim, produk, dan gudang.",
  "Transaction": "Transaksi",
  "Operational documents": "Dokumen operasional",
  "Processes PR, RFQ, PO, Direct Purchase, Blanket Order, Tender, receiving, billing, and subcontracting links.": "Memproses PR, RFQ, PO, Direct Purchase, Blanket Order, Tender, penerimaan, penagihan, dan tautan subkontrak.",
  "Reporting": "Pelaporan",
  "Review and traceability": "Peninjauan dan keterlacakan",
  "Optional": "Opsional",
  "Reviews comparison, progress, document links, audit, billing, and supplier performance.": "Meninjau perbandingan, progres, tautan dokumen, audit, penagihan, dan performa pemasok.",
  "Setup area": "Area pengaturan",
  "Purchase Settings, Order Type, Order Template, Award Strategy, approval, sequences, and mail templates.": "Purchase Settings, Order Type, Order Template, Award Strategy, persetujuan, sequence, dan template email.",
  "Reference data": "Data referensi",
  "Vendors, categories, legal documents, pricelists, amendments, teams, products, and warehouses.": "Vendor, kategori, dokumen legal, daftar harga, amandemen, tim, produk, dan gudang.",
  "Daily work": "Pekerjaan harian",
  "PR, RFQ, PO, Blanket Order, Tender, Receiving Notes, Billing, and subcontracting integration.": "PR, RFQ, PO, Blanket Order, Tender, Receiving Notes, Billing, dan integrasi subkontrak.",
  "Review output": "Output peninjauan",
  "RFQ comparison, document tracking, receiving progress, billing review, tender audit, vendor performance, and Purchase Intelligence.": "Perbandingan RFQ, pelacakan dokumen, progres penerimaan, peninjauan tagihan, audit tender, performa vendor, dan Purchase Intelligence.",
  "Purchase Settings": "Purchase Settings",
  "Parameter": "Parameter",
  "Controls vendor numbering, credit-limit warnings or blocks, PO revision rules, expiry days, receiving flow, and bill validation.": "Mengontrol penomoran vendor, peringatan atau pemblokiran batas kredit, aturan revisi PO, hari kedaluwarsa, alur penerimaan, dan validasi tagihan.",
  "Order Type": "Order Type",
  "Master setup": "Pengaturan master",
  "Groups Purchase documents by company and allowed product category so users pick the right buying flow.": "Mengelompokkan dokumen Purchase berdasarkan perusahaan dan kategori produk yang diizinkan agar pengguna memilih alur pembelian yang tepat.",
  "Order Template": "Order Template",
  "Reusable setup": "Pengaturan yang dapat digunakan kembali",
  "Stores repeatable vendor, order type, and product line defaults so buyers do not retype common purchases.": "Menyimpan default vendor, tipe pesanan, dan baris produk berulang agar pembeli tidak perlu memasukkan ulang pembelian umum.",
  "Award Strategy Config": "Award Strategy Config",
  "Tender setup": "Pengaturan tender",
  "Defines how tender quantities are split across ranked vendors and how much capacity one vendor can receive.": "Menentukan pembagian kuantitas tender pada vendor berperingkat dan batas kapasitas yang dapat diterima satu vendor.",
  "Saved": "Tersimpan",
  "The setup is saved and can be used by related Purchase workflows.": "Pengaturan tersimpan dan dapat digunakan oleh alur kerja Purchase terkait.",
  "User clicks Save after changing the setup.": "Pengguna mengeklik Save setelah mengubah pengaturan.",
  "Open a related Purchase document and confirm the rule works as expected.": "Buka dokumen Purchase terkait dan pastikan aturan berfungsi sebagaimana mestinya.",
  "Inactive / Disabled": "Tidak Aktif / Dinonaktifkan",
  "The setup is hidden from normal transaction use.": "Pengaturan disembunyikan dari penggunaan transaksi normal.",
  "Open Purchase > Purchase > Request for Quotation. Open RFQ Comparison from RFQ action or Reporting.": "Buka Purchase > Purchase > Request for Quotation. Buka RFQ Comparison dari aksi RFQ atau Reporting.",
  "Select RFQs that share comparable products.": "Pilih RFQ yang memiliki produk serupa untuk dibandingkan.",
  "Review each comparable RFQ line for Product, Vendor, Price, Expected Date, Payment Term, Lead Time, and supplier history. These values decide the preferred offer.": "Tinjau setiap baris RFQ yang dibandingkan untuk Product, Vendor, Price, Expected Date, Payment Term, Lead Time, dan riwayat pemasok. Nilai-nilai ini menentukan penawaran terpilih.",
  "Highlight preferred offer and record buying decision.": "Tandai penawaran terpilih dan catat keputusan pembelian.",
  "Return to the selected RFQ for conversion.": "Kembali ke RFQ yang dipilih untuk konversi.",
  "Open Purchase > Purchase > Request for Quotation. Open the winning RFQ.": "Buka Purchase > Purchase > Request for Quotation. Buka RFQ pemenang.",
  "Confirm vendor, order type, and warehouse, then review each order line for Product, Quantity, UoM, Unit Price, Taxes, Discount, Destination Warehouse, and Planned Date.": "Konfirmasi vendor, jenis pesanan, dan gudang, lalu tinjau setiap baris pesanan untuk Product, Quantity, UoM, Unit Price, Taxes, Discount, Destination Warehouse, dan Planned Date.",
  "Click Confirm Order or Purchase Order action.": "Klik Confirm Order atau aksi Purchase Order.",
  "Review the generated Purchase Order state and smart buttons.": "Tinjau status Purchase Order yang terbentuk dan smart button.",
  "Continue to receiving or billing based on product and policy.": "Lanjutkan ke penerimaan atau penagihan sesuai produk dan kebijakan.",
  "Open Purchase > Purchase > Purchase Order. Open a draft RFQ or Purchase Order.": "Buka Purchase > Purchase > Purchase Order. Buka draf RFQ atau Purchase Order.",
  "Validate vendor, company, currency, warehouse, and expected date, then review every purchase line for Product, Quantity, UoM, Unit Price, Taxes, Discount, Destination Warehouse, and Planned Date.": "Validasi vendor, perusahaan, mata uang, gudang, dan tanggal perkiraan, lalu tinjau setiap baris pembelian untuk Product, Quantity, UoM, Unit Price, Taxes, Discount, Destination Warehouse, dan Planned Date.",
  "Check taxes, analytic or destination information if used.": "Periksa pajak, informasi analitik, atau tujuan jika digunakan.",
  "Click Confirm Order.": "Klik Confirm Order.",
  "Review status, smart buttons, and generated receiving or billing links.": "Tinjau status, smart button, dan tautan penerimaan atau penagihan yang dihasilkan.",
  "Open Purchase > Purchase > Purchase Order. Open a confirmed Purchase Order.": "Buka Purchase > Purchase > Purchase Order. Buka Purchase Order yang telah dikonfirmasi.",
  "Click Create RN or open Goods Receipt smart button.": "Klik Create RN atau buka smart button Goods Receipt.",
  "Review product, ordered quantity, received quantity, remaining quantity, and destination.": "Tinjau produk, kuantitas dipesan, kuantitas diterima, sisa kuantitas, dan tujuan.",
  "Save or validate the receiving document according to warehouse flow.": "Save atau validasi dokumen penerimaan sesuai alur gudang.",
  "Return to PO and confirm received quantity updates.": "Kembali ke PO dan pastikan pembaruan kuantitas diterima.",
  "Open Purchase > Purchase > Purchase Order. Open confirmed PO after receipt or commercial milestone.": "Buka Purchase > Purchase > Purchase Order. Buka PO yang telah dikonfirmasi setelah penerimaan atau pencapaian komersial.",
  "Click Create Bill or Billing action.": "Klik Create Bill atau aksi Billing.",
  "Check vendor, bill date, products, taxes, account, and amount.": "Periksa vendor, tanggal tagihan, produk, pajak, akun, dan jumlah nominal.",
  "Save bill as draft or validate based on company policy.": "Save tagihan sebagai draf atau validasi sesuai kebijakan perusahaan.",
  "Return to PO to verify Bills smart button and invoice count.": "Kembali ke PO untuk memverifikasi smart button Bills dan jumlah faktur.",
  "Open the Purchase Order.": "Buka Purchase Order.",
  "Use Revise when revision policy allows controlled document update.": "Gunakan Revise saat kebijakan revisi mengizinkan pembaruan dokumen terkontrol.",
  "Use Close when procurement is finished and no further action is expected.": "Gunakan Close saat pengadaan selesai dan tidak ada tindakan lanjutan.",
  "Use Cancel only when the transaction must be voided according to business approval.": "Gunakan Cancel hanya ketika transaksi harus dibatalkan sesuai persetujuan bisnis.",
  "Check linked receiving and billing documents before closing or cancelling.": "Periksa dokumen penerimaan dan penagihan terkait sebelum menutup atau membatalkan.",
  "Open Purchase > Agreement > Blanket Order. Open Blanket Order and click Create.": "Buka Purchase > Agreement > Blanket Order. Buka Blanket Order dan klik Create.",
  "Fill vendor, agreement validity, company, currency, and pricelist if used.": "Isi vendor, masa berlaku perjanjian, perusahaan, mata uang, dan pricelist jika digunakan.",
  "Click Add a Line, then fill Product, Agreed Quantity, UoM, Price, and Schedule Context. These fields define the agreement balance and future RFQ release terms.": "Klik Add a Line, lalu isi Product, Agreed Quantity, UoM, Price, dan Schedule Context. Kolom-kolom ini menentukan saldo perjanjian dan ketentuan rilis RFQ mendatang.",
  "Save and confirm agreement according to approval policy.": "Save dan konfirmasi perjanjian sesuai kebijakan persetujuan.",
  "Monitor remaining quantity as RFQs are released.": "Pantau sisa kuantitas seiring RFQ dirilis.",
  "Open Purchase > Purchase > Request for Quotation. Open active Blanket Order.": "Buka Purchase > Purchase > Request for Quotation. Buka Blanket Order aktif.",
  "Select the agreement line, enter Release Quantity, and review Product, UoM, Price, and Expected Date before creating the RFQ. Release Quantity reduces the remaining blanket agreement balance.": "Pilih baris perjanjian, masukkan Release Quantity, lalu periksa Product, UoM, Price, dan Expected Date sebelum membuat RFQ. Release Quantity mengurangi sisa saldo blanket agreement.",
  "Click Create RFQ or release action.": "Klik Create RFQ atau tindakan rilis.",
  "Review generated RFQ vendor, product, price, and expected date.": "Tinjau vendor, produk, harga, dan tanggal yang diharapkan pada RFQ yang dibuat.",
  "Confirm that Blanket remaining quantity is reduced after release.": "Pastikan sisa kuantitas Blanket berkurang setelah rilis.",
  "Open Purchase > Tender > Purchase Tender. Open Purchase Tender.": "Buka Purchase > Tender > Purchase Tender. Buka Purchase Tender.",
  "Invite or select eligible vendors according to tender scope.": "Undang atau pilih vendor yang memenuhi syarat sesuai lingkup tender.",
  "Record bid product, quantity, price, delivery date, and supplier document status.": "Catat produk, kuantitas, harga, tanggal pengiriman penawaran, dan status dokumen pemasok.",
  "Submit bid when supplier offer is complete.": "Kirim penawaran saat penawaran pemasok sudah lengkap.",
  "Review submitted bids before award strategy is applied.": "Tinjau penawaran yang diajukan sebelum strategi penetapan pemenang diterapkan.",
  "Open Purchase > Tender > Purchase Tender. Open tender with submitted bids.": "Buka Purchase > Tender > Purchase Tender. Buka tender dengan penawaran yang telah diajukan.",
  "Check award strategy configuration and eligible bid lines.": "Periksa konfigurasi strategi penetapan pemenang dan baris penawaran yang memenuhi syarat.",
  "Click Apply Award Strategy.": "Klik Apply Award Strategy.",
  "Review allocation quantity, score, rank, vendor capacity, and subtotal.": "Tinjau kuantitas alokasi, skor, peringkat, kapasitas vendor, dan subtotal.",
  "Adjust allocation only when policy allows manual review.": "Sesuaikan alokasi hanya jika kebijakan mengizinkan peninjauan manual.",
  "Open Purchase > Tender > Purchase Tender. Open tender award review.": "Buka Purchase > Tender > Purchase Tender. Buka tinjauan penetapan pemenang tender.",
  "Check allocated vendors, quantities, prices, and document qualification.": "Periksa vendor, kuantitas, harga yang dialokasikan, dan kualifikasi dokumen.",
  "Click Approve Decision when evaluation is complete.": "Klik Approve Decision saat evaluasi selesai.",
  "Generate PO or RFQ from the approved award where available.": "Buat PO atau RFQ dari penetapan pemenang yang disetujui jika tersedia.",
  "Use Tender Audit to trace allocation and approval history.": "Gunakan Tender Audit untuk melacak riwayat alokasi dan persetujuan.",
  "Open Purchase > Vendor > Vendors. Open the Tender or vendor qualification record that requires document review.": "Buka Purchase > Vendor > Vendors. Buka Tender atau catatan kualifikasi vendor yang memerlukan peninjauan dokumen.",
  "Select the vendor and confirm the required legal document lines are listed.": "Pilih vendor dan pastikan baris dokumen legal yang diperlukan tercantum.",
  "Upload or review each attachment and update the document status.": "Unggah atau tinjau setiap lampiran dan perbarui status dokumen.",
  "Use Document Fulfillment when the vendor must complete missing requirements.": "Gunakan Document Fulfillment saat vendor harus melengkapi persyaratan yang kurang.",
  "Check the compliance status before allowing the vendor to continue to award or PO creation.": "Periksa status kepatuhan sebelum mengizinkan vendor melanjutkan ke tahap penetapan pemenang atau pembuatan PO.",
  "Open confirmed PO with receivable products.": "Buka PO terkonfirmasi dengan produk yang dapat diterima.",
  "Review product lines, source PO, destination warehouse, and remaining quantity.": "Tinjau baris produk, sumber PO, gudang tujuan, dan sisa kuantitas.",
  "Save receiving note for warehouse execution.": "Simpan RN untuk eksekusi gudang.",
  "Return to PO to verify receiving link is created.": "Kembali ke PO untuk memverifikasi tautan penerimaan telah dibuat.",
  "Open Purchase > Purchase > Purchase Order. Open the receiving document linked from PO.": "Buka Purchase > Purchase > Purchase Order. Buka dokumen penerimaan yang ditautkan dari PO.",
  "Check actual received quantity against ordered quantity.": "Periksa kuantitas aktual yang diterima terhadap kuantitas yang dipesan.",
  "Record lot, serial, package, or location details where required by inventory setup.": "Catat detail lot, serial, paket, atau lokasi jika diwajibkan oleh pengaturan inventaris.",
  "Validate receiving document.": "Validasi dokumen penerimaan.",
  "Return to PO and confirm Qty Received updates.": "Kembali ke PO dan pastikan Qty Received terbarui.",
  "Open PO after partial or full receiving.": "Buka PO setelah penerimaan sebagian atau seluruhnya.",
  "Check received percentage, Qty Received, Qty Remaining, and lead time variance.": "Periksa persentase penerimaan, Qty Received, Qty Remaining, dan varians lead time.",
  "Compare planned receiving date with actual receiving date.": "Bandingkan tanggal penerimaan terencana dengan tanggal penerimaan aktual.",
  "Filter lines with remaining quantity to decide whether follow-up receiving is still needed.": "Filter baris dengan kuantitas tersisa untuk menentukan apakah penerimaan lanjutan masih diperlukan.",
  "Use the receiving time status to identify late, partial, or completed deliveries.": "Gunakan status waktu penerimaan untuk mengidentifikasi pengiriman terlambat, sebagian, atau selesai.",
  "Open the Purchase Order or Billing Review source document.": "Buka dokumen sumber Purchase Order atau Billing Review.",
  "Check invoice count, amount due, down payment, and settlement bill links.": "Periksa jumlah faktur, jumlah jatuh tempo, uang muka, dan tautan tagihan pelunasan.",
  "Open linked vendor bills and verify bill status, bill date, tax, total, and residual amount.": "Buka vendor bill terkait dan verifikasi status tagihan, tanggal tagihan, pajak, total, serta jumlah sisa tagihan.",
  "Compare billed quantity and amount against ordered and received quantity.": "Bandingkan kuantitas dan nominal tertagih dengan kuantitas yang dipesan dan diterima.",
  "Follow up bills with remaining payable amount before marking the purchase flow complete.": "Tindak lanjuti tagihan dengan sisa utang sebelum menandai alur pembelian selesai.",
  "Open Purchase > Tender > Purchase Tender. Open the Tender or award review record.": "Buka Purchase > Tender > Purchase Tender. Buka rekaman Tender atau tinjauan pemenang.",
  "Review the tender lines and award allocation rows: Document Qualification, Vendor Score, Rank, Subtotal, Allocation Quantity, and generated award lines explain why a vendor is selected and which quantity will become PO.": "Tinjau baris tender dan baris alokasi pemenang: Document Qualification, Vendor Score, Rank, Subtotal, Allocation Quantity, dan baris penetapan pemenang yang dihasilkan menjelaskan alasan vendor dipilih serta kuantitas mana yang akan menjadi PO.",
  "Open the audit log to confirm important award allocation changes.": "Buka log audit untuk mengonfirmasi perubahan penting pada alokasi penetapan pemenang.",
  "Check generated PO links and compare them with the approved award decision.": "Periksa tautan PO yang dihasilkan dan bandingkan dengan keputusan penetapan pemenang yang disetujui.",
  "Approve or return the decision only after document review, award allocation, and generated purchase documents are consistent.": "Setujui atau kembalikan keputusan hanya setelah peninjauan dokumen, alokasi penetapan pemenang, dan dokumen pembelian yang dihasilkan sudah konsisten.",
  "Open Vendor Performance or receiving progress review.": "Buka Vendor Performance atau tinjauan progres penerimaan.",
  "Filter by vendor, product, company, or date range.": "Filter berdasarkan vendor, produk, perusahaan, atau rentang tanggal.",
  "Compare expected delivery date with actual receiving date.": "Bandingkan tanggal pengiriman yang diharapkan dengan tanggal penerimaan aktual.",
  "Review on-time signal and last purchase price context.": "Tinjau sinyal ketepatan waktu dan konteks harga pembelian terakhir.",
  "Use the result for supplier review, negotiation, or tender scoring.": "Gunakan hasilnya untuk evaluasi pemasok, negosiasi, atau penilaian tender.",
  "Open Purchase > Purchase Intelligence > Overview to review the executive summary, KPI cards, trend visuals, top alerts, and procurement condition for the selected period.": "Buka Purchase > Purchase Intelligence > Overview untuk meninjau ringkasan eksekutif, kartu KPI, visual tren, peringatan utama, dan kondisi pengadaan untuk periode yang dipilih.",
  "Set the available filters such as date range, company, branch, buyer, vendor, product, category, warehouse, or document type depending on the selected page. Keep filters visible when validating totals.": "Atur filter yang tersedia seperti rentang tanggal, perusahaan, cabang, pembeli, vendor, produk, kategori, gudang, atau tipe dokumen tergantung pada halaman yang dipilih. Pastikan filter tetap terlihat saat memvalidasi total.",
  "Use Insight Feed to review prioritized procurement observations. Start with high-severity insights, then read the evidence, affected area, and recommended action before opening the related source document.": "Gunakan Insight Feed untuk meninjau observasi pengadaan yang diprioritaskan. Mulai dari wawasan dengan tingkat keparahan tinggi, lalu baca bukti, area terdampak, dan tindakan yang disarankan sebelum membuka dokumen sumber terkait.",
  "Use the analysis pages for deeper review: Spend Analysis for purchasing spend, Supplier Performance for vendor behavior, Demand Analysis for requested item trends, Savings Opportunities for pricing or sourcing improvement, Contract Intelligence for supplier agreement visibility, Budget vs Actual for planned versus actual procurement spend, and Risk Center for consolidated procurement risk.": "Gunakan halaman analisis untuk peninjauan lebih mendalam: Spend Analysis untuk pengeluaran pembelian, Supplier Performance untuk kinerja vendor, Demand Analysis untuk tren permintaan barang, Savings Opportunities untuk peluang penghematan harga atau pengadaan, Contract Intelligence untuk visibilitas perjanjian pemasok, Budget vs Actual untuk pengeluaran pengadaan terencana versus aktual, dan Risk Center untuk konsolidasi risiko pengadaan.",
  "Open the linked PR, RFQ, PO, Blanket Order, Tender, Vendor, Receiving, Billing, Budget, or Pricelist record when the dashboard shows a variance, risk, or recommended action. Correct the source record from its own workflow, not from the intelligence dashboard.": "Buka rekaman PR, RFQ, PO, Blanket Order, Tender, Vendor, Receiving, Billing, Budget, atau Pricelist terkait saat dasbor menunjukkan varians, risiko, atau tindakan yang disarankan. Perbaiki rekaman sumber dari alur kerjanya sendiri, bukan dari dasbor intelijen.",
  "Reopen or refresh Purchase Intelligence after the source record is updated, then confirm the KPI, chart, and insight result reflect the corrected transaction data.": "Buka kembali atau segarkan Purchase Intelligence setelah rekaman sumber diperbarui, lalu pastikan KPI, grafik, dan hasil wawasan mencerminkan data transaksi yang telah diperbaiki.",
  "Username": "Username",
  "Text": "Teks",
  "YES": "YA",
  "The login identifier of the user. Either the user's login name or the e-mail address registered on the User master, depending on the server configuration.": "Identitas login pengguna. Berupa nama login pengguna atau alamat email yang terdaftar pada master User, tergantung pada konfigurasi server.",
  "Password": "Kata Sandi",
  "Secret credential associated with the username. Case-sensitive. Use the Forgot & Reset Password? link on the login form when the password is not known.": "Kredensial rahasia yang terkait dengan username. Peka huruf besar/kecil (case-sensitive). Gunakan tautan Forgot & Reset Password? pada formulir login jika kata sandi tidak diketahui.",
  "Master Configuration": "Konfigurasi Master",
  "Settings and rules": "Pengaturan dan aturan",
  "Defines sequencing, approval, receiving, billing, order types, templates, and award strategy.": "Menentukan penomoran urut, persetujuan, penerimaan, penagihan, tipe pesanan, templat, dan strategi penetapan pemenang.",
  "Master Data": "Master Data",
  "Days after which an open tender expires automatically.": "Jumlah hari sebelum tender terbuka kedaluwarsa secara otomatis.",
  "Draft PO Numbering": "Penomoran Draft PO",
  "Numbering pattern applied while a purchase order is still in draft.": "Pola penomoran yang diterapkan saat purchase order masih berstatus draft.",
  "Data type: Char.": "Tipe data: Char.",
  "Revised Document – Sequence Numbering": "Dokumen Revisi – Penomoran Urut",
  "Sequence used when a purchase document is revised.": "Penomoran urut yang digunakan saat dokumen pembelian direvisi.",
  "3-Way Matching Mode": "Mode 3-Way Matching",
  "Matching strictness between bill, purchase order, and receipt.": "Tingkat ketatnya pencocokan antara tagihan, purchase order, dan penerimaan barang.",
  "Unit Price Tolerance": "Toleransi Harga Satuan",
  "Allowed percentage deviation on unit price during matching.": "Persentase deviasi yang diizinkan untuk harga satuan saat proses matching.",
  "Data type: Percentage.": "Tipe data: Persentase.",
  "Quantity Tolerance": "Toleransi Kuantitas",
  "Allowed percentage deviation on quantity during matching.": "Persentase deviasi yang diizinkan untuk kuantitas saat proses matching.",
  "Product Vendor Pricelist Filter": "Filter Daftar Harga Vendor Produk",
  "Filter applied when picking vendor pricelists for products.": "Filter yang diterapkan saat memilih daftar harga vendor untuk produk.",
  "Company": "Perusahaan",
  "Company the settings apply to. Settings are stored per company.": "Perusahaan tempat pengaturan diterapkan. Pengaturan disimpan per perusahaan.",
  "Data type: Reference.": "Tipe data: Referensi.",
  "Branch": "Cabang",
  "Branch scope when the configuration is branch-specific.": "Cakupan cabang jika konfigurasi bersifat spesifik per cabang.",
  "Configure Purchase Settings": "Konfigurasi Pengaturan Pembelian",
  "Use during implementation or when purchasing policy changes.": "Gunakan saat implementasi atau ketika kebijakan pembelian berubah.",
  "Open Purchase > Configuration > Purchase Settings, update the setup, save, then test with a sample Purchase document.": "Buka Purchase > Configuration > Purchase Settings, perbarui konfigurasi, simpan, lalu uji dengan sampel dokumen Purchase.",
  "The configured behavior is available for users.": "Perilaku yang dikonfigurasi sudah tersedia untuk pengguna.",
  "Review setup impact": "Tinjau dampak konfigurasi",
  "Use before changing rules that affect approval, sequence, receiving, billing, or supplier control.": "Gunakan sebelum mengubah aturan yang memengaruhi persetujuan, penomoran urut, penerimaan, penagihan, atau kontrol pemasok.",
  "Confirm affected Purchase workflows and communicate the change before saving.": "Pastikan alur kerja Purchase yang terdampak dan komunikasikan perubahan sebelum menyimpan.",
  "Users avoid unexpected purchasing behavior.": "Pengguna terhindar dari kendala alur pembelian yang tidak diinginkan.",
  "The menu, button, or action is not visible.": "Menu, tombol, atau tindakan tidak terlihat.",
  "The user role, document status, configuration, approval rule, or related module does not allow the action.": "Peran pengguna, status dokumen, konfigurasi, aturan persetujuan, atau modul terkait tidak mengizinkan tindakan tersebut.",
  "Check user access, document status, Purchase settings, approval setup, and required linked records before retrying.": "Periksa hak akses pengguna, status dokumen, pengaturan Purchase, konfigurasi persetujuan, dan data terkait yang diperlukan sebelum mencoba kembali.",
  "The record cannot be saved, confirmed, approved, sent, received, billed, or closed.": "Data tidak dapat disimpan, dikonfirmasi, disetujui, dikirim, diterima, ditagih, atau ditutup.",
  "A required field, vendor, product line, quantity, price, warehouse, tax, approval, or source document is missing or invalid.": "Kolom wajib, vendor, baris produk, kuantitas, harga, gudang, pajak, persetujuan, atau dokumen sumber belum diisi atau tidak valid.",
  "Review highlighted fields and line tables, complete the missing values, save, then run the workflow action again.": "Periksa kolom dan tabel baris yang disorot, lengkapi nilai yang kosong, simpan, lalu jalankan kembali tindakan alur kerja.",
  "The expected linked document is not created.": "Dokumen terkait yang diharapkan tidak terbentuk.",
  "The source document is not in the required status, the configuration blocks automatic creation, or the related integration is disabled.": "Dokumen sumber tidak berada dalam status yang diperlukan, konfigurasi memblokir pembuatan otomatis, atau integrasi terkait dinonaktifkan.",
  "Confirm the source document status and configuration, then use the manual Create, Convert, Receiving, Bill, or Release action when available.": "Konfirmasi status dan konfigurasi dokumen sumber, lalu gunakan tindakan manual Create, Convert, Receiving, Bill, atau Release jika tersedia.",
  "Name": "Nama",
  "Order type label shown on Purchase documents.": "Label tipe pesanan yang ditampilkan pada dokumen Purchase.",
  "Data type: Text.": "Tipe data: Text.",
  "Companies": "Perusahaan",
  "Companies allowed to use the order type.": "Perusahaan yang diizinkan menggunakan tipe pesanan ini.",
  "Data type: Many2many.": "Tipe data: Many2many.",
  "Product Categories": "Kategori Produk",
  "Product categories supported by this type.": "Kategori produk yang didukung oleh tipe ini.",
  "Active": "Aktif",
  "Archived types are hidden from normal use.": "Tipe yang diarsipkan disembunyikan dari penggunaan normal.",
  "Prefix Sequence": "Prefix Sequence",
  "Prefix used when generating the document number for this type.": "Prefiks yang digunakan saat membuat nomor dokumen untuk tipe ini.",
  "Sequences": "Sequences",
  "Tab holding one sequence line per company using this order type.": "Tab yang memuat satu baris penomoran per perusahaan yang menggunakan tipe pesanan ini.",
  "Data type: One2many.": "Tipe data: One2many.",
  "Configure Order Type": "Konfigurasi Order Type",
  "Open Purchase > Configuration > Order > Order Type, update the setup, save, then test with a sample Purchase document.": "Buka Purchase > Configuration > Order > Order Type, perbarui pengaturan, Save, lalu uji dengan sampel dokumen Purchase.",
  "Vendor": "Vendor",
  "Default vendor for the reusable purchase template.": "Vendor default untuk template pembelian yang dapat digunakan kembali.",
  "Purchase order type linked to the template.": "Tipe purchase order yang ditautkan ke template.",
  "Product": "Produk",
  "Product included in the template line.": "Produk yang disertakan dalam baris template.",
  "Quantity / UoM / Price": "Kuantitas / UoM / Harga",
  "Default line values copied into a purchase document.": "Nilai baris default yang disalin ke dokumen pembelian.",
  "Data type: Number / Reference.": "Tipe data: Number / Reference.",
  "Allowed Product Categories": "Kategori Produk yang Diizinkan",
  "Product categories the template may draw its lines from.": "Kategori produk yang dapat digunakan untuk baris template.",
  "Branch the template is restricted to.": "Cabang yang dibatasi untuk template ini.",
  "Configure Order Template": "Konfigurasi Order Template",
  "Open Purchase > Configuration > Order > Order Template, update the setup, save, then test with a sample Purchase document.": "Buka Purchase > Configuration > Order > Order Template, perbarui pengaturan, Save, lalu uji dengan sampel dokumen Purchase.",
  "Rank 1 Ratio (%)": "Rasio Rank 1 (%)",
  "Share of the awarded quantity given to the first-ranked supplier.": "Porsi kuantitas yang diberikan kepada pemasok peringkat pertama.",
  "Rank 2 Ratio (%)": "Rasio Rank 2 (%)",
  "Mail communication recorded": "Komunikasi email tercatat",
  "RFQ or Purchase communication is sent or logged through the document communication history.": "Komunikasi RFQ atau Purchase dikirim atau dicatat melalui riwayat komunikasi dokumen.",
  "Review recipients, message content, attachments, and chatter history before follow-up.": "Tinjau penerima, konten pesan, lampiran, dan riwayat chatter sebelum tindak lanjut.",
  "Automation processed": "Otomatisasi diproses",
  "A backend scheduled job updates related Purchase data, such as blanket agreement status or expired pricelist validity.": "Scheduled job backend memperbarui data Purchase terkait, seperti status blanket agreement atau validitas pricelist yang kedaluwarsa.",
  "Validate the record status or validity after the scheduled job runs. Escalate to an administrator if the expected update does not appear.": "Validasi status atau validitas rekaman setelah scheduled job berjalan. Eskalasikan ke administrator jika pembaruan yang diharapkan tidak muncul.",
  "Approval Workflow": "Workflow Persetujuan",
  "Configuration / runtime": "Konfigurasi / runtime",
  "Defines the approval path used by Purchase documents.": "Menentukan jalur persetujuan yang digunakan oleh dokumen Purchase.",
  "Document only workflows verified in source, visible UI, or runtime behavior.": "Dokumentasikan hanya alur kerja yang terverifikasi dalam source, UI yang terlihat, atau perilaku runtime.",
  "Approval Rule": "Aturan Persetujuan",
  "Determines which workflow applies to a document and when approval is required.": "Menentukan alur kerja mana yang berlaku untuk dokumen dan kapan persetujuan diperlukan.",
  "Explain the document conditions and approver behavior without changing business configuration.": "Jelaskan kondisi dokumen dan perilaku approver tanpa mengubah konfigurasi bisnis.",
  "Approval History": "Riwayat Persetujuan",
  "Document UI": "UI Dokumen",
  "Shows approval traceability, actions, dates, and responsible users when available.": "Menampilkan keterlacakan persetujuan, tindakan, tanggal, dan pengguna yang bertanggung jawab jika tersedia.",
  "Use it as the evidence screen for completed or pending approval decisions.": "Gunakan sebagai layar bukti untuk keputusan persetujuan yang telah selesai atau tertunda.",
  "Document Sequence": "Sequence Dokumen",
  "Order Type UI and backend": "UI Order Type dan backend",
  "Controls numbering for Purchase documents. Visible sequence previews are shown in Order Type configuration.": "Mengontrol penomoran untuk dokumen Purchase. Pratinjau sequence yang terlihat ditampilkan dalam konfigurasi Order Type.",
  "Document the visible sequence fields only. Direct Purchase sequence is used by backend logic but is not exposed as a separate UI field in the verified Order Type screen.": "Dokumentasikan hanya field sequence yang terlihat. Sequence Direct Purchase digunakan oleh logika backend tetapi tidak ditampilkan sebagai field UI terpisah pada layar Order Type yang terverifikasi.",
  "Direct Purchase Sequence": "Sequence Direct Purchase",
  "Source / backend logic": "Source / logika backend",
  "Backend logic contains Direct Purchase sequence support and uses it when Direct Purchase sequence generation is executed.": "Logika backend memuat dukungan sequence Direct Purchase dan menggunakannya saat pembuatan sequence Direct Purchase dijalankan.",
  "Do not add a user step to configure it from Order Type UI unless the field becomes visible in the product screen.": "Jangan tambahkan langkah pengguna untuk mengonfigurasinya dari UI Order Type kecuali field tersebut terlihat di layar produk.",
  "RFQ Mail Template": "Template Email RFQ",
  "Document communication / mail configuration": "Komunikasi dokumen / konfigurasi email",
  "Controls the message format used for RFQ communication with vendors.": "Mengontrol format pesan yang digunakan untuk komunikasi RFQ dengan vendor.",
  "Guide users to verify communication from the RFQ record and mail history, not by assuming direct template editing access for all roles.": "Arahkan pengguna untuk memverifikasi komunikasi dari rekaman RFQ dan riwayat email, bukan dengan mengasumsikan akses pengeditan template langsung untuk semua role.",
  "Blanket Order Approval": "Persetujuan Blanket Order",
  "Source, runtime, and document UI": "Source, runtime, dan UI dokumen",
  "Purchase Blanket Order approval workflow and Approval Blanket Order rule are available and active in the verified Master Demo runtime.": "Workflow persetujuan Purchase Blanket Order dan aturan Approval Blanket Order tersedia serta aktif dalam runtime Master Demo yang terverifikasi.",
  "Document the Blanket Order approval flow as active, with the condition that users follow visible actions on the Blanket Order document.": "Dokumentasikan alur persetujuan Blanket Order sebagai aktif, dengan ketentuan pengguna mengikuti tindakan yang terlihat pada dokumen Blanket Order.",
  "Scheduled Automation": "Otomatisasi Terjadwal",
  "Backend schedule / record outcome": "Jadwal backend / hasil rekaman",
  "Runs background updates such as blanket order status transition or expired pricelist checks.": "Menjalankan pembaruan latar belakang seperti transisi status blanket order atau pemeriksaan pricelist kedaluwarsa.",
  "Document expected outcomes on records and mark disabled jobs as inactive when runtime verification shows them disabled.": "Dokumentasikan hasil yang diharapkan pada record dan tandai job yang dinonaktifkan sebagai tidak aktif jika verifikasi runtime menunjukkannya nonaktif.",
  "Approval governance": "Tata kelola approval",
  "Approval actions and Waiting for Approval status are available on supported Purchase documents.": "Tindakan approval dan status Waiting for Approval tersedia pada dokumen Purchase yang didukung.",
  "Users must submit documents through the visible approval action and wait for approver decision before continuing downstream steps.": "Pengguna harus mengajukan dokumen melalui tindakan approval yang terlihat dan menunggu keputusan approver sebelum melanjutkan langkah berikutnya.",
  "Sequence governance": "Tata kelola sequence",
  "Visible Order Type sequence configuration controls standard Purchase document numbering. Direct Purchase sequence exists in backend logic but is not exposed as a separate editable UI field in the verified Order Type view.": "Konfigurasi sequence Order Type yang terlihat mengontrol penomoran standar dokumen Purchase. Sequence Direct Purchase tersedia pada logika backend tetapi tidak ditampilkan sebagai field UI terpisah yang dapat diedit pada tampilan Order Type terverifikasi.",
  "Users can verify generated numbers, but should not be instructed to manually maintain Direct Purchase sequence from the Order Type screen.": "Pengguna dapat memverifikasi nomor yang dibuat, tetapi tidak boleh diarahkan untuk mengelola sequence Direct Purchase secara manual dari layar Order Type.",
  "RFQ communication": "Komunikasi RFQ",
  "RFQ communication can be traced from the RFQ document history and related attachments.": "Komunikasi RFQ dapat dilacak dari riwayat dokumen RFQ dan lampiran terkait.",
  "Users can audit vendor communication before awarding, confirming, or following up with vendors.": "Pengguna dapat mengaudit komunikasi vendor sebelum memberikan penawaran (awarding), mengonfirmasi, atau menindaklanjuti vendor.",
  "Blanket Order approval": "Approval Blanket Order",
  "Purchase Blanket Order workflow and Approval Blanket Order rule are active in the verified Master Demo runtime.": "Alur kerja Purchase Blanket Order dan aturan Approval Blanket Order aktif pada runtime Master Demo terverifikasi.",
  "Blanket Order can be documented as an active approval path, but only with steps that match visible document actions.": "Blanket Order dapat didokumentasikan sebagai jalur approval aktif, tetapi hanya dengan langkah-langkah yang sesuai dengan tindakan dokumen yang terlihat.",
  "Scheduled automation": "Otomatisasi terjadwal",
  "Blanket Order automatic status transition and expired pricelist checks are enabled in verified runtime. Vendor Performance Scoring and Peppol Purchase Order Status refresh are disabled in verified runtime.": "Transisi status otomatis Blanket Order dan pemeriksaan pricelist kedaluwarsa diaktifkan pada runtime terverifikasi. Vendor Performance Scoring dan pembaruan Peppol Purchase Order Status dinonaktifkan pada runtime terverifikasi.",
  "Documentation must distinguish enabled runtime behavior from inactive configuration so users do not expect disabled jobs to update records automatically.": "Dokumentasi harus membedakan perilaku runtime yang aktif dari konfigurasi tidak aktif agar pengguna tidak mengharapkan job nonaktif memperbarui record secara otomatis.",
  "Master data with workflow": "Master data dengan alur kerja",
  "Stores supplier identity, vendor code, category, legal document lines, approval status, blacklist information, and purchase credit limit.": "Menyimpan identitas pemasok, kode vendor, kategori, baris dokumen legal, status approval, informasi blacklist, dan limit kredit pembelian.",
  "Vendor Category & Legal Document": "Vendor Category & Legal Document",
  "Defines supplier grouping and applicable legal documents. Blocking required documents can prevent vendor submission or confirmation.": "Menentukan pengelompokan pemasok dan dokumen legal yang berlaku. Pemblokiran dokumen wajib dapat mencegah pengajuan atau konfirmasi vendor.",
  "Vendor Pricelist": "Vendor Pricelist",
  "Master data with approval": "Master data dengan approval",
  "Maintains supplier-specific pricing by product, UoM, currency, branch, validity dates, item rows, and quantity tiers.": "Mengelola penetapan harga spesifik pemasok berdasarkan produk, UoM, mata uang, cabang, tanggal berlaku, baris item, dan tingkatan kuantitas.",
  "Purchase Team": "Purchase Team",
  "Routing master": "Master routing",
  "Groups team lead, members, primary buyers, and routing parameters used by Purchase Request and Purchase Order assignment.": "Mengelompokkan team lead, anggota, buyer utama, dan parameter perutean yang digunakan oleh penugasan Purchase Request dan Purchase Order.",
  "Products & Destination Warehouse": "Products & Destination Warehouse",
  "Products provide item references and purchase history, while Destination Warehouse is required on inventory-integrated Purchase Request flows.": "Products menyediakan referensi item dan riwayat pembelian, sedangkan Destination Warehouse wajib diisi pada alur Purchase Request yang terintegrasi dengan inventaris.",
  "Draft": "Draft",
  "Vendor is being prepared or changed.": "Vendor sedang disiapkan atau diubah.",
  "New vendor creation or Change Data from a confirmed vendor.": "Pembuatan vendor baru atau Change Data dari vendor yang telah dikonfirmasi.",
  "Complete required identity, category, purchase limit, and legal document information.": "Lengkapi identitas wajib, kategori, limit pembelian, dan informasi dokumen legal.",
  "Waiting Approval": "Waiting Approval",
  "Vendor is submitted to approval workflow.": "Vendor diajukan ke alur kerja approval.",
  "Share of the awarded quantity given to the second-ranked supplier.": "Porsi kuantitas yang diberikan kepada pemasok peringkat kedua.",
  "Rank 3 Ratio (%)": "Rasio Peringkat 3 (%)",
  "Share of the awarded quantity given to the third-ranked supplier.": "Porsi kuantitas yang diberikan kepada pemasok peringkat ketiga.",
  "Capacity Fill Limit": "Batas Pengisian Kapasitas",
  "Limits how much vendor capacity can be allocated.": "Membatasi seberapa banyak kapasitas vendor yang dapat dialokasikan.",
  "Only active strategy configurations should be used by Tender.": "Hanya konfigurasi strategi aktif yang digunakan oleh Tender.",
  "Company the strategy applies to.": "Perusahaan tempat strategi diterapkan.",
  "Branch scope when the strategy is branch-specific.": "Cakupan cabang saat strategi bersifat spesifik per cabang.",
  "Configure Award Strategy Config": "Konfigurasi Award Strategy Config",
  "Open Purchase > Tender > Purchase Tender, update the setup, save, then test with a sample Purchase document.": "Buka Purchase > Tender > Purchase Tender, perbarui pengaturan, simpan, lalu uji dengan dokumen Purchase contoh.",
  "Administrator or authorized Purchase configuration access": "Akses konfigurasi Purchase untuk administrator atau pengguna berwenang",
  "These settings control governance, so not every buyer or requester will see them.": "Pengaturan ini mengontrol tata kelola, sehingga tidak semua buyer atau requester dapat melihatnya.",
  "Relevant Purchase document types are available": "Tipe dokumen Purchase yang relevan telah tersedia",
  "Approval and numbering can behave differently for Purchase Request, RFQ, Direct Purchase, Purchase Order, Blanket Order, Vendor Pricelist, and KPI Target.": "Approval dan penomoran dapat berfungsi berbeda untuk Purchase Request, RFQ, Direct Purchase, Purchase Order, Blanket Order, Vendor Pricelist, dan KPI Target.",
  "Approval Matrix and rules are configured": "Approval Matrix dan aturan telah dikonfigurasi",
  "A document enters approval only when an active workflow and matching approval rule are available.": "Dokumen masuk ke proses approval hanya jika alur kerja aktif dan aturan approval yang sesuai tersedia.",
  "Mail templates and communication channels are configured": "Template email dan saluran komunikasi telah dikonfigurasi",
  "RFQ emails and reminders need valid recipients, templates, attachments, and activities.": "Email dan pengingat RFQ membutuhkan penerima, template, lampiran, dan aktivitas yang valid.",
  "Scheduled jobs are reviewed by technical or administrator users": "Scheduled job ditinjau oleh pengguna teknis atau administrator",
  "Some automation, such as blanket order transition or expired pricelist checks, runs from backend schedules and is not operated directly from the Purchase document screen.": "Beberapa otomatisasi, seperti transisi blanket order atau pemeriksaan pricelist kedaluwarsa, berjalan dari backend schedule dan tidak dioperasikan langsung dari layar dokumen Purchase.",
  "Approval action visible": "Tindakan approval terlihat",
  "The document is covered by an active approval workflow and the current user can trigger or process the approval step.": "Dokumen tercakup dalam alur kerja approval aktif dan pengguna saat ini dapat memicu atau memproses tahap approval.",
  "Review the record, click the visible approval action, and check the resulting status.": "Tinjau data, klik tindakan approval yang terlihat, lalu periksa status yang dihasilkan.",
  "Waiting for Approval": "Menunggu Persetujuan",
  "The document has been submitted and is waiting for an authorized approver decision.": "Dokumen telah diajukan dan sedang menunggu keputusan approver yang berwenang.",
  "Approver reviews document values, attachments, chatter, and Approval History before approving or rejecting.": "Approver meninjau nilai dokumen, lampiran, chatter, dan Approval History sebelum menyetujui atau menolak.",
  "Approved / Confirmed": "Disetujui / Dikonfirmasi",
  "The approval step is complete and the document can continue to the next Purchase process if other requirements are met.": "Tahap approval selesai dan dokumen dapat lanjut ke proses Purchase berikutnya jika persyaratan lain terpenuhi.",
  "Continue downstream processing, such as RFQ, PO, Blanket Order execution, receiving, billing, or related follow-up.": "Lanjutkan pemrosesan downstream, seperti RFQ, PO, eksekusi Blanket Order, penerimaan barang, penagihan, atau tindak lanjut terkait.",
  "Rejected": "Ditolak",
  "The approval request has been declined.": "Permintaan approval telah ditolak.",
  "Review rejection reason, correct the record if allowed, and resubmit only when the issue has been resolved.": "Tinjau alasan penolakan, perbaiki data jika diizinkan, dan ajukan kembali hanya setelah masalah diselesaikan.",
  "Sequence generated": "Sequence dibuat",
  "The record received a configured document number from the applicable sequence.": "Data menerima nomor dokumen yang terkonfigurasi dari sequence yang berlaku.",
  "Verify the generated number and continue processing. Do not manually edit sequence numbers unless the business policy allows it.": "Verifikasi nomor yang dihasilkan dan lanjutkan pemrosesan. Jangan mengedit nomor sequence secara manual kecuali kebijakan bisnis mengizinkannya.",
  "Similar Vendor": "Vendor Serupa",
  "Smart button appears when similar email, phone, mobile, or bank account is detected.": "Smart button muncul saat email, telepon, ponsel, atau rekening bank serupa terdeteksi.",
  "UI label is currently spelled Similiar Vendor in product source.": "Label UI saat ini dieja Similiar Vendor dalam kode sumber produk.",
  "Create a vendor": "Buat vendor",
  "Use before a supplier can be selected in purchasing documents.": "Gunakan sebelum pemasok dapat dipilih dalam dokumen pembelian.",
  "Open Purchase > Vendor > Vendors, create the vendor, complete identity, categories, legal documents, and save.": "Buka Purchase > Vendor > Vendors, buat vendor, lengkapi identitas, kategori, dokumen legal, lalu simpan.",
  "Vendor is saved in Draft or enters approval depending on workflow.": "Vendor disimpan dalam status Draft atau masuk tahap persetujuan tergantung alur kerja.",
  "Submit vendor with legal documents": "Ajukan vendor dengan dokumen legal",
  "Use when blocking legal documents are configured.": "Gunakan saat dokumen legal pemblokir dikonfigurasi.",
  "Upload required legal document files, then submit or confirm the vendor.": "Unggah file dokumen legal yang diwajibkan, lalu ajukan atau konfirmasi vendor.",
  "System allows submission only when blocking documents are complete.": "Sistem hanya mengizinkan pengajuan saat dokumen pemblokir telah lengkap.",
  "Change confirmed vendor data": "Ubah data vendor yang telah dikonfirmasi",
  "Use when a confirmed vendor name or key data needs controlled revision.": "Gunakan saat nama vendor atau data penting yang telah dikonfirmasi memerlukan revisi terkontrol.",
  "Click Change Data on an active confirmed vendor, update pending values, then send for approval.": "Klik Change Data pada vendor aktif yang telah dikonfirmasi, perbarui nilai yang tertunda, lalu kirim untuk persetujuan.",
  "Confirmed vendor name is updated only after approval.": "Nama vendor yang telah dikonfirmasi hanya diperbarui setelah disetujui.",
  "Blacklist vendor": "Blacklist vendor",
  "Use when the supplier should be prevented from normal purchasing use.": "Gunakan saat pemasok harus dicegah dari penggunaan pembelian normal.",
  "Open the confirmed vendor and click Blacklist.": "Buka vendor yang telah dikonfirmasi lalu klik Blacklist.",
  "Vendor status changes to Blacklisted and blacklist details are retained.": "Status vendor berubah menjadi Blacklisted dan detail blacklist tetap disimpan.",
  "Vendor cannot be submitted or confirmed.": "Vendor tidak dapat diajukan atau dikonfirmasi.",
  "A blocking required legal document is missing its uploaded file.": "Dokumen legal pemblokir yang wajib belum memiliki file yang diunggah.",
  "Open Legal Documents and upload files for every required blocking document.": "Buka Legal Documents dan unggah file untuk setiap dokumen pemblokir yang wajib.",
  "Vendor cannot be selected for purchasing commitment.": "Vendor tidak dapat dipilih untuk komitmen pembelian.",
  "The vendor is inactive, not confirmed, outside company scope, or blacklisted.": "Vendor tidak aktif, belum dikonfirmasi, di luar cakupan perusahaan, atau masuk blacklist.",
  "Check vendor status, active flag, company scope, and approval history.": "Periksa status vendor, status aktif, cakupan perusahaan, dan riwayat persetujuan.",
  "Vendor category cannot be assigned.": "Kategori vendor tidak dapat ditetapkan.",
  "The selected category is scoped to a company that does not match the vendor company.": "Kategori yang dipilih dicakupkan ke perusahaan yang tidak cocok dengan perusahaan vendor.",
  "Select a matching category or update category company scope first.": "Pilih kategori yang cocok atau perbarui cakupan perusahaan kategori terlebih dahulu.",
  "Category saved": "Kategori disimpan",
  "The category can be selected on vendors and used for team routing.": "Kategori dapat dipilih pada vendor dan digunakan untuk perutean tim.",
  "User saves a Vendor Category.": "Pengguna menyimpan Vendor Category.",
  "Assign it only to vendors that match the category company scope.": "Tetapkan hanya ke vendor yang cocok dengan cakupan perusahaan kategori.",
  "Legal Document saved": "Legal Document disimpan",
  "The document rule becomes available based on its usage, type, and applicability.": "Aturan dokumen tersedia berdasarkan penggunaan, tipe, dan keberlakuannya.",
  "User saves a Legal Document.": "Pengguna menyimpan Legal Document.",
  "Review affected vendors and upload the required files.": "Tinjau vendor terkait dan unggah berkas yang diperlukan.",
  "Blocking required document": "Dokumen wajib yang memblokir",
  "Missing files can block vendor submission or confirmation.": "Berkas yang belum diunggah dapat memblokir pengajuan atau konfirmasi vendor.",
  "Document Type is Required or Additional and Blocking is enabled.": "Document Type adalah Required atau Additional dan Blocking diaktifkan.",
  "Upload the document on the vendor record before submitting or confirming it.": "Unggah dokumen pada rekaman vendor sebelum mengajukan atau mengonfirmasinya.",
  "Optional document": "Dokumen opsional",
  "Document is shown as a reminder but is not blocking.": "Dokumen ditampilkan sebagai pengingat tetapi tidak memblokir proses.",
  "Document Type is Optional.": "Document Type adalah Optional.",
  "Upload when available.": "Unggah jika tersedia.",
  "Category Name": "Nama Kategori",
  "Reusable supplier grouping label.": "Label pengelompokan pemasok yang dapat digunakan kembali.",
  "Name must be unique for non-demo records.": "Nama harus unik untuk rekaman non-demo.",
  "Company scope for the category.": "Cakupan perusahaan untuk kategori.",
  "Vendor and category company scopes must overlap when both are set.": "Cakupan perusahaan vendor dan kategori harus bersinggungan saat keduanya diatur.",
  "Vendors": "Vendor",
  "Read-only list of vendors assigned to the category.": "Daftar hanya-baca dari vendor yang dimasukkan ke kategori.",
  "Shows Vendor Code, Vendor Name, phone, mobile, and email.": "Menampilkan Kode Vendor, Nama Vendor, telepon, ponsel, dan email.",
  "Document Usage": "Penggunaan Dokumen",
  "Defines where the document is used.": "Menentukan di mana dokumen digunakan.",
  "Standard Vendor, Tender Document, Additional Vendor.": "Standard Vendor, Tender Document, Additional Vendor.",
  "Document Type": "Tipe Dokumen",
  "Requirement classification.": "Klasifikasi persyaratan dokumen.",
  "Required, Additional, Optional.": "Required, Additional, Optional.",
  "Blocking": "Blocking",
  "Marks whether missing required or additional document upload blocks vendor submission or confirmation.": "Menandai apakah dokumen required atau additional yang belum diunggah akan memblokir pengajuan atau konfirmasi vendor.",
  "Hidden for Optional document type.": "Disembunyikan jika Document Type adalah Optional.",
  "Apply To": "Apply To",
  "Controls additional document applicability.": "Mengatur keberlakuan dokumen tambahan.",
  "Vendor Category, Specific Vendor, or Both.": "Vendor Category, Specific Vendor, atau Both.",
  "Attachments": "Lampiran",
  "Reference attachments for legal document setup.": "Lampiran referensi untuk pengaturan dokumen legal.",
  "PDF files are accepted by the UI.": "Berkas PDF diterima oleh UI.",
  "Create vendor category": "Buat kategori vendor",
  "Use when vendors need reusable grouping.": "Gunakan ketika vendor membutuhkan pengelompokan yang dapat digunakan kembali.",
  "Open Vendor Category, fill name, optional companies, and description, then save.": "Buka Vendor Category, isi nama, perusahaan (opsional), dan deskripsi, lalu klik Save.",
  "Category can be selected on vendor records.": "Kategori dapat dipilih pada data vendor.",
  "Create required legal document": "Buat dokumen legal wajib",
  "Use when vendor onboarding must collect a standard document.": "Gunakan saat onboarding vendor harus mengumpulkan dokumen standar.",
  "Open Legal Document, set usage to Standard Vendor, type to Required, configure Blocking, then save.": "Buka Legal Document, atur usage ke Standard Vendor, type ke Required, konfigurasikan Blocking, lalu simpan.",
  "Applicable vendors receive required document lines and warnings until files are uploaded.": "Vendor yang berlaku menerima baris dokumen wajib dan peringatan hingga file diunggah.",
  "Create category-specific additional document": "Buat dokumen tambahan khusus kategori",
  "Use when only certain vendor categories need extra documentation.": "Gunakan saat hanya kategori vendor tertentu yang memerlukan dokumentasi tambahan.",
  "Set Document Type to Additional, Apply To to Vendor Category or Both, then select categories.": "Atur Document Type ke Additional, Apply To ke Vendor Category atau Both, lalu pilih kategori.",
  "Only matching vendors receive the additional requirement.": "Hanya vendor yang cocok yang menerima persyaratan tambahan.",
  "Category cannot be deleted.": "Kategori tidak dapat dihapus.",
  "Vendors are still assigned to the category.": "Vendor masih ditetapkan ke kategori tersebut.",
  "Unassign vendors first.": "Hapus penetapan vendor terlebih dahulu.",
  "Vendor shows missing required document warning.": "Vendor menampilkan peringatan dokumen wajib belum diunggah.",
  "A blocking legal document applies to the vendor but has no uploaded file.": "Dokumen legal pemblokir berlaku untuk vendor tetapi tidak memiliki file yang diunggah.",
  "Upload the file on the vendor legal document line.": "Unggah file pada baris dokumen legal vendor.",
  "Additional applicability fields are not visible.": "Field penerapan tambahan tidak terlihat.",
  "Document Type is not Additional.": "Document Type bukan Additional.",
  "Change Document Type to Additional if vendor or category specific applicability is required.": "Ubah Document Type ke Additional jika penerapan khusus vendor atau kategori diperlukan.",
  "Pricelist can be edited.": "Pricelist dapat diedit.",
  "New pricelist or unarchived inactive pricelist.": "Pricelist baru atau pricelist tidak aktif yang dibatalkan pengarsipannya.",
  "Complete header and item/tier pricing.": "Lengkapi header dan penetapan harga item/tier.",
  "Pricelist waits for approval workflow.": "Pricelist menunggu alur kerja persetujuan.",
  "User submits the draft pricelist.": "Pengguna mengirimkan draft pricelist.",
  "Wait for approval.": "Tunggu persetujuan.",
  "Pricelist is approved and usable for purchasing price reference.": "Pricelist disetujui dan dapat digunakan untuk referensi harga pembelian.",
  "Approval is completed.": "Persetujuan selesai.",
  "Use for RFQ/PO pricing reference.": "Gunakan untuk referensi penetapan harga RFQ/PO.",
  "Expired": "Kedaluwarsa",
  "Pricelist is no longer valid by expiry date.": "Pricelist sudah tidak valid berdasarkan tanggal kedaluwarsa.",
  "Expiry date is earlier than today or cron recomputes expiration.": "Tanggal kedaluwarsa lebih awal dari hari ini atau cron menghitung ulang masa berlaku.",
  "Create new pricing or amendment if required.": "Buat harga baru atau amandemen jika diperlukan.",
  "Inactive": "Tidak Aktif",
  "Pricelist is archived and not active.": "Pricelist diarsipkan dan tidak aktif.",
  "User clicks Archive.": "Pengguna mengeklik Archive.",
  "Unarchive only when pricing should return to Draft review.": "Lakukan Unarchive hanya jika harga harus kembali ke peninjauan Draft.",
  "Pricelist approval was rejected.": "Persetujuan pricelist ditolak.",
  "Approver rejects the pricelist.": "Approver menolak pricelist.",
  "Review and revise if needed.": "Tinjau dan revisi jika diperlukan.",
  "Pricelist Name / Code": "Nama / Kode Pricelist",
  "Name yes; Code system": "Nama ya; Kode sistem",
  "Business name and generated sequence code.": "Nama bisnis dan kode urutan yang dibuat sistem.",
  "Code is read-only after creation.": "Kode bersifat read-only setelah dibuat.",
  "Confirmed supplier for this pricelist.": "Pemasok terkonfirmasi untuk pricelist ini.",
  "Domain requires vendor status Confirmed.": "Domain memerlukan status vendor Confirmed.",
  "Currency": "Mata Uang",
  "Currency used for unit and tier price.": "Mata uang yang digunakan untuk harga satuan dan harga tier.",
  "Defaults from company currency.": "Default dari mata uang perusahaan.",
  "Company / Branch": "Perusahaan / Cabang",
  "Organization scope for the pricelist.": "Cakupan organisasi untuk pricelist.",
  "Defaults from current company and branch.": "Default dari perusahaan dan cabang saat ini.",
  "Effective Date / Expiry Date": "Tanggal Efektif / Tanggal Kedaluwarsa",
  "Effective yes; Expiry no": "Efektif ya; Kedaluwarsa tidak",
  "Validity period for the pricelist.": "Masa berlaku untuk pricelist.",
  "Backdated dates are blocked for non-demo records; expiry cannot be earlier than effective date.": "Tanggal lampau diblokir untuk data non-demo; tanggal kedaluwarsa tidak boleh lebih awal dari tanggal efektif.",
  "Product / Variant / UoM": "Produk / Varian / UoM",
  "Product rule used for supplier price matching.": "Aturan produk yang digunakan untuk pencocokan harga pemasok.",
  "UoM domain follows product UoM reference.": "Domain UoM mengikuti referensi UoM produk.",
  "Unit Price / Lead Time": "Harga Satuan / Lead Time",
  "Base price and delivery lead time for the item.": "Harga dasar dan lead time pengiriman untuk item.",
  "Lead Time defaults to 1 day in model.": "Lead Time default 1 hari di model.",
  "Enforce MOQ": "Terapkan MOQ",
  "Warns on RFQ lines below first tier minimum quantity and blocks PO confirmation.": "Memberi peringatan pada baris RFQ di bawah kuantitas minimum tier pertama dan memblokir konfirmasi PO.",
  "Use only when supplier MOQ must be enforced.": "Gunakan hanya ketika MOQ pemasok harus diterapkan.",
  "Quantity Tiers": "Tier Kuantitas",
  "Tiered pricing and incentive rows.": "Baris penetapan harga bertingkat dan insentif.",
  "Includes Min Qty, Max Qty, Discount, Tier Price, Free Product, Free Qty, and Free UoM.": "Mencakup Min Qty, Max Qty, Discount, Tier Price, Free Product, Free Qty, dan Free UoM.",
  "Amendment Histories": "Riwayat Amandemen",
  "Smart button opens related amendment records.": "Smart button membuka data amandemen terkait.",
  "UI label is currently spelled Amandment Histories in product source.": "Label UI saat ini dieja Amandment Histories pada source produk.",
  "Create vendor pricelist": "Buat pricelist vendor",
  "Reference": "Referensi",
  "System": "Sistem",
  "Amendment reference generated from sequence.": "Referensi amandemen dibuat otomatis dari sequence.",
  "Read-only in amendment form.": "Read-only pada formulir amandemen.",
  "Pricelist / Pricelist Code": "Pricelist / Kode Pricelist",
  "Vendor Pricelist being amended.": "Vendor Pricelist yang sedang diamandemen.",
  "Filled from active pricelist context.": "Terisi dari konteks pricelist aktif.",
  "Vendor Name": "Nama Vendor",
  "Supplier from the pricelist.": "Supplier dari pricelist.",
  "Stored as text for amendment history.": "Disimpan sebagai teks untuk riwayat amandemen.",
  "Submitted By / Submitted Date": "Diajukan Oleh / Tanggal Pengajuan",
  "User and timestamp of the request.": "User dan timestamp permintaan.",
  "Filled by Request Amendment wizard.": "Diisi oleh wizard Request Amendment.",
  "Reason": "Alasan",
  "Business explanation for the proposed change.": "Penjelasan bisnis untuk usulan perubahan.",
  "Wizard field: Reason for Amendment.": "Field wizard: Reason for Amendment.",
  "Amendment Diff": "Diff Amandemen",
  "Read-only list of changed fields with old and new values.": "Daftar read-only berisi field yang diubah beserta nilai lama dan nilai baru.",
  "Shows item-level and tier-level changes.": "Menampilkan perubahan tingkat item dan tingkat tier.",
  "Workflow status of the amendment.": "Status workflow amandemen.",
  "Draft, Submitted, Waiting For Approval, Approved, Rejected.": "Draft, Submitted, Waiting For Approval, Approved, Rejected.",
  "Submit price amendment": "Ajukan amandemen harga",
  "Use when supplier changes price, lead time, or tier terms.": "Gunakan saat supplier mengubah harga, lead time, atau ketentuan tier.",
  "Edit tracked fields, click Request Amendment, review diff lines, and submit.": "Edit field yang dilacak, klik Request Amendment, tinjau baris diff, lalu submit.",
  "Amendment record is created in Submitted status.": "Data amandemen dibuat dalam status Submitted.",
  "Review amendment history": "Tinjau riwayat amandemen",
  "Use when audit trail is needed.": "Gunakan saat audit trail diperlukan.",
  "Open Pricelist Amendments list or Amendment Histories from the pricelist.": "Buka daftar Pricelist Amendments atau Amendment Histories dari pricelist.",
  "User sees reference, vendor, reason, status, and diff lines.": "User melihat referensi, vendor, alasan, status, dan baris diff.",
  "Approve or reject amendment": "Setujui atau tolak amandemen",
  "Use during price control review.": "Gunakan selama review kontrol harga.",
  "Open amendment, review diff and approval history, then approve or reject.": "Buka amandemen, tinjau diff dan riwayat persetujuan, lalu setujui atau tolak.",
  "Approved changes are applied; rejected changes are reset.": "Perubahan yang disetujui diterapkan; perubahan yang ditolak direset.",
  "Cannot submit a new amendment.": "Tidak dapat mengajukan amandemen baru.",
  "A submitted amendment already exists for the pricelist.": "Amandemen yang diajukan sudah ada untuk pricelist ini.",
  "Approve or reject the pending amendment before creating another request.": "Setujui atau tolak amendemen yang tertunda sebelum membuat permintaan lain.",
  "No amendment lines appear in the wizard.": "Tidak ada baris amendemen yang muncul di wizard.",
  "No tracked active-pricelist item or tier values were changed.": "Tidak ada nilai item atau tingkatan daftar harga aktif yang dilacak yang diubah.",
  "Edit a tracked field first.": "Edit kolom yang dilacak terlebih dahulu.",
  "Amendment list cannot create a record.": "Daftar amendemen tidak dapat membuat data.",
  "The list view disables direct creation.": "Tampilan daftar menonaktifkan pembuatan langsung.",
  "Create amendments from Vendor Pricelist Request Amendment.": "Buat amendemen dari Vendor Pricelist Request Amendment.",
  "Team is available for routing, dashboards, and document assignment.": "Tim tersedia untuk perutean, dasbor, dan penetapan dokumen.",
  "Team is created or unarchived.": "Tim dibuat atau dibatalkan dari arsip.",
  "Use the team on PR, PO, Tender, KPI, and reporting records.": "Gunakan tim pada data PR, PO, Tender, KPI, dan pelaporan.",
  "Team is archived and should not be used for new routing.": "Tim diarsipkan dan tidak boleh digunakan untuk perutean baru.",
  "Unarchive only when the team should be used again.": "Batalkan arsip hanya saat tim akan digunakan kembali.",
  "Auto-routed": "Dirutekan otomatis",
  "System assigns an unassigned PR or PO to a matching active team.": "Sistem menetapkan PR atau PO yang belum ditetapkan ke tim aktif yang cocok.",
  "Auto-route logic finds a match by product category, order type, or vendor category.": "Logika perutean otomatis mencari kecocokan berdasarkan kategori produk, tipe pesanan, atau kategori vendor.",
  "Review assigned team and PIC before continuing workflow.": "Tinjau tim dan PIC yang ditetapkan sebelum melanjutkan alur kerja.",
  "Own-document visibility": "Visibilitas dokumen sendiri",
  "Members can be part of purchase document access rules.": "Anggota dapat menjadi bagian dari aturan akses dokumen pembelian.",
  "Own Document rule checks request owner or purchase team membership.": "Aturan Dokumen Sendiri memeriksa pemilik permintaan atau keanggotaan tim pembelian.",
  "Do not treat team setup as a replacement for access group configuration.": "Jangan perlakukan pengaturan tim sebagai pengganti konfigurasi grup akses.",
  "Team Code": "Kode Tim",
  "Auto-generated code for the team.": "Kode yang dibuat otomatis untuk tim.",
  "Generated from purchase team sequence.": "Dihasilkan dari urutan penomoran tim pembelian.",
  "Team Name": "Nama Tim",
  "Name of the purchase team.": "Nama tim pembelian.",
  "Must be unique per company.": "Harus unik per perusahaan.",
  "Organization scope of the team.": "Cakupan organisasi dari tim.",
  "Team Lead": "Ketua Tim",
  "Main owner of the team.": "Pemilik utama tim.",
  "Must be a team member.": "Harus merupakan anggota tim.",
  "Members": "Anggota",
  "Users assigned to the team.": "Pengguna yang ditetapkan ke tim.",
  "At least one member is required after creation.": "Setidaknya satu anggota diperlukan setelah pembuatan.",
  "Routing basis for the team.": "Dasar perutean untuk tim.",
  "Product Category, Order Type, or Vendor Category.": "Kategori Produk, Tipe Pesanan, atau Kategori Vendor.",
  "Product Categories / Order Types / Vendor Categories": "Kategori Produk / Tipe Pesanan / Kategori Vendor",
  "Routing values shown according to selected Parameter.": "Nilai perutean ditampilkan sesuai dengan Parameter yang dipilih.",
  "Only matching field group is visible.": "Hanya grup bidang yang cocok yang terlihat.",
  "Dashboard Tiles": "Tile Dasbor",
  "Computed team metrics for Direct Purchase, RFQ, PO, and Spend.": "Metrik tim yang dihitung untuk Direct Purchase, RFQ, PO, dan Spend.",
  "Read-only dashboard previews.": "Pratinjau dasbor hanya-baca.",
  "Create purchase team": "Buat tim pembelian",
  "Use when procurement work must be grouped by team.": "Gunakan ketika pekerjaan pengadaan harus dikelompokkan berdasarkan tim.",
  "Create team, choose lead, add members, select routing parameter and values, then save.": "Buat tim, pilih ketua tim, tambah anggota, pilih parameter dan nilai perutean, lalu simpan.",
  "Team becomes active and selectable.": "Tim menjadi aktif dan dapat dipilih.",
  "Configure routing by vendor category": "Konfigurasikan perutean berdasarkan kategori vendor",
  "Use when suppliers are owned by different buyer teams.": "Gunakan ketika pemasok dikelola oleh tim pembeli yang berbeda.",
  "Set Parameter to Vendor Category and select matching vendor categories.": "Atur Parameter ke Kategori Vendor dan pilih kategori vendor yang cocok.",
  "PR/PO records with matching vendor categories can be routed to the team.": "Catatan PR/PO dengan kategori vendor yang cocok dapat dirutekan ke tim.",
  "Archive a team": "Arsipkan tim",
  "Use when a team should no longer receive purchasing work.": "Gunakan ketika tim tidak boleh lagi menerima pekerjaan pembelian.",
  "Open team and click Archive.": "Buka tim dan klik Archive.",
  "Team becomes inactive without deleting historical links.": "Tim menjadi tidak aktif tanpa menghapus tautan riwayat.",
  "Team cannot be saved.": "Tim tidak dapat disimpan.",
  "Team lead is missing, team lead is not a member, member list is empty, or duplicate name exists in the company.": "Ketua tim belum diisi, ketua tim bukan anggota, daftar anggota kosong, atau nama duplikat ada di perusahaan.",
  "Add a valid team lead and members, then use a unique team name.": "Tambahkan ketua tim dan anggota yang valid, lalu gunakan nama tim yang unik.",
  "Primary buyer validation fails.": "Validasi pembeli utama gagal.",
  "Primary buyer has no assigned category.": "Pembeli utama belum memiliki kategori yang ditetapkan.",
  "Add category assignment for the primary buyer before saving.": "Tambahkan penetapan kategori untuk pembeli utama sebelum menyimpan.",
  "Auto-routing does not assign a team.": "Perutean otomatis tidak menetapkan tim.",
  "No active team matches the PR/PO product category, order type, or vendor category.": "Tidak ada tim aktif yang cocok dengan kategori produk, tipe pesanan, atau kategori vendor PR/PO.",
  "Review selected Parameter and routing values.": "Tinjau Parameter yang dipilih dan nilai perutean.",
  "Product available": "Produk tersedia",
  "Product can be selected on purchase lines.": "Produk dapat dipilih pada baris pembelian.",
  "Product and variant master data exist and are visible to the user.": "Master data produk dan varian ada serta terlihat oleh pengguna.",
  "Select the product and correct UoM.": "Pilih produk dan UoM yang benar.",
  "Purchase history available": "Riwayat pembelian tersedia",
  "Product shows computed last purchase price, vendor, date, and history where records exist.": "Produk menampilkan kalkulasi harga pembelian terakhir, vendor, tanggal, dan riwayat jika catatan tersedia.",
  "Closed, purchase order, or revised purchase lines exist for the product variant.": "Baris pembelian berstatus Closed, purchase order, atau direvisi tersedia untuk varian produk.",
  "Use as reference, not as a replacement for current vendor pricelist review.": "Gunakan sebagai referensi, bukan pengganti peninjauan daftar harga vendor saat ini.",
  "Destination Warehouse required": "Destination Warehouse wajib diisi",
  "Purchase Request header and lines require destination warehouse in inventory integration.": "Header dan baris Purchase Request memerlukan destination warehouse dalam integrasi inventaris.",
  "User creates or saves inventory-integrated PR records.": "Pengguna membuat atau menyimpan data PR yang terintegrasi dengan inventaris.",
  "Select a warehouse matching company and branch.": "Pilih gudang yang sesuai dengan company dan branch.",
  "Multiple destination tender": "Tender multiple destination",
  "Tender lines may carry different destination warehouses.": "Baris Tender dapat memiliki destination warehouse yang berbeda.",
  "Multiple Destination Warehouse is enabled on Tender.": "Multiple Destination Warehouse diaktifkan pada Tender.",
  "Fill destination warehouse per line before proceeding.": "Isi destination warehouse pada setiap baris sebelum melanjutkan.",
  "Item or service requested or purchased.": "Barang atau jasa yang diminta atau dibeli.",
  "Selected from product variant/product master data.": "Dipilih dari master data produk/varian produk.",
  "Product Category": "Product Category",
  "Groups products and may influence purchase team routing through order type categories.": "Mengelompokkan produk dan dapat memengaruhi perutean purchase team melalui kategori tipe order.",
  "Used indirectly by Purchase Team routing.": "Digunakan secara tidak langsung oleh perutean Purchase Team.",
  "UoM": "UoM",
  "Yes on price and transaction lines": "Ya, pada baris harga dan transaksi",
  "Unit of measure used for purchasing quantity and price.": "Satuan ukuran (unit of measure) yang digunakan untuk kuantitas dan harga pembelian.",
  "Vendor Pricelist UoM follows product UoM reference.": "UoM Vendor Pricelist mengikuti referensi UoM produk.",
  "Purchase History": "Purchase History",
  "Computed related purchase order lines for product variants.": "Baris purchase order terkait yang dikalkulasikan untuk varian produk.",
  "Read-only reference.": "Referensi read-only.",
  "Last Purchase Price / Vendor / Date": "Last Purchase Price / Vendor / Date",
  "Computed from latest valid purchase order line.": "Dikalkulasikan dari baris purchase order valid terbaru.",
  "Uses purchase order, closed, or revised statuses.": "Menggunakan status purchase order, closed, atau revised.",
  "Destination Warehouse": "Destination Warehouse",
  "Conditional / required in inventory PR": "Kondisional / wajib pada PR inventaris",
  "Warehouse expected to receive purchased goods.": "Gudang yang dituju untuk menerima barang yang dibeli.",
  "PR domain: company and branch; Tender header can sync to lines.": "Domain PR: company dan branch; header Tender dapat disinkronkan ke baris.",
  "Received Qty": "Received Qty",
  "Read-only received progress on Purchase Request lines after downstream receiving.": "Progres penerimaan read-only pada baris Purchase Request setelah penerimaan di tahap downstream.",
  "Hidden while PR is Draft or Waiting Approval.": "Tersembunyi selama status PR adalah Draft atau Waiting Approval.",
  "Multiple Destination Warehouse": "Multiple Destination Warehouse",
  "Tender option that makes line-level destination warehouse required when enabled.": "Opsi Tender yang membuat destination warehouse tingkat baris wajib diisi saat diaktifkan.",
  "Use for multi-warehouse tender allocation.": "Gunakan untuk alokasi tender multi-gudang.",
  "Prepare product for purchase": "Siapkan produk untuk pembelian",
  "Use before creating PR, RFQ, PO, or Tender lines.": "Gunakan sebelum membuat baris PR, RFQ, PO, atau Tender.",
  "Review product, variant, category, and UoM, then confirm vendor pricelist if pricing is controlled.": "Tinjau produk, varian, kategori, dan UoM, lalu konfirmasikan vendor pricelist jika penetapan harga dikontrol.",
  "Product can be selected with correct UoM and price reference.": "Produk dapat dipilih dengan UoM dan referensi harga yang tepat.",
  "Create inventory purchase request": "Buat purchase request inventaris",
  "Use when purchased goods must be received into a warehouse.": "Gunakan ketika barang yang dibeli harus diterima di gudang.",
  "Select Destination Warehouse on PR header and lines, then proceed with approval and downstream conversion.": "Pilih Destination Warehouse pada header dan baris PR, lalu lanjutkan dengan persetujuan dan konversi alur berikutnya.",
  "Receiving progress can be tracked against the intended warehouse.": "Progres penerimaan dapat dilacak terhadap gudang yang dituju.",
  "Create multi-destination tender": "Buat tender multi-destinasi",
  "Use when tender lines should receive goods into different warehouses.": "Gunakan jika baris tender harus menerima barang ke gudang yang berbeda.",
  "Enable Multiple Destination Warehouse and fill line-level destination warehouses.": "Aktifkan Multiple Destination Warehouse dan isi destination warehouse tingkat baris.",
  "Generated RFQ/PO lines carry the selected warehouse where supported.": "Baris RFQ/PO yang dihasilkan akan memuat gudang terpilih jika didukung.",
  "Purchase Request cannot be saved.": "Purchase Request tidak dapat disimpan.",
  "Destination Warehouse is missing on the header or line.": "Destination Warehouse belum diisi pada header atau baris.",
  "Select a destination warehouse that matches the PR company and branch.": "Pilih destination warehouse yang sesuai dengan perusahaan dan cabang PR.",
  "Tender line validation fails.": "Validasi baris tender gagal.",
  "Multiple Destination Warehouse is enabled but a line has no destination warehouse.": "Multiple Destination Warehouse diaktifkan tetapi ada baris yang belum memiliki destination warehouse.",
  "Fill destination warehouse on every tender line.": "Isi destination warehouse pada setiap baris tender.",
  "Warehouse dropdown has no expected option.": "Dropdown gudang tidak menampilkan opsi yang diharapkan.",
  "Warehouse company or branch does not match the document scope.": "Perusahaan atau cabang gudang tidak sesuai dengan cakupan dokumen.",
  "Check selected company, branch, and warehouse setup.": "Periksa perusahaan, cabang, dan pengaturan gudang yang dipilih.",
  "Purchase Request": "Purchase Request",
  "Document": "Dokumen",
  "Starts procurement from internal demand.": "Memulai pengadaan dari permintaan internal.",
  "RFQ / PO": "RFQ / PO",
  "Collects quotation and confirms purchase commitment.": "Mengumpulkan penawaran dan mengonfirmasi komitmen pembelian.",
  "Blanket Order": "Blanket Order",
  "Agreement": "Perjanjian",
  "Controls repeated procurement under agreed terms.": "Mengontrol pengadaan berulang sesuai ketentuan yang disepakati.",
  "Tender": "Tender",
  "Runs competitive sourcing and award decision.": "Menjalankan pengadaan kompetitif dan keputusan penunjukan pemenang.",
  "Receiving / Billing": "Receiving / Billing",
  "Integration": "Integrasi",
  "Connects PO to Receiving Notes and vendor bills.": "Menghubungkan PO ke Receiving Notes dan tagihan vendor.",
  "Requested By": "Requested By",
  "User who raises the need.": "Pengguna yang mengajukan kebutuhan.",
  "Team responsible for processing.": "Tim yang bertanggung jawab untuk memproses.",
  "Payment Terms": "Syarat Pembayaran",
  "Commercial payment term used for comparison.": "Syarat pembayaran komersial yang digunakan untuk perbandingan.",
  "Process Compare RFQ": "Proses Compare RFQ",
  "Correct Compare RFQ before completion": "Perbaiki Compare RFQ sebelum penyelesaian",
  "Confirm Order": "Confirm Order",
  "Converts RFQ into Purchase Order commitment.": "Mengonversi RFQ menjadi komitmen Purchase Order.",
  "Classifies the resulting purchase document.": "Mengklasifikasikan dokumen pembelian yang dihasilkan.",
  "Purchase Order": "Purchase Order",
  "Generated confirmed order from RFQ.": "Pesanan terkonfirmasi yang dihasilkan dari RFQ.",
  "Data type: Document Link.": "Tipe data: Document Link.",
  "Downstream documents opened from the PO.": "Dokumen downstream yang dibuka dari PO.",
  "Process Convert RFQ to Purchase Order": "Proses Convert RFQ to Purchase Order",
  "Correct Convert RFQ to Purchase Order before completion": "Perbaiki Convert RFQ to Purchase Order sebelum penyelesaian",
  "Supplier selected for the order.": "Pemasok yang dipilih untuk pesanan.",
  "Order Date / Expected Date": "Order Date / Expected Date",
  "Commercial and delivery dates.": "Tanggal komersial dan pengiriman.",
  "Warehouse / Location": "Warehouse / Location",
  "Receiving destination for stockable items.": "Tujuan penerimaan untuk item yang dapat disimpan.",
  "Create Bill": "Create Bill",
  "Creates vendor bill when the PO is ready.": "Membuat tagihan vendor saat PO siap.",
  "Revise / Close / Cancel": "Revise / Close / Cancel",
  "Controls document changes and lifecycle end state.": "Mengontrol perubahan dokumen dan status akhir siklus hidup.",
  "Commits the order to supplier.": "Mengonfirmasi pesanan ke pemasok.",
  "Warehouse": "Warehouse",
  "Destination for receiving stockable goods.": "Tujuan penerimaan barang yang dapat disimpan.",
  "Order Lines": "Order Lines",
  "Products, quantities, prices, taxes, and expected dates.": "Produk, kuantitas, harga, pajak, dan tanggal perkiraan.",
  "Process Confirm Purchase Order": "Proses Confirm Purchase Order",
  "Open Purchase > Purchase > Purchase Order, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Purchase > Purchase Order, buat atau buka dokumen, lengkapi kolom dan baris yang diperlukan, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Confirm Purchase Order before completion": "Perbaiki Confirm Purchase Order sebelum penyelesaian",
  "Create RN": "Create RN",
  "Creates receiving note from remaining PO quantities.": "Membuat receiving note dari sisa kuantitas PO.",
  "Receiving Notes": "Receiving Notes",
  "Opens linked inbound receipt documents.": "Membuka dokumen penerimaan masuk tertaut.",
  "Qty Received": "Qty Received",
  "Warehouse expected to receive the products.": "Gudang yang diharapkan menerima produk.",
  "Expected Date": "Tanggal Diharapkan",
  "Date": "Tanggal",
  "Expected need or receipt date.": "Perkiraan tanggal kebutuhan atau penerimaan.",
  "Product Lines": "Baris Produk",
  "One2many": "One2many",
  "Requested products and quantities.": "Produk dan kuantitas yang diminta.",
  "The document is being prepared and can still be edited.": "Dokumen sedang disiapkan dan masih dapat diedit.",
  "User creates the record or resets it before confirmation.": "Pengguna membuat rekaman atau meresetnya sebelum konfirmasi.",
  "Complete required fields and click the next workflow action.": "Lengkapi kolom wajib dan klik tindakan alur kerja berikutnya.",
  "Confirmed / Sent / In Progress": "Dikonfirmasi / Terkirim / Dalam Proses",
  "The document has entered the active purchasing workflow.": "Dokumen telah memasuki alur kerja pembelian aktif.",
  "User clicks Confirm, Send RFQ, Submit, or a related processing action.": "Pengguna mengklik Confirm, Send RFQ, Submit, atau tindakan pemrosesan terkait.",
  "Monitor supplier response, approval, receiving, billing, or next action.": "Pantau respons pemasok, persetujuan, penerimaan, penagihan, atau tindakan berikutnya.",
  "Approved / Done / Closed": "Disetujui / Selesai / Ditutup",
  "The workflow result is accepted or completed.": "Hasil alur kerja diterima atau diselesaikan.",
  "Approver accepts the document, PO is confirmed, receipt/bill is processed, or document is closed.": "Penyetuju menerima dokumen, PO dikonfirmasi, penerimaan/tagihan diproses, atau dokumen ditutup.",
  "Review linked documents and continue downstream processing.": "Tinjau dokumen terkait dan lanjutkan pemrosesan lanjutan.",
  "Cancelled / Rejected": "Dibatalkan / Ditolak",
  "The workflow is stopped or not accepted.": "Alur kerja dihentikan atau tidak diterima.",
  "User clicks Cancel/Reject or approval fails.": "Pengguna mengklik Cancel/Reject atau persetujuan gagal.",
  "Review reason, correct the record if allowed, or create a replacement document.": "Tinjau alasan, perbaiki rekaman jika diizinkan, atau buat dokumen pengganti.",
  "Requester": "Peminta",
  "Employee or user creating the procurement request.": "Karyawan atau pengguna yang membuat permintaan pengadaan.",
  "Required Date": "Tanggal Dibutuhkan",
  "Expected date when the item is needed.": "Perkiraan tanggal saat barang dibutuhkan.",
  "Data type: Date.": "Tipe data: Date.",
  "Requested products, quantities, UoM, warehouse, and notes.": "Produk, kuantitas, UoM, gudang, dan catatan yang diminta.",
  "Request Notes": "Catatan Permintaan",
  "Business reason or instruction for buyer and approver.": "Alasan bisnis atau instruksi untuk pembeli dan penyetuju.",
  "Process Create Purchase Request": "Proses Create Purchase Request",
  "Use when a purchasing document needs sourcing, approval, supplier confirmation, receiving, or billing.": "Gunakan saat dokumen pembelian memerlukan pencarian pemasok, persetujuan, konfirmasi pemasok, penerimaan, atau penagihan.",
  "Open Purchase > Purchase > Purchase Request, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Purchase > Purchase Request, buat atau buka dokumen, lengkapi kolom dan baris yang wajib diisi, lalu gunakan tindakan alur kerja yang diverifikasi.",
  "The Purchase document moves to the next status and linked records become available when configured.": "Dokumen Purchase berpindah ke status berikutnya dan rekaman terkait menjadi tersedia saat dikonfigurasi.",
  "Correct Create Purchase Request before completion": "Perbaiki Create Purchase Request sebelum penyelesaian",
  "Quantity already received.": "Kuantitas yang sudah diterima.",
  "Qty Remaining": "Qty Remaining",
  "Quantity still pending receiving.": "Kuantitas yang masih menunggu penerimaan.",
  "Process Create Goods Receipt (Receiving Note)": "Proses Create Goods Receipt (Receiving Note)",
  "Correct Create Goods Receipt (Receiving Note) before completion": "Koreksi Create Goods Receipt (Receiving Note) sebelum selesai",
  "Creates vendor bill from PO.": "Membuat vendor bill dari PO.",
  "Bill Date": "Bill Date",
  "Accounting date used on vendor bill.": "Tanggal akuntansi yang digunakan pada vendor bill.",
  "Invoice Lines": "Invoice Lines",
  "Products, quantities, taxes, and prices copied to bill.": "Produk, kuantitas, pajak, dan harga disalin ke bill.",
  "Bills": "Bills",
  "Opens vendor bills linked to the PO.": "Membuka vendor bill yang terhubung ke PO.",
  "Process Create Vendor Bill": "Proses Create Vendor Bill",
  "Correct Create Vendor Bill before completion": "Koreksi Create Vendor Bill sebelum selesai",
  "Revise": "Revise",
  "Creates controlled update or revision sequence.": "Membuat pembaruan terkontrol atau urutan revisi.",
  "Close": "Close",
  "Ends an order that is complete or no longer active.": "Mengakhiri pesanan yang sudah selesai atau tidak lagi aktif.",
  "Cancel": "Cancel",
  "Voids the purchase document where allowed.": "Membatalkan dokumen pembelian jika diizinkan.",
  "Revision Number": "Revision Number",
  "Tracks revised document sequence when enabled.": "Melacak urutan dokumen yang direvisi saat diaktifkan.",
  "Process Revise Close or Cancel": "Proses Revise Close or Cancel",
  "Correct Revise Close or Cancel before completion": "Koreksi Revise Close or Cancel sebelum selesai",
  "Supplier covered by the agreement.": "Pemasok yang tercakup dalam perjanjian.",
  "Start / End Date": "Start / End Date",
  "Agreement validity period.": "Masa berlaku perjanjian.",
  "Pricelist": "Pricelist",
  "Supplier price source.": "Sumber harga pemasok.",
  "Quantity / Remaining Qty": "Quantity / Remaining Qty",
  "Number": "Number",
  "Agreement quantity and remaining open quantity.": "Kuantitas perjanjian dan sisa kuantitas terbuka.",
  "Creates RFQ from agreement lines.": "Membuat RFQ dari baris perjanjian.",
  "Agreement Lines": "Agreement Lines",
  "Products, quantity, price, and remaining quantity.": "Produk, kuantitas, harga, dan sisa kuantitas.",
  "Rank": "Peringkat",
  "Supplier rank after evaluation.": "Peringkat pemasok setelah evaluasi.",
  "Score": "Skor",
  "Evaluation score used for award review.": "Skor evaluasi yang digunakan untuk peninjauan penetapan.",
  "Process Apply Award Strategy": "Proses Apply Award Strategy",
  "Correct Apply Award Strategy before completion": "Perbaiki Apply Award Strategy sebelum penyelesaian",
  "Approves final award decision.": "Menyetujui keputusan akhir penetapan.",
  "Generated PO": "PO yang Dihasilkan",
  "Purchase Order generated from tender award.": "Purchase Order yang dihasilkan dari penetapan tender.",
  "Audit Log": "Audit Log",
  "Tracks allocation and decision changes.": "Melacak perubahan alokasi dan keputusan.",
  "Data type: Record.": "Tipe data: Record.",
  "Decision State": "Status Keputusan",
  "Shows current award approval status.": "Menampilkan status persetujuan penetapan saat ini.",
  "Process Approve Award Decision": "Proses Approve Award Decision",
  "Correct Approve Award Decision before completion": "Perbaiki Approve Award Decision sebelum penyelesaian",
  "Tender being qualified.": "Tender yang sedang dikualifikasi.",
  "Supplier being reviewed.": "Pemasok yang sedang ditinjau.",
  "Document Lines": "Baris Dokumen",
  "Required document type, attachment, and status.": "Tipe dokumen, lampiran, dan status yang diperlukan.",
  "Compliance Status": "Status Kepatuhan",
  "Summarizes document completion state.": "Merangkum status kelengkapan dokumen.",
  "Document Fulfillment": "Document Fulfillment",
  "Opens required document fulfillment form.": "Membuka formulir pemenuhan dokumen yang diperlukan.",
  "Process Pre-Qualification & Document Reviews": "Proses Pre-Qualification & Document Reviews",
  "Open Purchase > Vendor > Vendors, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Vendor > Vendors, buat atau buka dokumen, lengkapi field dan baris yang diperlukan, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Pre-Qualification & Document Reviews before completion": "Perbaiki Pre-Qualification & Document Reviews sebelum penyelesaian",
  "Smart Button": "Smart Button",
  "Opens inbound receiving documents linked to PO.": "Membuka dokumen penerimaan masuk yang ditautkan ke PO.",
  "Creates receiving note from remaining PO line quantities.": "Membuat RN dari sisa kuantitas baris PO.",
  "Read-only": "Read-only",
  "Received quantity per PO line.": "Kuantitas yang diterima per baris PO.",
  "Quantity still open to receive.": "Kuantitas yang masih terbuka untuk diterima.",
  "Actual Receiving Date": "Tanggal Penerimaan Aktual",
  "Date used for lead-time review.": "Tanggal yang digunakan untuk peninjauan lead time.",
  "Remaining Qty": "Kuantitas Tersisa",
  "Quantity still open for downstream action.": "Kuantitas yang masih terbuka untuk tindakan lanjutan.",
  "Process Purchase Request Line": "Proses Baris Purchase Request",
  "Correct Purchase Request Line before completion": "Koreksi Baris Purchase Request sebelum selesai",
  "Supplier selected for direct buying.": "Pemasok yang dipilih untuk pembelian langsung.",
  "Direct purchase classification.": "Klasifikasi pembelian langsung.",
  "Products, quantity, price, tax, discount, warehouse, and date.": "Produk, kuantitas, harga, pajak, diskon, gudang, dan tanggal.",
  "Bill Behavior": "Perilaku Tagihan",
  "May create draft or validated bill based on settings.": "Dapat membuat draf atau tagihan tervalidasi berdasarkan pengaturan.",
  "Process Direct Purchase": "Proses Direct Purchase",
  "Open Purchase > Purchase > Direct Purchase, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Purchase > Direct Purchase, buat atau buka dokumen, lengkapi kolom dan baris yang wajib diisi, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Direct Purchase before completion": "Koreksi Direct Purchase sebelum selesai",
  "Supplier receiving the RFQ.": "Pemasok yang menerima RFQ.",
  "Quotation Expiry Date": "Tanggal Kedaluwarsa Penawaran",
  "RFQ validity deadline.": "Batas waktu validitas RFQ.",
  "Assigned sourcing team.": "Tim sourcing yang ditugaskan.",
  "Send Email": "Send Email",
  "Action": "Action",
  "Sends RFQ email template to supplier.": "Mengirim template email RFQ ke pemasok.",
  "Compare RFQ": "Compare RFQ",
  "Compares vendors and shared product lines.": "Membandingkan vendor dan baris produk yang sama.",
  "Supplier receiving the quotation request.": "Pemasok yang menerima permintaan penawaran.",
  "Requested delivery date for quotation lines.": "Tanggal pengiriman yang diminta untuk baris penawaran.",
  "Sends RFQ template to supplier.": "Mengirim template RFQ ke pemasok.",
  "RFQ State": "Status RFQ",
  "Shows draft, sent, purchase order, or cancelled lifecycle.": "Menampilkan siklus hidup draft, sent, purchase order, atau cancelled.",
  "Process Send RFQ": "Proses Send RFQ",
  "Correct Send RFQ before completion": "Koreksi Send RFQ sebelum selesai",
  "Shared Products": "Produk yang Sama",
  "Products included in the compared RFQs.": "Produk yang disertakan dalam RFQ yang dibandingkan.",
  "Data type: Computed Data.": "Tipe data: Computed Data.",
  "Unit Price": "Harga Satuan",
  "Supplier quoted price per product.": "Harga penawaran pemasok per produk.",
  "Data type: Amount.": "Tipe data: Amount.",
  "Supplier delivery commitment.": "Komitmen pengiriman pemasok.",
  "Open quantity still available for release.": "Kuantitas terbuka yang masih tersedia untuk rilis.",
  "Process Create Blanket Agreement": "Proses Create Blanket Agreement",
  "Open Purchase > Agreement > Blanket Order, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Agreement > Blanket Order, buat atau buka dokumen, lengkapi kolom dan baris yang wajib diisi, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Create Blanket Agreement before completion": "Perbaiki Create Blanket Agreement sebelum penyelesaian",
  "Release Quantity": "Kuantitas Rilis",
  "Quantity requested from the agreement.": "Kuantitas yang diminta dari perjanjian.",
  "Generated RFQ": "RFQ yang Dihasilkan",
  "RFQ created from Blanket Order.": "RFQ yang dibuat dari Blanket Order.",
  "Balance after release.": "Saldo setelah rilis.",
  "Process Release RFQ from Blanket Order": "Proses Release RFQ from Blanket Order",
  "Correct Release RFQ from Blanket Order before completion": "Perbaiki Release RFQ from Blanket Order sebelum penyelesaian",
  "Tender Type": "Tipe Tender",
  "Selection": "Seleksi",
  "Tender method or classification.": "Metode atau klasifikasi tender.",
  "Vendor Scope": "Cakupan Vendor",
  "Defines eligible supplier scope.": "Menentukan cakupan pemasok yang memenuhi syarat.",
  "Tender Lines": "Baris Tender",
  "Products, specifications, quantity, price references, and dates.": "Produk, spesifikasi, kuantitas, referensi harga, dan tanggal.",
  "Apply Award Strategy": "Apply Award Strategy",
  "Applies configured allocation strategy.": "Menerapkan strategi alokasi yang dikonfigurasi.",
  "Approve Decision": "Approve Decision",
  "Approves tender award decision.": "Menyetujui keputusan penetapan tender.",
  "Supplier submitting the bid.": "Pemasok yang mengajukan penawaran.",
  "Bid Lines": "Baris Penawaran",
  "Product, quantity, price, and delivery commitment.": "Produk, kuantitas, harga, dan komitmen pengiriman.",
  "Marks bid as ready for evaluation.": "Menandai penawaran siap untuk dievaluasi.",
  "Document Status": "Status Dokumen",
  "Qualification result for supplier documents.": "Hasil kualifikasi untuk dokumen pemasok.",
  "Process Submit Bid": "Proses Submit Bid",
  "Open Purchase > Tender > Purchase Tender, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Tender > Purchase Tender, buat atau buka dokumen, lengkapi kolom dan baris yang wajib diisi, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Submit Bid before completion": "Perbaiki Submit Bid sebelum penyelesaian",
  "Award Strategy": "Strategi Penetapan",
  "Configuration used for split ratio and capacity fill.": "Konfigurasi yang digunakan untuk rasio pembagian dan pemenuhan kapasitas.",
  "Allocation Quantity": "Kuantitas Alokasi",
  "Quantity awarded to supplier.": "Kuantitas yang ditetapkan untuk pemasok.",
  "Supplier tax applied to bill lines.": "Pajak pemasok diterapkan pada baris tagihan.",
  "Amount Due": "Jumlah Jatuh Tempo",
  "Open payable amount after payment or settlement.": "Jumlah utang belum dibayar setelah pembayaran atau pelunasan.",
  "Creates invoice for full payable amount.": "Membuat faktur untuk seluruh jumlah utang.",
  "Supplier payment terms copied to bill.": "Syarat pembayaran pemasok disalin ke tagihan.",
  "Invoice Count": "Jumlah Faktur",
  "Number of linked bills.": "Jumlah tagihan yang tertaut.",
  "Data type: Computed Number.": "Tipe data: Computed Number.",
  "Open payable amount after invoice creation.": "Jumlah utang belum dibayar setelah pembuatan faktur.",
  "Process Full Payment Invoice": "Proses Faktur Pembayaran Penuh",
  "Correct Full Payment Invoice before completion": "Koreksi Faktur Pembayaran Penuh sebelum selesai",
  "Creates settlement bill for eligible purchase flow.": "Membuat tagihan pelunasan untuk alur pembelian yang memenuhi syarat.",
  "Down Payment": "Uang Muka",
  "Previously billed or paid amount to settle.": "Jumlah yang ditagihkan atau dibayarkan sebelumnya untuk dilunasi.",
  "Settlement Amount": "Jumlah Pelunasan",
  "Amount posted in settlement bill.": "Jumlah yang terposting pada tagihan pelunasan.",
  "Settlement Bill": "Tagihan Pelunasan",
  "Bill created from settlement action.": "Tagihan yang dibuat dari tindakan pelunasan.",
  "Process Settlement Bill": "Proses Tagihan Pelunasan",
  "Correct Settlement Bill before completion": "Koreksi Tagihan Pelunasan sebelum selesai",
  "Submit Purchase Request": "Submit Purchase Request",
  "Creates PR from Manufacturing Order or planning shortage.": "Membuat PR dari Manufacturing Order atau kekurangan perencanaan.",
  "Send to Subcontractor": "Kirim ke Subkontraktor",
  "Starts subcontracting RFQ process.": "Memulai proses RFQ subkontrak.",
  "Creates subcontracting RFQ from vendor wizard.": "Membuat RFQ subkontrak dari wizard vendor.",
  "Data type: Wizard Action.": "Tipe data: Wizard Action.",
  "RFQ / DO / RN": "RFQ / DO / RN",
  "Traces subcontracting RFQ, Delivery Order, and Receiving Note.": "Melacak RFQ subkontrak, Delivery Order, dan Receiving Note.",
  "Receiving Validation": "Validasi Penerimaan",
  "Can complete subcontracting cycle when RN is done.": "Dapat menyelesaikan siklus subkontrak setelah RN selesai.",
  "Process Manufacturing/Subcontracting Integration": "Proses Integrasi Manufaktur/Subkontrak",
  "Correct Manufacturing/Subcontracting Integration before completion": "Koreksi Integrasi Manufaktur/Subkontrak sebelum selesai",
  "RFQ Comparison": "Perbandingan RFQ",
  "Review": "Review",
  "Compares suppliers, prices, dates, terms, and history.": "Membandingkan pemasok, harga, tanggal, syarat, dan riwayat.",
  "Source PO": "PO Sumber",
  "Purchase Order that generated the receiving note.": "Purchase Order yang menghasilkan receiving note.",
  "Warehouse receiving purchased goods.": "Gudang yang menerima barang pembelian.",
  "Generates receiving note from PO.": "Membuat receiving note dari PO.",
  "Opens linked receiving documents.": "Membuka dokumen penerimaan terkait.",
  "Process Create RN from PO": "Proses Create RN from PO",
  "Correct Create RN from PO before completion": "Perbaiki Create RN from PO sebelum selesai",
  "Actual Quantity": "Kuantitas Aktual",
  "Quantity physically received.": "Kuantitas yang diterima secara fisik.",
  "Validate": "Validate",
  "Completes warehouse receiving document.": "Menyelesaikan dokumen penerimaan gudang.",
  "Lot / Serial": "Lot / Serial",
  "Tracking data for controlled products.": "Data pelacakan untuk produk yang dikontrol.",
  "Date used for lead-time reporting.": "Tanggal yang digunakan untuk pelaporan lead-time.",
  "Process Validate Receiving": "Proses Validate Receiving",
  "Correct Validate Receiving before completion": "Perbaiki Validate Receiving sebelum selesai",
  "Ordered Quantity": "Kuantitas Dipesan",
  "Quantity originally ordered.": "Kuantitas yang semula dipesan.",
  "Open quantity still pending.": "Kuantitas terbuka yang masih tertunda.",
  "Receiving Time Status": "Status Waktu Penerimaan",
  "Indicates receiving timeliness.": "Menunjukkan ketepatan waktu penerimaan.",
  "Process Review Remaining Quantity": "Proses Review Remaining Quantity",
  "Correct Review Remaining Quantity before completion": "Perbaiki Review Remaining Quantity sebelum selesai",
  "Full Payment Invoice": "Faktur Pembayaran Penuh",
  "Creates full payment invoice where policy allows.": "Membuat faktur pembayaran penuh jika kebijakan mengizinkan.",
  "Create Settlement Bill": "Create Settlement Bill",
  "Creates settlement bill after down payment or full payment flow.": "Membuat settlement bill setelah alur down payment atau pembayaran penuh.",
  "Opens related bill documents.": "Membuka dokumen tagihan terkait.",
  "Setting": "Pengaturan",
  "Controls draft/validated bill behavior.": "Mengontrol perilaku tagihan draft/tervalidasi.",
  "Vendor Bill": "Vendor Bill",
  "Payable document created from PO.": "Dokumen utang yang dibuat dari PO.",
  "Data type: Document.": "Tipe data: Dokumen.",
  "Accounting date for vendor bill.": "Tanggal akuntansi untuk vendor bill.",
  "Tax": "Pajak",
  "Document Tracking": "Pelacakan Dokumen",
  "Traces generated PR/RFQ/PO/Blanket/Tender records.": "Melacak rekaman PR/RFQ/PO/Blanket/Tender yang dibuat.",
  "Receiving Progress": "Progres Penerimaan",
  "Reviews received quantity, remaining quantity, and lead-time variance.": "Meninjau kuantitas diterima, sisa kuantitas, dan variasi lead time.",
  "Billing Review": "Peninjauan Tagihan",
  "Reviews bills, settlement, and amount due behavior.": "Meninjau tagihan, penyelesaian, dan status jumlah jatuh tempo.",
  "Computed Data": "Data Terhitung",
  "Products common to selected RFQs.": "Produk yang sama pada RFQ terpilih.",
  "Price Highlight": "Sorotan Harga",
  "Identifies relative supplier price position.": "Mengidentifikasi posisi harga relatif pemasok.",
  "Supplier payment term comparison.": "Perbandingan syarat pembayaran pemasok.",
  "Delivery timing comparison.": "Perbandingan waktu pengiriman.",
  "The master data can be selected in Purchase workflows.": "Master data dapat dipilih dalam alur kerja Purchase.",
  "User saves or unarchives the record.": "Pengguna menyimpan atau membatalkan arsip rekaman.",
  "Use the record in the relevant Purchase document.": "Gunakan rekaman dalam dokumen Purchase terkait.",
  "Archived / Blacklisted / Inactive": "Diarsipkan / Masuk Daftar Hitam / Tidak Aktif",
  "The record is restricted from normal usage.": "Rekaman dibatasi dari penggunaan normal.",
  "User archives, blacklists, or disables the record.": "Pengguna mengarsipkan, memasukkan ke daftar hitam, atau menonaktifkan rekaman.",
  "Reactivate only when the supplier or master data is valid again.": "Aktifkan kembali hanya saat pemasok atau master data valid kembali.",
  "Comparable RFQs": "RFQ yang Dapat Dibandingkan",
  "RFQs selected for offer comparison.": "RFQ yang dipilih untuk perbandingan penawaran.",
  "Data type: Records.": "Tipe data: Rekaman.",
  "Marks relative price position.": "Menandai posisi harga relatif.",
  "Lead Time": "Lead Time",
  "Supplier delivery timing metric.": "Metrik waktu pengiriman pemasok.",
  "Selected Offer": "Penawaran Terpilih",
  "RFQ chosen for conversion.": "RFQ yang dipilih untuk konversi.",
  "Create or update Compare Vendor Offers": "Membuat atau memperbarui Compare Vendor Offers",
  "Use when supplier, pricelist, document, or master data must be available for purchase transactions.": "Gunakan saat pemasok, daftar harga, dokumen, atau master data harus tersedia untuk transaksi pembelian.",
  "Open Purchase, click Create or open an existing record, complete required fields, then Save.": "Buka Purchase, klik Create atau buka rekaman yang ada, isi kolom wajib, lalu Save.",
  "The master data becomes available in the related Purchase workflow.": "Master data tersedia dalam alur kerja Purchase terkait.",
  "Restrict invalid data": "Batasi data tidak valid",
  "Use when a vendor, pricelist, or master record should not be used temporarily.": "Gunakan saat vendor, daftar harga, atau rekaman master tidak boleh digunakan sementara.",
  "Open the related Purchase master data record, then click Archive, Blacklist, Reject, or the visible restriction action when that action is available.": "Buka rekaman master data Purchase terkait, lalu klik Archive, Blacklist, Reject, atau tindakan pembatasan yang tersedia.",
  "Users cannot accidentally select invalid purchasing data.": "Pengguna tidak dapat memilih data pembelian yang tidak valid secara tidak sengaja.",
  "Use when a supplier provides agreed product pricing.": "Gunakan saat pemasok memberikan harga produk yang telah disepakati.",
  "Open Vendor Pricelist, fill header, add item/tier rows, save, and submit through approval.": "Buka Vendor Pricelist, isi header, tambah baris item/tier, Save, dan ajukan melalui approval.",
  "Approved pricelist becomes Active.": "Pricelist yang disetujui menjadi Active.",
  "Add tier pricing": "Tambah tier pricing",
  "Use when supplier price depends on order quantity.": "Gunakan saat harga pemasok bergantung pada kuantitas pesanan.",
  "Add tier rows under the pricelist item with min/max quantity and tier price or discount.": "Tambah baris tier di bawah item pricelist dengan kuantitas min/max serta harga tier atau diskon.",
  "Buyers can review quantity-based supplier pricing.": "Buyer dapat meninjau harga pemasok berdasarkan kuantitas.",
  "Archive pricelist": "Arsipkan pricelist",
  "Use when pricing should no longer be active.": "Gunakan saat harga tidak lagi aktif.",
  "Open the pricelist and click Archive when available.": "Buka pricelist dan klik Archive jika tersedia.",
  "Pricelist becomes Inactive.": "Pricelist menjadi Inactive.",
  "Vendor cannot be selected.": "Vendor tidak dapat dipilih.",
  "Vendor is not confirmed or not a vendor record.": "Vendor belum dikonfirmasi atau bukan data vendor.",
  "Confirm the vendor first.": "Konfirmasi vendor terlebih dahulu.",
  "Pricelist cannot be saved with dates.": "Pricelist tidak dapat disimpan dengan tanggal tersebut.",
  "Effective date or expiry date is earlier than today, or expiry is before effective date.": "Effective date atau expiry date lebih awal dari hari ini, atau expiry date sebelum effective date.",
  "Use current or future valid dates.": "Gunakan tanggal valid hari ini atau masa depan.",
  "Request Amendment button is not visible.": "Tombol Request Amendment tidak terlihat.",
  "No tracked changes are pending on an active pricelist item or tier.": "Tidak ada perubahan terlacak yang tertunda pada item atau tier pricelist aktif.",
  "Edit a tracked active-pricelist item or tier first.": "Edit item atau tier pricelist aktif yang terlacak terlebih dahulu.",
  "Submitted": "Submitted",
  "Amendment was submitted from the wizard.": "Amandemen diajukan dari wizard.",
  "User submits Request Amendment.": "User mengirimkan Request Amendment.",
  "Review lines and send or approve according to workflow.": "Tinjau baris lalu kirim atau setujui sesuai workflow.",
  "Waiting For Approval": "Waiting For Approval",
  "Approval workflow is in progress.": "Workflow approval sedang berjalan.",
  "Workflow moves submitted amendment to approval.": "Workflow memindahkan amandemen yang diajukan ke tahap approval.",
  "Approver approves or rejects.": "Approver menyetujui atau menolak.",
  "Approved": "Approved",
  "Proposed values have been accepted and applied.": "Nilai yang diajukan telah disetujui dan diterapkan.",
  "Approval action succeeds.": "Aksi approval berhasil.",
  "Check the vendor pricelist item or tier values.": "Periksa nilai item atau tier pada vendor pricelist.",
  "Proposed values are not accepted.": "Nilai yang diajukan tidak disetujui.",
  "Approver rejects or direct reject action runs.": "Approver menolak atau aksi penolakan langsung berjalan.",
  "Review original values before proposing again.": "Tinjau nilai awal sebelum mengajukan kembali.",
  "Orders": "Pesanan",
  "Shows orders generated from PR or Blanket Order.": "Menampilkan pesanan yang dibuat dari PR atau Blanket Order.",
  "Blanket Orders": "Blanket Order",
  "Shows agreements generated from PR.": "Menampilkan perjanjian yang dibuat dari PR.",
  "Quotations": "Penawaran",
  "Shows RFQs generated from Tender.": "Menampilkan RFQ yang dibuat dari Tender.",
  "Purchase Orders": "Purchase Order",
  "Shows POs generated from Tender or sourcing flow.": "Menampilkan PO yang dibuat dari alur sourcing atau Tender.",
  "Process Purchase Document Tracking": "Proses Pelacakan Dokumen Pembelian",
  "Correct Purchase Document Tracking before completion": "Koreksi Pelacakan Dokumen Pembelian sebelum selesai",
  "Received Percentage": "Persentase Diterima",
  "Shows receiving completion against ordered quantity.": "Menampilkan penyelesaian penerimaan terhadap kuantitas yang dipesan.",
  "Data type: Computed Percentage.": "Tipe data: Persentase Terhitung.",
  "Lead Time Variance": "Varians Lead Time",
  "Difference between expected and actual receiving timing.": "Selisih antara estimasi waktu penerimaan dan waktu aktual.",
  "Process Receiving Progress": "Proses Progres Penerimaan",
  "Correct Receiving Progress before completion": "Koreksi Progres Penerimaan sebelum selesai",
  "Number of bills linked to PO.": "Jumlah tagihan yang terhubung ke PO.",
  "Remaining payable amount.": "Sisa jumlah yang harus dibayar.",
  "Down payment bill portion where used.": "Bagian tagihan uang muka yang digunakan.",
  "Settlement document created after eligible payment flow.": "Dokumen settlement dibuat setelah alur pembayaran valid.",
  "Process Billing Review": "Proses Tinjauan Tagihan",
  "Correct Billing Review before completion": "Koreksi Tinjauan Tagihan sebelum selesai",
  "Award Allocation": "Alokasi Pemenang",
  "Selected vendor, quotation line, allocation quantity, score, rank, and subtotal.": "Vendor terpilih, baris penawaran, kuantitas alokasi, skor, peringkat, dan subtotal.",
  "Logs award allocation changes.": "Mencatat perubahan alokasi penetapan pemenang.",
  "Document Review": "Peninjauan Dokumen",
  "Reviewer and document qualification status.": "Peninjau dan status kualifikasi dokumen.",
  "Decision Approval": "Persetujuan Keputusan",
  "Approval state for tender award decision.": "Status persetujuan untuk keputusan penetapan pemenang tender.",
  "Process Tender Audit & Award Review": "Proses Audit Tender & Tinjauan Penetapan Pemenang",
  "Correct Tender Audit & Award Review before completion": "Koreksi Audit Tender & Tinjauan Penetapan Pemenang sebelum selesai",
  "Vendor Lead Time": "Lead Time Vendor",
  "Computed Number": "Angka Terhitung",
  "Average or tracked supplier delivery lead time.": "Rata-rata atau pelacakan lead time pengiriman pemasok.",
  "On-Time Receiving": "Penerimaan Tepat Waktu",
  "Computed Metric": "Metrik Terhitung",
  "Supplier receiving timeliness signal.": "Sinyal ketepatan waktu penerimaan pemasok.",
  "Last Purchase Price": "Harga Pembelian Terakhir",
  "Computed Amount": "Jumlah Terhitung",
  "Product/vendor price history comparison.": "Perbandingan riwayat harga produk/vendor.",
  "Pricelist Validity": "Masa Berlaku Daftar Harga",
  "Date Range": "Rentang Tanggal",
  "Effective and expiry dates for supplier prices.": "Tanggal berlaku dan kedaluwarsa untuk harga pemasok.",
  "Planned delivery date from purchase document.": "Tanggal pengiriman yang direncanakan dari dokumen pembelian.",
  "Actual date goods were received.": "Tanggal aktual barang diterima.",
  "Difference between expected and actual delivery timing.": "Selisih antara waktu pengiriman yang diharapkan dan aktual.",
  "Create or update Review Vendor Lead Time": "Buat atau perbarui Review Vendor Lead Time",
  "Overview": "Ikhtisar",
  "Executive command center for purchasing health and priority issues.": "Pusat kendali eksekutif untuk kesehatan pembelian dan masalah prioritas.",
  "KPI cards, trend panels, current risks, source document links, and recommended follow-up.": "Kartu KPI, panel tren, risiko saat ini, tautan dokumen sumber, dan tindak lanjut yang disarankan.",
  "Manager understands the current procurement position before drilling down.": "Manajer memahami posisi pengadaan saat ini sebelum menelusuri lebih detail.",
  "Insight Feed": "Feed Wawasan",
  "Prioritized feed of procurement observations and alerts.": "Feed prioritas untuk observasi dan peringatan pengadaan.",
  "Severity, affected domain, evidence, recommendation, and related source records.": "Tingkat keparahan, domain yang terpengaruh, bukti, rekomendasi, dan rekaman sumber terkait.",
  "User can focus on procurement issues that need action first.": "Pengguna dapat fokus pada masalah pengadaan yang memerlukan tindakan terlebih dahulu.",
  "Spend Analysis": "Analisis Pengeluaran",
  "Analyze purchasing spend by supplier, category, product, buyer, period, and document scope.": "Analisis pengeluaran pembelian berdasarkan pemasok, kategori, produk, pembeli, periode, dan cakupan dokumen.",
  "Spend concentration, top spend categories, trend movement, and drill-down records.": "Konsentrasi pengeluaran, kategori pengeluaran teratas, pergerakan tren, dan rekaman rincian.",
  "User identifies high-spend areas and possible control points.": "Pengguna mengidentifikasi area pengeluaran tinggi dan potensi titik kendali.",
  "Supplier Performance": "Kinerja Pemasok",
  "Review vendor performance using purchasing and delivery signals.": "Tinjau kinerja vendor menggunakan sinyal pembelian dan pengiriman.",
  "Lead time, delivery timeliness, price behavior, fulfillment consistency, and vendor comparison.": "Lead time, ketepatan waktu pengiriman, perilaku harga, konsistensi pemenuhan, dan perbandingan vendor.",
  "User can compare suppliers and prioritize vendor follow-up.": "Pengguna dapat membandingkan pemasok dan memprioritaskan tindak lanjut vendor.",
  "Demand Analysis": "Analisis Permintaan",
  "Analyze requested item demand from purchase activity.": "Analisis permintaan barang yang diminta dari aktivitas pembelian.",
  "Requested products, categories, departments, buyers, quantities, recurring demand, and spikes.": "Produk yang diminta, kategori, departemen, pembeli, kuantitas, permintaan berulang, dan lonjakan permintaan.",
  "User can identify demand patterns for planning and sourcing.": "Pengguna dapat mengidentifikasi pola permintaan untuk perencanaan dan sourcing.",
  "Savings Opportunities": "Peluang Penghematan",
  "Find potential savings from price, supplier, and sourcing behavior.": "Temukan potensi penghematan dari perilaku harga, pemasok, dan sourcing.",
  "Use before procurement review, management meeting, or approval discussion.": "Gunakan sebelum tinjauan pengadaan, rapat manajemen, atau diskusi persetujuan.",
  "Open Overview, set period and organization filters, review KPIs, top insights, and risks.": "Buka Overview, atur filter periode dan organisasi, lalu tinjau KPI, wawasan utama, dan risiko.",
  "Manager has a summarized procurement position and priority issue list.": "Manajer memiliki ringkasan posisi pengadaan dan daftar masalah prioritas.",
  "Investigate supplier risk": "Investigasi risiko pemasok",
  "Use when vendor performance or delivery timeliness needs review.": "Gunakan saat performa vendor atau ketepatan waktu pengiriman perlu ditinjau.",
  "Open Supplier Performance and Risk Center, filter by vendor or category, then open linked source records.": "Buka Supplier Performance and Risk Center, filter berdasarkan vendor atau kategori, lalu buka rekaman sumber terkait.",
  "User can identify vendor risks and follow-up actions with evidence.": "Pengguna dapat mengidentifikasi risiko vendor dan tindakan lanjutan berdasarkan bukti.",
  "Find savings opportunity": "Temukan peluang penghematan",
  "Use when procurement wants to reduce spend or compare vendor pricing.": "Gunakan saat tim pengadaan ingin mengurangi pengeluaran atau membandingkan harga vendor.",
  "Open Savings Opportunities and Spend Analysis, review price variance and supplier alternatives, then validate against pricelist or PO records.": "Buka Savings Opportunities and Spend Analysis, tinjau varians harga dan alternatif pemasok, lalu validasi terhadap pricelist atau rekaman PO.",
  "User can shortlist savings candidates without changing source transactions from the dashboard.": "Pengguna dapat menyaring kandidat penghematan tanpa mengubah transaksi sumber dari dasbor.",
  "Check budget pressure": "Periksa tekanan anggaran",
  "Use before approving spend or reviewing procurement budget utilization.": "Gunakan sebelum menyetujui pengeluaran atau meninjau utilisasi anggaran pengadaan.",
  "Open Budget vs Actual, compare committed and actual spend against budget, then drill down to related PR or PO records.": "Buka Budget vs Actual, bandingkan pengeluaran komitmen dan aktual terhadap anggaran, lalu telusuri ke rekaman PR atau PO terkait.",
  "User can detect overspend, under-utilization, or budget risk early.": "Pengguna dapat mendeteksi pengeluaran berlebih, utilisasi rendah, atau risiko anggaran sejak dini.",
  "Purchase Intelligence menu is not visible": "Menu Purchase Intelligence tidak terlihat",
  "The selected manual profile or application user role does not include manager/reporting access, or the intelligence menu is not enabled in the installed Purchase module.": "Profil manual atau hak akses pengguna aplikasi yang dipilih tidak mencakup akses manajer/pelaporan, atau menu intelligence belum diaktifkan pada modul Purchase yang terpasang.",
  "Use the Purchase Manager profile in this manual and confirm the user has the required Purchase menu access in the application.": "Gunakan profil Purchase Manager dalam panduan ini dan pastikan pengguna memiliki akses menu Purchase yang diperlukan pada aplikasi.",
  "Dashboard totals look different from source documents": "Total pada dasbor terlihat berbeda dari dokumen sumber",
  "Filters, date range, company, branch, cancelled documents, draft documents, or optional module coverage may differ from the source view.": "Filter, rentang tanggal, perusahaan, cabang, dokumen yang dibatalkan, dokumen draf, atau cakupan modul opsional mungkin berbeda dari tampilan sumber.",
  "Keep the same filters visible, open drill-down records, and compare only the records included in the dashboard scope.": "Tetap terapkan filter yang sama, buka rekaman drill-down, dan bandingkan hanya rekaman yang masuk dalam cakupan dasbor.",
  "No value appears in Budget vs Actual": "Tidak ada nilai yang muncul di Budget vs Actual",
  "Budget records or budget-related module data may not be configured for the selected scope.": "Rekaman anggaran atau data modul terkait anggaran mungkin belum dikonfigurasi untuk cakupan yang dipilih.",
  "Confirm budget setup, company, period, and linked purchase records before using the page for approval review.": "Konfirmasikan pengaturan anggaran, perusahaan, periode, dan rekaman pembelian terkait sebelum menggunakan halaman untuk tinjauan persetujuan.",
  "Supplier or delivery KPI is incomplete": "KPI pemasok atau pengiriman tidak lengkap",
  "Receiving records, expected dates, actual delivery dates, or vendor history may be missing.": "Rekaman penerimaan, tanggal perkiraan, tanggal pengiriman aktual, atau riwayat vendor mungkin hilang.",
  "Review the related PO and Receiving records, then refresh the dashboard after the source data is corrected.": "Tinjau rekaman PO dan Receiving terkait, lalu segarkan dasbor setelah data sumber diperbaiki.",
  "Insight appears without enough evidence": "Insight muncul tanpa bukti yang cukup",
  "The insight may have low confidence or incomplete source coverage.": "Insight mungkin memiliki tingkat keyakinan rendah atau cakupan sumber data yang tidak lengkap.",
  "Validate the source PR, RFQ, PO, vendor, pricelist, contract, budget, or receiving records before acting on the recommendation.": "Validasi sumber PR, RFQ, PO, vendor, pricelist, kontrak, anggaran, atau rekaman penerimaan sebelum menindaklanjuti rekomendasi.",
  "Price variance, vendor alternatives, contract opportunities, and repeated purchases.": "Variansi harga, alternatif vendor, peluang kontrak, dan pembelian berulang.",
  "User can investigate realistic procurement savings opportunities.": "Pengguna dapat menginvestigasi peluang penghematan pengadaan yang realistis.",
  "Contract Intelligence": "Contract Intelligence",
  "Monitor supplier agreement coverage and contract-related purchasing risk.": "Memantau cakupan perjanjian pemasok dan risiko pembelian terkait kontrak.",
  "Expiring agreements, off-contract spend, compliance gaps, and renegotiation indicators.": "Perjanjian yang akan berakhir, pengeluaran di luar kontrak, celah kepatuhan, dan indikator negosiasi ulang.",
  "User can keep supplier agreements visible during buying decisions.": "Pengguna dapat memastikan perjanjian pemasok tetap terlihat selama pengambilan keputusan pembelian.",
  "Budget vs Actual": "Budget vs Actual",
  "Compare procurement spending and commitments against budget records.": "Bandingkan pengeluaran dan komitmen pengadaan terhadap catatan anggaran.",
  "Budget usage, committed amount, actual spending, remaining budget, and variance.": "Penggunaan anggaran, jumlah komitmen, pengeluaran aktual, sisa anggaran, dan variansi.",
  "User can detect budget pressure before approving or continuing spend.": "Pengguna dapat mendeteksi tekanan anggaran sebelum menyetujui atau melanjutkan pengeluaran.",
  "Risk Center": "Risk Center",
  "Central queue for procurement risks across spend, supplier, demand, contract, budget, and lifecycle activity.": "Antrean terpusat untuk risiko pengadaan di seluruh pengeluaran, pemasok, permintaan, kontrak, anggaran, dan aktivitas siklus hidup.",
  "Risk severity, probability, impact, source evidence, and linked action owner.": "Tingkat keparahan risiko, probabilitas, dampak, bukti sumber, dan penanggung jawab tindakan terkait.",
  "User can prioritize and route procurement risk follow-up.": "Pengguna dapat memprioritaskan dan mengarahkan tindak lanjut risiko pengadaan.",
  "Filter": "Filter",
  "Defines the period used by the dashboard, charts, and insight feed.": "Menentukan periode yang digunakan oleh dasbor, grafik, dan insight feed.",
  "Limits the dataset according to organization scope and user access rights.": "Membatasi set data sesuai dengan cakupan organisasi dan hak akses pengguna.",
  "Filter / Dimension": "Filter / Dimensi",
  "Used to compare supplier spend, performance, risk, contract, and delivery behavior.": "Digunakan untuk membandingkan pengeluaran, kinerja, risiko, kontrak, dan perilaku pengiriman pemasok.",
  "Product / Category": "Produk / Kategori",
  "Groups spend, demand, and savings analysis by purchased item or category.": "Mengelompokkan analisis pengeluaran, permintaan, dan penghematan berdasarkan barang atau kategori yang dibeli.",
  "Buyer": "Buyer",
  "Shows purchasing activity or follow-up by responsible procurement user.": "Menampilkan aktivitas pembelian atau tindak lanjut oleh pengguna pengadaan yang bertanggung jawab.",
  "Total Spend": "Total Pengeluaran",
  "Total purchasing value within the selected scope. Validate through the included source documents before sharing.": "Total nilai pembelian dalam cakupan yang dipilih. Lakukan validasi melalui dokumen sumber yang disertakan sebelum membagikannya.",
  "Committed / Actual Amount": "Jumlah Komitmen / Aktual",
  "Budget-related value used by Budget vs Actual where budget modules are installed and records are available.": "Nilai terkait anggaran yang digunakan oleh Budget vs Actual jika modul anggaran terpasang dan data tersedia.",
  "Supplier delivery timing signal calculated from purchasing and receiving dates where available.": "Sinyal ketepatan waktu pengiriman pemasok yang dihitung dari tanggal pembelian dan penerimaan jika tersedia.",
  "Insight Severity": "Tingkat Keparahan Insight",
  "System Classification": "Klasifikasi Sistem",
  "Priority level used by Insight Feed and Risk Center to rank follow-up.": "Tingkat prioritas yang digunakan oleh Insight Feed dan Risk Center untuk menentukan urutan tindak lanjut.",
  "Recommended Action": "Rekomendasi Tindakan",
  "System Text": "Teks Sistem",
  "Suggested follow-up based on the insight, source evidence, and configured intelligence rule.": "Tindak lanjut yang disarankan berdasarkan wawasan, bukti sumber, dan aturan intelijen yang dikonfigurasi.",
  "Review executive purchasing condition": "Tinjau kondisi pembelian eksekutif",
  "Use when document details are incomplete or incorrect before approval, confirmation, receipt, or billing.": "Gunakan saat detail dokumen tidak lengkap atau salah sebelum persetujuan, konfirmasi, penerimaan, atau penagihan.",
  "Open the document, update editable fields and lines, save, then rerun the required action.": "Buka dokumen, perbarui kolom dan baris yang dapat diedit, simpan, lalu jalankan kembali tindakan yang diperlukan.",
  "The corrected document continues through the Purchase workflow without duplicate records.": "Dokumen yang diperbaiki berlanjut melalui alur kerja Purchase tanpa rekaman duplikat.",
  "Submit / Confirm": "Submit / Confirm",
  "Moves the request out of draft into review.": "Memindahkan permintaan dari draf ke peninjauan.",
  "Data type: Action.": "Tipe data: Action.",
  "Approve": "Approve",
  "Approves request when approval rules apply.": "Menyetujui permintaan saat aturan persetujuan berlaku.",
  "State": "State",
  "Shows draft, submitted, approved, closed, or similar lifecycle state.": "Menampilkan status draf, diajukan, disetujui, ditutup, atau status siklus hidup serupa.",
  "Data type: Status.": "Tipe data: Status.",
  "Remaining Quantity": "Remaining Quantity",
  "Open quantity not yet converted to sourcing document.": "Kuantitas terbuka yang belum dikonversi ke dokumen sourcing.",
  "Process Submit & Approve Request": "Proses Submit & Approve Request",
  "Open Purchase, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase, buat atau buka dokumen, lengkapi kolom dan baris yang diperlukan, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Submit & Approve Request before completion": "Koreksi Submit & Approve Request sebelum penyelesaian",
  "Create RFQ": "Create RFQ",
  "Creates supplier quotation request from selected PR lines.": "Membuat permintaan penawaran pemasok dari baris PR yang dipilih.",
  "Create Blanket Order": "Create Blanket Order",
  "Creates purchase agreement from selected PR lines.": "Membuat perjanjian pembelian dari baris PR yang dipilih.",
  "Generated Document": "Generated Document",
  "Opens RFQ or Blanket Order linked to the request.": "Membuka RFQ atau Blanket Order yang tertaut ke permintaan.",
  "Data type: Smart Button.": "Tipe data: Smart Button.",
  "Closed Line": "Closed Line",
  "Marks request line as no longer open for conversion.": "Menandai baris permintaan tidak lagi terbuka untuk konversi.",
  "Process Convert to RFQ or Blanket Order": "Proses Convert to RFQ or Blanket Order",
  "Open Purchase > Purchase > Request for Quotation, create or open the document, complete required fields and lines, then use the verified workflow action.": "Buka Purchase > Purchase > Request for Quotation, buat atau buka dokumen, lengkapi kolom dan baris yang diperlukan, lalu gunakan tindakan alur kerja yang terverifikasi.",
  "Correct Convert to RFQ or Blanket Order before completion": "Koreksi Convert to RFQ or Blanket Order sebelum penyelesaian",
  "Quantity": "Quantity",
  "Requested product quantity.": "Kuantitas produk yang diminta.",
  "Approved Qty": "Approved Qty",
  "Quantity approved for conversion.": "Kuantitas yang disetujui untuk konversi.",
  "RFQ Qty / PO Qty": "RFQ Qty / PO Qty",
  "Downstream quantity already converted.": "Kuantitas downstream yang telah dikonversi.",
  "Quantity already received from linked documents.": "Kuantitas yang telah diterima dari dokumen tertaut.",
  "User sends the vendor for approval after required blocking documents are complete.": "Pengguna mengajukan vendor untuk persetujuan setelah dokumen pemblokir wajib lengkap.",
  "Wait for approval or revise rejected data.": "Tunggu persetujuan atau revisi data yang ditolak.",
  "Confirmed": "Dikonfirmasi",
  "Vendor is eligible for purchasing commitments when active and in company scope.": "Vendor memenuhi syarat untuk komitmen pembelian saat aktif dan berada dalam cakupan perusahaan.",
  "Approval or direct confirmation succeeds.": "Persetujuan atau konfirmasi langsung berhasil.",
  "Use the vendor in RFQ, PO, pricelist, and related procurement records.": "Gunakan vendor dalam RFQ, PO, pricelist, dan catatan pengadaan terkait.",
  "Blacklisted": "Diblacklist",
  "Vendor is restricted from normal purchasing use.": "Vendor dibatasi dari penggunaan pembelian normal.",
  "User clicks Blacklist on a confirmed vendor.": "Pengguna mengeklik Blacklist pada vendor yang dikonfirmasi.",
  "Review blacklist reason and unblacklist only after business approval.": "Tinjau alasan blacklist dan hapus dari blacklist hanya setelah ada persetujuan bisnis.",
  "Vendor approval was rejected.": "Persetujuan vendor ditolak.",
  "Approver rejects the vendor or change request.": "Approver menolak vendor atau permintaan perubahan.",
  "Correct the vendor data and resubmit if still needed.": "Perbaiki data vendor dan kirim ulang jika masih diperlukan.",
  "Vendor Code": "Kode Vendor",
  "Conditional": "Kondisional",
  "Supplier identifier. It is required when vendor sequence is manual and readonly or generated when sequence is automatic or vendor is confirmed.": "Identifikator pemasok. Wajib diisi saat sequence vendor manual dan readonly atau dibuat otomatis saat sequence otomatis atau vendor dikonfirmasi.",
  "Data type: Text / sequence.": "Tipe data: Text / sequence.",
  "Vendor Categories": "Kategori Vendor",
  "Groups vendors and can affect legal document applicability and purchase team routing.": "Mengelompokkan vendor dan dapat memengaruhi keberlakuan dokumen legal serta routing tim pembelian.",
  "Many2many. Category company must match one of the vendor companies when scoped.": "Many2many. Perusahaan kategori harus sesuai dengan salah satu perusahaan vendor jika dibatasi cakupannya.",
  "Status": "Status",
  "Vendor lifecycle status used for eligibility and approval.": "Status siklus hidup vendor untuk kelayakan dan persetujuan.",
  "Draft, Waiting Approval, Confirmed, Blacklisted, Rejected.": "Draf, Menunggu Persetujuan, Dikonfirmasi, Daftar Hitam, Ditolak.",
  "Purchase Limit": "Batas Pembelian",
  "Vendor purchase credit limit. Default can come from Purchase Settings.": "Batas kredit pembelian vendor. Default dari Purchase Settings.",
  "Amount.": "Jumlah.",
  "Purchase Limit Used / Available": "Limit Pembelian Terpakai / Tersedia",
  "Computed credit usage and remaining limit from related RFQ and Purchase Orders.": "Penggunaan kredit dan sisa limit dihitung dari RFQ dan PO terkait.",
  "Read-only computed fields.": "Field terhitung hanya-baca.",
  "Legal Documents": "Dokumen Legal",
  "Required, additional, or optional document lines generated from legal document setup.": "Baris dokumen wajib, tambahan, atau opsional dihasilkan dari setup dokumen legal.",
  "Required blocking documents must have an uploaded file before vendor submission or confirmation.": "Dokumen pemblokir wajib harus ada file terunggah sebelum pengajuan atau konfirmasi vendor.",
  "Blacklist Information": "Informasi Daftar Hitam",
  "Reason, date, and user for blacklisted vendors.": "Alasan, tanggal, dan user untuk vendor blacklist.",
  "Visible when vendor status is Blacklisted.": "Tampil saat status vendor Blacklisted."
};

  // Figure caption keywords translator
  function translateCaption(enText) {
    if (!enText) return enText;
    let text = enText.replace(/^Figure\b/i, 'Gambar');
    
    const terms = [
      ['framed in red', 'berbingkai merah'],
      ['general view', 'tampilan umum'],
      ['login form', 'formulir login'],
      ['creation form', 'formulir pembuatan'],
      ['action button', 'tombol aksi'],
      ['action controls', 'kontrol aksi'],
      ['action', 'aksi'],
      ['button', 'tombol'],
      ['list and create', 'daftar dan pembuatan'],
      ['list', 'daftar'],
      ['header parameters', 'parameter header'],
      ['header', 'header'],
      ['lines table', 'tabel baris produk'],
      ['lines', 'baris rincian'],
      ['detail', 'rincian'],
      ['after successful login', 'setelah berhasil login'],
      ['with username and password fields', 'dengan kolom username dan password'],
      ['after the user enters credentials', 'setelah pengguna memasukkan kredensial'],
      ['dropdown with the log out action', 'menu tarik-turun dengan opsi keluar (log out)'],
      ['returns the user to the login screen', 'mengembalikan pengguna ke layar login'],
      ['save action', 'aksi simpan'],
      ['smart buttons', 'tombol navigasi (smart buttons)'],
      ['smart button', 'tombol navigasi (smart button)'],
      ['audit trace', 'jejak audit'],
      ['audit', 'audit'],
      ['verification', 'verifikasi'],
      ['progress', 'progres'],
      ['breakdown', 'rincian perhitungan'],
      ['executive dashboard', 'dasbor eksekutif'],
      ['dashboard', 'dasbor'],
      ['summary', 'ringkasan'],
      ['overview', 'gambaran umum'],
      ['settings', 'pengaturan'],
      ['policy', 'kebijakan'],
      ['status', 'status'],
      ['result', 'hasil'],
      ['approved', 'disetujui'],
      ['confirmed', 'dikonfirmasi'],
      ['rejected', 'ditolak'],
      ['form', 'formulir'],
      ['screen', 'layar']
    ];

    for (const [enTerm, idTerm] of terms) {
      const regex = new RegExp('\\b' + enTerm + '\\b', 'gi');
      text = text.replace(regex, idTerm);
    }
    return text;
  }

  // 3. Inject Language Switcher UI & Styles
  function injectSwitcherUI() {
    if (document.getElementById('hmx-i18n-style')) return;

    const style = document.createElement('style');
    style.id = 'hmx-i18n-style';
    style.textContent = `
      .toc-lang-switch {
        padding: 10px 14px;
        background: #fff;
        border-bottom: 1px solid #EDEEF0;
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: 'Source Sans 3', sans-serif;
      }
      .toc-lang-label {
        font-size: 11px;
        font-weight: 700;
        color: #64748B;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .toc-lang-btns {
        display: flex;
        flex: 1;
        background: #F1F5F9;
        padding: 2px;
        border-radius: 6px;
        border: 1px solid #E2E8F0;
      }
      .toc-lang-btn {
        flex: 1;
        padding: 5px 8px;
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        background: transparent;
        color: #64748B;
        border: none;
        border-radius: 4px;
        font-family: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: all 0.15s ease;
      }
      .toc-lang-btn.active {
        background: #2A5EA2;
        color: #fff;
        box-shadow: 0 1px 3px rgba(42,94,162,0.3);
      }
      .toc-lang-btn:hover:not(.active) {
        color: #1C4F92;
        background: rgba(255,255,255,0.7);
      }
      
      .top-lang-pill {
        position: fixed;
        top: 8px;
        right: 18px;
        z-index: 1000;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(8px);
        padding: 3px 4px;
        border-radius: 999px;
        border: 1px solid #c7d2e0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        display: flex;
        align-items: center;
        gap: 3px;
        font-family: 'Source Sans 3', sans-serif;
      }
      .top-lang-pill button {
        padding: 3px 10px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        border-radius: 999px;
        background: transparent;
        color: #64748B;
        transition: all 0.15s;
        display: inline-flex;
        align-items: center;
        gap: 3px;
      }
      .top-lang-pill button.active {
        background: #2A5EA2;
        color: #fff;
      }
      .top-lang-pill button:hover:not(.active) {
        background: #EBF1FA;
        color: #2A5EA2;
      }
      @media print {
        .top-lang-pill, .toc-lang-switch { display: none !important; }
      }
    `;
    document.head.appendChild(style);

    const tocBrand = document.querySelector('.toc-brand');
    if (tocBrand && !document.querySelector('.toc-lang-switch')) {
      const switcher = document.createElement('div');
      switcher.className = 'toc-lang-switch';
      switcher.innerHTML = `
        <span class="toc-lang-label"><i class="fa fa-language"></i> Bahasa:</span>
        <div class="toc-lang-btns">
          <button type="button" class="toc-lang-btn" data-lang="en">🇬🇧 English</button>
          <button type="button" class="toc-lang-btn" data-lang="id">🇮🇩 Indonesia</button>
        </div>
      `;
      tocBrand.insertAdjacentElement('afterend', switcher);

      switcher.querySelectorAll('.toc-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
      });
    }

    if (!document.querySelector('.top-lang-pill')) {
      const topPill = document.createElement('div');
      topPill.className = 'top-lang-pill';
      topPill.innerHTML = `
        <button type="button" class="top-lang-btn" data-lang="en">🇬🇧 EN</button>
        <button type="button" class="top-lang-btn" data-lang="id">🇮🇩 ID</button>
      `;
      document.body.appendChild(topPill);

      topPill.querySelectorAll('.top-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
      });
    }
  }

  // 4. Save and Restore
  function saveOriginal(el) {
    if (!el || el.__hmx_orig_en !== undefined) return;
    el.__hmx_orig_en = el.textContent;
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.toc-lang-btn, .top-lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (lang === 'en') {
      restoreEnglish();
      return;
    }

    translateToIndonesian();
  }

  function restoreEnglish() {
    document.title = 'Purchase Module - User Manual (HMX v1.0)';

    // Convert Vendor Portal TOC & Headings to English
    document.querySelectorAll('#toc-vendor-group .toc-item').forEach(item => {
      const textEl = item.querySelector('.toc-text');
      if (textEl) {
        const txt = textEl.textContent.trim();
        if (I18N_VENDOR_MAP[txt]) textEl.textContent = I18N_VENDOR_MAP[txt];
      }
    });
    document.querySelectorAll('.section.vendor-only h2').forEach(h => {
      const txt = h.textContent.trim();
      if (I18N_VENDOR_MAP[txt]) h.textContent = I18N_VENDOR_MAP[txt];
    });


    document.querySelectorAll('[data-hmx-i18n]').forEach(el => {
      if (el.__hmx_orig_en !== undefined) {
        el.textContent = el.__hmx_orig_en;
      }
    });

    // Restore text nodes inside step lis
    document.querySelectorAll('.section ol.steps > li').forEach(li => {
      Array.from(li.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.__hmx_orig_en !== undefined) {
          node.textContent = node.__hmx_orig_en;
        }
      });
    });

    const searchInput = document.querySelector('.toc-search input');
    if (searchInput) searchInput.placeholder = 'Search topics...';

    const banner = document.querySelector('.draft-banner');
    if (banner && banner.__hmx_orig_en) banner.textContent = banner.__hmx_orig_en;
  }

  function translateToIndonesian() {
    document.title = 'Modul Pembelian - Panduan Pengguna (HMX v1.0)';

    // Convert Vendor Portal TOC & Headings to Indonesian
    document.querySelectorAll('#toc-vendor-group .toc-item').forEach(item => {
      const textEl = item.querySelector('.toc-text');
      if (textEl) {
        const txt = textEl.textContent.trim();
        for (const [idText, enText] of Object.entries(I18N_VENDOR_MAP)) {
          if (txt === enText) { textEl.textContent = idText; break; }
        }
      }
    });
    document.querySelectorAll('.section.vendor-only h2').forEach(h => {
      const txt = h.textContent.trim();
      for (const [idText, enText] of Object.entries(I18N_VENDOR_MAP)) {
        if (txt === enText) { h.textContent = idText; break; }
      }
    });


    // Search placeholder
    const searchInput = document.querySelector('.toc-search input');
    if (searchInput) {
      if (!searchInput.__hmx_orig_en) searchInput.__hmx_orig_en = searchInput.placeholder;
      searchInput.placeholder = I18N_UI['Search topics...'];
    }

    // Draft banner
    const banner = document.querySelector('.draft-banner');
    if (banner) {
      saveOriginal(banner);
      banner.textContent = I18N_UI['CONFIDENTIAL & PROPRIETARY — HASHMICRO ERP (HMX) DOCUMENTATION'];
    }

    // TOC items
    document.querySelectorAll('.toc-item').forEach(item => {
      const textEl = item.querySelector('.toc-text');
      if (textEl) {
        saveOriginal(textEl);
        textEl.setAttribute('data-hmx-i18n', 'true');
        const orig = textEl.__hmx_orig_en.trim();
        if (I18N_TOC[orig]) {
          textEl.textContent = I18N_TOC[orig];
        }
      }
    });

    // Section titles (h1, h2)
    document.querySelectorAll('.section h1, .section h2').forEach(h => {
      saveOriginal(h);
      h.setAttribute('data-hmx-i18n', 'true');
      const orig = h.__hmx_orig_en.trim();
      if (I18N_TOC[orig]) {
        h.textContent = I18N_TOC[orig];
      }
    });

    // Section subheadings (h3)
    document.querySelectorAll('.section h3').forEach(h => {
      saveOriginal(h);
      h.setAttribute('data-hmx-i18n', 'true');
      const orig = h.__hmx_orig_en.trim();
      if (I18N_HEADINGS[orig]) {
        h.textContent = I18N_HEADINGS[orig];
      }
    });

    // Section Overviews
    document.querySelectorAll('.section').forEach(sec => {
      const secId = sec.getAttribute('id');
      if (secId && I18N_OVERVIEWS[secId]) {
        const ovH3 = Array.from(sec.querySelectorAll('h3')).find(h => h.textContent.includes('Overview') || h.textContent.includes('Gambaran Umum'));
        if (ovH3) {
          const ovP = ovH3.nextElementSibling;
          if (ovP && ovP.tagName === 'P') {
            saveOriginal(ovP);
            ovP.setAttribute('data-hmx-i18n', 'true');
            ovP.textContent = I18N_OVERVIEWS[secId];
          }
        }
      }
    });

    // Section Prerequisites (ul > li)
    document.querySelectorAll('.section h3').forEach(h => {
      if (h.textContent.includes('Prerequisites') || h.textContent.includes('Prasyarat')) {
        const ul = h.nextElementSibling;
        if (ul && ul.tagName === 'UL') {
          ul.querySelectorAll('li').forEach(li => {
            saveOriginal(li);
            li.setAttribute('data-hmx-i18n', 'true');
            const orig = li.__hmx_orig_en.trim();
            if (I18N_CORPUS[orig]) {
              li.textContent = I18N_CORPUS[orig];
            }
          });
        }
      }
    });

    // Section Step-by-Step Instructions (ol.steps > li)
    document.querySelectorAll('.section ol.steps > li').forEach(li => {
      Array.from(li.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.__hmx_orig_en === undefined) node.__hmx_orig_en = node.textContent;
          const orig = node.__hmx_orig_en.trim();
          if (orig && I18N_CORPUS[orig]) {
            node.textContent = I18N_CORPUS[orig] + ' ';
          }
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
          saveOriginal(node);
          node.setAttribute('data-hmx-i18n', 'true');
          const orig = node.__hmx_orig_en.trim();
          if (I18N_CORPUS[orig]) {
            node.textContent = I18N_CORPUS[orig];
          }
        }
      });
    });

    // Table headers (th)
    document.querySelectorAll('table th').forEach(th => {
      saveOriginal(th);
      th.setAttribute('data-hmx-i18n', 'true');
      const orig = th.__hmx_orig_en.trim();
      if (I18N_TABLE_HEADERS[orig]) {
        th.textContent = I18N_TABLE_HEADERS[orig];
      }
    });

    // Table body cells (td)
    document.querySelectorAll('table td').forEach(td => {
      saveOriginal(td);
      td.setAttribute('data-hmx-i18n', 'true');
      const orig = td.__hmx_orig_en.trim();
      if (I18N_CORPUS[orig]) {
        td.textContent = I18N_CORPUS[orig];
      } else if (I18N_TERMS[orig]) {
        td.textContent = I18N_TERMS[orig];
      }
    });

    // Page header strips
    document.querySelectorAll('.page-header-strip').forEach(strip => {
      const spans = strip.querySelectorAll('span');
      if (spans.length >= 1) {
        saveOriginal(spans[0]);
        spans[0].setAttribute('data-hmx-i18n', 'true');
        if (spans[0].__hmx_orig_en.includes('Purchase Module - User Manual')) {
          spans[0].textContent = I18N_UI['Purchase Module - User Manual'];
        }
      }
    });

    // Figure captions
    document.querySelectorAll('figcaption').forEach(cap => {
      saveOriginal(cap);
      cap.setAttribute('data-hmx-i18n', 'true');
      cap.textContent = translateCaption(cap.__hmx_orig_en);
    });

    // Cover page metadata
    document.querySelectorAll('.cover .row .lbl').forEach(lbl => {
      saveOriginal(lbl);
      lbl.setAttribute('data-hmx-i18n', 'true');
      const orig = lbl.__hmx_orig_en.trim();
      if (I18N_UI[orig]) {
        lbl.textContent = I18N_UI[orig];
      }
    });
    const coverH1 = document.querySelector('.cover h1');
    if (coverH1) {
      saveOriginal(coverH1);
      coverH1.setAttribute('data-hmx-i18n', 'true');
      coverH1.textContent = I18N_UI['Purchase Module'];
    }

    // Mode switcher buttons
    document.querySelectorAll('.toc-mode button').forEach(btn => {
      saveOriginal(btn);
      btn.setAttribute('data-hmx-i18n', 'true');
      const orig = btn.__hmx_orig_en.trim();
      if (I18N_UI[orig]) {
        btn.textContent = I18N_UI[orig];
      }
    });
  }

  // 5. Controller
  function getPreferredLanguage() {
    try {
      const params = new URLSearchParams(window.location.search || '');
      const urlLang = params.get('lang');
      if (urlLang === 'id' || urlLang === 'en') {
        return urlLang;
      }
    } catch (e) {}

    try {
      const saved = localStorage.getItem('hmx_manual_lang');
      if (saved === 'id' || saved === 'en') {
        return saved;
      }
    } catch (e) {}

    // Default to Bahasa Indonesia
    return 'id';
  }

  function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') lang = 'id';
    try {
      localStorage.setItem('hmx_manual_lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}

    applyLanguage(lang);
  }

  window.HMX_I18N = {
    setLanguage: setLanguage,
    getLanguage: getPreferredLanguage,
    apply: applyLanguage
  };

  function init() {
    injectSwitcherUI();
    const lang = getPreferredLanguage();
    applyLanguage(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
