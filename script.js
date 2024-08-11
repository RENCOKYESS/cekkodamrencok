
document.getElementById('khodam-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nama dari input
    const name = document.getElementById('name').value.trim();
    
    // Proses cek khodam (misalnya, hasilkan pesan berdasarkan nama)
    const result = cekKhodam(name);
    
    // Tampilkan hasil
    document.getElementById('result').innerText = result;
});

function cekKhodam(name) {
    // Contoh sederhana logika cek khodam
    if (name.length === 0) {
        return 'Silakan masukkan nama terlebih dahulu.';
    }

    // Ini adalah contoh logika. Ganti dengan logika yang sesuai
    const khodamList = [
        'NYI BLORONG',
        'GATOT KACA',
        'PRENJAK ALANG ALANG',
        'KEBO GIRO',
        'TRINGGILING ',
        'GAJAH TERBANG',
        'MOTOR MABUR',
        'KUDA TERBANG',
        'ODADING MANG OLEH',
        'KAWAT GIGI',
        'KOSONG',
        'NYI IKEM',
        'TERMINAL LISTRIK',
        'SIKAT WC',
        'HANDUK BASAH',
        'PANCI GOSONG',
        'SINGKONG BABAT',
        'KOSONG',
        'KOSONG',
        'KOSONG',
        'KOSONG',
        'KOSONG',
        'KOSONG',
        'BABERSHOPE',
        'DRAK SYSTEM MOONTON',
        'BOTOL POCARI SWEAT',
    ];

    
    const randomIndex = Math.floor(Math.random() * khodamList.length);
    return `  ${khodamList[randomIndex]}`;
}