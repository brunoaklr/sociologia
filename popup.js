// popup.js
(function() {
  // mapa local (mantenha os mesmos links do script principal)
  const formularios = {
    1: { url: "https://forms.gle/EDvSTrgpwWbvuntW7", qr: "https://imgur.com/a/4ZuLl9s.jpeg" },
    2: { url: "https://forms.gle/mHtv7aTRtGkPmpJ48", qr: "https://i.imgur.com/SeuQRCode2.png" },
    3: { url: "https://forms.gle/kV4zPfAh4Du41SFSA", qr: "https://imgur.com/a/mn5wDja.jpeg" },
    4: { url: "https://forms.gle/WjawTjpoMqaars3f9", qr: "https://imgur.com/a/cVyJEPU.jpeg" },
    6: { url: "https://forms.gle/Tr4ksZXMx3HZsZaY9", qr: "https://imgur.com/a/iXV8mda.jpeg" },
    7: { url: "https://forms.gle/ydBttyzuUBU6SLF4A", qr: "https://imgur.com/a/MfsGTFt.jpeg" }
  };

  function pegaQueryParam(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
  }

  const grupo = parseInt(pegaQueryParam('grupo'), 10) || 1;
  const frm = document.getElementById('frm');
  const qr = document.getElementById('qr');
  const voltar = document.getElementById('voltarBtn');

  if (formularios[grupo]) {
    frm.src = formularios[grupo].url;
    qr.src = formularios[grupo].qr;
  } else {
    // fallback: exibe uma mensagem simples se não houver mapeamento
    frm.srcdoc = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Arial">
                    <h2>Formulário não encontrado para o grupo ${grupo}</h2>
                  </div>`;
    qr.style.display = 'none';
  }

  // botão fechar a janela popup e voltar para a página inicial
  voltar.addEventListener('click', () => window.close());
})();


