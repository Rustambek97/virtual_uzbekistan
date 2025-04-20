function showDetails(type) {
    const detailsDiv = document.getElementById('details');
    if (type === 'real') {
      detailsDiv.innerHTML = `
        <h3>Real Vaqtli Gid Xizmati</h3>
        <p>Bu xizmat orqali siz sayohat paytida gidlar bilan real vaqt rejimida muloqot qilishingiz mumkin. Bu turdagi xizmatlar odatda quyidagi shakllarda bo‘ladi:</p>
        <ul>
          <li><strong>Bir yo‘nalishli (1-way) aloqa tizimlari</strong>: Gidning ovozi guruh a'zolariga yetkaziladi, ammo guruh a'zolari javob bera olmaydi.</li>
          <li><strong>Ikki yo‘nalishli (2-way) aloqa tizimlari</strong>: Gid va guruh a'zolari o‘zaro muloqot qilishlari mumkin, bu esa interaktivlikni oshiradi.</li>
        </ul>
      `;
    } else if (type === 'virtual') {
      detailsDiv.innerHTML = `
        <h3>Virtual Gid Xizmati</h3>
        <p>Bu xizmat foydalanuvchilarga mobil qurilmalar orqali virtual gidlar bilan sayohat qilish imkonini beradi. Ushbu xizmatlar quyidagi imkoniyatlarni taqdim etadi:</p>
        <ul>
          <li><strong>Smartfonlar orqali audio striming</strong>: Foydalanuvchilar o‘z qurilmalari orqali gidning ovozini eshitishlari mumkin.</li>
          <li><strong>Ko‘p tilli tarjima imkoniyati</strong>: Turli tillarda tarjima qilingan ma'lumotlar orqali foydalanuvchilar o‘zlariga qulay tilni tanlashlari mumkin.</li>
        </ul>
      `;
    }
  }
  