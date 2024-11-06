function hitungBMI() {
    const beratBadan = parseFloat(document.getElementById("berat-badan").value);
    const tinggiBadan = parseFloat(document.getElementById("Tinggi-badan").value) / 100;

    if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
        document.getElementById("hasil").innerText = "Masukkan berat dan tinggi badan yang valid";
        return;
    }

    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    document.getElementById("hasil").innerText = "Hasil BMI:\n\n " + bmi.toFixed(2);
}
