/**
 * HMX Purchase Manual - Localization / i18n Engine
 * Supports seamless bilingual switching: English (EN) & Bahasa Indonesia (ID)
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

  // Figure caption keywords translator
  function translateCaption(enText) {
    if (!enText) return enText;
    let text = enText.replace(/^Figure\b/i, 'Gambar');
    
    // Replace terms cleanly using word boundaries
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

  // 2. Inject Language Switcher UI & Styles
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

  // 3. Save and Restore
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

    document.querySelectorAll('[data-hmx-i18n]').forEach(el => {
      if (el.__hmx_orig_en !== undefined) {
        el.textContent = el.__hmx_orig_en;
      }
    });

    const searchInput = document.querySelector('.toc-search input');
    if (searchInput) searchInput.placeholder = 'Search topics...';

    const banner = document.querySelector('.draft-banner');
    if (banner && banner.__hmx_orig_en) banner.textContent = banner.__hmx_orig_en;
  }

  function translateToIndonesian() {
    document.title = 'Modul Pembelian - Panduan Pengguna (HMX v1.0)';

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

    // Table headers (th)
    document.querySelectorAll('table th').forEach(th => {
      saveOriginal(th);
      th.setAttribute('data-hmx-i18n', 'true');
      const orig = th.__hmx_orig_en.trim();
      if (I18N_TABLE_HEADERS[orig]) {
        th.textContent = I18N_TABLE_HEADERS[orig];
      }
    });

    // Table status cells (td)
    document.querySelectorAll('table td').forEach(td => {
      const orig = td.textContent.trim();
      if (I18N_TERMS[orig]) {
        saveOriginal(td);
        td.setAttribute('data-hmx-i18n', 'true');
        td.textContent = I18N_TERMS[orig];
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

  // 4. Controller
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

    if (navigator.language && navigator.language.toLowerCase().startsWith('id')) {
      return 'id';
    }
    return 'en';
  }

  function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') lang = 'en';
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
