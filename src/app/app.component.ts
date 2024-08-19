import { Component } from '@angular/core';
import { AzanService } from './azan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoading = false;
  showLocationInput = false;
  city: string = '';
  country: string = '';
  azanTimes: any = null;
  surahAyah: string = '';
  googleSearchUrl: string | null = null;
  arabicMonth!: string; // e.g., 'Ramadan'
  todayDate: Date = new Date();
  universityName: string = 'Your University Name';
  hijriYear!: string; // e.g., '1445 AH'

  surahAyahData = [
    { surah: 1, ayah: 7 }, // Al-Fatiha
    { surah: 2, ayah: 286 }, // Al-Baqarah
    { surah: 3, ayah: 200 }, // Aal-E-Imran
    { surah: 4, ayah: 176 }, // An-Nisa
    { surah: 5, ayah: 120 }, // Al-Maidah
    { surah: 6, ayah: 165 }, // Al-An'am
    { surah: 7, ayah: 206 }, // Al-A'raf
    { surah: 8, ayah: 75 }, // Al-Anfal
    { surah: 9, ayah: 129 }, // At-Tawbah
    { surah: 10, ayah: 109 }, // Yunus
    { surah: 11, ayah: 123 }, // Hud
    { surah: 12, ayah: 111 }, // Yusuf
    { surah: 13, ayah: 43 }, // Ar-Ra'd
    { surah: 14, ayah: 52 }, // Ibrahim
    { surah: 15, ayah: 99 }, // Al-Hijr
    { surah: 16, ayah: 128 }, // An-Nahl
    { surah: 17, ayah: 111 }, // Al-Isra
    { surah: 18, ayah: 110 }, // Al-Kahf
    { surah: 19, ayah: 98 }, // Maryam
    { surah: 20, ayah: 135 }, // Ta-Ha
    { surah: 21, ayah: 112 }, // Al-Anbiya
    { surah: 22, ayah: 78 }, // Al-Hajj
    { surah: 23, ayah: 118 }, // Al-Mu'minun
    { surah: 24, ayah: 64 }, // An-Nur
    { surah: 25, ayah: 77 }, // Al-Furqan
    { surah: 26, ayah: 227 }, // Ash-Shu'ara
    { surah: 27, ayah: 93 }, // An-Naml
    { surah: 28, ayah: 88 }, // Al-Qasas
    { surah: 29, ayah: 69 }, // Al-Ankabut
    { surah: 30, ayah: 60 }, // Ar-Rum
    { surah: 31, ayah: 34 }, // Luqman
    { surah: 32, ayah: 30 }, // As-Sajda
    { surah: 33, ayah: 73 }, // Al-Ahzab
    { surah: 34, ayah: 54 }, // Saba
    { surah: 35, ayah: 45 }, // Fatir
    { surah: 36, ayah: 83 }, // Ya-Sin
    { surah: 37, ayah: 182 }, // As-Saffat
    { surah: 38, ayah: 88 }, // Sad
    { surah: 39, ayah: 75 }, // Az-Zumar
    { surah: 40, ayah: 85 }, // Ghafir
    { surah: 41, ayah: 54 }, // Fussilat
    { surah: 42, ayah: 53 }, // Ash-Shura
    { surah: 43, ayah: 89 }, // Az-Zukhruf
    { surah: 44, ayah: 59 }, // Ad-Dukhan
    { surah: 45, ayah: 37 }, // Al-Jathiya
    { surah: 46, ayah: 35 }, // Al-Ahqaf
    { surah: 47, ayah: 38 }, // Muhammad
    { surah: 48, ayah: 29 }, // Al-Fath
    { surah: 49, ayah: 18 }, // Al-Hujurat
    { surah: 50, ayah: 45 }, // Qaf
    { surah: 51, ayah: 60 }, // Adh-Dhariyat
    { surah: 52, ayah: 49 }, // At-Tur
    { surah: 53, ayah: 62 }, // An-Najm
    { surah: 54, ayah: 55 }, // Al-Qamar
    { surah: 55, ayah: 78 }, // Ar-Rahman
    { surah: 56, ayah: 96 }, // Al-Waqia
    { surah: 57, ayah: 29 }, // Al-Hadid
    { surah: 58, ayah: 22 }, // Al-Mujadila
    { surah: 59, ayah: 24 }, // Al-Hashr
    { surah: 60, ayah: 13 }, // Al-Mumtahina
    { surah: 61, ayah: 14 }, // As-Saff
    { surah: 62, ayah: 11 }, // Al-Jumua
    { surah: 63, ayah: 11 }, // Al-Munafiqun
    { surah: 64, ayah: 18 }, // At-Taghabun
    { surah: 65, ayah: 12 }, // At-Talaq
    { surah: 66, ayah: 12 }, // At-Tahrim
    { surah: 67, ayah: 30 }, // Al-Mulk
    { surah: 68, ayah: 52 }, // Al-Qalam
    { surah: 69, ayah: 52 }, // Al-Haaqqa
    { surah: 70, ayah: 44 }, // Al-Maarij
    { surah: 71, ayah: 28 }, // Nuh
    { surah: 72, ayah: 28 }, // Al-Jinn
    { surah: 73, ayah: 20 }, // Al-Muzzammil
    { surah: 74, ayah: 56 }, // Al-Muddathir
    { surah: 75, ayah: 40 }, // Al-Qiyama
    { surah: 76, ayah: 31 }, // Al-Insan
    { surah: 77, ayah: 50 }, // Al-Mursalat
    { surah: 78, ayah: 40 }, // An-Naba
    { surah: 79, ayah: 46 }, // An-Naziat
    { surah: 80, ayah: 42 }, // Abasa
    { surah: 81, ayah: 29 }, // At-Takwir
    { surah: 82, ayah: 19 }, // Al-Infitar
    { surah: 83, ayah: 36 }, // Al-Mutaffifin
    { surah: 84, ayah: 25 }, // Al-Inshiqaq
    { surah: 85, ayah: 22 }, // Al-Buruj
    { surah: 86, ayah: 17 }, // At-Tariq
    { surah: 87, ayah: 19 }, // Al-Ala
    { surah: 88, ayah: 26 }, // Al-Ghashiya
    { surah: 89, ayah: 30 }, // Al-Fajr
    { surah: 90, ayah: 20 }, // Al-Balad
    { surah: 91, ayah: 15 }, // Ash-Shams
    { surah: 92, ayah: 21 }, // Al-Lail
    { surah: 93, ayah: 11 }, // Ad-Duhaa
    { surah: 94, ayah: 8 }, // Ash-Sharh
    { surah: 95, ayah: 8 }, // At-Tin
    { surah: 96, ayah: 19 }, // Al-Alaq
    { surah: 97, ayah: 5 }, // Al-Qadr
    { surah: 98, ayah: 8 }, // Al-Bayyina
    { surah: 99, ayah: 8 }, // Az-Zalzala
    { surah: 100, ayah: 11 }, // Al-Adiyat
    { surah: 101, ayah: 11 }, // Al-Qaria
    { surah: 102, ayah: 8 }, // At-Takathur
    { surah: 103, ayah: 3 }, // Al-Asr
    { surah: 104, ayah: 9 }, // Al-Humaza
    { surah: 105, ayah: 5 }, // Al-Fil
    { surah: 106, ayah: 4 }, // Quraish
    { surah: 107, ayah: 7 }, // Al-Ma'un
    { surah: 108, ayah: 3 }, // Al-Kawthar
    { surah: 109, ayah: 6 }, // Al-Kafirun
    { surah: 110, ayah: 3 }, // An-Nasr
    { surah: 111, ayah: 5 }, // Al-Masad
    { surah: 112, ayah: 4 }, // Al-Ikhlas
    { surah: 113, ayah: 5 }, // Al-Falaq
    { surah: 114, ayah: 6 }, // An-Nas
  ];

  constructor(private _azan: AzanService) {}

  generateRandomAyah() {
    this.isLoading = true;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.surahAyahData.length);
      const randomSurahAyah = this.surahAyahData[randomIndex];
      this.surahAyah = `${randomSurahAyah.surah}:${randomSurahAyah.ayah}`;
      this.googleSearchUrl = `https://www.google.com/search?q=Surah+${randomSurahAyah.surah}+Ayah+${randomSurahAyah.ayah}`;
      this.isLoading = false;
    }, 1000);
  }

  toggleLocationInput() {
    this.showLocationInput = !this.showLocationInput;
  }

  fetchAzanTimes() {
    if (!this.city || !this.country) {
      // Handle empty input fields
      alert('Please enter both city and country');
      return;
    }

    this.isLoading = true;
    this._azan.getAzanTimes(this.city, this.country).subscribe(
      (response) => {
        this.azanTimes = response.data.timings;
        this.hijriYear = response.data.date.hijri.year;
        this.universityName = response.data.meta.method.name;
        this.arabicMonth = response.data.date.hijri.month.ar;
        console.log(response);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Azan times', error);
        this.isLoading = false;
      }
    );
  }
}
